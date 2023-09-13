import React from 'react'
import './Resume.css'

export default function Resume({UserFirstName,
                                UserLastName,
                                 UserWorkPost,
                                  UserSkills,
                                  UserProjects,
                                  UserEducation,
                                  UserAchievement,
                                  UserDomain,
                                  UserObjectives,
                                  UserMobile,
                                  UserMail,
                                  UserLinkedIn,
                                  UserGitHub,
                                  UserLocation,
                                  UserInternships,
                                  UserInterests,
                                  UserLanguages,
                                  FormDisplay,
                                  imageSrc

                              
                              },props) {
  return (
    <>
    <div className="ResumeWhole">
      <button onClick={FormDisplay} >Go Back</button>

     <div className="ResumeDetails">
      <div className="ResumeHead">
        <div className="imageleft"></div>
        <div className="Name-post">
        <h1> {UserFirstName}  </h1>
        <h1> {UserLastName}</h1>
        <h4>{UserWorkPost}</h4>

        </div>
      </div>
                                   
                                  
        
      
     
                                  <br/>
                                  {UserSkills}<br/>
                                  {UserProjects}<br/>
                                  {UserEducation}<br/>
                                  {UserAchievement}<br/>
                                  {UserDomain}<br/>
                                  {UserObjectives}<br/>
                                  {UserMobile}<br/>
                                  {UserMail}<br/>
                                  {UserLinkedIn}<br/>
                                  {UserGitHub}<br/>
                                  {UserLocation}<br/>
                                  {UserInternships}<br/>
                                  {UserInterests}<br/>
                                  {UserLanguages}<br/>
     </div>
       
    </div>
    
    
    </>
  )
}
