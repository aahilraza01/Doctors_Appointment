import React from 'react';

const Resources = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Resources</h1>
        
        <p className="text-gray-700 text-lg mb-10 text-center">
          Explore our collection of helpful resources for your health and wellness.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Resource 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Health Articles</h3>
            <p className="text-gray-700 mb-4">
              Read the latest articles on health and wellness, from nutrition tips to medical advancements.
            </p>
            <a href="/articles" className="text-blue-500 hover:underline">Read More</a>
          </div>

          {/* Resource 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Medical Tools</h3>
            <p className="text-gray-700 mb-4">
              Discover useful tools to help you track your health, such as BMI calculators, symptom checkers, and more.
            </p>
            <a href="/tools" className="text-blue-500 hover:underline">Explore Tools</a>
          </div>

          {/* Resource 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Helpful Guides</h3>
            <p className="text-gray-700 mb-4">
              Access step-by-step guides on how to manage specific health conditions and wellness practices.
            </p>
            <a href="/guides" className="text-blue-500 hover:underline">View Guides</a>
          </div>

          {/* Resource 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Patient Testimonials</h3>
            <p className="text-gray-700 mb-4">
              Hear from our patients about their experiences and the care they received at our clinic.
            </p>
            <a href="/testimonials" className="text-blue-500 hover:underline">Read Testimonials</a>
          </div>

          {/* Resource 5 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">FAQs</h3>
            <p className="text-gray-700 mb-4">
              Find answers to frequently asked questions about our services, booking appointments, and more.
            </p>
            <a href="/faqs" className="text-blue-500 hover:underline">View FAQs</a>
          </div>

          {/* Resource 6 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Contact Us</h3>
            <p className="text-gray-700 mb-4">
              If you need more help or have specific questions, feel free to contact us directly.
            </p>
            <a href="/contact" className="text-blue-500 hover:underline">Get in Touch</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resources;
