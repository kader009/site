import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './../../App'
import { useLocation } from 'react-router-dom';



const Vision = () => {
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
      <div className="vision-text">
        <div className="vision-heading mb-3">
        Vision & Mission
        </div>
        <div className="vision-content d-flex flex-column justify-content-center align-items-center
          flex-sm-column flex-lg-row">
          <div className="vision-first">
            <span className='fw-bold'>Our Vision:</span>
            <p>We envision a future where businesses thrive with automation, AI, and RPA. Our vision is to be the top choice for technology solutions, delivering excellence and 
            success for our clients worldwide by maintaining our passionate commitment to our 
            client's success.</p>
            <span className='fw-bold'>Our Mission:</span>
            <p>Our mission is to provide cutting-edge automation solutions that are accessible, adaptable, and affordable for businesses across various 
            industries. We aim to be at the forefront of technological advancements, continuously innovating and integrating the latest tools to optimize 
            workflows and propel businesses toward sustained success.</p>
            <span className='fw-bold '>Key Values:</span>
            <p className='mt-2'>
              
            * Innovation <br />
            * User-Centric Approach <br />
            * Reliability <br />
            * Simplicity <br />
            * Collaboration
            </p>
            <span className='fw-bold'>Our Offerings:</span>
            <p className='mt-2'>
            * Automation Solutions <br />
            * Process Optimization <br />
            * Customer Support <br />
            * Scalability <br />
            * Data Security
            </p>

            <span>Our Philosophy</span>
            <p>Our purpose is to assist you in fulfilling your corporate vision by enhancing your business and optimizing operations. Our focus is on helping 
            you achieve your goals. We are here to support our clients:
            </p>
            <br />
            <div className="vision-bullet">

            <ul style={{ listStyleType: 'none' }}>
              <li><img src="/tick.png" alt="tick" className='me-2' />Align technology with business stategies.
            </li>
              <li><img src="/tick.png" alt="tick" className='me-2' />Incepting in ERP technology.
            </li>
              <li><img src="/tick.png" alt="tick" className='me-2' />Providing best services for our ERP and technology clients by providing skilled professionals to maximize business performance and productivity
            </li>
              <li><img src="/tick.png" alt="tick" className='me-2' />Re-skill IT and Engineering staffs
            </li>
              <li><img src="/tick.png" alt="tick" className='me-2' />Transfer knowledge
            </li>
              <li><img src="/tick.png" alt="tick" className='me-2' />Reduce recruiting costs
            </li>
              <li><img src="/tick.png" alt="tick" className='me-2' />Reduce time to market
            </li>
              <li><img src="/tick.png" alt="tick" className='me-2' />Exploit new technologies
            </li>
            </ul>
            </div>
          </div>
          <div className="vision-img ms-4">
            <PhotoProvider>
            <PhotoView src="/slide.png">
            <img src="/slide.png" alt="slide img" className='w-100 img-fluid'/>
            </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision;