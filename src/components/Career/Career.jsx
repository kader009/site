import React from 'react'
import './../../App'
import { Link, useLocation } from 'react-router-dom';


const Career = () => {
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
      <div className="career-content-box ">
        <div className="career-heading mb-3">
        CAREER
        </div>
        <Link to='#oppor' className='text-secondary'>Opportunities at Xceltech</Link>
            <br />
            <Link to='#' className='text-secondary'>A Flexible Partnership</Link>
            <br />
            <Link to='#' className='text-secondary'>Benefits</Link>
        <div className="career-content d-flex">
          <div className="career-right pb-5">
          <br />
          <br />
          <span id='oppor'>Opportunities at Xceltech</span>
          <p className='m-0'>We look for leaders in the consulting field throughout the world -- technologists, industry specialists, process experts, and business strategists - capable of turning new thoughts and ideas into successful solutions that provide value for our clients.</p>
          <br />
          <p className='m-0'>Xceltech Inc., has Permanent positions for candidates w/ strong skills in one or more of the following skill sets: JavaWindowNT, J2EE, XML, JSP, WinRunner, QTP, LoadRunner, Rational, Powerbuilder, Informix, Informatica, Sybase, DB2/ SQL Server, VB, C, C++, HTML Unix Admin Mainframe/RPG, Internet Architecture PPLsoft, PPLTools, SQR, PPLcode, & Oracle</p>
          <br />
          <p className='m-0'>Positions are: Software Engs, Programmer /Sys Analysts, QAEngs, Sales Engs, Business Analysts, Lead Analysts,Proj Mgrs/Leaders, Market Research Analysts, Technical Recruiters. F/T positions at our offices & client sites. May be required to travel/relocate to unanticipated client locations across the US for short term or long term projects.</p>
          <br />
          <p className='m-0'>Please send Resumes to: Xceltech Inc. 2136 Gallows Rd., Ste F, Dunn Loring, VA 22027.</p>
          <br />
          <span>A Flexible Partnership</span>
          <p className='m-0 '>At XcelTech, a career starts with a flexible partnership between each employee and the company. We provide opportunity, assistance and direction a€“ and you select the path that best fits your career goals. Our consultants and employees grow at their own pace, freed from bureaucracy of larger, more restrictive firms. We believe that good employees are well rounded and we empower them to develop a career that includes variety as well as the chance to emphasize specific talents and interests. We also provide the framework for success. We encourage and sponsor training, provide mentoring and conduct performance reviews. Working here means you have access to people and resources that help to make career decisions easier - based on the real-life experience of someone who's likely already been there.</p>
          <br />
          <span>Benefits</span>
          <p>Providing quality benefits are something we believe helps employees worry less about the details and focus on career advancement. As such, we offer a competitive compensation program including performance related bonuses and locally competitive benefits.</p>
          <p>A careful skills and experience review is conducted prior to an engagement to ensure a consultant will be productive as soon as they join the project. Only consultants who surpass these standards are engaged at XCELTECH client sites.</p>
          <span >XCELTECH believes in Equal Opportunity Employment.</span>
          </div>
          <div className="career-left ms-3">
            <div className=" ms-0 mb-5 pb-5">
              <Link to='/career/currentopen'>
              <button type="button" id="btn" >Current Opening</button>
              </Link>
            </div>
            <div className='side-box ms-4'>

            <h6>Best in Industry Pay Package includes:</h6>
            <img src='/line.png' alt='line mark' className='img-fluid' />
            <ul style={{ listStyleType: 'none' }}>
              <li>1. Health Insurance through Carefirst BCBS</li>
              <li>2. Dental Insurance through Humana Dental</li>
              <li>3. Vision Coverage through Avesis</li>
              <li>4. Life Insurance through Hartford</li>
              <li>5. <Link to='#' className='text-secondary'>Credit Union Facilities through Apple Federal Credit Union</Link></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career;