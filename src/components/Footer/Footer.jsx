import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../../App'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const date = new Date();
const options = { month: 'long' };
const fullMonth = date.toLocaleString('en-US', options);

  return (
    <div style={{backgroundColor:'#eee'}} className='d-flex justify-content-around p-2 align-items-center'>
      <div>
        
          <Nav className="me-auto ms-5 ps-4">
          <Link className='text-decoration-none ms-2 text-dark' to="/">Home</Link>
            <Link className='text-decoration-none ms-2 text-dark' to="/corporate">Corporate Culture</Link>
            <Link className='text-decoration-none ms-2 text-dark' to="/vision">Vision</Link>
            <Link className='text-decoration-none ms-2 text-dark' to="/specialties">Specialties</Link>
            <Link className='text-decoration-none ms-2 text-dark' to="/employee">For Employess</Link>
            <Link className='text-decoration-none ms-2 text-dark' to="/career">Career</Link>
            <Link className='text-decoration-none ms-2 text-dark' to="/contact">Contact Us</Link>
          </Nav>
      </div>
      <div className="nav-text pt-2">
        <p>©  {currentYear} - {fullMonth} - XcelTech Corporation - <Link to='/privacy' className='text-decoration-none text-secondary'>Privacy Policy</Link>  - Site Map</p>
      </div>
    </div>
  )
}

export default Footer