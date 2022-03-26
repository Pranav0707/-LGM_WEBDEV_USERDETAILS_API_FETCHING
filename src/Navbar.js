import React from "react";
import { Container, Navbar } from "react-bootstrap";

function NavbarElement() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-User Cards Using API </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            API: <a href="https://reqres.in/api/users?page=1">https://reqres.in/api/users?page=1</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;
