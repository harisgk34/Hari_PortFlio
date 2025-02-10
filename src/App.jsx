

import Home from "./Components/Home";
import HeroPage from "./Components/HeroPage";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import ContactUs from "./Components/ContactUs";
import Certifications from "./Components/Certifications";
import HireMe from "./Components/HireMe";
import Footer from "./Components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

function App() {
  

  return (

    
<>
<div>


    <BrowserRouter>
    <NavBar className="button"/>
      <Routes>
      
         <Route path="/" element={<Home />} /> 
          <Route path="/HeroPage" element={<HeroPage />} /> 
          <Route path="/AboutMe" element={ <AboutMe />} /> 
          <Route path="/Skill" element={ <Skill />} /> 
          <Route path="/Project" element={ <Project />} /> 
          <Route path="/Certifications" element={ <Certifications/>} /> 
          <Route path="/ContactUs" element={ <ContactUs/>} /> 
          <Route path="/HireMe" element={ <HireMe/>} /> 
         
       
      </Routes>
    </BrowserRouter>
    
    </div>
    </>
 
  
  )
}

export default App
