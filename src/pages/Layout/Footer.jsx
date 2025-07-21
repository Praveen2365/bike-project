import React from 'react';
import { FaBicycle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaBicycle className="text-2xl text-red-500" />
              <span className="text-xl font-bold text-white">PedalPioneer</span>
            </div>
            <p className="text-sm">
              Riding the future of cycling since 2010. Quality bikes, exceptional service, and unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-red-400 transition-colors">About</a></li>
              <li><a href="/brands" className="hover:text-red-400 transition-colors">Brands</a></li>
              <li><a href="/services" className="hover:text-red-400 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <span>123 Cycle Street, Bikeville, BV 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-red-500" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-red-500" />
                <span>info@pedalpioneer.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe for the latest bike news, deals, and cycling tips.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-red-500"
              />
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PedalPioneer. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-red-400">Privacy Policy</a>
            <a href="#" className="hover:text-red-400">Terms of Service</a>
            <a href="#" className="hover:text-red-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;