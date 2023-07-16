import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from 'react-router-dom';

const Performence = () => {
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
        <img src="/line.png" alt="line" className='d-sm-none d-lg-block d-md-block mt-2'/>
        </ul>
      </div>
      <div className="enterprise-box">
        <div className="enterprise-heading">
        EPM (Enterprise Performance Management)
        </div>
        <div className="erp-inner">
          <ul>
            <li><Link className='text-secondary' to="what" >What is EPM?</Link></li>
            <li><Link className='text-secondary' to="major" smooth={true} duration={300}>What is EPM Architecture?</Link></li>
            <li><Link className='text-secondary' to="xcel" smooth={true} duration={500}>Why Xceltech for EPM?</Link></li>
          </ul>
        </div>
        <div className="erp-text">
          <h4 id="what">What is EPM?</h4>
          Enterprise Performance Management (EPM) applications are a group of business intelligence tools designed to help
          <br />
          organizations improve strategic and operational planning, monitoring and decision-making.
        </div>
          <br />
        
        <div className="erp-text">
          <h4 id='major'>What is EPM Architecture?</h4>

          <p>PeopleSoft's EPM 8.3 is the first application to provide complete scope of business analytical functionality. EPM 8.3 is web
            <br />
          enabled based purely on Internet technology. PeopleSoft is also the first Business Intelligence solution to integrate data
          <br />
          warehousing capabilities through their proprietary Enterprise Warehouse (EW). EW serves as the main repository that
          <br />
          contains information from PeopleSoft applications as well as third party and legacy systems. EW uses business rules via the
          <br />
          analytic applications to make information available for management analysis. EPM 8.3 includes modules such as Balanced
          <br />
          Scorecard, Activity Based Management, Analytic Forecasting, Workforce Analytics, Business Planning and Budgeting. In
          <br />
          addition, EPM provides industry specific modules, currently for the financial industry. These include modules such as Asset
          <br />
          Liability Management and Funds Transfer Pricing.</p>
        </div>
        <div className="erp-sys-img ms-5 mt-2 mb-4">
          <img src="/epm1.jpg" alt="" />
        </div>
        <div className="erp-text">
          <h4 id="xcel">Why Xceltech for EPM?</h4>
          XcelTech helps its clients by providing quality PeopleSoft EPM solution. We at XcelTech target at the right EPM resources for
          <br />
          our clients needs as part of its commitment to helping clients build performance centric organizations; utilizing information
          <br />
          from extended enterprise applications, third party tools and legacy systems.
          <br />
          <br />
          For more information on how XcelTech can help your organization with EPM of any of our other PeopleSoft services please
          <br />
          e-mail info@xceltech.com or visit our Contact US page.
        </div>
      </div>
    </div>
  )
}

export default Performence;