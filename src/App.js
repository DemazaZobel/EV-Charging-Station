import React, { useState } from 'react';
import Header from "./components/Header";
import Hero from './components/Hero';
import Cards from './components/Cards';
import Map from './components/Map';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

export default function Home() {
  const [activeTab, setActiveTab] = useState('stations');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-white to-gray-50">
      {/* Luxury Navbar with Mobile Menu */}
      <Header/>

      {/* Hero Section with Animated Gradient */}
      <section id="home" className="relative  text-center overflow-hidden">
        <Hero/>
      </section>
      <section id="about" className="py-20 px-4 relative">
       <About />
      </section>

      {/* How It Works with Animated Cards */}
      <section className="py-20 px-4 text-center bg-white">
        <Cards />
      </section>

      {/* Interactive Map Section */}
      <section id="stations" className="py-20 px-4 bg-gray-50">
        <Map />
      </section>

      {/* Pricing Cards with Toggle */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <Price />
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <Testimonials />
      </section>

      {/* Contact Section with Floating Form */}
      <section id="contact" className="py-20 px-4 relative">
       <Contact />
      </section>
      

      {/* Sleek Footer with Newsletter */}
      <footer className="bg-gray-900 text-gray-400 pt-20 pb-12 px-4">

      <Footer />

      </footer>
      
    </div>
  );
}