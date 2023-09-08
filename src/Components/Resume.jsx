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
                              
                              },props) {
  return (
    <>
    <div className="ResumeWhole">
      <button onClick={props.GoBackForm} >Go Back</button>
     <div className="ResumeDetails">
     <h1>Hay Mr. {UserFirstName}  {UserLastName}</h1>
     
                                  {UserWorkPost}
                                  {UserSkills}
                                  {UserProjects}
                                  {UserEducation}
                                  {UserAchievement}
                                  {UserDomain}
                                  {UserObjectives}
                                  {UserMobile}
                                  {UserMail}
                                  {UserLinkedIn}
                                  {UserGitHub}
                                  {UserLocation}
                                  {UserInternships}
                                  {UserInterests}
                                  {UserLanguages}
     </div>
       
    </div>
    
    
    </>
  )
}
