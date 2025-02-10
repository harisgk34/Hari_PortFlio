

import React from 'react';

function ContactUs() {
  return (
    <>
    
      <div className="text-center text-white mt-10">
        <h2 className="decoration-transparent text-4xl md:text-5xl font-bold">Get IN Touch</h2>
        <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto">
          Explore a selection of my latest projects. Each project showcases my
          skills and dedication to delivering high-quality results.
        </p>
        <div className="mt-6">
          <hr className="w-20 border-[3px] border-green-400 mx-auto" />
        </div>
      </div>







    <div className="max-w-screen-lg mx-auto p-5 bg[#0A0A0A]">
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        {/* Contact Info Section */}
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
         

          Got a crazy idea you want to bring to life? Or just want to chat about the best pizza places in town?
          <br />
          I'm all ears and open to new adventures!
          </p>

          {/* Address */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-label="Location icon"
            >
              <path d="M12 2C8.134 2 5 5.134 5 9c0 4.766 5.374 11.659 6.086 12.511.237.278.591.439.914.439s.677-.161.914-.439C13.626 20.659 19 13.766 19 9c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
            </svg>
            <span className="text-sm">
              House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-label="Phone icon"
            >
              <path d="M22 16.92v3.49a2.6 2.6 0 0 1-2.85 2.6c-13.5-1.18-17.83-13-18.83-18.84A2.6 2.6 0 0 1 3.82.5h3.5a2.6 2.6 0 0 1 2.6 2.2c.22 1.54.75 3.58 1.5 5.17a2.6 2.6 0 0 1-.58 2.87L8.3 13.2a16.85 16.85 0 0 0 6.5 6.5l2.47-2.47a2.6 2.6 0 0 1 2.87-.58c1.59.75 3.63 1.28 5.17 1.5a2.6 2.6 0 0 1 2.2 2.6z"></path>
            </svg>
            <span className="text-sm">+93 123 456 789</span>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300.988 300.988"
              aria-label="24/7 icon"
            >
              <g>
                <path d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493 S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001 s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"></path>
                <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883"></polygon>
              </g>
            </svg>
            <span className="text-sm">24/7</span>
          </div>
        </div>

        {/* Form Section */}
        <form className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="yourname@example.com"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between w-full px-3">
            <label className="block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Send me your newsletter!</span>
            </label>
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  


    </div>

    </>
  );
}

export default ContactUs;
