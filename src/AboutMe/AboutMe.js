import React from "react";
import '../AboutMe/aboutMe.css';
import Programadora from "../Imagenes/Programadora.png"
import Clay from "../Imagenes/Clay.png"


function AboutMe(){

    return(
        <div className="bodyAbout">
          
          <div class="wrapperTitle">
	        <h1 className="TitleHead">Technical Description</h1>
          </div>
        <div class="product-cardMe">
    <div class="product-imageMe">
    <img src={Clay}/>
  </div>
  <div class="product-detailsMe">
    <h1>About Me</h1>
    <p>Great product title for a great product and all of the extra things a product might need to make it fill an entire card.</p>
    {/* <button type="button" class="btn">Buy Now</button> */}
  </div>
</div>


</div>

    );
}

export default AboutMe