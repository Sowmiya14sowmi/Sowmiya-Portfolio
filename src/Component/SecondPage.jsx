import React, { useRef, useEffect } from 'react';
import "../Styles/SecondPage.css"
import secondPageImage1 from "../images/secondPageImage1.png";

function SecondPage(){

    const divRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const div = divRef.current;
        if (div) {
          const rect = div.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isVisible) {
            div.classList.add('animate-left-to-right');
          } else {
            div.classList.remove('animate-left-to-right');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    return(
        <div className='secondPage'>
        {/* <div className='secondPage-left'> */}
            
        {/* </div> */}
        <div className='secondPage-center'>
        <div ref={divRef} className="animated-div">
        <h1>
            About Me
        </h1>
        <p>I am a diligent software developer with 3 years of experience in web applications. I'm eager to join your crew to build out-of-the-box solutions for regional clients. I am skilled in developing plans, managing projects, and user documentation.</p>
        </div>
        </div>
        <div className='secondPage-right'>
        <img src={secondPageImage1} alt='img'></img>
        </div>
      </div>
    )
}
export default SecondPage