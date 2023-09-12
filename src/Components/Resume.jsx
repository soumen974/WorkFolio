import React from 'react'

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
                                  
                              
                              },props) {
  return (
    <>
    <div className="ResumeWhole">
      <button onClick={FormDisplay} >Go Back</button>
     <div className="ResumeDetails">
     <h1>Hai Mr. {UserFirstName}  {UserLastName}</h1>
                                   <br/>
                                  <img src={props.UserImage} alt="Selected" />

     
                                  {UserWorkPost}<br/>
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
