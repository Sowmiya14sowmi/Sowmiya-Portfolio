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
        <p className='paragraphs'>
        With 3 years of experience in the Software Development field, I am a dedicated software developer committed to crafting efficient and user-friendly solutions through application development. I am eager to leverage my problem-solving skills and collaborate effectively to deliver high-quality results.
        </p>
        </div>
        </div>
        <div className='secondPage-right'>
        <img src={secondPageImage1} alt='img'></img>
        </div>
      </div>
    )
}
export default SecondPage