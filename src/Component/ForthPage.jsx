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
                    <h2>Front-end</h2>
                    <p>
                        Javascript, HTML, CSS, React, Antd, Styled Component, Next.js
                    </p>
                </div>
                <div>
                    <h2>Back-end</h2>
                    <p>
                        Node.js, MySQL Workbench
                    </p>
                </div>
                <div>
                    <h2>Tools and Utilities</h2>
                    <p>
                        A8 Studio, Postman, GitHub, Jira, Zoho, Google Cloud Build (GCB) Logs
                    </p>
                </div>
            </div>
        </div>

    )
}
export default ForthPage;