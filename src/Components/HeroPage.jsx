
// function HeroPage() {
//     return (

// <div className="flex justify-between items-center w-full relative h-full py-6  text-white md:flex-row sm:flex-row">
//   {/* Left Content */}
//   <div className="z-10  flex-row justify-start  top-2/4 left-5 m-4 p-2 transform -translate-y-1/2 space-y-6 w-2/3 max-w-lg animate-fadeIn">
//     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight flex transform -translate-y-1/2 animate-textPop">
//       Hi,I'm<span className="text-purple-400 ">_Hariharan</span>
//     </h1>
//     <h2 className="text-2xl md:text-2xl font-semibold text-purple-300 ">
//       MERN Stack Developer | Creative Coder
//     </h2>
//     <p className="text-lg text-gray-300 leading-relaxed ">
//       I am highly adaptable and passionate about crafting dynamic, user-friendly
//       web applications. Whether it’s collaborating on team projects or freelance
//       work, I bring creativity and efficiency to every task.
//     </p>
//     <div className="flex space-x-4 mt-6">
//       <a href="https://github.com/harisgk34">
//       <button className="px-6 py-3 text-lg font-medium bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition-all duration-300">
//         View My Work
//       </button>
//       </a>
//       <a href="https://wa.me/918870575425?text=Hi%20Hariharan%21%20I'd%20love%20to%20collaborate%20with%20you%20on%20a%20project.%20When%20would%20be%20a%20good%20time%20to%20talk%3F
// ">
//       <button className="px-6 py-3 text-lg font-medium bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md transition-all duration-300">
//         Contact Me
//       </button>
//       </a>
//     </div>
//   </div>
//   {/* Background Elements */}
//   <div className=" inset-0 z-0 bg-gradient-to-r opacity-25"></div>
//   <div className="h-3/5 p-4 rounded-lg flex justify-end w-full  animate-fadeIn">
//         <div className="w-1/2 h-2/3  ">
//             <img width="200px"
//             src="/profile.png"
//             alt="Profile"
//             className="w-3/4 h flex justify-center  h-3/4 rounded-full button top-4 my-3 mr-9  "
//           />
//         </div>
//       </div>
//     </div> 

//     )}


// export default HeroPage;

import { Link } from "react-router-dom";

function HeroPage() {
  return (

<div className=" hero flex  justify-between items-center w-full relative h-full py-6  text-white">
{/* Left Content */}
<div className=" hero z-10 flex-row justify-start absolute top-2/4 left-5 m-4 p-2 transform -translate-y-1/2 space-y-6 w-2/3 max-w-lg animate-fadeIn">
  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight flex transform -translate-y-1/2 animate-textPop">
    Hi,I'm<span className="text-purple-400 inline-block ">_Hariharan</span>
  </h1>
  <h2 className="text-2xl md:text-2xl font-semibold text-purple-300 ">
    MERN Stack Developer | Creative Coder
  </h2>
  <p className="text-lg text-gray-300 leading-relaxed ">
    I am highly adaptable and passionate about crafting dynamic, user-friendly
    web applications. Whether it’s collaborating on team projects or freelance
    work, I bring creativity and efficiency to every task.
  </p>
  <div className="flex space-x-4 mt-6">
    <a href="/hariharanCV.pdf" download>
    <button className="px-6 py-3 text-lg font-medium bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition-all duration-300">
      Download CV
    </button>
    </a>
    <Link to="/ContactUs">
    <button className="px-6 py-3 text-lg font-medium bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md transition-all duration-300">
      Contact Me
    </button>
    </Link>
    
  </div>
</div>
{/* Background Elements */}
<div className="absolute  inset-0 z-0 bg-gradient-to-r opacity-25"></div>
<div className="h-3/5 p-4 rounded-lg flex justify-end w-full relative animate-fadeIn ">
      <div className="profile  w-1/2 h-2/3  ">
          <img
          src="/profile.png"
          alt="Profile"
          className="w-3/4 h flex justify-center  h-3/4 rounded-full button top-4 my-3 mr-9   "
        />
      </div>
    </div>
  </div> 

  )}


export default HeroPage;