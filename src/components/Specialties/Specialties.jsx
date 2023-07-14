import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './../../App'
import { useLocation } from 'react-router-dom';


const Specialties = () => {
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
      <div className="speacial-box">
        <div className="speacial-heading mb-2">
        SPECIALTIES
        </div>
        <div className="speacial-content d-flex align-items-center justify-content-around">
          <div className="speacial-text">
            <span className='quality'>? Quality Assurance As A Service (QAaaS)</span>
            <br />
            <p className='ms-3 mb-0'>
            » Testing Strategy Implementation
            </p>
            <p className='ms-5 m-0'>QA Methodology & Processes
              <br />
            Automation Strategy & Framework</p>

            <p className='m-0 ms-3'>» Test Environment Management</p>
            <p className='ms-5 m-0'>Creation and Management of Test-Beds throughout the software testing lifecycle <br />
            Maintaining & Controlling the QA environments across different platforms</p>
            <p className='ms-3 m-0'>» Custom Testing Services</p>
            <p>
              <span className='ms-5 bold'>SDLC phase</span>
              <p className='ms-5 m-0'>Unit testing , System (component) & Integration Testing , User Acceptance Testing , Operation Acceptance Testing</p>
              <span className='ms-5 bold'>Specific application characteristics</span>
              <br />
              <p className='ms-5 m-0'>
              Stress / Load testing , Usability Testing , Performance Testing , Security Testing , Compatibility Testing
              </p>
              <span className='m-0 ms-5 bold'>Release / rollout</span>
              <br />
              <p className='ms-5'>
              Regression Testing, Localization Testing, Release based Annuity Testing Service.
              </p>
            </p>
            <span className='staff'>? Staff Augmentation</span>
            <p className='m-0 ms-3'>» Short-term / Long-term Contract Resource Deployment</p>
            <p className='m-0 ms-3'>» Project Augmentation</p>
            <p className='ms-3 m-0'>» Technology Areas</p>
            <p className='ms-5'>
            • Quality Assurance - Manual & Automation (System Testing,
            Integration Testing, Regression Testing,  Load Testing) of Applications,
            Products and IT Infrastructure; with Strong Domain Expertise
            <br />
            •IT System Management ? Help Desk/Service Desk, Database Admin,
            System Admin, Configuration & Change Management, ITSM & ITIL.
            <br />
            •Application Development & Support ? Architects, Business Analysts, Project Managers, Microsoft Technologies, Java Technologies, Open Source, Databases, Data Warehousing and BI, Mainframes.
            • ERP / CRM: PeopleSoft, SAP, Oracle Applications
            </p>
            <span className='application'>? Application Development & Management (ADM)</span>
            <br />
            <p className='ms-4'>
            » Architecture Consulting
            <br />
            » Application Development, Customization , Enhancement and Support <br />
            » Global Delivery Model (GDM) - Onshore / Offsite / Offshore delivery model
            <br />
            » Legacy Migration Services
            » Enterprise Application Integration Services
            <br />
            » Business Intelligence & Data Warehousing
            <br />
            » Business Analysis & Documentation
            <br />
            » Project Management & Program Management
            <br />
            » Business Rules Engine Implementation
            </p>
            <span className='enter'>? Enterprise Solutions & Products</span>
            <br />
            <p className='ms-4'>
            » Enterprise Service Oriented Architecture <br />
            » Enterprise Technology & Infrastructure Architecture & Road Maps <br />
            » Business Process Analysis & COTS evaluation <br />
            » Business Process Re-engineering & GAP Analysis <br />
            » Implementation, Upgrade & Migration, Customization and Support of ERP/CRM (PeopleSoft, Oracle Apps, SAP, etc.) <br />
            » Enterprise wide Systems Integration
            </p>
          </div>
          <div className="speacial-left ">
            <PhotoProvider>
              <PhotoView src="/Industry.png">
              <img src="/Industry.png" alt="industry pic" className=' img1' />
              </PhotoView>
            </PhotoProvider>

            <PhotoProvider>
              <PhotoView src="/Technology.png">
              <img src="/Technology.png" alt="Technology pic" className='img2'/>
              </PhotoView>
            </PhotoProvider>


            <PhotoProvider>
              <PhotoView src="/Staffing.png">
              <img src="/Staffing.png" alt="Staffing pic" className='img3'/>
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialties