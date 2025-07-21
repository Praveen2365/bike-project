import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; 
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./pages/Layout/Navbar";
import Footer from "./pages/Layout/Footer";
import Contact from "./pages/Contact/Contact";
import Brands from "./pages/Brands/Components/Brandssection";
import Service from "./pages/Brands/Components/service";
import Services from "./pages/services/services";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow bg-gray-50 text-gray-900">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/service" element={<Service />} />
            <Route path="/services" element={<Services />} />
            
          </Routes>
        </main>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
