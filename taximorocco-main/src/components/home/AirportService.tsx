import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Clock, CreditCard, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AirportService: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Service de Transport Aéroport</h2>
            <p className="text-gray-600 text-lg mb-8">
              Voyagez en toute tranquillité avec notre service de transport aéroport premium. Nous assurons vos transferts depuis et vers l'aéroport de Rabat-Salé avec un service ponctuel et professionnel.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mr-4">
                  <Clock className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Suivi des Vols</h3>
                  <p className="text-gray-600">
                    Nous surveillons votre vol pour assurer une prise en charge ponctuelle, même en cas de retard.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mr-4">
                  <CreditCard className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prix Fixe</h3>
                  <p className="text-gray-600">
                    Tarifs transparents sans surprises, incluant le temps d'attente et l'assistance bagages.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Service Porte-à-Porte</h3>
                  <p className="text-gray-600">
                    Transport direct de l'aéroport à votre destination finale sans escales.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/booking" className="btn-primary">
                Réserver un Transfer
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Service aéroport"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Plane className="text-primary-500 mr-2" />
                <span className="font-semibold">Service 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AirportService;