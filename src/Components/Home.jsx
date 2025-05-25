import React from "react";
import HeroPage from "../Components/HeroPage";
import AboutMe from "../Components/AboutMe";
import ContactUs from "../Components/ContactUs";
import HireMe from "../Components/HireMe";
import Project from "../Components/Project";
import Skill from "../Components/Skill";
import "../css/Home.css"


function Home() {
  return (
    <div className=" text-white min-h-screen ">

      {/* this is Home page  */}

      <HeroPage className=" heropage bg-[#0A0A0A]   decoration-red-100 md:"  />



      {/* Who im page */}

      <AboutMe className="bg-[#0A0A0A] static " />

      {/* Skill */}
      <div className="ski ">
      <Skill className="ski bg-[#0A0A0A] static" />

      </div>
     
      {/* Project */}
      <Project className="bg-[#0A0A0A] static" />

      {/* Contact page */}

      <ContactUs className="bg-[#0A0A0A] static" />


      {/* Hire me page */}
      
    
      <HireMe className=" bg-[#0A0A0A] h-screen  mt-4" />
        
        {/* Footer page */}
      {/* <Footer className="bg-[#0A0A0A] " /> */}
    </div>
  );
}

export default Home;
