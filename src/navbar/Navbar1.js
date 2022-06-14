
import React from "react";
import '../navbar/navbar.css';
import LogoJR8 from "../Imagenes/LogoJR8.png"



function NavbarRes(){

    return(
            <div className="bodyNav">
                <div className="headerNav">
            <nav className="navNav">
                <div>
                    <img src={LogoJR8} alt="" className="Logo"/>
                </div>
                <input type="checkbox" id="check"/>
                <label for="check" className="bar-bnt">
                <i className="fas fa-bars fa-2xl "></i>
                </label>
                <ul className="nav-menu">
                    <li className="blueJeanlev"><a className="active" href="#">Home</a></li>
                    <li className="blueJeanlev"><a href="#bodyAbout">About Me</a></li>
                    <li className="blueJeanlev"><a href="#htmlWhatIDo">What I Do</a></li>
                    <li className="blueJeanlev"><a href="#containerResumen">Resumen</a></li>
                    <li className="blueJeanlev"><a href="#bodyWorks">Portfolio</a></li>
                    <li className="blueJeanlev"><a href="#bodyTesti">Testimonial</a></li>
                    <li className="blueJeanlev"><a href="#bodyContact">Contact</a></li>
                </ul>
            </nav>
            {/* <div className="banner-text">
                <h2>Jeanney Reyes</h2>
                <h1>BE IN THE <span>GAME</span></h1>
            </div> */}
            </div>
            </div>
    );
}

export default NavbarRes;


