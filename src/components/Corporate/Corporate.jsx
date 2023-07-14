import React from 'react'
import './../../App'
import { useLocation } from 'react-router-dom';

const Corporate = () => {
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
        <img src="/line.png" alt="line" />
        </ul>
      </div>
      <div className="culture-heading mb-3">
      CORPORATE CULTURE
      </div>
      <div className="culture-box d-flex justify-content-center align-items-center">
        <div className="culture-text">
          <p>Our greatest differentiator is our commitment to delivering value-added IT staffing and managed solutions services, not just temporary help. More specifically, we understand our clients specific needs and evolving business drivers and are dedicated to providing unparalleled value to our clients.</p>
          <br />
          <p>Having the right number of IT staff - when and where you need them - lets you control costs while maximizing profitability. At XcelTech, we not only deliver the best IT talent around for all types of projects, but also help you develop a strategy for maintaining the necessary IT staff in the short and long-term, so you can focus on savings and performance.</p>
          <br />
          <p>we understand the need for quick response to IT staffing demands, and we offer the flexibility and capability to take on assignments lasting from a few weeks to several months or years.</p>
          <br />
          <p>XcelTech's regional roots, proven expertise and national prominence allow us to attract top IT professionals and match them to your needs. Our consultants have served diverse industries and are skilled in navigating rapid-development project environments.</p>
          <br />
          <p>XcelTech is committed to providing clients with quality, cost-effective IT staffing and managed solutions services that improve profitability, competitiveness and organizational efficiency. We are customer-focused and strive for excellent service, professionalism and fair and honest business practices.</p>
        </div>
        <div className="culture-img ms-4">
          <img src="/Strategy.png" alt="strategy" />
        </div>
      </div>
    </div>
  )
}

export default Corporate