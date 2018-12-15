import React from 'react'
export default function Img(props) {
  return (
    <img src={props.src} alt="img" width={props.width} height={props.height} />
  )
}
