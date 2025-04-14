import React from "react";

const cards = [
  {
    title: "Easily schedule your appointment for personalized healthcare services.",
    button: "BOOK TEST",
  },
  {
    title: "Schedule your medical test easily and get the results you need promptly.",
    button: "BUY MEDICINES",
  },
  {
    title: "Order your medicines online and have them delivered to your doorstep.",
    button: "CONNECT WITH US",
  },
  {
    title: "Get in touch for inquiries, support, or to learn more about our services.",
    button: "Learn More",
  },
];

export default function   CardTitle() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 text-center bg-green-900 backdrop-blur-md rounded-xl .p-6 shadow-lg">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold mb-3">{card.title}</h2>
            <a href="#" className="text-blue-600 text-sm underline">
              Learn More
            </a>
          </div>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
            {card.button}
          </button>
        </div>
      ))}
    </div>
  );
}
