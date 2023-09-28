import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, Outlet } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import FormResume from './Components/FormResume';
import Footer from './Components/Footer';
import Home from './Home';
import GoToTop from "./Components/GoToTop";


function App() {

  return (
    <>
    
      <NavBar />

      <Outlet/>

      <Footer/>



   


    </>
    
    

    

  );
}



export default App;
