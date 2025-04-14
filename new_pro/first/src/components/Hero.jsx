import React from "react";
import { ReactTyped } from "react-typed";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 from-blue-100 to-purple-100 px-4">
      <div className="bg-white/50 backdrop-blur-md rounded-xl shadow-emerald-800 p-6 md:p-10 max-w-6xl w-full grid md:grid-cols-2 gap-6 items-center">
        
        {/* Left Side Image Card */}
        <div className="flex justify-center">
          <div className="bg-white shadow-md rounded-2xl p-4 max-w-sm w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYZcKhkPv7HzpOuNw0gZoUMzSGcrlnm8LJA&s"
              alt="Doctor Illustration"
              className="w-full object-contain rounded-xl"
            />
            <p className="text-center text-sm mt-3 text-gray-700 font-medium">
              Trusted Professionals for You
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="text-center md:text-left">
          <p className="text-[#00df9a] font-bold text-xl md:text-2xl mb-4">
            Take Online Doctor Consultation
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Consult Doctor by Speciality +
          </h1>

          <div className="mb-6">
            <ReactTyped
              strings={[
                "Let's check your temperature ",
                "You don't feel like a fiver",
                "Thanks for your conscersation",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            >
              <input
                type="text"
                className="w-full max-w-md px-4 py-2 border border-gray-500 rounded-lg text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400"
                placeholder=""
              />
            </ReactTyped>
          </div>

          {/* Button */}
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
