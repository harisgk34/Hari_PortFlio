import Navbar from "../Components/NavBar";

//bg-gradient-to-b from-[#621E9A] via-purple-900  to-purple-600

const HireMe = () => {
  return (
    <>
      <div className="text-center text-white mt-10">
        <h2 className="decoration-transparent text-4xl md:text-5xl font-bold">
          Hire Me
        </h2>
        <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto">
          Explore a selection of my latest projects. Each project showcases my
          skills and dedication to delivering high-quality results.
        </p>
        <div className="mt-6">
          <hr className="w-20 border-[3px] border-green-400 mx-auto" />
        </div>
      </div>

      <div className="w-full h-screen flex flex-col justify-center items-center mt-14 mr-10 ">
        {/* <!-- Top Section --> */}

        {/* <!-- Content Section --> */}
        <div className="relative w-[80%] md:w-[70%] mx-auto mt-6 h-5/6 ">
          <div className="bg-[#621E9A] absolute p-5 top-1 right-16 border rounded-md transform -translate-y-[4rem] md:-translate-y-[7rem] flex flex-col justify-center items-center w-[80%]">
            {/* <!-- Profile Image --> */}
            <img
              className="h-70 w-auto sm:w-[16rem] rounded-full shadow-green-500 shadow-2xl "
              src="HireMe.jpeg"
              alt="Profile Image"
            />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-10 text-center ">
              Ready to work with me?
            </h2>

            {/* <!-- Description --> */}
            <p className="text-center text-md sm:text-lg mt-6 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              <span className="font-semibold ">
                "Code, Creativity & Commitment"
              </span>{" "}
              – that’s what I bring to the table.
              <br /> Hire me, and let's create something extraordinary!
              <br />
              <span className="font-semibold ">
                Passionate MERN Stack Developer
              </span>{" "}
              ready to bring your ideas to life. Let's build something amazing
              together!
            </p>

            {/* <!-- Contact Button --> */}
            <button
              className="button text-lg font-semibold  px-6 py-2 mt-8 outline outline-2 outline-gray-700 rounded-full 
        hover:bg-[#e7e3e0] transition-colors "
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireMe;
