import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"
import logo from "../assets/images/rocket-icon.png"

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant="dark"
      style={{ backgroundColor: "#1e1f1e" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Houston React Developers Logo"
            height="60"
            width="60"
          />{" "}
          Houston React Developers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/">
              Link 1
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Link 2
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Link 3
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Link 4
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
