import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMotorcycle, 
  FaSearch, 
  FaChevronDown, 
  FaEye, 
  FaStar, 
  FaTimes 
} from "react-icons/fa";

// Import all bike images
import HarleyDavidson from '../../../assets/image/all/Harley-Davidson.png';
import Ducati from '../../../assets/image/all/DUCATI.jpg';
import Honda from '../../../assets/image/all/Honda.jpg';
import Yamaha from '../../../assets/image/all/Yamaha.jpg';
import Kawasaki from '../../../assets/image/all/Kawasaki.jpeg';
import BMW from '../../../assets/image/all/BMW.jpeg';
import Triumph from '../../../assets/image/all/Triumph.jpeg';
import KTM from '../../../assets/image/all/KTM.jpeg';
import Royal from '../../../assets/image/all/Royal Enfield.jpeg';
import Suzuki from '../../../assets/image/all/Suzuki.jpeg';

// Create a mapping between bike names and their images
const bikeImageMap = {
  "Harley-Davidson": HarleyDavidson,
  "Ducati": Ducati,
  "Yamaha": Yamaha,
  "Honda": Honda,
  "Kawasaki": Kawasaki,
  "BMW Motorrad": BMW,
  "Triumph": Triumph,
  "KTM": KTM,
  "Royal Enfield": Royal,
  "Suzuki": Suzuki
};

const BikeListings = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const brandColors = [
    "from-cyan-400 to-blue-500",
    "from-purple-400 to-indigo-500",
    "from-green-400 to-teal-500",
    "from-yellow-400 to-amber-500",
    "from-pink-400 to-rose-500",
    "from-blue-400 to-cyan-500",
    "from-indigo-400 to-purple-500",
    "from-emerald-400 to-green-500",
    "from-amber-400 to-orange-500",
    "from-rose-400 to-pink-500",
  ];

  const bikeBrands = [
    {
      id: 1,
      name: "Harley-Davidson",
      initials: "HD",
      description: "American icon known for heavyweight motorcycles",
      price: "258,000",
      type: "Cruiser",
      rating: 4.8,
      image: bikeImageMap["Harley-Davidson"]
    },
    {
      id: 2,
      name: "Ducati",
      initials: "DU",
      description: "Italian luxury performance motorcycles",
      price: "279,000",
      type: "Sport",
      rating: 4.9,
      image: bikeImageMap["Ducati"]
    },
    {
      id: 3,
      name: "Yamaha",
      initials: "YA",
      description: "Japanese brand with diverse motorcycle lineup",
      price: "239,000",
      type: "Standard",
      rating: 4.5,
      image: bikeImageMap["Yamaha"]
    },
    {
      id: 4,
      name: "Honda",
      initials: "HO",
      description: "World leader in motorcycle manufacturing",
      price: "175,000",
      type: "Standard",
      rating: 4.6,
      image: bikeImageMap["Honda"]
    },
    {
      id: 5,
      name: "Kawasaki",
      initials: "KA",
      description: "Innovative Japanese motorcycles and engines",
      price: "495,000",
      type: "Sport",
      rating: 4.4,
      image: bikeImageMap["Kawasaki"]
    },
    {
      id: 6,
      name: "BMW Motorrad",
      initials: "BM",
      description: "German precision engineering for motorcycles",
      price: "999,000",
      type: "Touring",
      rating: 4.7,
      image: bikeImageMap["BMW Motorrad"]
    },
    {
      id: 7,
      name: "Triumph",
      initials: "TR",
      description: "British classic and modern motorcycles",
      price: "754,000",
      type: "Classic",
      rating: 4.6,
      image: bikeImageMap["Triumph"]
    },
    {
      id: 8,
      name: "KTM",
      initials: "KT",
      description: "Ready to Race - Austrian performance bikes",
      price: "229,000",
      type: "Off-road",
      rating: 4.5,
      image: bikeImageMap["KTM"]
    },
    {
      id: 9,
      name: "Royal Enfield",
      initials: "RE",
      description: "Classic Indian motorcycles with British heritage",
      price: "258,000",
      type: "Classic",
      rating: 4.3,
      image: bikeImageMap["Royal Enfield"]
    },
    {
      id: 10,
      name: "Suzuki",
      initials: "SU",
      description: "Japanese motorcycles known for reliability",
      price: "249,000",
      type: "Standard",
      rating: 4.4,
      image: bikeImageMap["Suzuki"]
    },
  ];

  const handleBrandClick = (brandName) => {
    navigate("/service", { state: { brand: brandName } });
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const filteredBikes = bikeBrands.filter((bike) => {
    const matchesSearch =
      bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bike.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? bike.type === selectedType : true;
    return matchesSearch && matchesType;
  });

  const sortedBikes = [...filteredBikes].sort((a, b) => {
    if (sortOption === "price-low") {
      return (
        parseFloat(a.price.replace(/[^0-9.]/g, "")) -
        parseFloat(b.price.replace(/[^0-9.]/g, ""))
      );
    } else if (sortOption === "price-high") {
      return (
        parseFloat(b.price.replace(/[^0-9.]/g, "")) -
        parseFloat(a.price.replace(/[^0-9.]/g, ""))
      );
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const bikeTypes = [...new Set(bikeBrands.map((bike) => bike.type))];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
            PREMIUM BIKE COLLECTION
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our curated selection of the world's finest motorcycles
          </p>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-24 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Type Filter */}
          <div className="relative group">
            <select
              className="appearance-none w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-4 pr-10 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 group-hover:border-cyan-400 transition-colors duration-300"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              {bikeTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
              <FaChevronDown className="h-4 w-4" />
            </div>
          </div>

          {/* Sort Filter */}
          <div className="relative group">
            <select
              className="appearance-none w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-4 pr-10 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 group-hover:border-cyan-400 transition-colors duration-300"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
              <option value="rating">Rating: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
              <FaChevronDown className="h-4 w-4" />
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div
            className={`relative group transition-all duration-300 ${
              isSearchFocused ? "ring-2 ring-cyan-500 rounded-lg" : ""
            }`}
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
              <FaSearch className="h-5 w-5" />
            </div>
            <input
              type="text"
              className="block w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-10 text-white leading-5 placeholder-gray-400 focus:outline-none focus:ring-0 group-hover:border-cyan-400 transition-colors duration-300"
              placeholder="Search bikes by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaTimes className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Bike Listings with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedBikes.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                layout
                className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden group h-full flex flex-col"
                onClick={() => handleBrandClick(brand.name)}
              >
                {/* Full-Width Image Cover */}
                <motion.div layout className="relative h-64 w-full overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-600/90 text-sm font-semibold text-white">
                      <FaStar className="mr-1" /> {brand.rating}
                    </span>
                  </div>
                </motion.div>

                {/* Bike Info */}
                <motion.div layout className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r ${brandColors[index]} text-white font-bold text-lg`}
                    >
                      {brand.initials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-gray-300 mt-1">
                        {brand.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold text-white-500">
                      <span className="text-2xl font-bold text-cyan-400">
                        Start price
                      </span>
                      <br></br>₹{brand.price}
                    </span>
                    <button
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBrandClick(brand.name);
                      }}
                    >
                      <FaEye className="mr-2" />
                      View Bike
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {sortedBikes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="mx-auto h-24 w-24 text-gray-500 mb-4">
              <FaMotorcycle className="w-full h-full opacity-50" />
            </div>
            <h3 className="text-xl font-medium text-gray-300">
              No bikes found
            </h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or filter criteria
            </p>
            <button
              className="mt-6 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-300"
              onClick={() => {
                setSearchTerm("");
                setSelectedType("");
                setSortOption("");
              }}
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        {sortedBikes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">
              LOOKING FOR SOMETHING SPECIAL?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Contact our specialists for custom builds or rare motorcycle
              models
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              CONTACT OUR SPECIALISTS
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BikeListings;