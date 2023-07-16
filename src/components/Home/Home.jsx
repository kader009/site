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
        <img src="/line.png" alt="line" style={{width:'700px'}} className='d-sm-none d-lg-block d-md-block mt-2 '/>
        </ul>
      </div>
      <div className="corporate-box">
      <div className="corporate-txt">
        <div className="corporate-heading mb-3">about us</div>
      </div>
      <div className="corporate-para ">
        <p>XCELTECH is a young and fast growing provider of IT Business and ERP Solutions to leading clients in the commercial and government sectors. At XcelTech, we start a flexible partnership between each client, employee and the company. We believe that good employees are well rounded and we empower them to develop a career that includes variety as well as the chance to emphasize specific talents and interests. We also provide the framework for success. We encourage and sponsor training, provide mentoring and conduct performance reviews. Working here means you have access to people and resources that help to make career decisions easier - based on the real-life experience of someone who's likely already been there.</p>
        <br />
        <p>XCELTECH partners with its clients to define, implement, and manage a broad range of technologies across multiple platforms, systems, and networks. Our broad geographic presence ensures that a proven and reliable tactical and strategic capability is available and deployable virtually everywhere in North America.</p>
        <br />
        <p>At XCELTECH, we are determined to provide the highest level of service to our clients and to partner with them in meeting their goals in:</p>
      </div>
      <div className="corporate-bullet">
        <ul style={{ listStyleType: 'none' }}>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Enterprise Resource Planning (ERP)</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Application design and development</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Web Development</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Business Analysis</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Database Design and Administration</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Project Management</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Software Development and Engineering
</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Systems Analysis</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Quality Assurance</li>
          <li> <img src="/tick.png" alt="tick" className='me-2'/> Technical Writing</li>
          
        </ul>
      <br />
      <p className='inner ms-4'>XCELTECH believes in building strong foundation. Key to our success are our Clients, Partners and our Valuable Employees.</p>
      </div>
      </div>
    </div>
  )
}

export default Home;