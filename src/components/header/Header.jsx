import React from 'react'
import './Header.scss'
import pp1 from '../../assets/pp1.jpg'
import logo from '../../assets/logot.png'
import logo1 from '../../assets/logott.png'


function Header() {
  return (
    
    <header className="showcase">
        <div className="overlay"></div>
        <nav className="menu">
          <div className="menu-branding">
            <a href="#" className="nav__logo">
              <img src={logo1} alt="logo" />
            </a>
          </div>
          <div className="container"> 
                <ul className="menu-nav">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#skill" className="nav-link">Skill</a></li>
                    <li className="nav-item"><a href="#work" className="nav-link">Work</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>

                </ul>
          </div> 
            
        </nav>
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div> 
        <div className="content">
            <div className="container ">
                <div>
                    <h1 className="home__title font-h">
                        Hi,
                    </h1>
                    <h1 className='font-h'>
                      I am
                      <span className="home__title-color"> Stanley </span>
                    </h1>
                    <h1 className="stack font-h">A Software Engineer</h1>

                    <div className="icons">
                        <a href="#!" target="_blank">
                          <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.facebook.com/Stanzealot" target="_blank">
                          <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/stanzealot/" target="_blank">
                          <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/stanzealot" target="_blank">
                          <i className="fab fa-github fa-2x"></i>
                        </a>
                      </div>
                </div>
                
                <div className="pic">
                    <img src={pp1} alt="my image"/>
                </div>
          </div>
            
           
           
            
        </div>
    </header>
  
  )
}

export default Header