import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceAreas: React.FC = () => {
  const cities = [
    { name: 'Rabat', description: 'Notre base principale avec service complet dans tous les quartiers' },
    { name: 'Salé', description: 'Service régulier entre Salé et Rabat, tous les quartiers desservis' },
    { name: 'Témara', description: 'Trajets quotidiens et service à la demande depuis/vers Rabat' },
    { name: 'Kénitra', description: 'Transport inter-urbain avec service porte-à-porte' },
    { name: 'Casablanca', description: 'Service longue distance disponible sur réservation' },
    { name: 'Aéroport Rabat-Salé', description: 'Service spécial aéroport avec suivi des vols' },
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="mb-4">Zones desservies</h2>
            <p className="text-gray-600 text-lg mb-6">
              Notre service de taxi couvre Rabat et sa région. Que vous ayez besoin d'un taxi dans la ville ou pour vous rendre dans une ville voisine, nous sommes là pour vous.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cities.map((city, index) => (
                <div 
                  key={index} 
                  className="flex items-start"
                >
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800">{city.name}</h4>
                    <p className="text-sm text-gray-600">{city.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="/booking" className="btn-primary">
                Réserver un trajet
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-auto"
          >
            {/* Map image */}
            <img 
              src="https://images.pexels.com/photos/27115314/pexels-photo-27115314/free-photo-of-ville-monument-nuit-horizon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Carte de Rabat et ses environs" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;