import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import DefaultLayout from './Containers/DefaultLayout'
import Login from './Containers/Login'

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
)

// Containers
/*const DefaultLayout = Loadable({
  loader: () => import('./Containers/Def2'),
  loading
})*/

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
