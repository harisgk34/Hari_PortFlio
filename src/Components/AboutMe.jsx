import React from "react";

function AboutMe() {
  return (
    <>
      <div className="text-center text-white mt-10">
        <h2 className="decoration-transparent text-4xl md:text-5xl font-bold">
          Who I'M
        </h2>
        <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto">
          Explore a selection of my latest projects. Each project showcases my
          skills and dedication to delivering high-quality results.
        </p>
        <div className="mt-6">
          <hr className="w-20 border-[3px] border-green-400 mx-auto" />
        </div>
      </div>

      <div className="font-poppins  relative h-full ">
        <div
          id="container"
          className="p-20 w-auto flex px-24 justify-center relative"
        >
          <div className=" w-auto h-screen flex flex-col md:flex-row  relative">
            <div className="mr-10 h-full">
              <img
                className="w-full h-5/6"
                src="/AboutImg.jpeg"
                alt="image of myself"
              />
            </div>
            <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] h-fit">
              <h1 className="text-white font-bold text-3xl mt-6 mb-8">
                Hey there I'm
                <br /> Hariharan Rajasekar,
              </h1>
              <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[45rem] mb-10">
                MERN Stack Developer with a passion for building web apps that
                are smooth, scalable, and a joy to use! 💻🎉 I specialize in
                MongoDB, Express.js, React.js, and Node.js – a combo that makes
                me feel like a web wizard casting spells to bring your ideas to
                life! ✨🧙‍♂️When I’m not writing code, I’m probably on a quest to
                solve complex problems or binge-watching the latest sci-fi
                series for inspiration. 😜
                <br />
                <strong className="font-bold">My journey so far?</strong>
                From building my own quirky side projects to collaborating with
                awesome teams, I’m always pushing the limits of creativity and
                functionality.I love working on both the front-end (making
                things look gorgeous) and the back-end (making sure it all works
                seamlessly). It’s all about building things that not only work
                well but also make users go, "Wow, this is awesome!" 🙌
                <br />
                <span className="bottom-5">
                  Ready to take on a new adventure and build something
                  incredible together? Let’s make it happen!" 🌟
                </span>
              </p>
              <div
                id="social"
                className="flex flex-wrap  justify-start items-center gap-4"
              >
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/iam-aydin"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                    width="20px"
                    height="20px"
                    alt="Github"
                  />
                  <span>Visit my Github</span>
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                    width="20px"
                    height="20px"
                    alt="LinkedIn"
                  />
                  <span>Follow me on LinkedIn</span>
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://twitter.com/ichbinaydin"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex  items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                    width="20px"
                    height="20px"
                    alt="Twitter"
                  />
                  <span>Follow me on Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
