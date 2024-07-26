import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  const {cart} = useContext(AppContext);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/product">Products</Link>
            </NavItem>
            <NavItem>
            <Link to="/register">Register</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Link to="/cart">Cart <span>{cart.length}</span></Link>
      </Navbar>
    </div>
  )
}
