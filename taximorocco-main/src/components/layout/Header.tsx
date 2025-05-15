import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { title: 'Accueil', path: '/' },
    { title: 'À Propos', path: '/about' },
    { title: 'Réservation', path: '/booking' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-secondary-500"
            >
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <rect x="3" y="11" width="18" height="8" rx="2" />
              <circle cx="7" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
            </svg>
          </div>
          <div className="px-2 py-1 rounded-md">
            <span className="font-bold text-lg sm:text-xl text-secondary-500">Taxi</span>{' '}
            <span className="font-bold text-lg sm:text-xl text-primary-500">Morocco</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition hover:text-primary-500 ${
                location.pathname === link.path
                  ? 'text-primary-500 font-semibold'
                  : 'text-secondary-500'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="tel:+212663151212"
            className="flex items-center gap-2 bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition"
          >
            <Phone size={16} />
            <span className="font-medium">+212 663-151212</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-secondary-600 hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden py-4"
          >
            <div className="container-custom flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 px-4 rounded-lg ${
                    location.pathname === link.path
                      ? 'bg-primary-100 text-primary-500 font-semibold'
                      : 'text-secondary-500 hover:bg-gray-100'
                  }`}
                  onClick={closeMenu}
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex items-center mt-2 pt-2 border-t border-gray-200">
                <LanguageSwitcher />
                <a
                  href="tel:+212663151212"
                  className="flex items-center gap-2 bg-secondary-500 text-white px-4 py-2 rounded-lg ml-auto"
                >
                  <Phone size={16} />
                  <span className="font-medium">+212 663-151212</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;