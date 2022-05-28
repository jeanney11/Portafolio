
import React from "react";
import '../navbar/navbar.css';
import LogoJR from "../Imagenes/LogoJR.png"



function NavbarRes(){

    return(
            <div className="bodyNav">
                <div className="headerNav">
            <nav className="navNav">
                <div>
                    <img src={LogoJR} alt="" className="Logo"/>
                </div>
                <input type="checkbox" id="check"/>
                <label for="check" className="bar-bnt">
                <i className="fas fa-bars fa-2xl "></i>
                </label>
                <ul className="nav-menu">
                    <li className="yellow"><a className="active" href="#">Home</a></li>
                    <li className="yellow"><a href="#">About Me</a></li>
                    <li className="yellow"><a href="#">What I Do</a></li>
                    <li className="yellow"><a href="#">Resumen</a></li>
                    <li className="yellow"><a href="#">Portfolio</a></li>
                    <li className="yellow"><a href="#">Testimonial</a></li>
                    <li className="yellow"><a href="#">Contact</a></li>
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


