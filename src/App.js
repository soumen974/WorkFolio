import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import FormResume from './Components/FormResume';
import Footer from './Components/Footer';
import Home from './Home';


function App() {

  return (
    <>
    
    <Router>
      <NavBar />

      <Routes>
        <Route path="/FormResume" element={<FormResume />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>


    </>
    
    

    

  );
}



export default App;
