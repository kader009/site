import React from 'react'
import { useLocation } from 'react-router-dom';

const ManageSoft = () => {
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
        <img src="/line.png" alt="line" className='d-sm-none d-none d-lg-block d-md-block mt-2'/>
        </ul>
      </div>
      <div className="manage-box">
        <div className="manage-heading mb-3">
        SOFTWARE TESTING AND TEST MANAGEMENT
        </div>
        <div className="manage-text">
        We can provide your organization with a complete array of testing services ranging from test management to staff
        <br />
        augmentation during periods of peak testing activities. Our consultants are trained in a wide range of operating systems,
        <br />
        platforms, applications, and tools. This ensures minimal ramp-up time and maximum efficiency in testing your specific
        <br />
        application.
        <br />
        <br />
        Our testing services include the following:
        <br />
        <br />
        <ul>
          <li>Test Planning</li>
          <li>Test Case Design and Test Data Generation
        </li>
          <li>System Testing</li>
          <li>User Acceptance Testing</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default ManageSoft