import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-bold mb-4">MediCare</h2>
          <p className="text-sm">
            Your trusted platform for booking appointments with experienced doctors across specialties.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">Doctors</a></li>
            <li><a href="#" className="hover:text-green-400">Appointments</a></li>
            <li><a href="#" classsName="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm">Email: support@medicare.com</p>
          <p className="text-sm">Phone: +91 234 567-890</p>
          <p className="text-sm mt-2">123 Health St, India Patna City</p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} DocKar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
