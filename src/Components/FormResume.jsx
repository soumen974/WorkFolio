import React from 'react'
import './FormResume.css'

export default function FormResume() {

  
  return (
    <>
      <div className="FormBody">

        <div className="FormHeadder">
            <h1>Give your Details</h1>
                <h3>Trust me, I am not <abbr title=" Mark Zuckerberg ">ZUCK</abbr>.</h3>
        </div>


        <div className="Form-01">
          <div className="Form-01_color-back">

            <div className="Inital-details">
              <div className="Uplodeimg">
                          <abbr title='Upload Your Image Here'> 
                                     <svg  xmlns="http://www.w3.org/2000/svg" width="243" height="242" viewBox="0 0 243 242" fill="none">
                                            <ellipse cx="121.469" cy="121" rx="121.469" ry="121" fill="url(#paint0_linear_255_2)" fillOpacity="0.76"/>
                                            <path d="M121.7 74.9465L163.707 110.669H79.6938L121.7 74.9465Z" fill="white"/>
                                            <rect x="98.061" y="106.116" width="46.9291" height="38.5239" fill="white"/>
                                            <rect x="76.5112" y="157.598" width="90.7915" height="9.80608" fill="white"/>
                                            <defs>
                                              <linearGradient id="paint0_linear_255_2" x1="44.3318" y1="370.613" x2="217.226" y2="-41.6718" gradientUnits="userSpaceOnUse">
                                                <stop stopOpacity="0.52"/>
                                                <stop offset="0.629744" stopColor="#7D74E3" stopOpacity="0.58"/>
                                              </linearGradient>
                                            </defs>
                                       </svg>
                            </abbr>            

                      <h6>Upload your Image </h6>
               </div>

               <div className="Initial-details-inputs">
                  <div className="FirstNameGet">
                    <input placeholder='First Name'/>
                  </div>

                  <div className="lastNameGet">
                    <input placeholder='Last Name'/>
                  </div>

                  <div className="WorkPost">
                    <input placeholder='Work Post (ex-Software Engineer)'/>
                  </div>

               </div>

               


            </div>
              

          </div>
           

        </div>

        <div className="Form-02"></div>

      </div>
    </>
  )
}
