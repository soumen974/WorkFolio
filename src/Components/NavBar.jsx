import React from 'react'
import './navBar.css'

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
            </div>
        </nav><hr/>
    </section></>
  )
}
