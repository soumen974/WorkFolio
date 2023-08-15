import React, { useState } from 'react';
import './FormResume.css'

export default function FormResume() {

  
  return (
    <>
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
                          <h6>Upload Here</h6>
                          <abbr title='Upload Your Image Here'> 
                                  <svg width="243" height="242" viewBox="0 0 243 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <ellipse cx="121.469" cy="121" rx="121.469" ry="121" fill="url(#paint0_linear_255_2)" fillOpacity="0.76"/>
                                      <path d="M121.7 74.9465L163.707 110.669H79.6935L121.7 74.9465Z" fill="white"/>
                                      <rect x="98.0605" y="106.116" width="46.9291" height="38.5239" fill="white"/>
                                      <rect x="76.5112" y="157.598" width="90.7915" height="9.80608" fill="white"/>
                                      <defs>
                                      <linearGradient id="paint0_linear_255_2" x1="44.3318" y1="370.613" x2="217.226" y2="-41.6718" gradientUnits="userSpaceOnUse">
                                      <stop stopOpacity="0.52"/>
                                      <stop offset="0.629744" stopColor="#7D74E3" stopOpacity="0.58"/>
                                      </linearGradient>
                                      </defs>
                                  </svg>
                          </abbr>

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

            <div className="Rest-big-details">
              <h1>Skills</h1>
              <textarea/>

              <h1>Project Undertaken</h1>
              <textarea/>

              <h1>Education</h1>
              <textarea/>

              <h1>Achievement / Industry certification / Recognition</h1>
              <textarea/>

              <h1>Domain Expertise</h1>
              <textarea/>

             

            </div>
              

          </div> 
        </div>


        <div className="Form-02">
          <div className="Form-02_color-back">
              
            <div className="mx-obj-and-Link">

                <div className="objectives">
                    <h1>Objectives</h1>
                    <textarea/>
                  </div>

                  <div className="Contacts-Links">
                      <h1>Contacts /Links</h1> 

                      <div className="link-inputs">

                          <input/>
                          <input/>
                          <input/>
                          <input/>
                          <input/>

                      </div>
                  
                  </div>

            </div>
            
            <div className="intern-dv">
              <h1>Internship</h1>
              <textarea/>
            </div>

            <div className="mx-intrst-and-lang">
                <div className="interest">
                  <h1>Interest</h1>
                  <textarea/>
                </div>
                
                <div className="language">
                  <h1>Language </h1>
                  <textarea/>
                </div>
              
            </div>

            <div className="download-resume-dv"></div>
          
          </div>
        </div>

      </div>
    </>
  )
}
