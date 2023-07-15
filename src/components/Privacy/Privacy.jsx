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
        <img src="/line.png" alt="line" />
        </ul>
      </div>
      <div className="privacy-heading mb-3">
      PRIVACY POLICY
      </div>
      <div className="privacy-box">

      <div className="privacy-content">
        <p>
          XcelTech, Inc. (XcelTech) has created this Privacy Statement (the "Statement") in order to demonstrate our commitment to your privacy. In serving your staffing or employment needs, XcelTech may need to gather personal information (including various forms of personally identifiable information) about you. The following discloses our information gathering and dissemination practices for the XcelTech web site. This Statement may be revised from time to time, so please check back periodically. Online Application and Resume Submission For your convenience, XcelTech provides its web site visitors the ability to submit an application and resume online. XcelTech's Online Application and Resume Submission program requires web site users to provide various kinds of personal information, which may include but is not limited to: Contact information - including name, address, telephone numbers, and email address; Educational History - including schools attended, year of graduation, grade point averages upon graduation, degrees received, etc.; Employment History - including companies worked for, job titles, job descriptions, names of supervisors, etc.; Employment References - including names of persons XcelTech may contact to verify your employment and/or educational history This information will be reviewed and used by XcelTech for the purpose of evaluating you for placement with our clients. It may also be released to potential employers (or their agents) seeking employees with your skills. In addition, XcelTech may distribute information about its users in aggregate form as it sees fit. Such information will not identify any user in particular, but rather is based on an information summary of all of XcelTech's users. Third Party Requests XcelTech may, on occasion, disclose your personal information to third parties when legally compelled to do so or when we believe the disclosure is necessary to identify, contact, or take action against anyone causing injury or threatening to cause injury to you, XcelTech, or the general public. XcelTech will use reasonable efforts to limit such disclosures to only what is required. By preserving our right to make disclosures in such instances XcelTech is not undertaking an obligation to defend you or others from injury or to seek relief for those injuries. Online Information Requests The XcelTech web site provides a request form for visitors to request additional information relating to XcelTech's services. This request form may ask visitors for contact information, such as the visitor's name, address, telephone number, and/or email address. XcelTech uses information submitted via the information request form to contact web site visitors regarding the types of services XcelTech offers, and to demonstrate to the web site visitors how they can benefit from XcelTech's services. XcelTech may also use the contact information to contact web site visitors when necessary. Visitors may opt out of receiving promotional information from XcelTech by not submitting an information request form. XcelTech will not sell or otherwise provide a visitor's personal contact information to other companies, except prospective employers, without the visitor's permission. Hidden Information Unlike user-entered data (such as form submissions) some types of personally identifiable information transmitted across the Internet are not readily perceptible to web site users. Such information may include your internet protocol address ("IP address"), which identifies your specific computer on the Internet, and personally identifiable information stored in session variables, or "cookies," on your computer's hard drive. XcelTech may collect and use these types of hidden information on its web site in any manner it deems appropriate. Linked Web sites The XcelTech web site may include links to and/or advertisements by other companies or web sites. These other entities may collect personal information, including identification information from you. Please be advised that XcelTech is not responsible for the privacy practices or the content of such web sites and the information practices of such sites are not covered by this privacy statement. XcelTech does not receive any personal information about visitors to the XcelTech web site from any third party, including any information collected by or through links to third party web sites and/or advertisements on the XcelTech web site. Disclaimer XcelTech makes no representations or warranties, express or implied, with respect to the content or functionality of its web site or any linked web site. XcelTech specifically disclaims all warranties, express or implied, with respect to all merchandise, services, and products purchased by the user while visiting a linked web site. Opt Out XcelTech is committed to protecting the personal, private information of persons who use our web site services. Therefore, XcelTech provides web site visitors the ability to opt out of using XcelTech's services, and/or receiving information from XcelTech. XcelTech's web site users may opt out of participating in the Online Applications and Resume submission program by not sending an online resume to XcelTech. Otherwise, any information XcelTech receives from a user regarding personal information contained in an application and resume submitted online may be shared with prospective employers or third parties as set forth above. Web site users who have submitted applications and resumes to XcelTech online, who no longer wish to use XcelTech's services, may have their information removed from XcelTech's database by sending an email to <Link className='text-secondary' to='/mailto:admin@xceltech.com'>admin@xceltech.com</Link> requesting that such information be removed from XcelTech's database. Visitors to XcelTech's web site may opt out of receiving informational communications about XcelTech's services by not submitting a request for information. Online Security While XcelTech strives to protect its user's personal information and privacy, no data transmission over the Internet can be guaranteed to be 100% secure. As a result, while XcelTech stores your personal information in data networks that are password protected, we cannot ensure or warrant the security of any information you transmit to or receive from us through our web site and online services. Contacting the Web Site If you have any questions about this privacy statement, the practices of XcelTech's web site, or your dealings with XcelTech's web site, you can contact Web Admin at <Link className='text-secondary' to='/mailto:admin@xceltech.com'>admin@xceltech.com</Link> or call us at 703-208-9120
        </p>
      </div>
      </div>
    </div>
  )
}

export default Privacy