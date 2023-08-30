import React from 'react'
import "./Section03.css"
import AeroplinVector from "./Images/aeroPlainVector.svg"
import TemplBack from "./Images/Templt_back.svg";
import MidTemplate from "./Images/temp-1.png";
import LeftTemplate from "./Images/temp-left-2.png";
import RightTemplate from "./Images/temp-right-3.png";
export default function Section03() {
  return (
    <>
    <div className="Section03">s
    
       <div className="Templates_head">

        <div className="areroPlainVector">
            <img src={AeroplinVector} alt="" />
        </div>
        <h1>Templates</h1>
       </div>

        <div className="back_templetes">
            <img src={TemplBack} alt="" />
            <div className="showTemplates">
                <div className="templates">
                <img src={LeftTemplate} alt="" />
                <img src={MidTemplate} alt="" />
                <img src={RightTemplate} alt="" />
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}
