import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-blue-700">SK</a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.slice(0, 6).map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${scrolled ? 'text-gray-800' : 'text-gray-700'}`}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => setShowResume(true)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${scrolled ? 'text-gray-800' : 'text-gray-700'}`}
              >
                Resume
              </button>
              <a 
                href="#contact"
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${scrolled ? 'text-gray-800' : 'text-gray-700'}`}
              >
                Contact
              </a>
            </nav>

            {/* Mobile Navigation Button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-gray-700'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-gray-700'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-3">
              {navLinks.slice(0, 6).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 font-medium hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setShowResume(true);
                  setIsOpen(false);
                }}
                className="block text-gray-700 font-medium hover:text-blue-600 w-full text-left"
              >
                Resume
              </button>
              <a
                href="#contact"
                className="block text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Resume Modal */}
      {showResume && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setShowResume(false)}
        >
          <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] relative">
            <button 
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <iframe
              src="/ShraddhaCV.pdf"
              title="Resume"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;