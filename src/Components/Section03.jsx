import React from 'react'
import "./Section03.css"
import AeroplinVector from "./Images/aeroPlainVector.svg"
export default function Section03() {
  return (
    <>
    <div className="Section03">
    
       <div className="Templete_head">

        <div className="areroPlainVector">
            <img src={AeroplinVector} alt="" />
        </div>
        <h1>Templates</h1>
       </div>

        <div className="back_templetes">
            <div className="showTemplets">
                <div className="templet"></div>
            </div>
        </div>

    </div>
    
    </>
  )
}
