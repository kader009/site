import React from 'react'
import './../../App'

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
        <div className="current-heading">
        CURRENT JOB OPENINGS
        </div>
        <div className="currentOpen-tab-bottom">
          <table width={700} cellSpacing={1} cellPadding={5} border={0}>

          </table>
        </div>
      </div>
    </div>
  )
}

export default CurrentOpen;