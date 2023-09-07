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
                              
                              }) {
  return (
    <>
    <div className="ResumWhole">
      <button>Go Back</button>
     <div className="ResumeDetails">
     <h1>Your First name:  {UserFirstName}</h1>
     <h1>Your First name:  {UserLastName}</h1>
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
