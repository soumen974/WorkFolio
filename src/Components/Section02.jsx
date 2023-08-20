import React from 'react'
import './Section02.css'
import NoStar from "./EmptyStarIcon";
import Star from "./FullStarIcon";
import RivewerBox from './RivewerBox';
import FirstReview from "./Images/rivewer-imgpng.png"


export default function Section02() {
  return (
    <>
    
    <div className="headder-sec-02">

          <div className="circle-vector">
          <svg width="193" height="379" viewBox="0 0 193 379" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-35.7788 2.56096C-7.35039 -1.47902 22.1199 1.23488 50.3177 10.4895C78.5154 19.7442 104.673 35.2877 126.736 55.8992C148.799 76.5108 166.167 101.629 177.476 129.282C188.785 156.935 193.726 186.369 191.913 215.274C190.1 244.178 181.581 271.765 167.025 295.868C152.469 319.972 132.273 339.936 108.023 354.192C83.7722 368.448 56.1277 376.609 27.26 378.032C-1.60769 379.456 -30.9125 374.105 -58.3531 362.398L-35.2931 298.552C-17.9855 305.936 0.498001 309.311 18.7057 308.413C36.9135 307.515 54.3498 302.368 69.6453 293.376C84.9408 284.385 97.6792 271.793 106.86 256.59C116.041 241.387 121.414 223.987 122.558 205.756C123.701 187.525 120.584 168.96 113.452 151.519C106.319 134.077 95.3642 118.234 81.4484 105.234C67.5325 92.2335 51.0341 82.4297 33.2489 76.5925C15.4637 70.7553 -3.1241 69.0436 -21.0548 71.5917L-35.7788 2.56096Z" fill="#F5F5F5"/>
          </svg>

          </div>
          <div className="head-tag-text">
          <h1>What people say about us</h1>
          <h4>Empowering Career Success: Real Stories from Our Users</h4>
          </div>
          
     </div>

    <div className="Section-02">

     
      
      <div className="blockOfSqures">
          <svg width="1429" height="475" viewBox="0 0 1429 475" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="253.86" y="51" width="115" height="438" rx="30" transform="rotate(35.4217 253.86 51)" fill="url(#paint0_diamond_290_13)"/>
    <rect x="651.464" y="12" width="115" height="438" rx="30" transform="rotate(34.0849 651.464 12)" fill="url(#paint1_diamond_290_13)"/>
    <rect x="1391.67" y="189" width="115" height="438" rx="30" transform="rotate(71.2151 1391.67 189)" fill="url(#paint2_diamond_290_13)"/>
    <rect x="462.051" width="135" height="468" rx="36" transform="rotate(35.242 462.051 0)" fill="url(#paint3_diamond_290_13)"/>
    <rect x="1024.43" y="59" width="135" height="468" rx="36" transform="rotate(56.9842 1024.43 59)" fill="url(#paint4_diamond_290_13)"/>
    <defs>
    <radialGradient id="paint0_diamond_290_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350.682 301.733) rotate(133.61) scale(294.35 618.675)">
    <stop stopColor="#FFD401" stopOpacity="0"/>
    <stop offset="0.603633" stopColor="#3C2DF5"/>
    <stop offset="0.674602" stopColor="#3C2DF5"/>
    </radialGradient>
    <radialGradient id="paint1_diamond_290_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(748.285 262.733) rotate(-43.593) scale(303.749 638.429)">
    <stop stopColor="#FFD401" stopOpacity="0"/>
    <stop offset="0.603633" stopColor="#3C2DF5"/>
    <stop offset="0.674602" stopColor="#3C2DF5"/>
    </radialGradient>
    <radialGradient id="paint2_diamond_290_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1488.49 439.733) rotate(-70.1135) scale(504.262 1059.87)">
    <stop stopColor="#3C2DF5"/>
    <stop offset="0.307129" stopColor="#FFD401" stopOpacity="0"/>
    <stop offset="0.484513" stopColor="#3C2DF5"/>
    </radialGradient>
    <radialGradient id="paint3_diamond_290_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(575.711 267.907) rotate(-88.4705) scale(445.54 437.763)">
    <stop stopColor="#FFD401"/>
    <stop offset="1" stopColor="#FFD401" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="paint4_diamond_290_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1138.09 326.907) rotate(-88.4705) scale(445.54 437.763)">
    <stop stopColor="#FFD401"/>
    <stop offset="1" stopColor="#FFD401" stopOpacity="0"/>
    </radialGradient>
    </defs>
          </svg>

      </div>
   
      <div className="content">
          <RivewerBox
            imageSrc={FirstReview}
            RiviewrName="paro"
            RiviewrPost="S/w Developer"
            RiviewText=" As someone who spent a long time unemployed in the past , I absolutely love this. Well done guys! I really hope this gets wildly popular, it will be valuable to so many people. "
            RivewRates={[

              <Star key={(1)}/>,
              <Star key={(2)} />,
              <Star  key={(3)}/>,
              <Star   key={(4)} />,
              <NoStar key={(5)}/>

            ]}
          />

           <RivewerBox
            imageSrc={FirstReview}
            RiviewrName="Sweta"
            RiviewrPost="S/w Developer"
            RiviewText=" As someone who spent a long time unemployed in the past , I absolutely love this. Well done guys! I really hope this gets wildly popular, it will be valuable to so many people. "
            RivewRates={[

              <Star key={(1)}/>,
              <Star key={(2)} />,
              <Star  key={(3)}/>,
              <Star   key={(4)} />,
              <NoStar key={(5)}/>

            ]}
          />

          <RivewerBox
            imageSrc={FirstReview}
            RiviewrName="Sweta"
            RiviewrPost="S/w Developer"
            RiviewText=" As someone who spent a long time unemployed in the past , I absolutely love this. Well done guys! I really hope this gets wildly popular, it will be valuable to so many people. "
            RivewRates={[

              <Star key={(1)}/>,
              <Star key={(2)} />,
              <Star  key={(3)}/>,
              <Star   key={(4)} />,
              <NoStar key={(5)}/>

            ]}
          />

      </div>

      
      

        

      

     
      

    </div>
    
    </>
  )
}
