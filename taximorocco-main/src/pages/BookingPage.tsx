import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, PhoneCall, Users, Check, X, Phone } from 'lucide-react';

const BookingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Réservation | Grand Taxi Rabat';
  }, []);

  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    name: '',
    phone: '',
    email: '',
    specialRequests: '',
    acceptTerms: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-secondary-500 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Réservez votre <span className="text-primary-500">Grand Taxi</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-200"
            >
              Un service simple et rapide pour planifier vos déplacements à Rabat et dans les villes voisines.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="container-custom">
          {formSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={36} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-secondary-800 mb-4">Réservation Reçue!</h2>
              <p className="text-gray-600 text-lg mb-6">
                Merci pour votre réservation. Nous vous contacterons très rapidement pour confirmer votre trajet.
              </p>
              <p className="font-semibold text-secondary-700 mb-8">
                Un membre de notre équipe vous appellera au {formData.phone} dans les plus brefs délais.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="btn-primary"
              >
                Faire une autre réservation
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                  <h2 className="text-2xl font-bold mb-6">Formulaire de réservation</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <MapPin size={20} className="mr-2 text-primary-500" />
                        Détails du trajet
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
                            Lieu de départ
                          </label>
                          <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="input"
                            placeholder="Ex: Agdal, Rabat"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-1">
                            Destination
                          </label>
                          <input
                            type="text"
                            id="dropoffLocation"
                            name="dropoffLocation"
                            value={formData.dropoffLocation}
                            onChange={handleChange}
                            className="input"
                            placeholder="Ex: Aéroport Rabat-Salé"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Calendar size={20} className="mr-2 text-primary-500" />
                        Date et heure
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      
                      <div className="mt-4">
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre de passagers
                        </label>
                        <select
                          id="passengers"
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="input"
                          required
                        >
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'passager' : 'passagers'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <PhoneCall size={20} className="mr-2 text-primary-500" />
                        Vos coordonnées
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Nom complet
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input"
                            placeholder="Votre nom"
                            required
                          />
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
                            placeholder="+212 600-000000"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email (optionnel)
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input"
                            placeholder="votre.email@exemple.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                        Demandes spéciales (optionnel)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={3}
                        className="input"
                        placeholder="Informations complémentaires sur votre trajet..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleChange}
                          className="mt-1 mr-2"
                          required
                        />
                        <span className="text-sm text-gray-700">
                          J'accepte que Grand Taxi Rabat me contacte par téléphone concernant ma réservation.
                        </span>
                      </label>
                    </div>
                    
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Réserver maintenant
                    </button>
                  </form>
                </div>
              </motion.div>
              
              {/* Sidebar */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Comment ça marche</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-800 mb-1">Remplissez le formulaire</h4>
                        <p className="text-sm text-gray-600">
                          Indiquez votre trajet, la date, l'heure et vos coordonnées.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-800 mb-1">Nous vous appelons</h4>
                        <p className="text-sm text-gray-600">
                          Un membre de notre équipe vous contactera rapidement pour confirmer.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-800 mb-1">Votre taxi arrive</h4>
                        <p className="text-sm text-gray-600">
                          Notre chauffeur sera à l'heure au lieu de rendez-vous convenu.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Besoin d'aide?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Pour les réservations urgentes ou les questions spécifiques, n'hésitez pas à nous appeler directement.
                    </p>
                    <a 
                      href="tel:+212600000000" 
                      className="btn-secondary w-full flex items-center justify-center"
                    >
                      <Phone size={18} className="mr-2" />
                      +212 600-000000
                    </a>
                  </div>
                </div>
                
                <div className="bg-primary-500/10 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-semibold mb-4">Avantages de la réservation</h3>
                  <ul className="space-y-3">
                    {[
                      'Garantie de disponibilité',
                      'Pas d\'attente lors de l\'embarquement',
                      'Prix fixe et transparent',
                      'Véhicule adapté à vos besoins',
                      'Chauffeur qui vous attend à l\'heure convenue',
                    ].map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingPage;