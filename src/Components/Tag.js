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
      TagProps[key] = Utils.PropVal(tag.Props[key], handler, scope)
    }
    for (let key in tag.Events) {
      TagProps[key] = Utils.PropFunCall(tag.Events[key], handler, scope)
    }
  }

  let TagContents
  if (Utils.has(tag, 'Contents')) {
    TagContents = Utils.PropVal(tag.Contents, handler, scope)
  }

  let RepeatCount = 1
  let NewScope = scope
  let ResultScope
  if (Utils.has(tag, 'RepeatWith')) {
    NewScope = tag['RepeatWith']
    RepeatCount = handler.getVarLength(tag['RepeatWith'])
  }

  let TagReturn = []
  let TagChildrens = []
  for (let i = 0; i < RepeatCount; i++) {
    let TagResult
    TagProps.key = i
    if (NewScope !== scope) ResultScope = NewScope + '.' + i
    else ResultScope = scope
    ResultScope = Utils.TrimIndex(ResultScope)
    if (Utils.IsVoidComponent(TagType)) {
      TagResult = React.createElement(TagType, TagProps, TagContents)
    } else {
      if (Utils.has(tag, 'Childerns')) {
        TagChildrens = tag['Childerns'].map(item => (
          <Tag
            key={item['Key']}
            tag={item}
            handler={handler}
            scope={ResultScope}
          />
        ))
      }
      TagResult = React.createElement(
        TagType,
        TagProps,
        TagContents,
        TagChildrens
      )
    }
    TagReturn.push(TagResult)
  }
  return <React.Fragment>{TagReturn}</React.Fragment>
}
