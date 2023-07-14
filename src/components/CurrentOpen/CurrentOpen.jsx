import React from 'react'
import './../../App'
import { Link } from 'react-router-dom';

const CurrentOpen = () => {
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
              <td bgcolor='#f3f3f3'>Senior Account Manager</td>
              <td bgcolor='#f3f3f3' align='center'>XT 9012</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
            <tr >
              <td bgcolor='#f3f3f3'>Sr/ Jr. Technical Recruiter</td>
              <td bgcolor='#f3f3f3' align='center'>XT 9021</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
            <tr >
              <td bgcolor='#f3f3f3'>Jr. JAVA Developer</td>
              <td bgcolor='#f3f3f3' align='center'>XT 9322</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
            <tr >
              <td bgcolor='#f3f3f3'>Jr. QA/BA Analyst</td>
              <td bgcolor='#f3f3f3' align='center'>XT 9657</td>
              <td bgcolor='#f3f3f3' align='center'>Open</td>
            </tr>
            <tr >
              <td bgcolor='#f3f3f3'>Jr. .NET Developer</td>
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
            JavaWindowNT,J2EE,XML,JSP,WinRunner,QTP,LoadRunner,Rational,Powerbuilder,Infomix,Informatica,Sybase,DB2 / SQL Server,VB, C, C++,HTML Unix <br />
            AdminMainframe/RPG, Internet Architecture PPLsoft,PPLTools,SQR,PPLcode
            <br />
            <br />
            oracle Positions are: 
            <br />
            Software Engs,Programmer/Sys Analysts, QAEngs, Sales Engs, Business Analysts, Lead Analysts, Proj Mgrs/Leaders,Market Research Analysts.
            <br />
            Featuring positions at our offices & client sites: May be required to travel/relocate to unanticipated client locations accross the US for short term or long term 
            <br />
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