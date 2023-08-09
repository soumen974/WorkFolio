import React from 'react'
import './Section01.css'
import Upperimage from "./Images/up_img.jpg";

export default function Section01() {
  return (
    <>
    <div className="section-01">
        <div className="UpperVectorHead">

                                <svg  viewBox="0 0 1522 255" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 10.9928V161.798C27.0592 140.623 60.687 120.424 99.1866 102.271C144.951 80.6928 196.439 62.5509 249.877 49.1755C303.315 35.8001 357.349 27.5301 408.018 24.9717C458.686 22.4134 504.705 25.6315 542.702 34.3902C580.699 43.1489 609.71 57.2262 627.609 75.5902C636.486 84.6968 642.518 94.7432 645.649 105.531C666.118 153.434 774.086 242.032 1067.68 253.789C1361.18 265.542 1487.15 103.302 1517.72 10.9928H0Z" fill="url(#paint0_linear_124_30)"/>
                        <defs>
                            <linearGradient id="paint0_linear_124_30" x1="746.891" y1="14.9863" x2="746.891" y2="258.388" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7D74E3" stopOpacity="0.76"/>
                            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                        </svg>
        </div>

        <div className="landing_page_content">

                <div className="left_landing_content">
                    <h2>Boost Your chances of Landing that dream job .</h2>
                    
                </div>

                <div className="right_landing_content">
                    <img src={Upperimage} alt="" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="156" height="148" viewBox="0 0 156 148" fill="none">
                    <rect width="129.959" height="119.479" rx="4" transform="matrix(0.968454 0.249194 -0.252267 0.967658 30.1406 0)" fill="url(#paint0_linear_58_4)"/>
                    <rect width="106.724" height="6.48486" transform="matrix(0.968454 0.249194 -0.252267 0.967658 36.0389 20.0358)" fill="#EDBA00"/>
                    <rect width="100.202" height="6.08857" transform="matrix(0.968454 0.249194 -0.252267 0.967658 29.4142 55.9825)" fill="#EDBA00"/>
                    <rect width="83.6008" height="7.0744" transform="matrix(0.968454 0.249194 -0.252267 0.967658 37.3739 39.4824)" fill="#EDBA00"/>
                    <defs>
                        <linearGradient id="paint0_linear_58_4" x1="64.9795" y1="0" x2="64.9795" y2="119.479" gradientUnits="userSpaceOnUse">
                        <stop offset="0.841621" stopColor="#FFD400"/>
                        <stop offset="1" stopColor="#BA9B00" stopOpacity="0.56"/>
                        </linearGradient>
                    </defs>
                    </svg>
                </div>

        </div>

        <div className="Down_things">
        
                    <div className="landing_ad-talk"> Create Your CV using our wisely designed themes and increase the chances of getting your dream job .</div>
                        <button>Create Resume Now</button>
                        <div className="starsRates"></div>
                        <div className="Rating_talk"></div>
                    </div>
     

    </div>

    
    
    </>
  )
}
