import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Booking from "./pages/Booking";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);

  if (loading) {
    return <Loader />;
  }
  return (
    
    <BrowserRouter>
      <ScrollToTop />

      <div className="bg-gradient-to-br from-black via-[#140000] to-[#2b0000] min-h-screen text-[#F5F1E8] overflow-hidden">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />

      </div>
      <FloatingWhatsApp />

    </BrowserRouter>
  );
}