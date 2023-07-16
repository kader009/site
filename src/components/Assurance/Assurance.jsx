import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Assurance = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1)

  return (
    <div>
      <div className="white-txt ">
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="" className='select me-2'>Home
            
            </a>
            <img src='/breadcrum.png' alt="" />
            <div className='d-inline-block ms-2 me-2 text-capitalize text-primary'>{pathname}</div>
            <img src='/breadcrum.png' alt="" />
            
          </li>
        <img src="/line.png" alt="line" className='d-sm-none d-lg-block d-md-block mt-2'/>
        </ul>
      </div>
      <div className="assurance-box">
        <div className="assurance-heading mb-4">
        SQA (Software Quality Assurance)
        </div>
        <div className="assurance-text">
        XcelTech's team of software and systems testing professionals is your answer to the global testing challenges of an Internet
        <br />
        world.
        <br />
        <br />
        We use the most powerful and proven industry test tools available. Our testing environment spans everything from the desktop
        <br />
        to the data center, over Internet/Intranet environments, using Web (Internet Explorer and Netscape) and client/server
        <br />
        applications, in Windows NT/Windows 95/98, UNIX, and Open VMS platforms.
        <br />
        <br />
        We are the professional testing experts to help meet all your testing needs.
        <br />
        <br />
        Here are some of the QA Solutions we offer at XcelTech:
        <br />
        <br />
        <ul>
          <li><Link to='/testing' className='text-secondary'>Web Application Reliability Testing</Link></li>
          <li><Link to='/solution' className='text-secondary'>Web and Client/Server Solution Load/Stress Testing</Link></li>
          <li><Link to='/manage' className='text-secondary'>Software Testing and Test Management</Link></li>
          <li><Link to='/automation' className='text-secondary'>Test Automation</Link></li>
          
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Assurance;