import React from 'react'

export default function Resume(props) {
  return (
    <>
    <div className="ResumWhole">
      <button>Go Back</button>
     <div className="ResumeDetails">
      <h1>Your name is {props.UserFirstName}</h1>
     </div>
       
    </div>
    
    
    </>
  )
}
