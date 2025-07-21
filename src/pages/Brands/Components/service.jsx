import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'; 

// Import all bike images (you would need to add these to your assets)
import service3d1 from "../../../assets/image/bg1.png";
import service3d2 from "../../../assets/image/bg2.png";
import service3d3 from "../../../assets/image/bg3.png";
import service3d4 from "../../../assets/image/bg4.png";
import service3d5 from "../../../assets/image/bg5.png";
import helmetImg from "../../../assets/image/hl.png";
import jacketImg from "../../../assets/image/je.png";
import tireImg from "../../../assets/image/sh.png";
import glovesImg from "../../../assets/image/cl.png";
import yamaha from "../../../assets/image/brands/y1.png"
import yamaha1 from "../../../assets/image/brands/y2.png"
import yamaha2 from "../../../assets/image/brands/y3.png"
import yamaha3 from "../../../assets/image/brands/y4.png"
import yamaga4 from "../../../assets/image/brands/y5.png"
import d1 from "../../../assets/image/brands/d1.png"
import d2 from "../../../assets/image/brands/d2.png"
import d3 from "../../../assets/image/brands/d3.png"
import d4 from "../../../assets/image/brands/d4.png"
import d5 from "../../../assets/image/brands/d5.png"
import HARLEY from "../../../assets/image/brands/h1.png"
import HARLEY1 from "../../../assets/image/brands/h2.png"
import HARLEY2 from "../../../assets/image/brands/h3.png"




// Bike models for each brand
const brandBikeModels = {
  'HARLEY-DAVIDSON': [
    { 
      id: 1, 
      name: "Sportster S", 
      specs: "1250CC", 
      power: "121 HP", 
      torque: "94 lb-ft",
      warranty: "2 Years",
      speed: "140 mph",
      battery: "N/A",
      image: HARLEY,
      price: "$15,999"
    },
    { 
      id: 2, 
      name: "Fat Boy", 
      specs: "1868CC", 
      power: "86 HP", 
      torque: "110 lb-ft",
      warranty: "2 Years",
      speed: "110 mph",
      battery: "N/A",
      image: HARLEY1,
      price: "$21,999"
    },
    { 
      id: 3, 
      name: "Road Glide", 
      specs: "1868CC", 
      power: "93 HP", 
      torque: "119 lb-ft",
      warranty: "2 Years",
      speed: "115 mph",
      battery: "N/A",
      image: HARLEY2,
      price: "$26,999"
    },
    { 
      id: 4, 
      name: "LiveWire", 
      specs: "Electric", 
      power: "105 HP", 
      torque: "86 lb-ft",
      warranty: "5 Years",
      speed: "110 mph",
      battery: "3.5hr Charge",
      image: service3d4,
      price: "$22,799"
    },
    { 
      id: 5, 
      name: "Pan America", 
      specs: "1252CC", 
      power: "150 HP", 
      torque: "94 lb-ft",
      warranty: "2 Years",
      speed: "130 mph",
      battery: "N/A",
      image: service3d5,
      price: "$17,699"
    }
  ],
  'DUCATI': [
    { 
      id: 1, 
      name: "Panigale V4", 
      specs: "1103CC", 
      power: "214 HP", 
      torque: "91 lb-ft",
      warranty: "2 Years",
      speed: "186 mph",
      battery: "N/A",
      image: d1,
      price: "$24,395"
    },
    { 
      id: 2, 
      name: "Monster", 
      specs: "937CC", 
      power: "111 HP", 
      torque: "69 lb-ft",
      warranty: "2 Years",
      speed: "143 mph",
      battery: "N/A",
      image: d2,
      price: "$12,995"
    },
    { 
      id: 3, 
      name: "Multistrada V4", 
      specs: "1158CC", 
      power: "170 HP", 
      torque: "92 lb-ft",
      warranty: "2 Years",
      speed: "155 mph",
      battery: "N/A",
      image: d3,
      price: "$20,295"
    },
    { 
      id: 4, 
      name: "Diavel", 
      specs: "1262CC", 
      power: "162 HP", 
      torque: "95 lb-ft",
      warranty: "2 Years",
      speed: "155 mph",
      battery: "N/A",
      image: d4,
      price: "$21,295"
    },
    { 
      id: 5, 
      name: "Scrambler", 
      specs: "803CC", 
      power: "73 HP", 
      torque: "49 lb-ft",
      warranty: "2 Years",
      speed: "115 mph",
      battery: "N/A",
      image: d5,
      price: "$9,095"
    }
  ],
  'YAMAHA': [
    { 
      id: 1, 
      name: "YZF-R1", 
      specs: "998CC", 
      power: "198 HP", 
      torque: "83 lb-ft",
      warranty: "1 Year",
      speed: "186 mph",
      battery: "N/A",
      image: yamaha,
      price: "$17,999"
    },
    { 
      id: 2, 
      name: "MT-09", 
      specs: "890CC", 
      power: "119 HP", 
      torque: "68 lb-ft",
      warranty: "1 Year",
      speed: "135 mph",
      battery: "N/A",
      image: yamaha1,
      price: "$9,499"
    },
    { 
      id: 3, 
      name: "Ténéré 700", 
      specs: "689CC", 
      power: "72 HP", 
      torque: "50 lb-ft",
      warranty: "1 Year",
      speed: "115 mph",
      battery: "N/A",
      image: yamaha2,
      price: "$10,299"
    },
    { 
      id: 4, 
      name: "Bolt R-Spec", 
      specs: "942CC", 
      power: "65 HP", 
      torque: "59 lb-ft",
      warranty: "1 Year",
      speed: "110 mph",
      battery: "N/A",
      image: yamaha3,
      price: "$8,499"
    },
    { 
      id: 5, 
      name: "WR250F", 
      specs: "250CC", 
      power: "31 HP", 
      torque: "18 lb-ft",
      warranty: "1 Year",
      speed: "85 mph",
      battery: "N/A",
      image: yamaga4,
      price: "$8,599"
    }
  ],
  'HONDA': [
    { 
      id: 1, 
      name: "CBR1000RR-R", 
      specs: "999CC", 
      power: "214 HP", 
      torque: "83 lb-ft",
      warranty: "1 Year",
      speed: "186 mph",
      battery: "N/A",
      image: service3d1,
      price: "$28,500"
    },
    { 
      id: 2, 
      name: "Gold Wing", 
      specs: "1833CC", 
      power: "125 HP", 
      torque: "125 lb-ft",
      warranty: "3 Years",
      speed: "124 mph",
      battery: "N/A",
      image: service3d2,
      price: "$25,600"
    },
    { 
      id: 3, 
      name: "Africa Twin", 
      specs: "1084CC", 
      power: "102 HP", 
      torque: "77 lb-ft",
      warranty: "1 Year",
      speed: "124 mph",
      battery: "N/A",
      image: service3d3,
      price: "$14,399"
    },
    { 
      id: 4, 
      name: "Rebel 1100", 
      specs: "1084CC", 
      power: "86 HP", 
      torque: "72 lb-ft",
      warranty: "1 Year",
      speed: "115 mph",
      battery: "N/A",
      image: service3d4,
      price: "$9,299"
    },
    { 
      id: 5, 
      name: "CRF300L", 
      specs: "286CC", 
      power: "27 HP", 
      torque: "19 lb-ft",
      warranty: "1 Year",
      speed: "85 mph",
      battery: "N/A",
      image: service3d5,
      price: "$5,249"
    }
  ],
  'KAWASAKI': [
    { 
      id: 1, 
      name: "Ninja H2", 
      specs: "998CC", 
      power: "231 HP", 
      torque: "104 lb-ft",
      warranty: "1 Year",
      speed: "209 mph",
      battery: "N/A",
      image: service3d1,
      price: "$32,000"
    },
    { 
      id: 2, 
      name: "Z900", 
      specs: "948CC", 
      power: "125 HP", 
      torque: "73 lb-ft",
      warranty: "1 Year",
      speed: "140 mph",
      battery: "N/A",
      image: service3d2,
      price: "$9,399"
    },
    { 
      id: 3, 
      name: "Versys 650", 
      specs: "649CC", 
      power: "68 HP", 
      torque: "47 lb-ft",
      warranty: "1 Year",
      speed: "120 mph",
      battery: "N/A",
      image: service3d3,
      price: "$8,999"
    },
    { 
      id: 4, 
      name: "Vulcan S", 
      specs: "649CC", 
      power: "61 HP", 
      torque: "46 lb-ft",
      warranty: "1 Year",
      speed: "115 mph",
      battery: "N/A",
      image: service3d4,
      price: "$7,299"
    },
    { 
      id: 5, 
      name: "KLX230", 
      specs: "233CC", 
      power: "19 HP", 
      torque: "13 lb-ft",
      warranty: "1 Year",
      speed: "75 mph",
      battery: "N/A",
      image: service3d5,
      price: "$4,799"
    }
  ],
  'BMW MOTORRAD': [
    { 
      id: 1, 
      name: "S 1000 RR", 
      specs: "999CC", 
      power: "205 HP", 
      torque: "83 lb-ft",
      warranty: "3 Years",
      speed: "186 mph",
      battery: "N/A",
      image: service3d1,
      price: "$16,995"
    },
    { 
      id: 2, 
      name: "R 1250 GS", 
      specs: "1254CC", 
      power: "136 HP", 
      torque: "105 lb-ft",
      warranty: "3 Years",
      speed: "140 mph",
      battery: "N/A",
      image: service3d2,
      price: "$17,995"
    },
    { 
      id: 3, 
      name: "R 18", 
      specs: "1802CC", 
      power: "91 HP", 
      torque: "116 lb-ft",
      warranty: "3 Years",
      speed: "111 mph",
      battery: "N/A",
      image: service3d3,
      price: "$17,495"
    },
    { 
      id: 4, 
      name: "F 900 R", 
      specs: "895CC", 
      power: "99 HP", 
      torque: "67 lb-ft",
      warranty: "3 Years",
      speed: "130 mph",
      battery: "N/A",
      image: service3d4,
      price: "$8,995"
    },
    { 
      id: 5, 
      name: "CE 04", 
      specs: "Electric", 
      power: "42 HP", 
      torque: "45 lb-ft",
      warranty: "3 Years",
      speed: "75 mph",
      battery: "4.5hr Charge",
      image: service3d5,
      price: "$11,795"
    }
  ],
  'TRIUMPH': [
    { 
      id: 1, 
      name: "Speed Triple", 
      specs: "1160CC", 
      power: "180 HP", 
      torque: "92 lb-ft",
      warranty: "2 Years",
      speed: "155 mph",
      battery: "N/A",
      image: service3d1,
      price: "$16,000"
    },
    { 
      id: 2, 
      name: "Bonneville T120", 
      specs: "1200CC", 
      power: "80 HP", 
      torque: "77 lb-ft",
      warranty: "2 Years",
      speed: "115 mph",
      battery: "N/A",
      image: service3d2,
      price: "$12,500"
    },
    { 
      id: 3, 
      name: "Tiger 900", 
      specs: "888CC", 
      power: "94 HP", 
      torque: "64 lb-ft",
      warranty: "2 Years",
      speed: "125 mph",
      battery: "N/A",
      image: service3d3,
      price: "$13,500"
    },
    { 
      id: 4, 
      name: "Rocket 3", 
      specs: "2458CC", 
      power: "165 HP", 
      torque: "163 lb-ft",
      warranty: "2 Years",
      speed: "140 mph",
      battery: "N/A",
      image: service3d4,
      price: "$21,900"
    },
    { 
      id: 5, 
      name: "Street Twin", 
      specs: "900CC", 
      power: "65 HP", 
      torque: "59 lb-ft",
      warranty: "2 Years",
      speed: "110 mph",
      battery: "N/A",
      image: service3d5,
      price: "$9,300"
    }
  ],
  'KTM': [
    { 
      id: 1, 
      name: "1290 Super Duke R", 
      specs: "1301CC", 
      power: "180 HP", 
      torque: "103 lb-ft",
      warranty: "1 Year",
      speed: "160 mph",
      battery: "N/A",
      image: service3d1,
      price: "$18,699"
    },
    { 
      id: 2, 
      name: "790 Duke", 
      specs: "799CC", 
      power: "105 HP", 
      torque: "64 lb-ft",
      warranty: "1 Year",
      speed: "140 mph",
      battery: "N/A",
      image: service3d2,
      price: "$9,299"
    },
    { 
      id: 3, 
      name: "390 Adventure", 
      specs: "373CC", 
      power: "43 HP", 
      torque: "27 lb-ft",
      warranty: "1 Year",
      speed: "100 mph",
      battery: "N/A",
      image: service3d3,
      price: "$6,299"
    },
    { 
      id: 4, 
      name: "RC 390", 
      specs: "373CC", 
      power: "44 HP", 
      torque: "27 lb-ft",
      warranty: "1 Year",
      speed: "110 mph",
      battery: "N/A",
      image: service3d4,
      price: "$5,799"
    },
    { 
      id: 5, 
      name: "Freeride E-XC", 
      specs: "Electric", 
      power: "24 HP", 
      torque: "31 lb-ft",
      warranty: "1 Year",
      speed: "50 mph",
      battery: "1.5hr Charge",
      image: service3d5,
      price: "$11,699"
    }
  ],
  'ROYAL ENFIELD': [
    { 
      id: 1, 
      name: "Interceptor 650", 
      specs: "648CC", 
      power: "47 HP", 
      torque: "38 lb-ft",
      warranty: "3 Years",
      speed: "100 mph",
      battery: "N/A",
      image: service3d1,
      price: "$5,999"
    },
    { 
      id: 2, 
      name: "Continental GT", 
      specs: "648CC", 
      power: "47 HP", 
      torque: "38 lb-ft",
      warranty: "3 Years",
      speed: "100 mph",
      battery: "N/A",
      image: service3d2,
      price: "$6,299"
    },
    { 
      id: 3, 
      name: "Himalayan", 
      specs: "411CC", 
      power: "24 HP", 
      torque: "23 lb-ft",
      warranty: "3 Years",
      speed: "80 mph",
      battery: "N/A",
      image: service3d3,
      price: "$4,999"
    },
    { 
      id: 4, 
      name: "Meteor 350", 
      specs: "349CC", 
      power: "20 HP", 
      torque: "20 lb-ft",
      warranty: "3 Years",
      speed: "75 mph",
      battery: "N/A",
      image: service3d4,
      price: "$4,399"
    },
    { 
      id: 5, 
      name: "Classic 350", 
      specs: "349CC", 
      power: "20 HP", 
      torque: "20 lb-ft",
      warranty: "3 Years",
      speed: "75 mph",
      battery: "N/A",
      image: service3d5,
      price: "$4,499"
    }
  ],
  'SUZUKI': [
    { 
      id: 1, 
      name: "Hayabusa", 
      specs: "1340CC", 
      power: "188 HP", 
      torque: "110 lb-ft",
      warranty: "1 Year",
      speed: "186 mph",
      battery: "N/A",
      image: service3d1,
      price: "$18,599"
    },
    { 
      id: 2, 
      name: "GSX-R1000", 
      specs: "999CC", 
      power: "199 HP", 
      torque: "87 lb-ft",
      warranty: "1 Year",
      speed: "186 mph",
      battery: "N/A",
      image: service3d2,
      price: "$15,699"
    },
    { 
      id: 3, 
      name: "V-Strom 650", 
      specs: "645CC", 
      power: "70 HP", 
      torque: "47 lb-ft",
      warranty: "1 Year",
      speed: "120 mph",
      battery: "N/A",
      image: service3d3,
      price: "$9,299"
    },
    { 
      id: 4, 
      name: "Boulevard M109R", 
      specs: "1783CC", 
      power: "125 HP", 
      torque: "118 lb-ft",
      warranty: "1 Year",
      speed: "125 mph",
      battery: "N/A",
      image: service3d4,
      price: "$15,499"
    },
    { 
      id: 5, 
      name: "DR-Z400S", 
      specs: "398CC", 
      power: "39 HP", 
      torque: "26 lb-ft",
      warranty: "1 Year",
      speed: "95 mph",
      battery: "N/A",
      image: service3d5,
      price: "$7,099"
    }
  ]
};

const freeGearItems = [
  { id: 1, name: "Premium Helmet", image: helmetImg },
  { id: 2, name: "Racing Jacket", image: jacketImg },
  { id: 3, name: "Sports Shoes", image: tireImg },
  { id: 4, name: "Sports Gloves", image: glovesImg }
];

const bookingOptions = [
  { id: 1, type: "Online Booking", description: "Schedule a virtual test ride with our expert" },
  { id: 2, type: "Offline Showroom", description: "Visit your nearest dealership" },
  { id: 3, type: "EMI Options", description: "Flexible payment plans starting at 0% interest" }
];

const Service = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Add this for navigation
  const [brandName, setBrandName] = useState("YAMAHA");
  const [currentBike, setCurrentBike] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showGearModal, setShowGearModal] = useState(false);
  const [selectedBookingOption, setSelectedBookingOption] = useState(null);
  const [bikeModels, setBikeModels] = useState([]);

  // Unique colors for each brand
  const brandColors = {
    'HARLEY-DAVIDSON': '#2d1a0e', // Dark brown
    'DUCATI': '#CC0000', // Classic Ducati red
    'YAMAHA': '#003399', // Yamaha blue
    'HONDA': '#E40521', // Honda red
    'KAWASAKI': '#6B0F1A', // Kawasaki green
    'BMW MOTORRAD': '#0066B1', // BMW blue
    'TRIUMPH': '#1E1E1E', // Triumph black
    'KTM': '#FF6600', // KTM orange
    'ROYAL ENFIELD': '#990000', // Royal Enfield red
    'SUZUKI': '#E30613' // Suzuki red
  };

  useEffect(() => {
    if (location.state?.brand) {
      const brand = location.state.brand.toUpperCase();
      setBrandName(brand);
      setBikeModels(brandBikeModels[brand] || []);
    } else {
      setBikeModels(brandBikeModels['YAMAHA']);
    }
  }, [location.state]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (bikeModels.length > 0) {
        setCurrentBike((prev) => (prev + 1) % bikeModels.length);
      }
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [bikeModels]);

  if (bikeModels.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <section className="min-h-screen bg-white text-gray-900 px-4 py-16">
      {/* Previous page button in top left corner */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-24 left-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-300 z-10"
      >
        &larr; Back
      </button>

      {/* Title with action buttons */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <button 
          onClick={() => setShowBookingModal(true)}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg order-1 md:order-none"
        >
          BOOK TEST RIDE
        </button>
        
        <div className="text-center order-3 md:order-none w-full md:w-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">RIDING INTO THE STYLISH</h1>
          <h2 
            className="text-2xl md:text-3xl font-bold"
            style={{ color: brandColors[brandName] || '#000' }} // Apply unique brand color
          >
            WITH {brandName} BIKES
          </h2>
        </div>
        
        <button  
          onClick={() => setShowGearModal(true)}
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg order-2 md:order-none"
        >
          BUY FREE GEAR
        </button>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Choose Booking Option</h3>
            <div className="space-y-4">
              {bookingOptions.map((option) => (
                <div 
                  key={option.id}
                  onClick={() => setSelectedBookingOption(option)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedBookingOption?.id === option.id 
                      ? "border-blue-500 bg-blue-50" 
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <h4 className="font-bold text-lg">{option.type}</h4>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setShowBookingModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  // Handle booking submission
                  setShowBookingModal(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                disabled={!selectedBookingOption}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Free Gear Modal */}
      {showGearModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-4xl w-full">
            <h3 className="text-2xl font-bold mb-6 text-green-700">Free Gear with Purchase</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {freeGearItems.map((gear) => (
                <div key={gear.id} className="text-center">
                  <div className="bg-gray-100 p-4 rounded-lg h-40 flex items-center justify-center">
                    <img 
                      src={gear.image} 
                      alt={gear.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h4 className="mt-3 font-medium">{gear.name}</h4>
                  <p className="text-sm text-green-600 font-bold">FREE</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setShowGearModal(false)}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bike showcase content */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left specs - Technical */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 md:mr-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">{bikeModels[currentBike].specs}</div>
              <div className="text-sm uppercase tracking-wider text-blue-200">ENGINE CAPACITY</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 rounded-xl text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">{bikeModels[currentBike].power}</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">POWER</div>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-xl text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">{bikeModels[currentBike].torque}</div>
              <div className="text-sm uppercase tracking-wider text-red-200">TORQUE</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl text-white shadow-lg">
              <div className="text-3xl font-bold mb-2">{bikeModels[currentBike].price}</div>
              <div className="text-sm uppercase tracking-wider text-purple-200">STARTING PRICE</div>
            </div>
          </div>
        </div>

        {/* Center bike image */}
        <div className="w-full md:w-2/4 mb-8 md:mb-0 flex flex-col items-center">
          <div className="relative w-full max-w-lg">
            <img
              src={bikeModels[currentBike].image}
              alt={`${brandName} ${bikeModels[currentBike].name}`}
              className="w-full h-auto object-contain transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <span className="inline-block bg-black text-white px-6 py-3 rounded-full text-xl font-bold shadow-xl">
                {bikeModels[currentBike].name}
              </span>
            </div>
          </div>

          {/* Number navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {bikeModels.map((bike, index) => (
              <button
                key={bike.id}
                onClick={() => setCurrentBike(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                  index === currentBike
                    ? "bg-black text-white transform scale-110 shadow-lg"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {bike.id}
              </button>
            ))}
          </div>
        </div>

        {/* Right specs - Features */}
        <div className="w-full md:w-1/4 mt-8 md:mt-0 md:ml-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">{bikeModels[currentBike].warranty}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">WARRANTY</div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-green-100 shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">{bikeModels[currentBike].speed}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">TOP SPEED</div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-yellow-100 shadow-sm">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{bikeModels[currentBike].battery}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">BATTERY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;