import React from 'react'
import './../../App'
import { useLocation } from 'react-router-dom';

const Solution = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1)

  return (
    <div className='mb-5'>
      <div className="white-txt ">
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="" className='select me-2'>Home
            
            </a>
            <img src='/breadcrum.png' alt="" />
            <div className='d-inline-block ms-2 me-2 text-capitalize text-primary'>{pathname}</div>
            <img src='/breadcrum.png' alt="" />
            
          </li>
        <img src="/line.png" alt="line" />
        </ul>
      </div>
      <div className="solution-box">
        <div className="solution-heading mb-4">
        WEB AND CLIENT/SERVER SOLUTION LOAD/STRESS TESTING
        </div>
        <div className="solution-text">
        Ecommerce and the use of Web applications across the Internet and within corporation Intranet environments is growing at a
        <br />
        phenomenal rate. Xceltech's World Wide Web and client/server solution testing experts provide the experience and top
        <br />
        industry test tools to simulate real-life workloads and traffic to determine the scalability and the reliability of Internet and
        <br />
        enterprise Web and client/server applications.
        </div>
      </div>
    </div>
  )
}

export default Solution;