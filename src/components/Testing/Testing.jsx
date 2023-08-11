import React from 'react'
import './../../App'
import { useLocation } from 'react-router-dom';


const Testing = () => {
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
        <img src="/line.png" alt="line" className='d-sm-none d-none d-lg-block d-md-block mt-2'/>
        </ul>
      </div>
      <div className="testing-box">

      <div className="testing-heading mb-3">
      WEB APPLICATION RELIABILITY TESTING
      </div>
      <div className="testing-text">
      Today, the Web is the platform - and increasingly, companies are betting their business on highly visible web-based
      <br />
      applications running on private Intranets as well as the Internet. These applications must be reliable, be accessible using
      <br />
      different browsers, and continue to consistently and accurately function as the application and technology evolves.
      <br />
      <br />
      Xceltech's World Wide Web testing experts bring discipline, experience, and expert knowledge of top industry tools to design,
      <br />
      automate, and execute test cases that validate a web application's functionality on an ongoing basis.
      </div>
      </div>
    </div>
  )
}

export default Testing;