import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">About Our Clinic</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
          Welcome to our clinic! We are committed to providing top-notch healthcare with compassion, professionalism, and modern medical expertise.
          Our experienced doctors, nurses, and staff are here to ensure that you receive personalized and effective care in a comfortable environment.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to offer accessible, affordable, and high-quality healthcare services to our community. We focus on preventative care,
              early diagnosis, and continuous support for every stage of life.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Experienced and certified medical professionals</li>
              <li>State-of-the-art equipment and facilities</li>
              <li>Patient-centered approach</li>
              <li>Online appointment booking and teleconsultation</li>
              <li>Convenient location with flexible hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <img
            src="https://images.unsplash.com/photo-1588776814546-cf7c7b9b4b55"
            alt="Clinic"
            className="rounded-lg shadow-lg w-full max-w-3xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
