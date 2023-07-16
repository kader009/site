import React from 'react'
import { useLocation } from 'react-router-dom';

const Automation = () => {
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
      <div className="automation-box">
        <div className="automation-heading">
        TEST AUTOMATION
        </div>
        <div className="automation-text">
        Xceltech is a leading provider of consulting services related to automated test tools. We have established partnerships with the
        <br />
        leading tools providers for defect tracking, load testing, regression testing, and test management. Whether you need
        <br />
        assistance in selecting and implementing an automated test tool, or have an existing tool inventory that is underutilized,
        <br />
        Xceltech has the experience to help your organization increase efficiency, productivity and software quality.
        <br />
        <br />
        Automation projects can be divided into two phases:
        <br />
        <br />
        <h2>Phase I: Tool Acquisition
        </h2>
        <ul>
          <li>Assessment</li>
          <li>Evaluation/Selection
          </li>
          <li>Installation</li>
        </ul>
        <br />
        With the right tool, test automation can offer a dramatic increase in productivity. The first and most important step in the process is acquiring a tool 
        <br />
        that is suitable for your application, operating environment, and test team. An automation assessment allows us to evaluate your tool needs, provide
        <br />
        an objective selection of the best tool(s), and install and configure the tool(s) for your application and environment.
        <br />
        <br />
        <h2>Phase II: Tool Implementation
        </h2>
        <ul>
          <li>Preparation
          </li>
          <li>Execution</li>
        </ul>
        <br />
        Selecting the right test tool is only the beginning of a successful test automation effort. As with any tool, it is how you use it that counts. Although test 
        <br />
        automation tools can save time through unattended execution, it takes time to define, design, and automate tests. During the implementation phase,
        <br />
        we will prepare the test environment, design the test cases, develop the automated scripts, and execute the tests. This process will result in a robust, <br />
        reusable automated test environment.
        </div>
      </div>
    </div>
  )
}

export default Automation;