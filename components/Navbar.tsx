'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-extrabold text-white hover:text-blue-400 transition-colors">
              <span className="text-blue-400">STARA</span> GROUP
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#overview" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 border-transparent hover:border-blue-400">
                Overview
              </a>
              <a href="#products" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 border-transparent hover:border-blue-400">
                Products
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 border-transparent hover:border-blue-400">
                Contact
              </a>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-500/50">
                Get Quote
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#overview"
              className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-semibold uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              Overview
            </a>
            <a
              href="#products"
              className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-semibold uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-semibold uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
