import React from 'react'
import { Link } from 'react-router-dom'
import './../../App'

const Sitemap = () => {
  return (
    <div>
      <div className="white-txt ">
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="" className='select me-2'>Home</a>
            <img src='/breadcrum.png' alt="" />
          </li>
        <img src="/line.png" alt="line" />
        </ul>
      </div>
      <div className="site-box">
        <div className="site-heading">
          sitemap
        </div>
        <div className="sitamap-bullet">
          <ul style={{ listStyleType: 'none' }}>
            <li><Link to='/' className='text-secondary'>Home</Link></li>
            <li><Link to='/corporate' className='text-secondary'>Corporate Culture</Link></li>
            <li><Link to='/vision' className='text-secondary'>Vision</Link></li>
            <li className='site-inner-1 '>
              <Link to='#' className='text-secondary'>- Our Vision</Link>
            </li>
            <li className='site-inner-1'>
              <Link to='#' className='text-secondary'>- Our Philosophy</Link>
            </li>
            <li><Link className='text-secondary' to='specialties'>Specialties</Link></li>
            <li className='site-inner-1'><Link className='text-secondary' to='/specialties/enterprise '>- Enterprise Resource Planning (ERP)</Link></li>
            <li className='site-inner-1'><Link className='text-secondary' to='/specialties/performence'>- Enterprise Performance Management (EPM)</Link></li>
            <li className='site-inner-1'><Link className='text-secondary' to='/specialties/assurance'>- Software Quality Assurance (SQA)</Link></li>
            <div className="inner-dot">
              <ul style={{ listStyleType: 'none' }}>
                <li>&#8226;<Link to='/specialties/assurance/testing ' className='text-secondary'> Web Application Reliability Testing</Link></li>
                <li>&#8226;<Link to='/specialties/assurance/solution ' className='text-secondary'> Web and Client/Server Solution Load/Stress Testing</Link></li>
                <li>&#8226;<Link to='/specialties/assurance/manage ' className='text-secondary'> Software Testing and Test Management</Link></li>
                <li>&#8226;<Link to='/specialties/assurance/automation ' className='text-secondary'> Test Automation</Link></li>
              </ul>
            </div>
            <li className="site-inner-1"><Link className='text-secondary'>- Application Development & Design</Link></li>
            <li className="site-inner-1"><Link className='text-secondary'>- Data Warehousing & Data modeling</Link></li>
            <li><Link to='/employee' className='text-secondary'>For Employees</Link></li>
            <li><Link to='/career' className='text-secondary'>Career</Link></li>
            <li className="site-inner-1">
              <Link to='#' className='text-secondary'>- Current Openings</Link>
            </li>
            <li><Link to='/contact' className='text-secondary'>Contact Us</Link></li>
            <li className="site-inner-1"><Link className='text-secondary'>- Location</Link></li>
            <li className="site-inner-1"><Link className='text-secondary' to='/contact/emailus'>- Email Us</Link></li>
            <li className="site-inner-1"><Link className='text-secondary'>- Directions</Link></li>
            <li><Link to='/privacy' className='text-secondary'>Privacy Policy</Link></li>
            <li><Link to='/sitemap' className='text-secondary'>Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sitemap