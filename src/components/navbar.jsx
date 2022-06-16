import React from 'react';
import './styles/navbar.scss'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default function Navigation() {
  return (
    <Navbar color="secondary" expand="md" light>
      <NavbarBrand className='navbar-brand' href='#' font-family='Italiana' >PHIX</NavbarBrand>
      <Nav navbar>
          <NavItem>
            <NavLink href='#'>About</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href='#'>Contact</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href='#'>Services</NavLink>
          </NavItem>
      </Nav>

      <Nav navbar>
          <NavItem>
            <NavLink className='login-link' href='#'>Login</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href='#'>Signup</NavLink>
          </NavItem>
      </Nav>


    </Navbar>
  )
}
