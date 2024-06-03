import React from "react";
import "../Styles/ForthPage.css";

function ForthPage() {

    return (
        <div className='forthPage'>
            <div className='forthPage-left'>
                <h1>
                    Technical Skills
                </h1>
            </div>
            <div className='forthPage-right'>
                <div>
                    <h2>Programming Languages</h2>
                    <p>
                    JavaScript, TypeScript, HTML, CSS
                    </p>
                </div>
                <div>
                    <h2>Frontend Frameworks/Libraries</h2>
                    <p>
                    React, Styled Components, Ant Design, Bootstrap
                    </p>
                </div>
                <div>
                    <h2>Backend Frameworks/Libraries</h2>
                    <p>
                    Node, Express
                    </p>
                </div>

                <div>
                    <h2>Databases: MySQL</h2>
                    <p>
                    phpMyAdmin, MySQL Workbench 8.0 CE
                    </p>
                </div>
                <div>
                    <h2>Development Tools</h2>
                    <p>
                    Git, Visual Studio Code, Postman, AWS CloudWatch, GCP Logs
                    </p>
                </div>
                <div>
                    <h2>Project Management</h2>
                    <p>
                    Jira, Zoho Projects
                    </p>
                </div>
            </div>
        </div>

    )
}
export default ForthPage;