import './App.css';
import React, { useState, useEffect } from 'react';

import NavBar from "./Components/NavBar";
import Section01 from './Components/Section01';
import Section02 from './Components/Section02';
import FormResume from './Components/FormResume';
import Section03 from './Components/Section03';

function App() {

  const [displayForm,setdisplayForm]=useState(false);
  const [displayRestBody,setdisplayRestBody]=useState(true);
  
  
  function FormDisplay(){
    setdisplayForm(true)
    setdisplayRestBody(false)
  }

  function GotoHome(){
    setdisplayForm(false )
    setdisplayRestBody(true)
    setOpenMenuSlider(false)
    
  }
  
  return (
    <>

         {/* a navbar is here  */}

        <NavBar FormDisplay={FormDisplay} GotoHome={GotoHome} setOpenMenuSlider={setOpenMenuSlider}/>
               
        {/* it is the things which will be displayed  when clicked on the create your resume button */}


        { displayForm  &&  <>  <FormResume/>  </> }
             

        {/* it is the things which will be displayed off when clicked on the create your resume button */}

        { displayRestBody &&  <>
                                <Section01 FormDisplay={FormDisplay}/>
                                <Section02 />
                                <Section03/>
                             </>
        } 

         
        

     
     
        

    </>
  );
}

export default App;
