import './App.css';
import React, { useState, useEffect } from 'react';

import NavBar from "./Components/NavBar";
import Section01 from './Components/Section01';
import Section02 from './Components/Section02';
import FormResume from './Components/FormResume';
import Section03 from './Components/Section03';

function App() {
  return (
    <>
        <NavBar/>
        {/* <Section01/>
        <Section02 />
        <Section03/> */}

        <FormResume/>

    </>
  );
}

export default App;
