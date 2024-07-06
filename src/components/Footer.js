import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mt-4">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="footer-navbar-nav" />
        <Navbar.Collapse id="footer-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
