import React from 'react'
import axios from 'axios'
import Tag from './Components/Tag'
import Utils from './Utils/Utils'
import Alert from './Bootsrap/Alert'
//import StateManager from './Utils/StateManager'

import { BrowserRouter as Router } from 'react-router-dom'

export default class Layout extends React.Component {
  state = {
    Components: [],
    PartialComponents: [],
    Data: []
  }
  componentDidMount() {
    if (this.state.Components.lenth > 0) return
    axios.get('https://api.myjson.com/bins/1e6wq8').then(res => {
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

  getVar = (prop, store = null) => {
    let obj = store || this.state.Data
    return Utils.getter(obj, prop)
  }

  DeleteVar = prop => {
    let currentData = this.state.Data
    let updatedData = Utils.Remover(currentData, prop['index'])
    this.setState({ Date: updatedData })
  }

  setVar = prop => {
    let currentData = this.state.Data
    let updatedData = Utils.Setter(currentData, prop['index'], prop['Val'])
    this.setState({ Date: updatedData })
  }

  getVarLength = x => {
    let v = this.getVar(x)
    return v != null ? v.length : null
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
  GetPartialComponent = (x, link) => {
    if (x in this.state.PartialComponents) {
      return this.state.PartialComponents[x]
    }
    //else --------- axios
  }
  alertx = () => {
    alert('hello')
  }

  GetLengh = data => {
    return data !== undefined &&
      data !== null &&
      data.inp !== undefined &&
      data.inp !== null
      ? data.inp.length
      : null
  }

  OpenLink = () => {
    console.log('OpenLink ')
  }

  SubmitForm = () => {
    console.log('SubmitForm ')
  }

  Methods = {
    getVar: this.getVar,
    setVar: this.setVar,
    toggle: this.toggle,
    alertx: this.alertx,
    IncrementF: this.Increment,
    StringFormat: this.StringFormat,
    GetPartialComponent: this.GetPartialComponent,
    GetLengh: this.GetLengh,
    OpenLink: this.OpenLink,
    SubmitForm: this.SubmitForm,
    getVarLength: this.getVarLength,
    Delete: this.DeleteVar,
    Update: this.setVar
  }
  handler = (method, vars) => {
    if (method in this.Methods) return this.Methods[method](vars)
  }

  render() {
    var comps = this.state.Components.map((item, index) => (
      <Tag key={index} tag={item} handler={this.Methods} scope="" />
    ))

    comps = <Alert content="xsadasdsadsad" toggle={true} />

    return (
      <Router>
        <div>{comps}</div>
      </Router>
    )
  }
}
