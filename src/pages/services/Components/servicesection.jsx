import React from 'react';
import { FaTools, FaTachometerAlt, FaMedal, FaShieldAlt, FaGasPump, FaCertificate } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaTachometerAlt className="text-3xl text-cyan-400" />,
      title: "Performance Tuning",
      description: "Expert ECU remapping and dyno tuning to extract maximum power from your race machine",
      premium: true
    },
    {
      icon: <FaTools className="text-3xl text-cyan-400" />,
      title: "Race Prep Services",
      description: "Full technical preparation including suspension setup, weight reduction, and safety systems",
      premium: true
    },
    {
      icon: <FaShieldAlt className="text-3xl text-cyan-400" />,
      title: "Track Protection",
      description: "Installation of crash protection, frame sliders, and premium armor packages",
      premium: false
    },
    {
      icon: <FaGasPump className="text-3xl text-cyan-400" />,
      title: "Fuel System Upgrades",
      description: "High-flow fuel pumps, injectors, and custom fuel mapping for competition use",
      premium: true
    },
    {
      icon: <FaMedal className="text-3xl text-cyan-400" />,
      title: "Professional Racing Support",
      description: "Track-side assistance and race team logistics for competitive events",
      premium: true
    },
    {
      icon: <FaCertificate className="text-3xl text-cyan-400" />,
      title: "Factory Maintenance",
      description: "Dealer-level service using OEM parts and manufacturer specifications",
      premium: false
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
            RACE MOTORBIKE SERVICES
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Precision engineering for podium-ready performance
          </p>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-24 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-xl border transition-all duration-300 group overflow-hidden
                ${service.premium 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20'
                  : 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/30'
                }`}
            >
              {service.premium && (
                <div className="absolute top-0 right-0 bg-cyan-500 text-black font-bold text-xs px-3 py-1 rounded-bl-lg">
                  ELITE SERVICE
                </div>
              )}
              
              <div className="flex flex-col items-start">
                <div className="p-3 mb-4 bg-gray-700/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <button className="mt-auto px-5 py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black rounded-md font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Track Day CTA */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-3 text-white">TRACK DAY PACKAGES</h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Complete track preparation, transportation, and support for your race days
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-md shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              VIEW TRACK PACKAGES
            </button>
            <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-bold rounded-md transition-all duration-300">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;