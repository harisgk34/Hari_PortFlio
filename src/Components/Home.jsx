import React from "react";
import HeroPage from "../Components/HeroPage";
import NavBar from "../Components/NavBar";
import AboutMe from "../Components/AboutMe";
import ContactUs from "../Components/ContactUs";
import HireMe from "../Components/HireMe";
import Project from "../Components/Project";
import Skill from "../Components/Skill";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className=" text-white min-h-screen ">

      {/* this is Home page  */}

      <HeroPage className="bg-[#0A0A0A]" />



      {/* Who im page */}

{/* AboutUs */}


      <AboutMe className="bg-[#0A0A0A]" />

      {/* Skill */}
   
      <Skill className="bg-[#0A0A0A]" />
      {/* Project */}
     
      <Project className="bg-[#0A0A0A]" />
      
      {/* Contact page */}
    


      <ContactUs className="bg-[#0A0A0A]" />


      {/* Hire me page */}
      
    
      
      <HireMe className="bg-[#0A0A0A] mt-40" />
      
        
        {/* Footer page */}
      <Footer className="bg-[#0A0A0A] " />
    </div>
  );
}

export default Home;
