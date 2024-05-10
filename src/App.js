import React from 'react';
import './App.css';
import FirstPage from "./Component/FirstPage.jsx"
import SecondPage from "./Component/SecondPage.jsx"
import ThirdPage from "./Component/ThirdPage.jsx"
import ForthPage from "./Component/ForthPage.jsx"
import FifthPage from "./Component/FifthPage.jsx"
import SixthPage from "./Component/SixthPage.jsx"

function App() {


  return (
    <div className='websiteContainer'>
     <FirstPage/>
     <SecondPage/>
     <ThirdPage/>
     <ForthPage/>
     <FifthPage/>
     <SixthPage/>
    </div>

  );
}

export default App;
