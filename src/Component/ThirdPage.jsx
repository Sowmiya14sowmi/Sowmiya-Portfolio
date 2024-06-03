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
            <h2>Software Developer - Apps Team (Service-Based)</h2>
            <h5><a href='https://autonom8.com/'>Autonom8 INC</a></h5>
            <p><img src={locationIcon} alt='img'></img>Chennai, TN</p>
            <span>04/2022 - Present</span>
            <p> <b>Projects for <a href='https://businessloans.kinaracapital.com/'>Kinara Capital</a></b></p>
            <p>
            Developed and maintained the entire Collection Management System(CMS), including CMS Modules, Deposit Modules, and Collection Postings, enhancing daily collection processes for customers.
            </p>
            <p>
            Designed and implemented key user applications, such as Advance and Prepayment Applications, One Time Settlement Applications, Loan Disbursement, Swap Charges, and Foreclosure Collection.
            </p>
            <p>
            Utilized front-end technologies including A8studio (React.js, Ant Design) to create intuitive and efficient user interfaces. Employed a variety of programming tools and technologies, including JavaScript, Frappe, Ozonetel, Contaque, Sindesk, and Perdix API integrations, to build back-end functionalities.
            </p>
            <p>
            Provided ongoing CMS production support and managed month-end collection closing activities using Jira. Led LMS and CMS enhancement projects, handling project management and ticket resolutions in Zoho Projects.
            </p>
            <p>
            Participated in daily POD calls to update project status and progress, ensuring effective communication and project tracking.
            </p>
            <p>
            Currently working on CMS architecture changes to improve system performance and scalability.
            </p>
          </div>
          <div>
            <h2>Junior Software Developer</h2>
            <h5><a href='https://www.digisquares.com/'>Digisquares Technologies Private Limited</a></h5>
            <p><img src={locationIcon} alt='img'></img>Coimbatore, TN</p>
            <span>01/2021 - 04/2022</span>
            <p> <b>Developed full-stack applications:</b></p>
            <p>
            Created databases using MySQL Workbench.
            </p>
            <p>
            Implemented the front-end with React.js.
            </p>
            <p>
            Developed the back-end with Node.js.
            </p>

            <p> <b>Integrated APIs and contributed to the main pages of the company website:</b></p>
            <p>
            Worked on integrating various APIs to enhance functionality and ensure seamless data exchange.
            </p>
            <p>
            Played a key role in developing and maintaining the main pages of the company website, ensuring a smooth user experience and robust performance.            </p>
           
           <p> <b>Utilized technologies such as Antd, Styled Components, Next.js, and TypeScript:</b></p>
            <p>
            Leveraged Ant Design (Antd) for efficient and visually appealing UI components.
            </p>
            <p>
            Used Styled Components for writing CSS that's scoped to individual components, promoting modularity and reusability.
            </p>
            <p>
            Employed Next.js for server-side rendering and building optimized, scalable web applications.
            </p>
            <p>
            Applied TypeScript to enhance code quality, maintainability, and error checking through static type definitions.
            </p>
          </div>
          <div>
            <h2>Internship</h2>
            <h5><a href='https://knila.com/'>Knila IT Solutions</a></h5>
            <p><img src={locationIcon} alt='img'></img> Coimbatore, TN</p>
            <span>2020 - 2020</span>
            <p>
            Completed projects involving Node.js, MySQL, and APIs, focusing on REST APIs and CRUD operations.
            </p>
            <h5><a href='https://www.forgeforward.in/'>Forge - KCT</a></h5>
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