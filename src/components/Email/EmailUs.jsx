import React from 'react'
import './../../App'

const EmailUs = () => {

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
      <div className="email-box">
        <div className="email-heading mb-4">
        EMAIL US
        </div>
        <div className="email-bullet">
          <p>

        Please use the form below to submit your request. If you do not hear from us within 24 hours, you may call our office to check on the status of your request.
          </p>
        <div className="form pt-2">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <span className='me-3 pe-1'>Your Name:</span>
              <input type="text" className='ms-4' />
            </li>
            <li>
              <span className='me-4 pe-2'>Email:</span>
              <input type="text" className='ms-5 ps-4' />
            </li>
            <li>
              <span >Your Message:</span>
              <textarea className='ms-4 pe-4' name="" id="" cols="40" rows="3"></textarea>
            </li>
          </ul>
        </div>
        <div className="submit-btn pb-5 mt-5 pt-4 ">
          <input type="button" value="Submit" id="submit"  className='me-2'/>
          <input type="button" value="Reset" id="submit"  />
        </div>
        </div>
      </div>
    </div>
  )
}

export default EmailUs