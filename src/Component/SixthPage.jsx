import React from 'react';
import '../Styles/SixthPage.css'
import phoneIcon from '../images/phoneIcon.png'
import emailIcon from '../images/emailIcon.png'
import instagramIcon from '../images/instagramIcon.png'
import linkedinIcon from '../images/linkedinIcon.png'
import git from '../images/githubIcon.png'
import websiteIcon from '../images/websiteIcon.png'
import downloadIcon from '../images/downloadIcon.png'

function SixthPage(){
    const handleDownload = () => {
      const pdfFilePath = require('../images/Sowmiya-Software-Developer.pdf');
      console.log(pdfFilePath)
        fetch(pdfFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      console.log("url", url);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Software Developer.pdf';
      a.click();
      
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error downloading the PDF:', error);
    });
      };
    return(
        
        <div className='sixthPage'>

          <div className='sixthPage-left'>
            <h1>
            Feel free to reach out and connect. I'm always eager to explore new opportunities.
            </h1>
          </div>

          <div className='sixthPage-right'>
          <div>
          <img className='linkIcon' src={phoneIcon} alt='img'></img>
          <h3> 9566744231</h3>
          </div>

          <div>
          <img className='linkIcon' src={emailIcon} alt='img'></img>
          <h3> sowmiyakrishnamoorthi07@gmail.com</h3>
          </div>
          <div>
         <a href='https://www.instagram.com/dessin_art_sowmi?igsh=MW53YndoNW5ncDA4Nw=='>
           <img className='linkIcon' src={instagramIcon} alt='img'></img>
           </a>
          <a href='www.linkedin.com/in/sowmiya-krishnamoorthi-203b9130b'> 
          <img className='linkIcon' src={linkedinIcon} alt='img'></img>
          </a>
          <a href='https://github.com/Sowmiya14sowmi'>
            <img className='linkIcon' src={git} alt='img'></img>
            </a>
         <a href='https://sowmiya14sowmi.github.io/Sowmiya-Portfolio/'><img className='linkIcon' src={websiteIcon} alt='img'></img></a>
          </div>
          <div>
            <button onClick={handleDownload} className='resume'><i class="fa fa-home" /> <img src={downloadIcon} alt='img'></img> Download My Resume</button>
          </div>

          </div>

 
        </div>

    )
}
export default SixthPage