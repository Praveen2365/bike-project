import React from 'react';
import bikePhoto from "../../../assets/image/photo1.jpg";

const HomeSection = () => {
  return (
    <>
      {/* First Section - Hero with Dynamic Background */}
      <section
        className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-20 py-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #111827 0%, #1e293b 100%)`,
        }}
      >
        {/* Animated Circuit Board Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path 
              d="M0,800 L1200,200 L1200,800 L0,800 Z" 
              fill="url(#circuitGradient)" 
              stroke="#3b82f6" 
              strokeWidth="2"
              strokeDasharray="10 5"
            />
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Bike Silhouettes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute opacity-5"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              }}
            >
              <svg viewBox="0 0 100 50">
                <path d="M10,25 Q30,5 50,25 T90,25" stroke="#3b82f6" fill="transparent" />
              </svg>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            RIDING INTO THE FUTURE
            <br />
            WITH <span className="text-white">MOTOR BIKES</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
            Our futuristic bike collection merges cutting-edge technology with sleek design,
            promising an unparalleled ride that transcends traditional boundaries.
          </p>
          <button className="relative overflow-hidden group border-2 border-blue-500 px-8 py-3 rounded-full text-blue-400 font-medium hover:text-white transition-all duration-300">
            <span className="relative z-10">SEE BIKES</span>
            <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-1"></span>
          </button>
        </div>

        <div className="w-full max-w-5xl flex justify-between px-8 absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          {[
            { value: "1200", label: "CC ENGINE BIKES" },
            { value: "450", label: "KM/H TOP SPEED" },
            { value: "360", label: "HORSE POWER" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-4xl font-bold text-white mb-1 relative inline-block">
                {stat.value}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </p>
              <p className="text-sm uppercase text-gray-400 tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] p-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-blue-600 filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-red-600 filter blur-[100px] opacity-20"></div>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto relative z-10">
          <div className="md:w-1/2 space-y-8 pr-0 md:pr-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              WE ENGINEER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">PERFORMANCE</span>
              <span className="block mt-4">THAT REDEFINES THE RIDE</span>
            </h1>
            
            <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-full hover:text-white transition-all duration-300 font-medium">
              <span className="relative z-10">EXPLORE MORE</span>
              <span className="text-xl transform group-hover:rotate-45 transition-transform duration-300">→</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1"></span>
            </button>
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 mt-12 md:mt-0 space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Precision-crafted machines that blend raw power with elegant design. Our obsession with detail creates motorcycles that don't just perform—they dominate.
            </p>
            
            {/* Stats Grid with Hover Effects */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10K+", desc: "Elite riders worldwide", color: "from-blue-400 to-blue-600" },
                { value: "4.9★", desc: "Customer satisfaction", color: "from-yellow-400 to-yellow-600" },
                { value: "#1", desc: "In performance tests", color: "from-red-400 to-red-600" },
                { value: "8+", desc: "World championships", color: "from-purple-400 to-purple-600" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-gray-900 bg-opacity-70 rounded-xl border border-gray-800 hover:border-transparent transition-all group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-1`}></div>
                  <p className={`text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-gray-300 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Speed Lines */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                animation: `speedLine ${Math.random() * 3 + 2}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes speedLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
      `}</style>
    </>
  );
};

export default HomeSection;