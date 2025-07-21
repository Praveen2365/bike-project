import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our team is ready to assist you with any inquiries about our premium collection
          </p>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-24 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">CONTACT DETAILS</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-full">
                    <FaPhone className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Phone</h4>
                    <p className="text-lg font-semibold">+1 (555) 888-7777</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-full">
                    <FaEnvelope className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Email</h4>
                    <p className="text-lg font-semibold">info@premiumbikes.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-full">
                    <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Showroom</h4>
                    <p className="text-lg font-semibold">123 Motor Avenue</p>
                    <p className="text-gray-400">Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-full">
                    <FaClock className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Hours</h4>
                    <p className="text-lg font-semibold">Mon-Fri: 9AM - 7PM</p>
                    <p className="text-gray-400">Sat-Sun: 10AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">FOLLOW US</h3>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((platform) => (
                  <button 
                    key={platform}
                    className="px-5 py-2 bg-gray-700 hover:bg-cyan-600 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-cyan-400">{platform.charAt(0)}</span>
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">SEND US A MESSAGE</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Praveen"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="abcd@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Inquiry about..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-300">
                  Subscribe to our newsletter
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-md shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;