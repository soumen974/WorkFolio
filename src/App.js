import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Section01 from './Components/Section01';
import Section02 from './Components/Section02';
import FormResume from './Components/FormResume';
import Section03 from './Components/Section03';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
// import Connector from './Connector';
import Home from './Home';
// import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <>
    

    <Router>

      <NavBar />
=      
      <Routes> 
        <Route path="/FormResume" element={<FormResume/>} />
      </Routes> 

      <Routes> 
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>

    </>
    
    

    

  );
}



export default App;
