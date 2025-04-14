import React from "react";
import doc3 from '../assets/doc3.jpg';


function Card() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img src={doc3} alt="Doctor" className="w-full rounded-lg" />
        <div>
          <p className="text-green-500 font-semibold mb-2">Data of Doctors Manage</p>
          <h1 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas distinctio hic corrupti doloremque quis velit fugit, itaque voluptates eaque repudiandae.
          </p>
        <button className="bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black 
                   hover:bg-green-500 hover:scale-105 transition transform duration-300">Get Start</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
