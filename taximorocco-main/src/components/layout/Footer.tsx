import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-500 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
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
              <div>
                <span className="font-bold text-lg text-white">GrandTaxi</span>
                <span className="font-bold text-lg text-primary-500">Rabat</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 text-sm">
              Service de taxi professionnel à Rabat et dans les villes voisines. Réservez votre trajet dès maintenant pour un service rapide et fiable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-500 transition text-sm">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-primary-500 transition text-sm">
                  Réservation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-500 transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Transport urbain</li>
              <li className="text-gray-300 text-sm">Transport interurbain</li>
              <li className="text-gray-300 text-sm">Service aéroport</li>
              <li className="text-gray-300 text-sm">Excursions touristiques</li>
              <li className="text-gray-300 text-sm">Service VIP</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Avenue Mohammed V, Rabat 10000, Maroc
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-500 flex-shrink-0" />
                <a href="tel:+212663151212" className="text-gray-300 hover:text-primary-500 transition text-sm">
                  +212 663-151212
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-500 flex-shrink-0" />
                <a href="mailto:contact@grandtaxirabat.ma" className="text-gray-300 hover:text-primary-500 transition text-sm">
                  contact@grandtaxirabat.ma
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GrandTaxiRabat.ma - Tous droits réservés
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-primary-500 transition">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary-500 transition">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;