import React from "react";
import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";

const doctors = [
  {
    img: doc1,
    name: "Dr. Emily Clark",
    desc: "Internal Medicine Specialist with 10+ years experience.",
  },
  {
    img: doc2,
    name: "Dr. John Smith",
    desc: "Expert Cardiologist available Mon–Fri.",
  },
  {
    img: doc3,
    name: "Dr. Sarah Johnson",
    desc: "Pediatrician with a gentle, caring approach.",
  },
];

const Cards = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Doctors</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img src={doc.img} alt={doc.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
              <p className="text-gray-600 mb-4">{doc.desc}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
