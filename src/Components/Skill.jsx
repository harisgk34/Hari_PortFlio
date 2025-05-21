import React from "react";

const Skill = () => {
  const skills =[
    {
      name: "React.js",
      percentage: 90,
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      percentage: 85,
      color: "#3C873A",
    },
    {
      name: "MongoDB",
      percentage: 80,
      color: "#4DB33D",
    },
    {
      name: "Express.js",
      percentage: 75,
      color: "#000000",
    },
    {
      name: "JavaScript",
      percentage: 95,
      color: "#F7DF1E",
    },
    {
      name: "HTML & CSS",
      percentage: 90,
      color: "#E44D26",
    },
    {
      name: "Tailwind CSS",
      percentage: 85,
      color: "#38B2AC",
    },
    {
      name: "AWS",
      percentage: 40,
      color: "#FF9900",
    },
  ];

  return (
    <>
       <div className=" skill text-center text-white mt-10">
        <h2 className="decoration-transparent text-4xl md:text-5xl font-bold">Skills</h2>
        <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto">
          Explore a selection of my latest projects. Each project showcases my
          skills and dedication to delivering high-quality results.
        </p>
        <div className="mt-6">
          <hr className="w-20 border-[3px] border-green-400 mx-auto" />
        </div>
      </div>







    <div className="h-screen flex justify-center items-center dark:bg-gray-800">
      <div className="max-w-xl mx-auto w-full">
        {/* Heading */}
        <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">I Can Do</h4>

        {skills.map((skill, index) => (
          <div key={index} className="mb-7">
            {/* Skill Header */}
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                {skill.name}
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                {skill.percentage}%
              </span>
            </div>
            {/* Progress Bar */}
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke={skill.color}
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: `${(skill.percentage / 100) * 100}px, 100px`,
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s",
                }}
              ></path>
            </svg>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default Skill;
