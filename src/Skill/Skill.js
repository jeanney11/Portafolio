
import React from "react";
import './skill.css';
import SQL from "../Imagenes/SQL.png"
import OOP from "../Imagenes/OOP.png"


function Skill(){

    return(

		<div>

		<div class="wrapperTitle">
	        <h1 className="TitleHead">SKILLS</h1>
        </div>

        <div class="bodySkill">
            <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-icono-del-lenguaje-de-programacion-java.png" height="100" width="150" alt="Java" />
		</div>
		<div class="slide">
			<img src="https://www.javilazaro.es/wp-content/uploads/2019/02/Javascript-logo-basico-946x1024.png" height="auto" width="170" alt="JavaScript" />
		</div>
		<div class="slide">
			<img src="https://www.freeiconspng.com/thumbs/html5-icon/w3c-html5-logo-0.png" height="5" width="200" alt="HTML5" />
		</div>
		<div class="slide">
			<img src="https://elrincondedanigarcia.com/wp-content/uploads/2020/07/css-logo.png" height="300" width="250" alt="CCS3" />
		</div>
		<div class="slide">
			<img src="https://cdn-images-1.medium.com/max/1600/1*3SVfBkNZI2f-sspiq59xcw.png" height="100" width="200" alt="React" />
		</div>
		<div class="slide">
			<img src="https://www.todavianose.com/wp-content/uploads/2018/04/mongo-db-design.png" height="50" width="250" alt="MongoDB" />
		</div>
		<div class="slide">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" height="100" width="250" alt="NodeJS" />
		</div>
		{/* <div class="slide">
			<img src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png" height="100" width="250" alt="ExpressJS" />
		</div> */}
		<div class="slide">
			<img src="https://i.imgur.com/DRUiMyM.png" height="100" width="250" alt="Boostrap" />
		</div>
		<div class="slide">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrL60zNzGVIkPDYpZIud43KF_7Re5Oa0RbxRNoPa64Q7EWy9g1ecqX4SSwYOVqu4I3Ag&usqp=CAU" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={SQL} height="100" width="250" alt="SQL" />
		</div>
		<div class="slide">
			<img src={OOP} height="100" width="250" alt="OOP" />
		</div>
		<div class="slide">
			<img src="https://cms.rootstack.com/sites/default/files/inline-images/Vue%2520JS.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2021/04/github.png?fit=1150%2C465&ssl=1" height="100" width="250" alt="Git Hub" />
		</div>
    <div class="slide">
			<img src="https://software-mex.com/wp-content/uploads/2022/02/1631026680-logo-react-native.png" height="100" width="250" alt="React Native" />
		</div>
	</div>
</div>
        </div>  
		</div> 
    );
}

export default Skill;