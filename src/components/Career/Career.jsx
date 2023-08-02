import React from 'react'
import './../../App'
import { Link,  useLocation } from 'react-router-dom';


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
        <img src="/line.png" alt="line" className='d-sm-none d-lg-block d-md-block mt-2 d-none'/>
        </ul>
      </div>
      <div className="career-content-box ">
        <div className="career-heading mb-3">
        CAREER
        </div>
        <a href='#oppor' className='text-secondary'>Opportunities in EasyWayAutomation</a>
            <br />
            <a href='#flexi' className='text-secondary'>A Flexible Partnership</a>
            <br />
            <a href='#benefit' className='text-secondary'>Benefits</a>
        <div className="career-content d-flex flex-column flex-sm-column flex-lg-row">
          <div className="career-right pb-5">
          <br />
          <br />
          <span id='oppor'>Opportunities in EasyWayAutomation</span>
          <p className='m-0'>Are you a leader in the consulting field? EasyWay Automation is on the lookout for talented individuals 
worldwide, including technologists, industry specialists, process experts, and business strategists. Join us in turning 
innovative ideas into successful solutions that bring value to our clients.</p>
          <br />
          <p className='m-0'>Permanent Positions with Diverse Skill Sets:

We have exciting permanent positions available for candidates with strong skills in one or more 
of the following areas:</p>
<br />
          <ul style={{color:'#6D6D6D'}}>
            <li>Java, WindowNT</li>
            <li>J2EE, XML, JSP</li>
            <li>WinRunner, QTP, LoadRunner, Rational</li>
            <li>Powerbuilder, Informix, Informatica, Sybase, DB2/SQL Server</li>
            <li>VB, C, C++, HTML</li>
            <li>Unix Admin, Mainframe/RPG, Internet Architecture</li>
            <li>PPLsoft, PPLTools, SQR, PPLcode, Oracle</li>
          </ul>
          <br />
          <p className='m-0'>Various Roles Available: We offer a range of positions, including Software Engineers, Programmer/Sys Analysts, 
QA Engineers, Sales 
Engineers, Business Analysts, Lead Analysts, Project Managers/Leaders, Market Research 
Analysts, and Technical Recruiters. These full-time positions are available at both our offices and client 
sites. You may have the opportunity to travel or relocate to different client locations across the US for 
short-term or long-term projects.</p>
          <br />
          <span id='flexi'>A Flexible Partnership</span>
          <p className='m-0 '>We believe in a flexible partnership between each employee and the company. Your career growth is 
essential to us, and we provide the support and direction you need to achieve your goals. Enjoy the freedom to develop 
your career at your own pace, without the bureaucracy of larger firms. We value well-rounded 
employees and empower you to embrace diverse experiences and focus on specific talents and interests.
With mentoring, training, and performance reviews, we offer the framework for your success.</p>
          <br />
          <span id='benefit'>Quality Benefits and Compensation:</span>
          <p>We care about your well-being and offer a competitive compensation program, including performance-related 
          bonuses and locally competitive benefits. Before engagement, we conduct a careful skills and experience review to ensure 
          you can make an immediate impact on the project. Only consultants who exceed our standards are engaged at EasyWay 
          Automation client sites.</p>
          <span id='benefit'>Equal Opportunity Employment:</span>
          <p>EasyWay Automation believes in Equal Opportunity Employment, and we welcome diverse 
individuals to join 
our team.</p>
          <span >Ready to Take the Next Step?</span>
          <p>If you're ready for an exciting and fulfilling career in the IT consulting industry, submit your resume 
to us at:
		EasyWay Automation
		1111 Gallows Rd., Ste F
		Dunn Loring, VA 111111

		Join EasyWay Automation. and embark on a journey of growth, innovation, and empowerment. Your future 
awaits!</p>
          </div>
          <div className="career-left ms-3">
            <div className=" ms-0 mb-5 pb-5">
              <Link to='/currentopen'>
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