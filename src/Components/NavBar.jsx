import React, { useState, useEffect } from 'react';
import './navBar.css'
export default function NavBar(props) {

    const [OpenMenuSlider, setOpenMenuSlider] = useState(false);
   

    function MenuSlideShow(){
        setOpenMenuSlider(true);
        
    }

    function CloseMenuSlider(event) { 
        if (event.target.classList.contains('closeMenuSVG')) {
            setOpenMenuSlider(false);

        }
      }

   

  return (
    <>
    <section className="sec-1">
        <nav>
            <div className="navElements">
                <div className="logo"  onClick={props.GotoHome}> <span className="logo_icon"><abbr title="WorkFolio Home">W</abbr></span><h3>WorkFolio</h3></div>
                <div className="LinkComponents">
                    <ul>
                    <li onClick={props.GotoHome}>Home</li>
                        <li>Templates</li>
                        <li>Examples</li>
                        <li>About</li>
                        <li>Help</li>
                    </ul>
                </div>

                <div className="user_click_buttons">
                    <div className="logInButton"> Login</div>
                    <button className="Create_cv" onClick={props.FormDisplay}>Create Your Resume</button>
                </div>
                                    <div className='OpenMenuRight' >
                        <svg  className='OpenMenuRightSVG' onClick={MenuSlideShow}  viewBox="0 0 27 21"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.37557 20.0981L25.1106 20.0052C25.6629 20.0022 26.1081 19.552 26.105 18.9997L26.0979 17.703C26.0948 17.1508 25.6446 16.7055 25.0923 16.7086L8.35729 16.8014C7.80501 16.8045 7.35979 17.2547 7.36285 17.807L7.37004 19.1036C7.37311 19.6559 7.8233 20.1011 8.37557 20.0981Z" fill="#1707D7"/>
                    <path d="M12.6625 11.7225L25.0642 11.6537C25.6165 11.6506 26.0617 11.2004 26.0587 10.6481L26.0515 9.35146C26.0484 8.79919 25.5982 8.35396 25.0459 8.35703L12.6442 8.42582C12.0919 8.42888 11.6467 8.87908 11.6497 9.43135L11.6569 10.728C11.66 11.2803 12.1102 11.7255 12.6625 11.7225Z" fill="#1707D7"/>
                    <path d="M8.28378 3.54155L25.0188 3.44872C25.5711 3.44566 26.0163 2.99547 26.0133 2.44319L26.0056 1.06935C26.0026 0.518598 25.5548 0.0739943 25.004 0.0748957L8.26861 0.102286C7.7148 0.103193 7.26719 0.554029 7.27026 1.10783L7.27825 2.54711C7.28131 3.09939 7.7315 3.54462 8.28378 3.54155Z" fill="#1707D7"/>
                    <path d="M2.90245 17.6358L8.7922 10.7885C9.11744 10.4104 9.11434 9.85044 8.78492 9.47595L2.81957 2.6944C2.41437 2.23375 1.69373 2.24323 1.30077 2.71437L0.567989 3.59297C0.253716 3.96977 0.259249 4.51893 0.58105 4.88932L4.59017 9.50386C4.91422 9.87685 4.91729 10.4306 4.5974 10.8071L0.639718 15.4659C0.322046 15.8398 0.322606 16.389 0.641039 16.7623L1.38353 17.6327C1.78168 18.0995 2.50238 18.1009 2.90245 17.6358Z" fill="#1707D7"/>
                    </svg>

                    </div>
                 {/* this is the cancel button will be appear when media query will fire   */}
            </div>
        </nav>

        {/* this content to show for mobile/tablet device not for desktop */}
        
        {
            OpenMenuSlider &&
        
        <div className="openMenuSlider">
            <div className="slideBody">

                    <div className="user_click_button_mobile">
                        <div className="resume_crete_button-mobile" onClick={props.FormDisplay}>Create Your Resume</div>
                        <div className="LoginButton-mobile">Login</div>
                    </div>
                    <div className="nav_links_mobile">
                            <ul>
                            <li onClick={props.GotoHome}>Home</li>
                                <li>Templates</li>
                                <li>Examples</li>
                                <li>About</li>
                                <li>Help</li>
                            </ul>
                    </div>

                    <div className="closeMenu"  >
                        

                        <svg   className="closeMenuSVG" onClick={CloseMenuSlider}  width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.9954 1.31732L11.6482 10.8331C11.1873 11.3585 11.184 12.1433 11.6406 12.6726L19.9082 22.2576C20.4698 22.9087 21.4798 22.9052 22.0369 22.2503L23.0758 21.029C23.5214 20.5052 23.5211 19.7355 23.0752 19.2121L17.5195 12.6906C17.0705 12.1635 17.0737 11.3874 17.5271 10.8641L23.1369 4.38911C23.5872 3.86939 23.5939 3.09974 23.1527 2.57227L22.124 1.34236C21.5724 0.682825 20.5624 0.670942 19.9954 1.31732Z" fill="white"/>
                        <path d="M9.19999 1.76397L0.852827 11.2797C0.39188 11.8052 0.388613 12.59 0.845168 13.1193L9.1128 22.7042C9.67439 23.3553 10.6844 23.3518 11.2415 22.6969L12.2804 21.4756C12.726 20.9518 12.7257 20.1822 12.2798 19.6587L6.72413 13.1373C6.27508 12.6101 6.27831 11.8341 6.73174 11.3107L12.3415 4.83577C12.7918 4.31604 12.7985 3.5464 12.3573 3.01892L11.3286 1.78902C10.777 1.12948 9.76699 1.1176 9.19999 1.76397Z" fill="white"/>
                        </svg>
                        
                       
                                            

                    </div>
                    
            </div>
        </div>

        

        }
    </section></>
  )
}
