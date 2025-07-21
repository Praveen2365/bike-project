import React from 'react';
import { FaTrophy, FaFlagCheckered, FaUserTie, FaCogs, FaHistory } from 'react-icons/fa';

const About = () => {
  const stats = [
    { value: "15+", label: "Years in Racing", icon: <FaHistory className="text-cyan-400" /> },
    { value: "240+", label: "Podium Finishes", icon: <FaTrophy className="text-cyan-400" /> },
    { value: "50+", label: "Championships", icon: <FaFlagCheckered className="text-cyan-400" /> },
    { value: "100%", label: "Track Proven", icon: <FaCogs className="text-cyan-400" /> }
  ];

  const team = [
    {
      name: "Mike Johnson",
      role: "Chief Technician",
      bio: "Former MotoGP crew chief with 12 years factory team experience",
      specialty: "Engine Performance"
    },
    {
      name: "Sarah Chen",
      role: "Suspension Specialist",
      bio: "WSBK championship-winning suspension engineer",
      specialty: "Chassis Dynamics"
    },
    {
      name: "Carlos Mendez",
      role: "Race Director",
      bio: "Organizer of national superbike series for 8 seasons",
      specialty: "Track Strategy"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
            RACE-BRED HERITAGE
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From the track to your garage - championship-winning expertise since 2008
          </p>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-24 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-cyan-500/10 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <p className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</p>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                ENGINEERED FOR THE CHECKERED FLAG
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Founded in the pits of Daytona, our team brings factory-level expertise to privateer racers and track enthusiasts. What began as a passion project for two former pro mechanics has grown into the premier race bike specialist on the West Coast.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We don't just service motorcycles - we develop winning machines. Every bike that leaves our workshop carries the same attention to detail as our championship-winning race bikes.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-md shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              OUR RACING HISTORY
            </button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <img 
                src="/race-team.jpg" 
                alt="Race team in pit lane" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-cyan-500 text-black px-4 py-2 rounded-md font-bold text-sm rotate-3 shadow-lg">
              SINCE 2008
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              MEET THE PIT CREW
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="mb-4 relative overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={`/team-${index+1}.jpg`} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-cyan-400 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-3">{member.bio}</p>
                <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
                  <FaUserTie />
                  <span>Specialty: {member.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facility CTA */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-3 text-white">TOUR OUR RACE FACILITY</h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            See behind the scenes where we prepare championship-winning machines
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-md shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              BOOK A TOUR
            </button>
            <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-md transition-all duration-300">
              VIRTUAL TOUR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;