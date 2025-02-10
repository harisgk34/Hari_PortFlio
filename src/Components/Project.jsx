import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      imgSrc: "/Qr code.PNG" },
    {
      id: 2,
      title: "Project Two",
      imgSrc:
      "/nastraImg.PNG"   },
    {
      id: 3,
      title: "Project Three",
      imgSrc:
      "/Greendon.PNG"  },
    {
      id: 4,
      title: "Project Four",
      imgSrc:
      "/Act-Todo.PNG" },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b  flex flex-col justify-center items-center py-12">
      {/* Header Section */}
      <div className="text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
        <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto">
          Explore a selection of my latest projects. Each project showcases my
          skills and dedication to delivering high-quality results.
        </p>
        <div className="mt-6">
          <hr className="w-20 border-[3px] border-green-400 mx-auto" />
        </div>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 md:px-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#e7e3e0] rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.imgSrc}
              alt={`Project ${project.id}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold text-[#621E9A]">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                nemo?
              </p>
              <button className=" mt-4 px-4 py-2 bg-[#621E9A] text-white rounded-full hover:bg-purple-700 transition-colors">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
