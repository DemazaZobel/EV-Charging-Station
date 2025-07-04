import React, { useState, useEffect } from "react";
import burger from "../assets/burger.png";
import closeBurger from "../assets/closeBurger.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('stations');

  const menuItems = ['Home', 'About','Stations', 'Pricing', 'Contact'];

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white/90 backdrop-blur-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-sm gap-10">
      <h1 className="text-2xl ml-0 font-bold bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
        {menuOpen ? "": "EVCharge"}
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 flex">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`hover:text-green-500 transition-all duration-300 font-medium relative group ${
              activeTab === item.toLowerCase()
                ? "text-green-500"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab(item.toLowerCase())}
          >
            {item}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                activeTab === item.toLowerCase()
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        ))}
      </nav>

     {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <img
          src={menuOpen ? closeBurger : burger}
          alt="Toggle menu"
          className="h-6 w-6"
        />
      </button>

{/* Mobile Menu */}
{/* Mobile Menu */}
{menuOpen && (
  <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 overflow-hidden">
    {menuItems.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className={`text-2xl font-medium ${
          activeTab === item.toLowerCase()
            ? "text-green-500"
            : "text-gray-700"
        } hover:text-green-500 transition-colors`}
        onClick={() => {
          setActiveTab(item.toLowerCase());
          setMenuOpen(false);
        }}
      >
        {item}
      </a>
    ))}
  </div>
)}


    </header>
  );
}
