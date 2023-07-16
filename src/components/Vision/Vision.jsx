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
        <img src="/line.png" alt="line" className='d-sm-none d-lg-block d-md-block'/>
        </ul>
      </div>
      <div className="vision-text">
        <div className="vision-heading mb-3">
          Our Vision
        </div>
        <div className="vision-content d-flex justify-content-center align-items-center
          flex-sm-column flex-lg-row">
          <div className="vision-first">
            <p>Our vision is to be the number one choice of companies and clients seeking business and technology solutions, and to deliver, reinforce, and maintain our passionate commitment to our clients success throught: <span>"Providing Xcellence in Technology".</span></p>

            <span>Our Philosophy</span>
            <p>Fulfilling your corporate vision requires building your business and improving your operations. Everything we do at XceTtech is focused on helping you achieve those objectives. Our goal is to help our clients:
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
              <li><img src="/tick.png" alt="tick" className='me-2' />Align technology with business stategies.
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