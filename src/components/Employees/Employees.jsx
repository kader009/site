import React from 'react'
import './../../App'
import { Link } from 'react-router-dom';

const Employees = () => {
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
      <div className="employee-box">
        <div className="employee-heading">
          For Employees
        </div>
        <div className="two-side-box d-flex">
          <div className="employee-right">
            <p className='m-0'>
            Xceltech's career option removes barriers and gives you the platform to break into an industry that has seen unmatched growth in the last decade. Or maybe there's a specific company you've had your eye on. Let us propel your name to the top of the hiring list. Advance your career with on-the-job experience and additional skills training and certifications. You can do it all with Xceltech.
            <br />
            <br />
            Our specialized recruiters match your skills and career goals to consulting opportunities that you'll find satisfying and rewarding. We leverage extensive client connections to get your foot in the door at Fortune 500 Companies. Once on assignment, we will continue to support you while you get first-hand knowledge about working there.
            <br />
            <br />
            At Xceltech, we know that your potential can’t be captured in a resume, job title or job description. With an understanding of your unique talents, experience and interests, we connect you to the right contract to positions to accelerate your professional success.
            </p>
            <br />
            <p className='m-0'>With Xceltech, you can:</p>
            <p>
            • Feel confident you have the backing of a well-established IT Firm
            <br />
            • Improve your skills with our free skills enhancement training programs
            <br />
            • Utilize our contacts to penetrate Fortune Companies and Industry Leaders
            </p>

            <p>
              <span>REFERRAL POLICY:</span>
              <br />
              As an Xceltech Employee, you would be eligible for our referral policy. Employees are eligible for a minimum incentive of $500 for every referred candidate who is employed by us. Employees may also refer projects and position openings. The same incentives apply for such referrals as well.
              <br />
            </p>
            <h2>
              XCELTECH IS AN E-VERIFIED COMPANY</h2>
              <div className="img-and-text d-flex justify-content-center">
                <div>
                  <img src="/verify.jpg" alt="verify img" />
                </div>
                <div className='ms-4'>
                  <h4>What is the E-Verify program?</h4>
                  <p>The E-Verify program is an online system operated by the Department of Homeland Security (DHS) in partnership with the Social Security Administration (SSA). The E-Verify program enables employers to determine employment eligibility of new hires and the validity of their Social Security Numbers.</p>
                </div>
              </div>
          </div>
          <div className="employee-left ms-5 pe-2">
            <div className="left-heading text-center">
            Download Forms
            </div>
            <div className='line'></div>
            <div className="left-line">
              <ul style={{ listStyleType: 'none' }}>
                <li>1. Xceltech Monthly TimeSheet:
                  <br />
                  <Link>Monthly_Time sheet. XCT.xls</Link></li>
                  <br />
                <li>2. Health Insurance Forms:
                  <br />
                  <Link>BCADV5_VA.PDF</Link>
                  <br />
                  <Link>BP OPT 10.pdf</Link>
                  <br />
                  <Link>BP CDH HSA OPT 1.pdf</Link>
                  <br />
                  <Link>Rx $0 ded $10 $25 $45 (VA) - BRC6369.pdf</Link>
                  <br />
                  <Link>Health Study 2011.pdf</Link>
                  <br />
                  <Link>RX 15-35-60 0 DEDUCTABLE.PDF</Link>
                  <br />
                  <Link>HSA Freq Asked Questions.TIF</Link>
                  </li>
                  <br />
                <li>3. Dental Enrollment Form:
                  <br />
                  <Link>HUMANA_DENTAL_ENROLMENT_
                  TERMINATION_FORM.PDF</Link></li>
                  <br />
                <li>4. Vision Enrollment Form:
                  <br />
                  <Link>Xceltech Inc (enrollment-2011).pdf</Link></li>
                  <br />
                <li>5. Life Insurance:
                  <br />
                  <Link>LIFE_INSURANCE_HARTFORD
                  EnrollmentForm_ID27.pdf</Link>
                  <br />
                  <Link>LIFE_INSURANCE_Beneficiary
                  DesignationForm_gr11927.pdf</Link>
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