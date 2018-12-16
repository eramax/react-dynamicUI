import React from 'react'
import Img from './Img'
import { NavLink } from 'react-router-dom'
import ERoutes from './ERoutes'
import Utils from '../Utils/Utils'
import Loader from './Loader'

const components = {
  Img: Img,
  NavLink: NavLink,
  ERoutes: ERoutes,
  Loader: Loader
}

export default function Tag(props) {
  const { tag, handler, scope } = props
  //console.log(tag)

  if (!Utils.has(tag, 'Type')) return <p className="is-loading">Loading....</p>
  let TagType = components[tag['Type']] || tag['Type']
  if (TagType === Loader)
    return <Loader tag={tag['Loader']} handler={handler} scope={scope} />

  let TagProps = {}
  if (Utils.has(tag, 'Props')) {
    for (let key in tag.Props) {
      TagProps[key] = Utils.PropVal(tag.Props[key], handler)
    }
    for (let key in tag.Events) {
      TagProps[key] = Utils.PropFunCall(tag.Events[key], handler)
    }
  }

  let TagContents
  if (Utils.has(tag, 'Contents')) {
    TagContents = Utils.PropVal(tag.Contents, handler)
  }

  if (Utils.IsVoidComponent(TagType)) {
    return React.createElement(TagType, { ...TagProps }, TagContents)
  }

  let TagChildrens = []
  if (Utils.has(tag, 'Childerns')) {
    TagChildrens = tag['Childerns'].map(item => (
      <Tag key={item['Key']} tag={item} handler={handler} scope={scope} />
    ))
  }
  let tggg
  tggg = React.createElement(TagType, TagProps, TagContents, TagChildrens)
  return <React.Fragment>{tggg}</React.Fragment>
}
