import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12 mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">F2F</span>
              </div>
              <span className="font-bold text-lg">Feral2Fresh</span>
            </div>
            <p className="text-gray-400 text-sm">
              From Feral to Fresh—professional cleaning services for residential and commercial properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition">Testimonials</Link></li>
            </ul>
          </div>
    
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-primary transition">Residential Cleaning</a></li>
              <li><a href="/services" className="hover:text-primary transition">Deep Clean</a></li>
              <li><a href="/services" className="hover:text-primary transition">Commercial Cleaning</a></li>
              <li><a href="/services" className="hover:text-primary transition">Move-In/Out</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:info@feral2fresh.com" className="hover:text-primary transition">info@feral2fresh.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary transition">(123) 456-7890</a></li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-primary transition">Instagram</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Feral2Fresh. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
