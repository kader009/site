import React from 'react'
import './../../App'
import { Link, useLocation } from 'react-router-dom';

const Contact = () => {
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
        <img src="/line.png" alt="line" className=' d-sm-none d-lg-block d-md-block mt-2 d-none'/>
        </ul>
      </div>
      <div className="contact-box">
        <div className="contact-flex d-flex flex-column flex-lg-row align-items-center justify-content-between d-sm-flex justify-content-sm-between align-items-sm-center">

        <div className="contact-heading">
        <h1>CONTACT US</h1>
        <div className="bulltet-contact">
          <ul style={{ listStyleType: 'none' }}>
            <li>EasyWayAutomation</li>
            <li>2136 Gallows Rd, Suite F</li>
            <li>Dunn Loring , VA 22027-1036
            </li>
            <li>Tel: 703-208-9120</li>
            <li>Fax: 703-852-7939</li>
          </ul>
        </div>
        </div>
        <div className="contact-map">
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14687.9110170666!2d72.5668493!3d23.024589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d59d09890d%3A0xfdceac8c4ce642b8!2sXcelTec%20Interactive%20Private%20Limited%20-%20A%20CMMI%20Level%205%20Company!5e0!3m2!1sbn!2sbd!4v1689352300677!5m2!1sbn!2sbd" style={{width:"600", height:"450", border:"0" ,allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
          </div>
          <div className="emalil-btn">
            <Link to='/emailus'><button>Email Us</button></Link>
          </div>
        </div>
        </div>
        <div className="contact-email-direction">

          <span id='bold'>EMAIL</span>
          <p>For general information, to request information about any of our services, or for comments.
            <br />
          Please email us at <Link className='text-secondary' to='mailto:info@xceltech.com'>info@easywayautomation.com</Link> or use our <Link className='text-secondary' to='email-us'>online email form</Link> to submit your request.</p>
          <br />
          <span id='bold'>DIRECTIONS
          </span>
          <div className="contact-speacial">
            <span >From I-495 North/South</span>
            <p className='m-0'>From I-495 North/South take the GALLOWS RD/VA-650 N via EXIT 51. Our office is on the
              <br />
            left side of the road.</p>
            <span>From I-66 East/West</span>
            <p>From I-66 take exit to I-495 South towards Richmond/Springfield. From I-495 take the <br />
            GALLOWS RD/VA-650 N via EXIT 51. Our office is on the left side of the road.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;