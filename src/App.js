
import './App.css';
import Navbar from './navbar/Navbar.js'
import Navbar1 from './navbar/Navbar1.js'
import Home from './Home/Home.js'
import AboutMe from './AboutMe/AboutMe.js'
import WhatIDo from './WhatIDo/WhatIDo.js';
import Resumen from './Resumen/Resumen.js'
import Skill from './Skill/Skill.js';
import Contact from './Contact/Contact.js'
import Footer from './Footer/Footer.js'
import MyWork from './MyWork/MyWork.js';
import Testimonial from './Testimoniales/Testimonial.js';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar1/>
        <Home/>
        <AboutMe/>
        <WhatIDo/>
        <Resumen/>
        <Skill/>
        <MyWork/>
        <Testimonial/>
        <Contact/>

        {/* <Footer/> */}
      <h1>HOLA HOLA</h1>
    </div>
  );
}

export default App;
