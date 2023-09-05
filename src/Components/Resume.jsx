import React from 'react'

export default function Resume({UserFirstName}) {
  return (
    <>
    <div className="ResumWhole">
      <button>Go Back</button>
     <div className="ResumeDetails">
      <h1>Your name is {UserFirstName}</h1>
     </div>
       
    </div>
    
    
    </>
  )
}
