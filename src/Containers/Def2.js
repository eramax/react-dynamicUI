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

import DefaultHeader from './Head1'

export default class DefaultLayout extends Component {
  state = {
    dir: 'ltr'
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  render() {
    return (
      <div className="app">
        <Helmet htmlAttributes={{ dir: this.state.dir }} />
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />

            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Container fluid />
          </main>
          <AppAside fixed />
        </div>
        <AppFooter />
      </div>
    )
  }
}
