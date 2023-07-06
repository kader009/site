import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className='text-decoration-none ' to="/">Home</Link>
            <Link className='text-decoration-none ms-2' to="/corporate">Corporate Culture</Link>
            <Link className='text-decoration-none ms-2' to="/vision">Vision</Link>
            <Link className='text-decoration-none ms-2' to="/specialties">Specialties</Link>
            <Link className='text-decoration-none ms-2' to="/employee">For Employess</Link>
            <Link className='text-decoration-none ms-2' to="/career">Career</Link>
            <Link className='text-decoration-none ms-2' to="/contact">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars;