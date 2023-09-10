import React from 'react'
import './Footer.css'

export default function Footer(props) {
  return (
    <>
    <div className="wholeFoot">
        <div className="backFoot">
            <div className="footContent">
                <div className="logoAtFooter">
                <a href='#'> <div className="logo"  onClick={props.GotoHome}> <span className="logo_icon"><abbr title="WorkFolio Home">W</abbr></span><h3>WorkFolio</h3></div></a>
                 <abbr title='LOGO'>  <div className="BigLogoAtFoot">W</div></abbr>
                
                </div>
                <div className="midFootContent">
                
                </div>

                <div className="rightFootContent">
                
                </div>
            </div>
        </div>
        <h6 >WorkFolio copyrights @2023 </h6>

    </div>
     </>
  )
}
