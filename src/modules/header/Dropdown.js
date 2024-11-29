import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import coder from '../../assets/images/5044785.png'

const ResponsiveNavbar = () => {
  return (
    <Navbar className='p-0 mt-2' variant="dark" expand="lg" sticky="top">
      <Container className='px-0'  fluid>
        {/* Brand Name or Logo */}
        <Navbar.Brand href="#home"><Image src={coder} height={40} /></Navbar.Brand>

        {/* Hamburger Icon */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapse for Dropdown */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="/Sathgurunathan_resume.pdf" download="Sathgurunathan_Resume.pdf">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;