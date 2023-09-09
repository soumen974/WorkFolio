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
    
    const[UserLastName,setUserLastName]=useState('')
    const[UserWorkPost,setUserWorkPost]=useState('')
    const[UserSkills,setUserSkills]=useState('')
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

  
 
  const handleLastName = (input) => { 
    setUserLastName(input);

  }
    
 
  const handleWorkPost = (e) => {
    setUserWorkPost(e);
  };

  const handleSkills = (e) => {
    setUserSkills(e);
  };

  const handleProjects = (e) => {
    setUserProjects(e);
  };
  
  const handleEducation = (e) => {
    setUserEducation(e);
  };

  const handleAchievement = (e) => {
    setUserAchievement(e);
  };

  const handleDomain = (e) => {
    setUserDomain(e);
  };

  const handleObjectives = (e) => {
    setUserObjectives(e);
  };

  const handleMobile = (e) => {
    setUserMobile(e);
  };

  const handleMail = (e) => {
    setUserMail(e);
  };

  const handleLinkedIn = (e) => {
    setUserLinkedIn(e);
  };

  const handleGitHub = (e) => {
    setUserGitHub(e);
  };
  
  const handleLocation = (e) => {
    setUserLocation(e);
  };

  const handleInternships = (e) => {
    setUserInternships(e);
  };

  const handleInterest = (e) => {
    setUserInterests(e);
  };
 
  const handleLanguage = (e) => {
    setUserLanguages(e);
  };
  
  
  function FormDisplay(){
    setdisplayForm(true)
    setdisplayRestBody(false)
    setOpenMenuSlider(false);
    setShowResume(false);
    setOffNav(true)

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


        { displayForm  &&  <>  <FormResume RivewResume={RivewResume} 
                                            handleLastName={handleLastName}
                                            handleWorkPost={handleWorkPost}
                                            handleSkills={handleSkills}
                                            handleProjects={handleProjects}
                                            handleEducation={handleEducation}
                                            handleAchievement={handleAchievement}
                                            handleDomain={handleDomain}
                                            handleObjectives={handleObjectives}
                                            handleMobile={handleMobile}
                                            handleMail={handleMail}
                                            handleLinkedIn={handleLinkedIn}
                                            handleGitHub={handleGitHub}
                                            handleLocation={handleLocation}
                                            handleInternships={handleInternships}
                                            handleInterest={handleInterest}
                                            handleLanguage={handleLanguage}

                                            
                                            
                                            />  </> }
             

        {/* ----------it is the things which will be displayed off when clicked on the create your resume button---------- */}

        { displayRestBody &&  <>
                                <Section01 FormDisplay={FormDisplay}/>
                                <Section02 />
                                <Section03/>
                             </>
        } 

         
         {  ShowResume &&  <Resume UserFirstName={UserFirstName}
                                   UserLastName={UserLastName}  
                                   UserWorkPost={UserWorkPost}
                                  UserSkills={UserSkills}
                                  UserProjects={UserProjects}
                                  UserEducation={UserEducation}
                                  UserAchievement={UserAchievement}
                                  UserDomain={UserDomain}
                                  UserObjectives={UserObjectives}
                                  UserMobile={UserMobile}
                                  UserMail={UserMail}
                                  UserLinkedIn={UserLinkedIn}
                                  UserGitHub={UserGitHub}
                                  UserLocation={UserLocation}
                                  UserInternships={UserInternships}
                                  UserInterests={UserInterests}
                                  UserLanguages={UserLanguages}
                                  
                                  FormDisplay={FormDisplay}

                                   /> }
         
        

     
     
        

    </>
  );
}

export default App;
