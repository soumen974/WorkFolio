import './App.css';
import React, { useState, useEffect } from 'react';

import NavBar from "./Components/NavBar";
import Section01 from './Components/Section01';
import Section02 from './Components/Section02';
import FormResume from './Components/FormResume';
import Section03 from './Components/Section03';
import Resume from './Components/Resume';

function App() {

  const [displayForm,setdisplayForm]=useState(false);
  const [displayRestBody,setdisplayRestBody]=useState(true);

    // user details

    const[UserFirstName,setUserFirstName]=useState('')
    
    const[UserLastName,setUserLastName]=useState()
    const[UserWorkPost,setUserWorkPost]=useState()
    const[UserSkills,setUserSkills]=useState()
    const[UserProjects,setUserProjects]=useState()
    const[UserEducation,setUserEducation]=useState()
    const[UserAchievement,setUserAchievement]=useState()
    const[UserDomain,setUserDomain]=useState()
    const[UserObjectives,setUserObjectives]=useState()
    const[UserMobile,setUserMobile]=useState()
    const[UserMail,setUserMail]=useState()
    const[UserLinkedIn,setUserLinkedIn]=useState()
    const[UserGitHub,setUserGitHub]=useState()
    const[UserLocation,setUserLocation]=useState()
    const[UserInternships,setUserInternships]=useState()
    const[UserInterests,setUserInterests]=useState()
    const[UserLanguages,setUserLanguages]=useState()




  const RivewResume = (input) => {
    setUserFirstName(input);

    setShowResume(true);
    setdisplayForm(false )
    setdisplayRestBody(false)
    setOpenMenuSlider(false);
    setOffNav(false)
  };
    
  
  
  function FormDisplay(){
    setdisplayForm(true)
    setdisplayRestBody(false)
    setOpenMenuSlider(false);
    setShowResume(false);


  }

  function GotoHome(){
    setdisplayForm(false )
    setdisplayRestBody(true)
    setOpenMenuSlider(false);
    setShowResume(false);

    
  }

  const [OpenMenuSlider, setOpenMenuSlider] = useState(false);
   

  function MenuSlideShow(){
      setOpenMenuSlider(true);
      
  }

  function CloseMenuSlider(event) { 
      if (event.target.classList.contains('closeMenuSVG')) {
          setOpenMenuSlider(false);

      }
    }

  const [ShowResume,setShowResume]=useState(false);
  const[OffNav,setOffNav]=useState(true);

  // function RivewResume(){
  //   setShowResume(true);
  //   setdisplayForm(false )
  //   setdisplayRestBody(false)
  //   setOpenMenuSlider(false);
  //   setOffNav(false)
  // }

  


  
  return (
    <>

         {/*--------------------- a navbar is here ---------------------- */}
        {
          OffNav &&
          <NavBar 
          FormDisplay={FormDisplay} 
          GotoHome={GotoHome} 
          MenuSlideShow={MenuSlideShow} 
          CloseMenuSlider={CloseMenuSlider}
           OpenMenuSlider={OpenMenuSlider}/>


        }
               
        {/*---------- it is the things which will be displayed  when clicked on the create your resume button--------- */}


        { displayForm  &&  <>  <FormResume onInputSubmit={RivewResume} />  </> }
             

        {/* ----------it is the things which will be displayed off when clicked on the create your resume button---------- */}

        { displayRestBody &&  <>
                                <Section01 FormDisplay={FormDisplay}/>
                                <Section02 />
                                <Section03/>
                             </>
        } 

         
         {  ShowResume &&  <Resume UserFirstName={UserFirstName}  /> }
         
        

     
     
        

    </>
  );
}

export default App;
