import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with elegant simplicity */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
            <span className="text-gray-900 font-bold text-lg">W</span>
          </div>
          <span className="text-2xl font-serif font-medium text-gray-100">
            Wisdom&nbsp;<span className="text-amber-400">Works</span>
          </span>
        </div>

        {/* Navigation with subtle sophistication */}
        <ul className="hidden md:flex space-x-7 items-center">
          <NavItem 
            path="/" 
            name="Home"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />
          <NavItem 
            path="/about" 
            name="About"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <NavItem 
            path="/brands" 
            name="Brands"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <NavItem 
            path="/services" 
            name="Services"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            }
          />
          <li className="ml-4">
            <a 
              href="/contact" 
              className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-medium rounded-full transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-amber-500/20"
            >
              <span>Contact</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile menu button (hidden on larger screens) */}
        <button className="md:hidden text-gray-200 hover:text-amber-400 transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

// NavItem component with icon integration
const NavItem = ({ path, name, icon }) => {
  return (
    <li>
      <a 
        href={path} 
        className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center space-x-2 group"
      >
        {icon}
        <span className="relative">
          {name}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
        </span>
      </a>
    </li>
  );
};

export default Navbar;