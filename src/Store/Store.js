import React from 'react'
export default class Store extends React.Component {
  static state = {
    Components: {},
    Data: {}
  }

  static updateState

  static toggle = x => {
    let c = this.getVar(x)
    c = !c
    let c2 = { key: x, val: c }
    this.setVar(c2)
  }
  static getVar = x => {
    //console.log(x)
    if (this.state.vars[x] !== undefined) return this.state.vars[x]
    else return null
  }
  static setVar = x => {
    console.log(x)
    let vars = this.state.vars
    vars[x.key] = x.val
    this.setState({
      vars: vars
    })
  }

  static Increment = x => {
    let c = this.getVar(x)
    let c2 = { key: x, val: ++c }
    this.setVar(c2)
  }

  static StringFormat = x => {
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
  static handler = (method, vars) => {
    if (method in this.Methods) return this.Methods[method](vars)
  }
}
