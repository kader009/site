import React from 'react'
import '../../App'

const Home = () => {
  return (
    <div> 
      
      <div className="white-txt ">
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="" className='select me-2 '>Home</a>
            <img src='/breadcrum.png' alt="" />
          </li>
        <img src="/line.png" alt="line" style={{width:'700px'}} className='d-sm-none  d-md-none  d-none d-lg-block d-md-block mt-2 '/>
        </ul>
      </div>
      <div className="corporate-box">
      <div className="corporate-txt">
        <div className="corporate-heading mb-3">about us</div>
      </div>
      <div className="corporate-para ">
        <span className='fw-bold'>Our Team:</span>
        <p className='mt-1'>Our team consists of highly skilled professionals who are experts in their respective fields. From software engineers and developers to automation specialists, we have a diverse and talented team that is committed to delivering exceptional results. With years of experience and a deep understanding of automation technologies, our team is always at the forefront of industry advancements.</p>
        <span className='fw-bold'>Our Mission:</span>
        <p className='mt-1'>Our mission is to empower businesses by simplifying complex processes through automation. We strive to provide our clients with cutting-edge solutions that optimize efficiency, enhance productivity, and unlock new opportunities for growth. By leveraging the latest technologies and best practices, we aim to be the go-to automation partner for businesses worldwide.</p>
        <span className='fw-bold'>Our Services:</span>
        <p className='mt-1'>At EasyWayAutomation, we offer a comprehensive range of automation services as well as other tech services tailored to meet the unique needs of our clients our solutions are designed to streamline operations, reduce costs, and drive innovation:</p>
      </div>
      <div className="corporate-bullet">
        <ul style={{ listStyleType: 'none' }}>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Robotic Process Automation (RPA)</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Business Process Automation</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Intelligent Data Extraction</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Machine Learning</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Project Management</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Application design and development</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Web Development
          </li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Software Development and Engineering</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Business Analysis</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Database Design and Administration</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Systems Analysis</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Quality Assurance</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Technical Writing</li>
          
        </ul>
        <br />
        <span className='fw-bold pt-4 ms-4'>Our Approach:</span>
        <p className='inner ms-4 mt-1'>We believe in a collaborative approach to automation. We work closely with our clients to understand their specific requirements, challenges, and goals. By combining our expertise with their insights, we develop customized automation solutions that deliver tangible results. Our approach is focused on delivering seamless integration, user-friendly interfaces, and measurable ROI.</p>
      <span className='fw-bold ms-4'>Conclusion:</span>
      <p className='inner ms-4 mt-1'>At EasyWayAutomation, we are passionate about leveraging automation to drive success for businesses. With our experienced team, innovative solutions, and client-centric approach, we are committed to helping businesses unlock their full potential. Join us on the path to streamlined operations, increased efficiency, and sustainable growth.
      We are highly focused on building innovative solutions that address client's most complex digital transformation needs.
      We deliver on the promise of helping our customers, colleagues and communities thrive in an ever changing world.</p>
      </div>
      </div>
    </div>
  )
}

export default Home;