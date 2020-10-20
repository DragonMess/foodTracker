import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import "./Navigation.css"
function Navigation() {
  return (
  <Navbar collapseOnSelect expand="lg" className="nav-color">
  <Navbar.Brand href="#home" className="nav-txt">Food Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
   <Navbar.Text className="nav-txt">
      Signed in as: <a href="#login">UserName</a>
    </Navbar.Text>

    </Nav>
    <Nav>
      <Nav.Link href="#deets" className="nav-txt">Dashboard</Nav.Link>
      <Nav.Link eventKey={2} href="#memes" className="nav-txt">
        Admin
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation
