import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../../App'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const date = new Date();
const options = { month: 'long' };
const fullMonth = date.toLocaleString('en-US', options);

  return (
    <div style={{backgroundColor:'#eee'}} className='d-flex justify-content-around p-2   align-items-center flex-sm-column flex-lg-row  footer'>
      <div className='ms-5 ps-5 pt-sm-2 high'>
        
          <Nav className="me-auto   ms-sm-0 ps-sm-0 ms-5 ps-5 footer-nav">
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
        <p>©  {currentYear} - {fullMonth} - EasyWayAutomation - <Link to='/privacy' className='text-decoration-none text-secondary'>Privacy Policy</Link>  - <Link to='/terms' className='text-decoration-none text-secondary'>Terms & Conditions</Link> - <Link to='/sitemap' className='text-secondary text-decoration-none'>Site Map</Link> </p>
      </div>
    </div>
  )
}

export default Footer