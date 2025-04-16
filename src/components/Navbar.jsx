import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useContext } from "react";
import { FaUser, FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { Context } from "../Context/Context";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isSaleOpen, setIsSaleOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenMobileOpen, setIsMenMobileOpen] = useState(false);
  const [isSaleMobileOpen, setIsSaleMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {openCart,setOpenCart} = useContext(Context)


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeAllDropdowns = () => {
    setIsMenOpen(false);
    setIsSaleOpen(false);
    setIsMobileMenuOpen(false);
    setIsMenMobileOpen(false);
    setIsSaleMobileOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm text-sm mt-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Zeeki Logo"
              className="h-14"
            />
            <span className="text-xl font-serif tracking-wide font-medium">ZEEKI</span>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#" className="hover:text-blue-600">HOME</a>
            <a href="#" className="hover:text-blue-600">NEW ARRIVALS</a>

            {/* MEN */}
            <div className="relative">
              <button
                onClick={() => setIsMenOpen(!isMenOpen)}
                className="flex items-center hover:text-blue-600"
              >
                MEN <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {isMenOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded p-2 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Summer Loafers</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">White Sole Loafers</a>
                </div>
              )}
            </div>

            {/* SALE */}
            <div className="relative">
              <button
                onClick={() => setIsSaleOpen(!isSaleOpen)}
                className="flex items-center text-red-600"
              >
                SALE <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {isSaleOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded p-2 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sale Item 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sale Item 2</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-blue-600">SHOE CARE</a>
            <a href="#" className="hover:text-blue-600">CONTACT US</a>
            <a href="#" className="hover:text-blue-600">TRACK YOUR ORDER</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <FaSearch size={20} className="hidden md:block text-gray-600 cursor-pointer" />
            <FaUser size={20} className="hidden md:block text-gray-600 cursor-pointer" />
            <div className="relative">
              <FaShopify onClick={() => setOpenCart(!openCart)} color="#52872e" size={24} className="text-gray-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-[#52872e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md z-20">
            <div className="px-4 py-2">
              <a href="#" className="block py-3 hover:text-blue-600" onClick={closeAllDropdowns}>HOME</a>
              <a href="#" className="block py-3 hover:text-blue-600" onClick={closeAllDropdowns}>NEW ARRIVALS</a>
              
              {/* MEN */}
              <div className="border-b">
                <button 
                  className="w-full flex justify-between items-center py-3 hover:text-blue-600"
                  onClick={() => setIsMenMobileOpen(!isMenMobileOpen)}
                >
                  MEN <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${isMenMobileOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMenMobileOpen && (
                  <div className="pl-4 pb-2">
                    <a href="#" className="block py-2 hover:text-blue-600" onClick={closeAllDropdowns}>Summer Loafers</a>
                    <a href="#" className="block py-2 hover:text-blue-600" onClick={closeAllDropdowns}>White Sole Loafers</a>
                  </div>
                )}
              </div>

              {/* SALE */}
              <div className="border-b">
                <button 
                  className="w-full flex justify-between items-center py-3 text-red-600"
                  onClick={() => setIsSaleMobileOpen(!isSaleMobileOpen)}
                >
                  SALE <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${isSaleMobileOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSaleMobileOpen && (
                  <div className="pl-4 pb-2">
                    <a href="#" className="block py-2 hover:text-blue-600" onClick={closeAllDropdowns}>Sale Item 1</a>
                    <a href="#" className="block py-2 hover:text-blue-600" onClick={closeAllDropdowns}>Sale Item 2</a>
                  </div>
                )}
              </div>

              <a href="#" className="block py-3 hover:text-blue-600" onClick={closeAllDropdowns}>SHOE CARE</a>
              <a href="#" className="block py-3 hover:text-blue-600" onClick={closeAllDropdowns}>CONTACT US</a>
              <a href="#" className="block py-3 hover:text-blue-600" onClick={closeAllDropdowns}>TRACK YOUR ORDER</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
