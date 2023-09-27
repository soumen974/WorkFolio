import React from 'react'
import Section01 from './Components/Section01'
import Section02 from './Components/Section02'
import Section03 from './Components/Section03'
import GoToTop from './Components/GoToTop';
import Footer from './Components/Footer';
import NavBar from "./Components/NavBar";


export default function Home() {
  document.title = 'WorkFolios ';

  return (
    <>
    <div>
    <NavBar />

      <Section01/>
      <Section02/>
      <Section03/>
      <GoToTop/>
    </div>
    
    
    </>

  )
}
