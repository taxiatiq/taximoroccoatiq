import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div 
              className="relative h-64 lg:h-auto bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1600')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/70 to-secondary-500/50" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2 text-white">Voyagez facilement à Rabat</h3>
                  <p className="text-gray-100">
                    Service disponible 24/7, 365 jours par an
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                Prêt à réserver votre prochain trajet?
              </h3>
              <p className="text-gray-600 mb-8">
                Choisissez l'option qui vous convient le mieux. Nous vous répondrons dans les plus brefs délais pour confirmer votre réservation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary flex-1 flex justify-center items-center">
                  <CalendarCheck size={20} className="mr-2" />
                  Réserver en ligne
                </Link>
                <a href="tel:+212600000000" className="btn-secondary flex-1 flex justify-center items-center">
                  <Phone size={20} className="mr-2" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;