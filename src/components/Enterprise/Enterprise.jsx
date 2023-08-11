import React from 'react'
import './../../App'
import { Link, animateScroll as scroll } from "react-scroll";
import {  useLocation } from 'react-router-dom';




const Enterprise = () => {
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
      <div className="enterprise-box">
        <div className="enterprise-heading">
        ERP (Enterprise Resource Planning System)
        </div>
        <div className="erp-inner">
          <ul>
            <li><Link className='text-secondary' to="what" >What is ERP?</Link></li>
            <li><Link className='text-secondary' to="major" smooth={true} duration={300}>5 major ERP benefits</Link></li>
            <li><Link className='text-secondary' to="xcel" smooth={true} duration={500}>EasyWayAutomation as your ERP partner</Link></li>
          </ul>
        </div>
        <div className="erp-text">
          <h4 id="what">What is ERP?</h4>
          ERP(Enterprise Resource Planning Systems) comprises of a commercial software package that promises the seamless <br />
          integration of all the information flowing through the company - financial, accounting, human resources, supply chain and <br />
          customer information.
          <br />
          Detailed examples of ERP packages are HRMS, Financials, Manufacturing, Distribution, and Sales. Each ERP Package may 
          <br />
          offer different functionality for different industries.
        </div>
        <div className="erp-img mt-3 mb-3">
          <img src="/erp1.jpg" alt="" />
        </div>
        <div className="erp-text">
          <h4 id='major'>5 major ERP benefits</h4>
          <ul>
            <li>On-line/real time information throughout all the functional areas of an organization</li>
            <li>Data standardization and accuracy across the enterprise </li>
            <li>"best-practices" included in the applications </li>
            <li>The efficiency they force an organization to undertake </li>
            <li>The analysis and reporting that can be used for long term planning</li>
          </ul>
          <p>In implementation, ERP Systems include several basic features. They are installed on a Database Management System.
            <br />
          Database platforms to chose from are: DB2/400, DB2/MVS, DB2/Unix, Informix, MS SQL  Server, Oracle, SQLBase, and
          <br />
          Sybase</p>
        </div>
        <div className="erp-sys-img ms-5 mt-2 mb-4">
          <img src="/erp-system.jpg" alt="" />
        </div>
        <div className="erp-text">
          <h4 id="xcel">Why consider Easy Way Automation as your ERP partner?</h4>
          At Easy Way Automation we have understood niche of our clients and partners and have thus concentrated on upbringing of our self in
          <br />
          specific ERP segments and modules. Our Clients have benefited by our skilled resources concentrating on Peoplesoft HRMS
          <br />
          & Financial Packages. In-depth functional and technical knowledge and experience of Easy Way Automation has helped our clients and
          <br />
          partners to implement ERP packages right form scratch to empower themselves in today's competitive Internet world.
          <br />
          <br />
          For more information on how Easy Way Automation can help your organization with EPM of any of our other PeopleSoft services please
          <br />
          e-mail info@easywayautomation.com or visit our Contact US page.
        </div>
      </div>
      
    </div>
  )
}

export default Enterprise;