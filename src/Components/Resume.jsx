import React from 'react'

export default function Resume({UserFirstName,UserLastName}) {
  return (
    <>
    <div className="ResumWhole">
      <button>Go Back</button>
     <div className="ResumeDetails">
     <h1>Your First name:  {UserFirstName}</h1>
     <h1>Your First name:  {UserLastName}</h1>
     </div>
       
    </div>
    
    
    </>
  )
}
