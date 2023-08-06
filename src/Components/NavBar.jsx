import React from 'react'
import './navBar.css'
import CancelIcon from "./cancelSVG";
export default function NavBar() {
  return (
    <>
    <section className="sec-1">
        <nav>
            <div className="navElements">
                <div className="logo" > <span className="logo_icon">W</span><h3>WorkFolio</h3></div>
                <div className="LinkComponents">
                    <ul>
                        <li>Templates</li>
                        <li>Examples</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Help</li>
                    </ul>
                </div>

                <div className="user_click_buttons">
                    <div className="logInButton"> Login</div>
                    <div className="Create_cv">Create Your Resume</div>
                </div>
                <CancelIcon/>
                 {/* this is the cancel button will be appear when media query will fire   */}
            </div>
        </nav>

        {/* this content to show for mobile/tablet device not for desktos */}
        <div className="openMenuSlider">
            <div className="slideBody">

            

                    <div className="closeMenu">
                                    <svg width="27" height="21" viewBox="0 0 27 21"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8184 0.0738497L1.08324 0.004164C0.530963 0.00186428 0.0813877 0.447713 0.079088 0.999993L0.0736885 2.29668C0.0713888 2.84896 0.517236 3.29854 1.06952 3.30084L17.8047 3.37052C18.3569 3.37282 18.8065 2.92698 18.8088 2.3747L18.8142 1.07801C18.8165 0.525725 18.3707 0.0761494 17.8184 0.0738497Z" fill="black"/>
                        <path d="M13.4503 8.40741L1.04845 8.35577C0.496173 8.35347 0.0465976 8.79932 0.0442979 9.3516L0.0388985 10.6483C0.0365987 11.2006 0.482447 11.6501 1.03473 11.6524L13.4366 11.7041C13.9889 11.7064 14.4384 11.2605 14.4407 10.7083L14.4461 9.41157C14.4484 8.85929 14.0026 8.40971 13.4503 8.40741Z" fill="black"/>
                        <path d="M17.7494 16.6305L1.01427 16.5608C0.461994 16.5585 0.0124179 17.0044 0.0101182 17.5566L0.00439746 18.9305C0.00210411 19.4812 0.445576 19.9302 0.996316 19.9346L17.7312 20.0697C18.285 20.0742 18.737 19.6277 18.7393 19.0739L18.7453 17.6346C18.7476 17.0824 18.3017 16.6328 17.7494 16.6305Z" fill="black"/>
                        <path d="M23.2673 2.58908L17.3113 9.37887C16.9824 9.75382 16.9801 10.3138 17.3058 10.6915L23.205 17.5306C23.6058 17.9952 24.3265 17.9927 24.724 17.5254L25.4652 16.654C25.7832 16.2802 25.783 15.731 25.4648 15.3575L21.5007 10.7043C21.1802 10.3282 21.1825 9.77442 21.5061 9.40099L25.5088 4.78091C25.8301 4.41007 25.8349 3.8609 25.5201 3.48453L24.7861 2.60695C24.3925 2.13636 23.6718 2.12788 23.2673 2.58908Z" fill="black"/>
                        </svg>

                    </div>
                    <div className="user_click_button_mobile">
                        <div className="resume_crete_button-mobile">Create Your Resume</div>
                        <div className="LoginButton-mobile">Login</div>
                    </div>
                    <div className="nav_links_mobile">
                            <ul>
                                <li>Templates</li>
                                <li>Examples</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>Help</li>
                            </ul>
                    </div>
                    
            </div>
        </div>
    </section></>
  )
}
