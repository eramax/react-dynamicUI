import React from 'react'
import Tag from './Tag'
import Utils from '../Utils/Utils'

export default function Loader(props) {
  console.log(props)
  const { tag, handler, scope } = props
  let LoadedTag = handler.GetPartialComponent(tag['Name'], tag['LoadFromLink'])
  return <Tag tag={LoadedTag} handler={handler} scope={scope} />
}
