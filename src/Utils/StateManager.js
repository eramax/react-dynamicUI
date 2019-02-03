import Utils from './Utils'

export default class StateManager {
  static myInstance = null
  static getInstance() {
    if (StateManager.myInstance == null) {
      StateManager.myInstance = new StateManager()
    }
    return StateManager.myInstance
  }

  state = {
    Components: [],
    PartialComponents: [],
    Data: []
  }

  getVar = (prop, store = null) => {
    let obj = store || StateManager.getInstance().state.Data
    return Utils.getter(obj, prop)
  }

  DeleteVar = prop => {
    let currentData = StateManager.getInstance().state.Data
    let updatedData = Utils.Remover(currentData, prop['index'])
    this.setState({ Date: updatedData })
  }

  setVar = prop => {
    let currentData = this.state.Data
    let updatedData = Utils.Setter(currentData, prop['index'], prop['Val'])
    this.setState({ Date: updatedData })
  }

  getVarLength = x => {
    let v = StateManager.getInstance().getVar(x)
    return v != null ? v.length : null
  }

  GetPartialComponent = (x, link) => {
    if (x in StateManager.getInstance().state.PartialComponents) {
      return StateManager.getInstance().state.PartialComponents[x]
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
    getVar: StateManager.getInstance().getVar,
    setVar: StateManager.getInstance().setVar,
    toggle: StateManager.getInstance().toggle,
    alertx: StateManager.getInstance().alertx,
    GetPartialComponent: StateManager.getInstance().GetPartialComponent,
    GetLengh: StateManager.getInstance().GetLengh,
    OpenLink: StateManager.getInstance().OpenLink,
    SubmitForm: StateManager.getInstance().SubmitForm,
    getVarLength: StateManager.getInstance().getVarLength,
    Delete: StateManager.getInstance().DeleteVar,
    Update: StateManager.getInstance().setVar
  }
  handler = (method, vars) => {
    if (method in StateManager.getInstance().Methods)
      return StateManager.getInstance().Methods[method](vars)
  }
}
