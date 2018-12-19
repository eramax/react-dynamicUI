import React, { Component, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import { Helmet } from 'react-helmet'

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from '@coreui/react'

import DefaultHeader from './DefaultHeader'
import DefaultAside from './DefaultAside'
import DefaultFooter from './DefaultFooter'

import routes from '../TestJsons/routes'
import navs from '../TestJsons/navs'

export default class DefaultLayout extends Component {
  state = {
    dir: 'ltr'
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  ChangeDir = () => {
    let newDir = this.state.dir === 'ltr' ? 'rtl' : 'ltr'
    this.setState({ dir: newDir })
  }

  render() {
    return (
      <div className="app">
        <Helmet htmlAttributes={{ dir: this.state.dir }} />
        <AppHeader fixed>
          <DefaultHeader ChangeDir={this.ChangeDir} />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navs} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => <route.component {...props} />}
                    />
                  ) : null
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>{' '}
          </main>
          <AppAside fixed>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    )
  }
}
