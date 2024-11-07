// components/Footer.js

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* College Name */}
        <h2 className="text-xl font-semibold mb-2">Government College of Engineering, Jalgaon</h2>
        <p className="text-gray-400 mb-4">GCOEJ - Excellence in Engineering Education</p>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4">
          <a href="https://facebook.com/gcoej" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com/gcoej" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com/gcoej" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com/school/gcoej" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Government College of Engineering, Jalgaon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
