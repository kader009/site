import React from 'react'
import './../../App'
import { useLocation } from 'react-router-dom';

const Corporate = () => {
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
        <img src="/line.png" alt="line" className='d-sm-none d-lg-block d-none d-md-block mt-2'/>
        </ul>
      </div>
      <div className="culture-heading mb-3">
      CORPORATE CULTURE
      </div>
      <div className="culture-box d-flex flex-column justify-content-center align-items-center flex-sm-column flex-lg-row">
        <div className="culture-text">
          <p>promotes innovation, collaboration, and continuous growth. Our culture is built upon the following core values: </p>
          <span className='fw-bold'>Excellence:</span>
          <p className='mt-1'>We strive for excellence in everything we do. We set high standards for ourselves 
          and continuously challenge and inspire each other to achieve remarkable outcomes.</p>
          <span className='fw-bold'>Innovation:</span>
          <p className='mt-1'> We embrace innovation as the driving force behind our success. We encourage our 
          employees to think creatively, explore new ideas, and embrace emerging technologies to provide cutting-edge 
          automation solutions.</p>
          <span className='fw-bold'>Collaboration:</span>
          <p className='mt-1'>We believe in the power of collaboration and teamwork. We foster a supportive and inclusive
          environment where everyone's ideas are valued and respected. We actively seek diverse perspectives to create
          the best solutions for our clients.</p>
          <span className='fw-bold'>Integrity:</span>
          <p className='mt-1'>We uphold the highest standards of integrity and ethical conduct. We are committed to honesty, 
          transparency, and maintaining the trust and confidence of our clients, partners, and employees.</p>
          <span className='fw-bold'>Continuous Learning:</span>
          <p className='mt-1'>We are passionate about learning and personal growth. We provide opportunities for 
          professional development, mentorship, and knowledge sharing to enhance the skills and expertise of our employees.</p>
          <span className='fw-bold'>Customer Focus:</span>
          <p className='mt-1'>Our clients are at the heart of everything we do. We listen attentively to their needs,
          understand their challenges, and deliver tailored automation solutions that exceed their expectations.</p>
          <span className='fw-bold'>Agility:</span>
          <p className='mt-1'>We embrace change and adapt quickly to new technologies, industry trends, and client requirements. 
          We foster an agile mindset that enables us to stay ahead of the curve and deliver innovative solutions efficiently.</p>
          <span className='fw-bold'>Work-Life Balance:</span>
          <p className='mt-1'>We value the well-being of our employees. We promote a healthy work-life balance, 
          recognizing that a harmonious life outside of work positively impacts productivity and creativity.</p>
          <span className='fw-bold'>Social Responsibility:</span>
          <p className='mt-1'>We are committed to making a positive impact on society and the environment. We actively
          engage in corporate social responsibility initiatives, promoting sustainability, diversity, and community involvement.</p>
          <br />
          <p>This corporate culture statement serves as a guidepost for our actions, decisions, and interactions at EasyWayAutomation. We believe that by embracing 
          these values, we can create an environment where our employees thrive, our clients succeed, and our At 
          EasyWayAutomation, we cultivate a vibrant and inclusive corporate culture that organization continues
          to innovate and grow.</p>
        </div>
        <div className="culture-img ms-4">
          <img src="/Strategy.png" alt="strategy" />
        </div>
      </div>
    </div>
  )
}

export default Corporate