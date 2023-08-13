import React from 'react'
import { useLocation } from 'react-router-dom';
import './../../App'

const Terms = () => {
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
        <img src="/line.png" alt="line" className='d-sm-none d-md-none d-xs-none d-none d-lg-block d-md-block mt-2 '/>
        </ul>
      </div>
      <div className="terms-heading mb-3">
      Terms and Conditions
      </div>
      <div className="terms-box">

      <div className="terms-content">
        <p>
        

        Welcome to EasyWay Automation ("us", "we", or "our"). These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree with these terms, please refrain from using our website and services.

<br />
<br />

1. <span className='fw-bold'>Use of Website:</span>
<br />

By accessing our website, you agree to use it in accordance with these Terms and Conditions, as well as all applicable laws and regulations. You are prohibited from using our website for any unlawful or fraudulent purpose.

<br />
<br />

2. <span className='fw-bold'>Intellectual Property:</span>
<br />
The content, design, graphics, logos, trademarks, and other materials on our website are protected by intellectual property laws and belong to EasyWay Automation or its licensors. You may not copy, reproduce, distribute, or create derivative works from our content without prior written consent.

<br />
<br />


3. <span className='fw-bold'>User Contributions:</span>
<br />
Any content you contribute to our website, including comments, feedback, or suggestions, shall be considered non-confidential and non-proprietary. By submitting such content, you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute the content in any medium.
<br />
<br />

4. <span className='fw-bold'>Limitation of Liability:</span>
<br />

We strive to provide accurate and up-to-date information, but we make no representations or warranties about the completeness, accuracy, reliability, or availability of the content on our website. You use our website at your own risk. We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website.

<br />
<br />

5. <span className='fw-bold'>Third-Party Links:</span>
<br />

Our website may contain links to third-party websites for your convenience. We do not endorse or control the content of these websites and are not responsible for their practices. Your use of third-party websites is subject to their terms and conditions.

<br />
<br />

6. <span className='fw-bold'>Indemnification:</span>
<br />

You agree to indemnify, defend, and hold EasyWay Automation harmless from any claims, losses, liabilities, damages, costs, or expenses arising from your use of our website or any violation of these Terms and Conditions.

<br />
<br />

7. <span className='fw-bold'>Termination:</span>
<br />

We reserve the right to terminate or suspend your access to our website at any time, without prior notice, for any reason, including without limitation, breach of these Terms and Conditions.

<br />
<br />

8. <span className='fw-bold'>Governing Law:</span>
<br />

These Terms and Conditions are governed by and construed in accordance with the laws of [Country/State], without regard to its conflict of law provisions.

<br />
<br />

9. <span className='fw-bold'>Changes to Terms and Conditions:</span>
<br />

We may update these Terms and Conditions from time to time. Any changes will be effective upon posting the revised Terms and Conditions on our website.


<br />
<br />
10. <span className='fw-bold'>Contact Us:</span> 
<br />

If you have any questions or concerns about these Terms and Conditions, please contact us at [contact email or phone number].

<br />
<br />

Last updated: [Date]
<br />
<br />


By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. Please review them carefully and feel free to contact us if you have any questions.



        </p>
      </div>
      </div>
    </div>
  )
}

export default Terms;