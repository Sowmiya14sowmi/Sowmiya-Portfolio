import React from 'react';
import '../Styles/ThirdPage.css'
import thirdPageImage1 from '../images/thirdPageImage1.png';
import locationIcon from '../images/locationIcon.png';
function ThirdPage(){
    return(
        <div className='thirdPage'>
        <div className='thirdPage-left'>
            <img src={thirdPageImage1} alt='img'></img>
          <h1>Work Experience</h1>
        </div>
        <div className='thirdPage-right'>
          <div>
            <h2>Software Developer</h2>
            <h5><a href='https://autonom8.com/'>Autonom8 INC</a></h5>
            <p><img src={locationIcon} alt='img'></img>Chennai, TN</p>
            <span>04/2022 - Present</span>
            <p>
            Developed applications including Collection Management System (CMS) and its phases (Advance & Prepayment, Write Off Recovery, One Time Settlement, Legal Settlement), Loan Disbursement Cancellation Modules, Swap and Foreclosure Collection Module using A8 Studio, a low-code platform based on JavaScript React.
            </p>
            <p>
            Currently enhancing CMS projects with perdix APIs to Frappe APIs integrations, Ozontel APIs to Contaque API integrations, and CMS Optimizations.
            </p>
            <p>
            Responsible for completing Zoho tasks and tickets, as well as updating Jira Production Tickets.
            </p>
          </div>
          <div>
            <h2>Junior Software Developer</h2>
            <h5>Digisquares Technologies Private Limited</h5>
            <p><img src={locationIcon} alt='img'></img>Coimbatore, TN</p>
            <span>01/2021 - 04/2022</span>
            <p>
            Developed full-stack applications , including creating databases in MySQL Workbench, implementing front-end with React.js, and back-end with Node.js.
            </p>
            <p>
            Integrated APIs and contributed to the main pages of the company website.
            </p>
            <p>
            Utilized technologies such as Antd, Styled Components, Next.js, and TypeScript.
            </p>
          </div>
          <div>
            <h2>Internship</h2>
            <h5>Knila IT Solutions</h5>
            <p><img src={locationIcon} alt='img'></img> Coimbatore, TN</p>
            <span>2020 - 2020</span>
            <p>
            Completed projects involving Node.js, MySQL, and APIs, focusing on REST APIs and CRUD operations.
            </p>
            <h5>Forge - KCT</h5>
            <p><img src={locationIcon} alt='img'></img> Coimbatore, TN</p>
            <span>2020 - 2020</span>
            <p>
            Completed a basic-level internship in PHP.
            </p>
          </div>
        </div>
      </div>
    )

}
export default ThirdPage