import React, { useState } from 'react';
import { useEffect } from 'react';
import './FormResume.css'
import ResumeFileIcon from "./Images/resume-vector.svg";
import ImageInput from './ImageInput';
import { Link } from 'react-router-dom';
import Resume from './Resume';
import GoToTop from './GoToTop';


export default function FormResume({ 
                                      handleLastName,
                                      handleWorkPost,
                                      handleSkills,
                                      handleProjects,
                                      handleEducation,
                                      handleAchievement,
                                      handleDomain,
                                      handleObjectives,
                                      handleMobile,
                                      handleMail,
                                      handleLinkedIn,
                                      handleGitHub,
                                      handleLocation,
                                      handleInternships,
                                      handleInterest,
                                      handleLanguage,
                                      UserImage,

                              
                                      ...props }) {

  // add page title

  document.title = 'WorkFolios [ Resume Form] ';



  // user details

  const[UserFirstName,setUserFirstName]=useState('')
  const[UserLastName,setUserLastName]=useState('')
  const[UserWorkPost,setUserWorkPost]=useState('')
  const[UserSkills,setUserSkills]=useState('')
  const[UserProjects,setUserProjects]=useState('')
  const[UserEducation,setUserEducation]=useState('')
  const[UserAchievement,setUserAchievement]=useState('')  
  const[UserDomain,setUserDomain]=useState('')
  const[UserObjectives,setUserObjectives]=useState('')
  const[UserMobile,setUserMobile]=useState('')
  const[UserMail,setUserMail]=useState('')
  const[UserLinkedIn,setUserLinkedIn]=useState('')
  const[UserGitHub,setUserGitHub]=useState('')
  const[UserLocation,setUserLocation]=useState('')
  const[UserInternships,setUserInternships]=useState('')
  const[UserInterests,setUserInterests]=useState('')
  const[UserLanguages,setUserLanguages]=useState('')
  


 

 


  const handleInputFirstName = (e) => {
    setUserFirstName(e.target.value);

  };

  const handleInputLastName = (e) => {
    setUserLastName(e.target.value);
  };

  const handleInputWorkPost = (e) => {
    setUserWorkPost(e.target.value);
  };

  const handleInputSkills = (e) => {
    setUserSkills(e.target.value);
  };

  const handleInputProjects = (e) => {
    setUserProjects(e.target.value);
  };
  
  const handleInputEducation = (e) => {
    setUserEducation(e.target.value);
  };

  const handleInputAchievement = (e) => {
    setUserAchievement(e.target.value);
  };

  const handleInputDomain = (e) => {
    setUserDomain(e.target.value);
  };

  const handleInputObjectives = (e) => {
    setUserObjectives(e.target.value);
  };

  const handleInputMobile = (e) => {
    setUserMobile(e.target.value);
  };

  const handleInputMail = (e) => {
    setUserMail(e.target.value);
  };

  const handleInputLinkedIn = (e) => {
    setUserLinkedIn(e.target.value);
  };

  const handleInputGitHub = (e) => {
    setUserGitHub(e.target.value);
  };
  
  const handleInputLocation = (e) => {
    setUserLocation(e.target.value);
  };

  const handleInputInternships = (e) => {
    setUserInternships(e.target.value);
  };

  const handleInputInterest = (e) => {
    setUserInterests(e.target.value);
  };
 
  const handleInputLanguage = (e) => {
    setUserLanguages(e.target.value);
  };


  const  defaultDetails=()=>{
    setUserMobile("9876543210")
    setUserMail("WorkFolio@gmail.com")
    setUserLinkedIn("https://workFolio/linkedIn.com")
    setUserGitHub('https://workFolio.Github.com')
    setUserLocation("Delhi,India")

    setUserSkills(
      " Technical : C, JAVA, HTML, CSS, JS, REACT.JS, MYSQL,ANDROID, GIT & GITHUB, FIGMA.");


      setUserProjects(
      " Cube E-commers website frontend  : This is a Rubik’s cube selling website , that helps buyers to get their best handy Rubik’s cube ");
      

      setUserEducation(
      " B.Tech | Centurion University and Technology |(year-year)    Class XII (PCM) | ABC School |(year)  Class X | XYZ  School |(year)");
      
      

     
      setUserAchievement("Whats your achivements !");
      setUserDomain("Software Technology ");

      setUserObjectives("Passionate Frontend Developer and UI/UX Designer eager to blend creativity and technical skills. Seeking opportunities to create captivating user experiences by merging design expertise with cutting-edge development.")

      setUserLanguages(
      "Bengali Hindi English")
    
    

    // console.log("Default massage added", Math.random())
  }

  const RemovedefaultDetails =()=>{


    setUserSkills("");
    setUserProjects("");
    setUserEducation("");
    setUserAchievement("");
    setUserDomain("");
    setUserObjectives("");
    setUserMobile("");
    setUserMail("");
    setUserLinkedIn("");
    setUserGitHub("");
    setUserLocation("");
    setUserInternships("");
    setUserInterests("");
    setUserLanguages("");

  }
  

  const [useShowTheForm,setuseShowTheForm]=useState(true);
  const [useoNTheResume,setuseoNTheResume]=useState(false);
  
function ResumeShow(){
  setuseShowTheForm(false);
  setuseoNTheResume(true)
}

function BackToform(){
  setuseShowTheForm(true);
  setuseoNTheResume(false);
}

const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };



  useEffect(() => {
    const confirmExit = (e) => {
      e.preventDefault();
      e.returnValue = ''; // This line is needed for older browsers

      // Display a confirmation dialog when the user tries to close the tab
      const confirmationMessage = 'Are you sure you want to leave this page?';
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    // Add the event listener when the component mounts
    window.addEventListener('beforeunload', confirmExit);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', confirmExit);
    };
  }, []);




  return (
    <>

   
   {
    useShowTheForm &&

    <div className="demoused">

  
       <div className="FormBody">

          <div className="FormHeadder">
                <svg width="905" height="87" viewBox="0 0 905 87" fill="none">
                    <path
                      d="M489.704 38.763C518.035 29.663 552.537 0 552.537 0H0.000183105C0.000183105 0 25.5566 17.4893 43.3853 26.8359C113.23 63.4516 166.302 83.6149 246.847 70.7105C293.864 63.1777 248.334 41.6176 295.447 34.5345C346.366 26.8792 441.31 54.3066 489.704 38.763Z"
                      fill="#39B5FF"
                    />
                    <g style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M348.316 48.7025C273.35 66.3053 157.572 0 157.572 0H905C905 0 872.521 81.5122 821.549 86.779C775.919 91.4939 765.051 19.0382 720.994 34.5345C676.936 50.0307 663.908 15.2348 626.658 19.0382C579.59 23.8442 566.722 80.3862 520.919 69.9545C495.411 64.145 490.915 45.0005 467.531 34.5345C448.704 26.1079 437.472 19.1344 416.217 19.0382C386.434 18.9035 377.035 41.9591 348.316 48.7025Z"
                        fill="#1250FF"
                      />
                    </g>
                    <g style={{ mixBlendMode: "multiply" }}>
                      <path
                        d="M302.185 63.3132C238.871 80.2878 149.278 0 149.278 0H692.486C692.486 0 665.509 69.1464 623.548 81.466C573.126 96.2697 550.892 28.9652 498.113 35.42C468.443 39.0486 458.429 66.269 428.657 63.3132C398.354 60.3048 398.495 22.2877 368.013 21.252C335.934 20.1621 332.815 55.1012 302.185 63.3132Z"
                        fill="#272C5D"
                      />
                    </g>
                </svg>

              <h1>Give your Details</h1>
                  <h3>Trust me, I am not <abbr title=" Mark Zuckerberg ">ZUCK</abbr>.</h3>
          </div>


          <div className="Form-01">
            <div className="Form-01_color-back">

              <div className="Inital-details">
                      <div className="Uplodeimg">
                            
                                   <ImageInput onImageSelect={handleImageSelect} />
                          

                      </div>

                      
                      <div className="Initial-details-inputs">
                          <div className="FirstNameGet">
                            <input value={UserFirstName} onChange={handleInputFirstName} placeholder='First Name'   />
                          </div>


                          <div className="lastNameGet">
                            <input value={UserLastName} onChange={handleInputLastName} placeholder='Last Name'/>
                          </div>

                          <div className="WorkPost">
                            <input value={UserWorkPost} onChange={handleInputWorkPost} placeholder='Work Post (ex-Software Engineer)'/>
                          </div>

                      </div>
                    
              </div>
              
              <div className="default-massaging-passing">
                  <button onClick={defaultDetails}>click to Fill this fom byDefault</button>
                  <button onClick={RemovedefaultDetails}>click to remove byDefault text</button>

              </div>

              <div className="Rest-big-details">
                <h1>Skills</h1>
                <textarea value={UserSkills} onChange={handleInputSkills} />

                <h1>Project Undertaken</h1>
                <textarea value={UserProjects} onChange={handleInputProjects} />

                <h1>Education</h1>
                <textarea value={UserEducation} onChange={handleInputEducation}  />

                <h1>Achievement / Industry certification / Recognition</h1>
                <textarea value={UserAchievement} onChange={handleInputAchievement} />

                <h1>Domain Expertise</h1>
                <textarea value={UserDomain} onChange={handleInputDomain} />

              

              </div>
                

            </div> 
          </div>


          <div className="Form-02">
            <div className="Form-02_color-back">
                
              <div className="mx-obj-and-Link">

                  <div className="objectives">
                      <h1>Objectives</h1>
                      <textarea value={UserObjectives} onChange={handleInputObjectives}  />
                    </div>

                    <div className="Contacts-Links">
                        <h1>Contacts /Links</h1> 

                        <div className="link-inputs">

                            <input value={UserMobile} onChange={handleInputMobile} placeholder='Mobile no' />
                            <input value={UserMail} onChange={handleInputMail} placeholder='Mail id'/>
                            <input value={UserLinkedIn} onChange={handleInputLinkedIn} placeholder='Linkedin profile link' />
                            <input value={UserGitHub} placeholder='Github Link' onChange={handleInputGitHub} />
                            <input value={UserLocation} placeholder='Location' onChange={handleInputLocation}  />

                        </div>
                    
                    </div>

              </div>
              
              <div className="intern-dv">
                <h1>Internship</h1>
                <textarea value={UserInternships} onChange={handleInputInternships}/>
              </div>

              <div className="mx-intrst-and-lang">
                  <div className="interest">
                    <h1>Interest</h1>
                    <textarea value={UserInterests} onChange={handleInputInterest}/>
                  </div>
                  
                  <div className="language">
                    <h1>Language </h1>
                    <textarea  value={UserLanguages} onChange={handleInputLanguage}  />
                  </div>
                
              </div>

              <div className="">
              <a href=" #" style={{ textDecoration: "none" ,color:"black" }}> 
                <div className="resumeshoing" >
                  <button onClick={ResumeShow} >
                  <h2>Review Resume  </h2>
                  <img src={ResumeFileIcon} alt='reume download'/>

                  </button>
                
                </div>
              </a>
                
              </div>
            
            </div>
          </div>

          <GoToTop/>


        </div>
    </div>


   }

   {
    useoNTheResume&&

    <>

<br />
<br />
<br />
<br />
    
    <button className='gobackResumeToForm' onClick={BackToform} >Go Back</button>

    <Resume UserFirstName={UserFirstName}
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
                                  selectedImage={selectedImage}

                                   /> 

    </>
 

   }
     
        
    </>
  )
}
