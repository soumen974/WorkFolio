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
import Connector from './Connector';
// import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <>
    

    <Router>
      {/* Commenting Connector component as it's not present in your original code */}
      <Connector />
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>

      <Routes>
        
        <Route path="/ FormResume" element={<FormResume/>} />

       
      </Routes>
    </Router>

    </>
    
    

    

  );
}



export default App;
