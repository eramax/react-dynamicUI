import React from 'react'
import axios from 'axios'
import Tag from './Components/Tag'

import { BrowserRouter as Router } from 'react-router-dom'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }
  state = {
    Components: [],
    PartialComponents: [],
    Data: []
  }
  componentDidMount() {
    if (this.state.Components.lenth > 0) return
    axios.get('https://api.myjson.com/bins/9a29w').then(res => {
      let Components = res.data.Components || []
      let PartialComponents = res.data.PartialComponents || []
      let Data = res.data.Data || []
      this.setState({ Components, PartialComponents, Data })
    })
  }

  toggle = x => {
    let c = this.getVar(x)
    c = !c
    let c2 = { key: x, val: c }
    this.setVar(c2)
  }
  getVar = x => {
    //console.log(x)
    if (this.state.vars[x] !== undefined) return this.state.vars[x]
    else return null
  }
  setVar = x => {
    console.log(x)
    let vars = this.state.vars
    vars[x.key] = x.val
    this.setState({
      vars: vars
    })
  }

  Increment = x => {
    let c = this.getVar(x)
    let c2 = { key: x, val: ++c }
    this.setVar(c2)
  }

  StringFormat = x => {
    let str = x[0]
    x.forEach((item, index) => {
      if (index > 0 && item !== undefined)
        str = str.replace(`{${index - 1}}`, this.getVar(item))
    })
    return str
  }

  Methods = {
    getVar: this.getVar,
    setVar: this.setVar,
    toggle: this.toggle,
    alertx: this.alertx,
    IncrementF: this.Increment,
    StringFormat: this.StringFormat
  }
  handler = (method, vars) => {
    if (method in this.Methods) return this.Methods[method](vars)
  }
  render() {
    var comps = this.state.Components.map((item, index) => (
      <Tag key={index} tag={item} handler={this.handler} />
    ))
    return (
      <Router>
        <div>{comps}</div>
      </Router>
    )
  }
}
