import React from 'react'
import './Section02.css'
import NoStar from "./EmptyStarIcon";
import Star from "./FullStarIcon";

export default function RivewerBox(props) {
  return (
    <>
    
      <div className="Review-box-model">
          <div className="head-box-model">
            <div className="review-er-details">
              <div className="review-er-image">
                <img src={props.imageSrc} alt="1ft reviewer" />
              </div>
              <div className="review-er-name-post">
                <h1>{props.RiviewrName}</h1>
                <h6>{props.RiviewrPost}</h6>
              </div>
            </div>
            <div className="review-er-rating">
              {/* <NoStar/><Star/><Star/><Star/><Star/> */}
              {props.RivewRates}

              
            </div>
          </div>
          <hr/>
          <div className="riview-text">{props.RiviewText}</div>
        </div>

      
    </>
  )
}
