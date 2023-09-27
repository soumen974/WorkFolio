import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import FormResume from './Components/FormResume';
import Footer from './Components/Footer';
import Home from './Home';


function App() {

  return (
    <>
    
    {/* <Router>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/FormResume" element={<FormResume />} />
      </Routes>

    </Router> */}


    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/FormResume" element={<FormResume />} />
    </Routes>
    </BrowserRouter>


    </>
    
    

    

  );
}



export default App;
