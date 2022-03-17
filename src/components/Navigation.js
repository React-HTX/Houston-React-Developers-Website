import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          HRD Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
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
