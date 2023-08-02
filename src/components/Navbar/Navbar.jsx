import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';


const Navbars = () => {
  const location = useLocation()
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsNavbarFixed(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar expand="lg" bg='secondary' fixed={isNavbarFixed ? 'top' : ''} >
      <Container>
        <Navbar.Brand 
        className='ms-5'>
          <Link to='/'>
          <img src='/logo.png' style={{width:'3rem'}}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5 ">
            <Link className='text-decoration-none ms-3 text-light' to="/" style={{fontFamily:'Roboto, sans-serif'}}>Home</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/corporate" style={{fontFamily:'Roboto, sans-serif'}}>Corporate Culture</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/vision" style={{fontFamily:'Roboto, sans-serif'}}>Vision & Mission</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/specialties" style={{fontFamily:'Roboto, sans-serif'}}>Specialties</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/employee" style={{fontFamily:'Roboto, sans-serif'}}>For Employess</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/career" style={{fontFamily:'Roboto, sans-serif'}}>Career</Link>
            <Link className='text-decoration-none ms-3 text-light' to="/contact" style={{fontFamily:'Roboto, sans-serif'}}>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars;