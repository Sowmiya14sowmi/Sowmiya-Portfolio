import React from 'react';
import '../Styles/FirstPage.css';
import firstPageImage1 from "../images/firstPageImage1.png";

function FirstPage() {

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      };
    
    return (
        <div>
            <div className='firstPage'>
                <div className='firstPage-left'></div>
                <div className='firstPage-right'>
                    <div>
                        <img src={firstPageImage1} alt='img'></img>
                        <h1>Sowmiya</h1>
                        <h4>Software Developer</h4>
                        <input type='button' onClick={scrollToBottom} value="Reach Out"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;