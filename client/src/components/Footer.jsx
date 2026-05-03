import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, contactInfo } from '../data/siteData';

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
                <span className="text-white font-bold">
                  <img src="../../public/possum.png" alt="Feral2Fresh Logo"  className='rounded-full'/>
                  </span>
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
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary transition">
                    {link.name}
                  </Link>
                </li>
              ))}
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
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-primary transition">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  {contactInfo.socialLinks.map((link) => (
                    <a key={link.label} href={link.href} className="text-gray-400 hover:text-primary transition">
                      {link.label}
                    </a>
                  ))}
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
