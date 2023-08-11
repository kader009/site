import React, { useState } from 'react'
import { Modal} from 'react-bootstrap';
import './../../App'
import { Link, useLocation } from 'react-router-dom';

const CurrentOpen = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1)


  const [show, setShow] = useState(false);


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
      <div className="currentOpen-box">
        <div className="current-heading mb-3">
        CURRENT JOB OPENINGS
        </div>
        <div className="currentOpen-tab-bottom">
          <table width={700} cellSpacing={1} cellPadding={5} border={0} >
          <tbody>
            <tr>
              <td width={300} bgcolor='#b9b9b9'><strong>Job Title</strong> </td>
              <td align='center' bgcolor='#b9b9b9'><strong>Job Number</strong> </td>
              <td align='center' bgcolor='#b9b9b9'><strong>Status</strong> </td>
            </tr >
            <tr  >
              <td bgcolor='#f3f3f3'><Link className='text-secondary' onClick={() => setShow(true)} to='#'>Senior Account Manager</Link></td>


      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>

              <td bgcolor='#f3f3f3' align='center'>XT 9012</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
            <tr >
              <td bgcolor='#f3f3f3'><Link className='text-secondary' to='#' onClick={() => setShow(true)}>Sr/ Jr. Technical Recruiter</Link></td>
              <td bgcolor='#f3f3f3' align='center'>XT 9021</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
            <tr >
              <td bgcolor='#f3f3f3'> <Link className='text-secondary' to='#' onClick={() => setShow(true)}>Jr. JAVA Developer</Link></td>
              <td bgcolor='#f3f3f3' align='center'>XT 9322</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
            <tr >
              <td bgcolor='#f3f3f3'><Link className='text-secondary' to='#' onClick={() => setShow(true)}>Jr. QA/BA Analyst</Link></td>
              <td bgcolor='#f3f3f3' align='center'>XT 9657</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
            <tr >
              <td bgcolor='#f3f3f3'><Link className='text-secondary' to='#' onClick={() => setShow(true)}>Jr. .NET Developer</Link></td>
              <td bgcolor='#f3f3f3' align='center'>XT 9672</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
          </tbody>
          </table>
          <div className="open-text mt-3">
            <span >New Job Requirement</span>
            <br />
            <br />
            Xceltech, Inc. has several permanent position for candidates w/ strong skills in:
            <br />
            <br />
            JavaWindowNT,J2EE,XML,JSP,WinRunner,QTP,LoadRunner, <br />Rational, Powerbuilder,Infomix,Informatica,Sybase, <br />DB2 / SQL Server,VB, C, C++,HTML Unix <br />
            AdminMainframe/RPG, Internet Architecture PPLsoft,PPLTools,SQR,PPLcode
            <br />
            <br />
            oracle Positions are: 
            <br />
            Software Engs,Programmer/Sys Analysts, QAEngs, Sales Engs, Business Analysts, <br /> Lead Analysts, Proj Mgrs/Leaders, Market Research Analysts.
            <br />
            Featuring positions at our offices & client sites: May be required to travel/relocate <br /> to unanticipated client locations accross  the US for short term or <br /> long term 
            
            projects.
            <br />
            <br />
            Please send resumes to:
            <br />
            <Link className='text-secondary'>resumes@exceltech.com</Link> or
            <br />
            Mail:
            <br />
            Xceltech Inc. 2136 Gallows Rd.,Ste F, Dunn Loring, VA 22027.
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentOpen;