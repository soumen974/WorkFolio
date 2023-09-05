import React from 'react'

export default function Resume({ userInput }) {
  return (
    <>
    <div className="ResumWhole">
      <button>Go Back</button>
     <div className="ResumeDetails">
      <h1>Your name is : { userInput }</h1>
     </div>
       
    </div>
    
    
    </>
  )
}
