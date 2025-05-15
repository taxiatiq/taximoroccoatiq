import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message
    const message = `Nouvelle réservation:\n
Départ: ${formData.pickup}
Destination: ${formData.destination}
Date: ${formData.date}
Heure: ${formData.time}
Téléphone: ${formData.phone}`;

    // Send SMS (you would typically do this through a backend service)
    try {
      // Here you would make an API call to your SMS service
      console.log('Sending reservation:', message);
      alert('Votre réservation a été reçue. Nous vous contacterons bientôt!');
      setFormData({
        pickup: '',
        destination: '',
        date: '',
        time: '',
        phone: '',
      });
    } catch (error) {
      console.error('Error sending reservation:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5835362/pexels-photo-5835362.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/80 to-secondary-500/60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Voyagez en toute <span className="text-primary-500">sérénité</span> au Maroc
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-lg">
              Service de taxi professionnel pour vos déplacements partout au Maroc. Réservez facilement et voyagez confortablement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking" 
                className="btn-primary w-full sm:w-auto"
              >
                Réserver maintenant
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a 
                href="tel:+212663151212" 
                className="btn-outline border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Nous appeler
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <div className="bg-primary-500/10 rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                Réservation rapide
              </h3>
              <p className="text-sm text-gray-600">
                Entrez les détails de votre trajet pour une estimation rapide et une réservation immédiate.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
                  Lieu de départ
                </label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  className="input"
                  placeholder="Ex: Agdal, Rabat"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="input"
                  placeholder="Ex: Aéroport Rabat-Salé"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Heure
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  placeholder="+212 663-151212"
                  required
                />
              </div>
              
              <button type="submit" className="btn-secondary w-full">
                Demander un rappel
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;