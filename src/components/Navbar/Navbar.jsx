import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" bg='dark' >
      <Container>
        <Navbar.Brand className='ms-5'><img src='/logo.png'/></Navbar.Brand>
        <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5 ">
            <Link className='text-decoration-none ms-3 text-light' to="/">Home</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/corporate">Corporate Culture</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/vision">Vision</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/specialties">Specialties</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/employee">For Employess</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/career">Career</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/contact">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars;