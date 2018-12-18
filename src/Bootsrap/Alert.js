import React from 'react'
import { Alert } from 'reactstrap'
export default props => (
  <Alert color={props.color} isOpen={props.isOpen} toggle={props.toggle}>
    {props.content}
  </Alert>
)
