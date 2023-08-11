import './App.css';
import React, { useState, useEffect } from 'react';

import NavBar from "./Components/NavBar";
import Section01 from './Components/Section01';
import Section02 from './Components/Section02';

function App() {
  return (
    <>
        <NavBar/>
        <Section01/>
        {/* <Section02/> */}
    </>
  );
}

export default App;
