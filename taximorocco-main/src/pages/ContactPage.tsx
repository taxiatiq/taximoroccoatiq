import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Grand Taxi Rabat';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Votre message a été envoyé. Nous vous contacterons bientôt!' });
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
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
              Contactez <span className="text-primary-500">GrandTaxi Rabat</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-200"
            >
              Nous sommes là pour répondre à toutes vos questions et vous aider à planifier vos déplacements.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Nos informations de contact</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">123 Avenue Mohammed V, Rabat 10000, Maroc</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+212600000000" className="hover:text-primary-500 transition">
                        +212 600-000000
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@grandtaxirabat.ma" className="hover:text-primary-500 transition">
                        contact@grandtaxirabat.ma
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Heures d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Dimanche: 24h/24, 7j/7</p>
                    <p className="text-gray-600">Service disponible à toute heure</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Besoin d'un taxi rapidement?</h3>
                <p className="text-gray-600 mb-4">
                  Appelez-nous directement pour une réservation immédiate ou utilisez notre formulaire pour une demande moins urgente.
                </p>
                <a 
                  href="tel:+212600000000" 
                  className="btn-primary flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  Appeler maintenant
                </a>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              
              {formStatus && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="votre.email@exemple.com"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="input"
                      placeholder="Comment pouvons-nous vous aider?"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-secondary w-full flex items-center justify-center">
                    <Send size={18} className="mr-2" />
                    Envoyer le message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Où nous trouver</h2>
            <p className="text-gray-600">
              Notre bureau principal est situé au centre de Rabat, facilement accessible depuis toutes les principales artères de la ville.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            {/* Map placeholder - in a real application, you would integrate Google Maps or similar */}
            <img 
              src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Carte de localisation GrandTaxi Rabat" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;