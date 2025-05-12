import React, { useState } from "react";
import logo from "../../assets/img/Frame2.svg";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "menu", label: "Our Menu" },
    { href: "foods", label: "Foods" },
    { href: "about", label: "About us" },
    { href: "contact", label: "Contact us" },
  ];

  return (
    <nav className="top-0 left-0 right-0 bg-gradient-to-r from-[#fff7f0] to-[#fffdf9] z-50 border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-red-500">
            Food<span className="text-orange-400">ie</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative transition-all after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-red-500 after:transition-all ${
                activeLink === link.href
                  ? "text-red-500 after:w-full"
                  : "text-gray-700 hover:text-red-500 after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#login"
            className="px-5 py-2 border border-red-500 text-red-500 rounded-full text-sm font-semibold hover:bg-red-50 transition"
          >
            Login
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
              className={`block text-base font-medium ${
                activeLink === link.href
                  ? "text-red-500"
                  : "text-gray-700 hover:text-red-500"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#login"
            className="block text-center w-full px-5 py-2 border border-red-500 text-red-500 rounded-full text-sm font-semibold hover:bg-red-50 transition"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
