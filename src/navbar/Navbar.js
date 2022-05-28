import React from "react";
import "../navbar/navbar.css";

function Navbar() {
  return (
    <div className="sticky-top">
      {/*  <nav>
                    <ul class="mcd-menu">
                        <li>
                            <a href="">
                                <i class="fa fa-home"></i>
                                <strong>Home</strong>
                                <small>sweet home</small>
                            </a>
                        </li>
                        <li>
                            <a href="" class="active">
                                <i class="fa fa-edit"></i>
                                <strong>About us</strong>
                                <small>sweet home</small>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-gift"></i>
                                <strong>Features</strong>
                                <small>sweet home</small>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-globe"></i>
                                <strong>News</strong>
                                <small>sweet home</small>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-comments-o"></i>
                                <strong>Blog</strong>
                                <small>what they say</small>
                            </a>
                            <ul>
                                <li><a href="#"><i class="fa fa-globe"></i>Mission</a></li>
                                <li>
                                    <a href="#"><i class="fa fa-group"></i>Our Team</a>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-female"></i>Leyla Sparks</a></li>
                                        <li>
                                            <a href="#"><i class="fa fa-male"></i>Gleb Ismailov</a>
                                            <ul>
                                                <li><a href="#"><i class="fa fa-leaf"></i>About</a></li>
                                                <li><a href="#"><i class="fa fa-tasks"></i>Skills</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#"><i class="fa fa-female"></i>Viktoria Gibbers</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i class="fa fa-trophy"></i>Rewards</a></li>
                                <li><a href="#"><i class="fa fa-certificate"></i>Certificates</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-picture-o"></i>
                                <strong>Portfolio</strong>
                                <small>sweet home</small>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-envelope-o"></i>
                                <strong>Contacts</strong>
                                <small>drop a line</small>
                            </a>
                        </li>
                        <li class="float">
                            <a class="search">
                                <input type="text" value="search ..."/>
                                    <button><i class="fa fa-search"></i></button>
                            </a>
                            <a href="" class="search-mobile">
                                <i class="fa fa-search"></i>
                            </a>
                        </li>
                    </ul>
                </nav> */}

      <nav sticky-top>
        <ul className="ulNavbar">
          <li className="blue">
            <a href="#">Home</a>
          </li>
          <li className="purple">
            <a href="#">Portfolio</a>
          </li>
          <li className="pink">
            <a href="#">About</a>
          </li>
          <li className="green">
            <a href="#">Contact</a>
          </li>
          <li classNsme="yellow">
            <a href="#">More</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
