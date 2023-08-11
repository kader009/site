import React from 'react'
import './../../App'
import { Link, useLocation } from 'react-router-dom';

const Employees = () => {
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
        <img src="/line.png" alt="line" className='d-sm-none d-lg-block d-md-block mt-2 d-none'/>
        </ul>
      </div>
      <div className="employee-box">
        <div className="employee-heading mb-2">
          For Employees
        </div>
        <div className="two-side-box d-flex flex-column flex-sm-column flex-lg-row align-items-center justify-content-center">
          <div className="employee-right">
            <span className='fw-bold '>Empowering Your Career:</span>
            <p className='m-0'>
            At EasyWayAutomation, our employees are the heart of our success. We provide diverse career options, 
breaking barriers to help you thrive in an industry with unmatched growth. Propel your name to the top with our 
support, advancing your career through on-the-job experience, skills training, and certifications. Whether you 
aim for specific companies or explore various opportunities, we are here to guide you every step of the way.
            <br />
            <br />
            <span className='fw-bold'>Matching Your Ambitions:</span> <br />
            Our specialized recruiters diligently match your unique skills and career goals to rewarding consulting 
opportunities. We leverage our extensive client connections, opening doors at Fortune 100 Companies, and supporting you 
throughout your assignments. Your potential is more than a resume or job title; we take the time to understand your 
talents, experiences, and interests, connecting you to the right contract positions for accelerated professional success.
            <br />
            
            </p>
            <br />
            <p className='m-0'>Endless Growth Possibilities:</p>
            <p>
            • Feel confident with the backing of a well-established IT firm.
            <br />
            • We offer stability and growth opportunities.
            <br />
            • complemented by free skills enhancement training programs to keep you ahead in your field.
            <br />
            • With our vast network of contacts among Fortune Companies and Industry Leaders, exciting career 
prospects are within reach.
            </p>
            <p>Join us on a journey of continuous growth, learning, and success in the dynamic world of IT—your career 
aspirations are our priority, and we're here to support you every step of the way.</p>

            <p>
              <span>REFERRAL POLICY:</span>
              <br />
              As an Xceltech Employee, you would be eligible for our referral policy. Employees are eligible for a minimum incentive of $500 for every referred candidate who is employed by us. Employees may also refer projects and position openings. The same incentives apply for such referrals as well.
              <br />
            </p>
            <h2>
              XCELTECH IS AN E-VERIFIED COMPANY</h2>
              <div className="img-and-text d-flex flex-column justify-content-center  flex-sm-column flex-lg-row">
                <div>
                  <img src="/verify.jpg" alt="verify img" className='mb-3'/>
                </div>
                <div className='ms-4 mt-sm-3 mb-sm-2'>
                  <h4>What is the E-Verify program?</h4>
                  <p>The E-Verify program is an online system operated by the Department of Homeland Security (DHS) in partnership with the Social Security Administration (SSA). The E-Verify program enables employers to determine employment eligibility of new hires and the validity of their Social Security Numbers.</p>
                </div>
              </div>
          </div>
          <div className="employee-left ms-5 pe-2 ">
            <div className="left-heading text-center">
            Download Forms
            </div>
            <div className='line'></div>
            <div className="left-line">
              <ul style={{ listStyleType: 'none' }}>
                <li>1. Monthly TimeSheet:
                  <br />
                  <a href='/Monthly_Time sheet. XCT.xls' download>Monthly_Time sheet. XCT.xls</a></li>
                  <br />
                <li>2. Health Insurance Forms:
                  <br />
                  <a href='/BCADV5_VA.pdf'>BCADV5_VA.PDF</a>
                  <br />
                  <a href='/BP OPT 10.pdf'>BP OPT 10.pdf</a>
                  <br />
                  <a href='/BP CDH HSA OPT 1.pdf'>BP CDH HSA OPT 1.pdf</a>
                  <br />
                  <a href='/Rx $0 ded $10 $25 $45 (VA) - BRC6369.pdf'>Rx $0 ded $10 $25 $45 (VA) - BRC6369.pdf</a>
                  <br />
                  <a href='/Health Study 2011.pdf
                  '>Health Study 2011.pdf</a>
                  <br />
                  <a href='/RX 15-35-60 0 DEDUCTABLE.pdf'>RX 15-35-60 0 DEDUCTABLE.PDF</a>
                  <br />
                  <a href='/HSA Freq Asked Questions.tif'>HSA Freq Asked Questions.TIF</a>
                  </li>
                  <br />
                <li>3. Dental Enrollment Form:
                  <br />
                  <a href='/HUMANA_DENTAL_ENROLMENT_TERMINATION_FORM.pdf'>HUMANA_DENTAL_ENROLMENT_
                  TERMINATION_FORM.PDF</a></li>
                  <br />
                <li>4. Vision Enrollment Form:
                  <br />
                  <a href='/Xceltech Inc  (enrollment-2011).pdf'>Xceltech Inc (enrollment-2011).pdf</a></li>
                  <br />
                <li>5. Life Insurance:
                  <br />
                  <a href='/_opt_www_prod-ev_evadminkit_generic_EnrollmentForm_ID27.pdf'>LIFE_INSURANCE_HARTFORD
                  EnrollmentForm_ID27.pdf</a>
                  <br />
                  <a href='/LIFE_INSURANCE_BeneficiaryDesignationForm_gr11927.pdf'>LIFE_INSURANCE_Beneficiary
                  DesignationForm_gr11927.pdf</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees;