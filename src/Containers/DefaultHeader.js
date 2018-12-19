import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from '@coreui/react'

const defaultProps = {}

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { ChangeDir, children, ...attributes } = this.props

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: '/assets/imgs/logo2.svg',
            width: 89,
            height: 25,
            alt: 'CoreUI Logo'
          }}
          minimized={{
            src: '/assets/imgs/smallLogo.svg',
            width: 30,
            height: 30,
            alt: 'CoreUI Logo'
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="fas fa-bell" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="fas fa-list-ul" />
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <a onClick={ChangeDir}>
              <i className="fas fa-map-marker-alt" />
            </a>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img
                src={'/assets/imgs/avatar.png'}
                className="img-avatar"
                alt="admin@bootstrapmaster.com"
              />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-bell" /> Updates
                <Badge color="info">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-envelope" /> Messages
                <Badge color="success">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-tasks" /> Tasks
                <Badge color="danger">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-comments" /> Comments
                <Badge color="warning">42</Badge>
              </DropdownItem>
              <DropdownItem header tag="div" className="text-center">
                <strong>Settings</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-user" /> Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-wrench" /> Settings
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-dollar-sign" /> Payments
                <Badge color="secondary">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file" /> Projects
                <Badge color="primary">42</Badge>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <i className="fas fa-lock" /> Lock Account
              </DropdownItem>

              <DropdownItem>
                <NavLink href="/login">
                  <i className="fas fa-sign-out-alt" /> Logout
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile />
      </React.Fragment>
    )
  }
}
export default DefaultHeader
