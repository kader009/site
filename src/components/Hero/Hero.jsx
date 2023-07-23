import React from 'react'
import './../../App'

const Hero = () => {
  return (
    <div className='mt-4'>
      <div className='d-flex justify-content-around align-items-center'>
        <div className='pe-5'>
          <img src="/Robo.webp" alt="robot" style={{width:'320px',marginLeft: '-360px'}}/>
        </div>
        <div className='w-sm-100'>
          <h2 className='text-center '>Powering Intelligent Automation  </h2>
          <h2>for smarter business outcomes </h2>
          <br />
          <h2>No matter what.</h2>
          {/* <br /> */}
          
        </div>
      </div>
    </div>
  )
}

export default Hero;