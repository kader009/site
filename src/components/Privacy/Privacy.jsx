import React from 'react'
import './../../App'
import { Link, useLocation } from 'react-router-dom'

const Privacy = () => {
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
      <div className="privacy-heading mb-3">
      PRIVACY POLICY
      </div>
      <div className="privacy-box">

      <div className="privacy-content">
        <p>
        

EasyWay Automation ("us", "we", or "our") is committed to maintaining the privacy and protection of your personal information. This Privacy Policy outlines the types of personal information we collect, how we use and share it, and the choices you have regarding your information. By accessing or using our website and services, you consent to the practices described in this Privacy Policy.
<br />
<br />

1. <span className='fw-bold'>Information We Collect:</span>
<br />

Personal Information You Provide To Us:
We may collect personal information when you interact with our website, download resources, register for events, or use our services. This may include your name, email address, phone number, company name, mailing address, account username and password, job title, and financial information such as credit or debit card details. If you apply for a job or connect via social media profiles, we may collect relevant information from these sources.
<br />
<br />

2. <span className='fw-bold'>Information Collected Through Cookies and Similar Technologies:</span>
<br />
We use cookies, web beacons, local storage, scripts, pixels, and web server logs to collect certain information automatically when you visit our website. This information may include your IP address, device identifier, browser characteristics, domain, system settings, search queries, operating system type, language preferences, referring URLs, actions on the site, dates and times of visits, metadata, and other data associated with files on your device.
<br />
<br />


3. <span className='fw-bold'>Mobile Applications:</span>
<br />
When you download and use our mobile applications, we may collect device information, operating system details, and performance data. We gather this information to enhance app usage analysis, understand user demographics, and manage event attendance. With your consent, we may send you push notifications for event updates and promotions.
<br />
<br />

4. <span className='fw-bold'>How We Use Your Information:</span>
<br />

We use the collected information to monitor and improve our website's performance, respond to inquiries, provide information about products and services, fulfill customer requests, and comply with legal obligations. With your consent, we may also send you promotional information about our offerings. We process this information in connection with our legitimate business interests and as agreed upon by you.
<br />
<br />

5. <span className='fw-bold'>Sharing of Your Information:</span>
<br />

We may share your information with our affiliates, subsidiaries, and business partners to respond to your needs and provide requested services. With your consent, we may engage in joint marketing activities or disclose personal information for third-party direct marketing purposes. We also share information with third-party agents acting on our behalf for business activities.

<br />
<br />

6. <span className='fw-bold'>Your Privacy Rights:</span>
<br />

You have the right to access, correct, and request deletion of your personal information. You can exercise your rights by contacting us as specified below. You can also manage your cookie settings, and opt-out of receiving marketing communications.
<br />
<br />

7. <span className='fw-bold'>Data Security and Retention:</span>
<br />

We use various methods to secure your personal information and follow appropriate measures to protect it. We retain your information as long as needed for the purposes outlined in this Privacy Policy or as required by law.
<br />
<br />

8. <span className='fw-bold'>Children's Privacy:</span>
<br />

Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children.
<br />
<br />

9. <span className='fw-bold'>Changes to the Privacy Policy:</span>
<br />

We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised Privacy Policy on our website.

<br />
<br />
10. <span className='fw-bold'>Contact Us:</span> 
<br />

If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [contact email or phone number].
<br />
<br />

Last updated: [Date]
<br />
<br />

This Privacy Policy is intended to help you understand how we collect, use, share, and protect your personal information. Please review it carefully and feel free to reach out to us if you have any questions.


        </p>
      </div>
      </div>
    </div>
  )
}

export default Privacy