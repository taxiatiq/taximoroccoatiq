import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Car, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'À Propos | Grand Taxi Rabat';
  }, []);

  const stats = [
    { icon: <Users size={24} />, value: '5,000+', label: 'Clients satisfaits' },
    { icon: <Car size={24} />, value: '20+', label: 'Véhicules modernes' },
    { icon: <Calendar size={24} />, value: '7', label: 'Années d\'expérience' },
  ];

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
              À Propos de <span className="text-primary-500">GrandTaxi Rabat</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-200"
            >
              Nous sommes plus qu'un simple service de taxi - nous sommes votre partenaire de confiance pour tous vos déplacements à Rabat et dans les villes voisines.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2018, GrandTaxi Rabat est née de la passion de fournir un service de transport exceptionnel dans la région de Rabat. Notre fondateur, ayant lui-même travaillé comme chauffeur pendant plusieurs années, a identifié les lacunes dans l'industrie du taxi et a décidé de créer un service qui comblerait ces manques.
              </p>
              <p className="text-gray-600 mb-4">
                Nous avons commencé avec seulement 5 véhicules et aujourd'hui, nous sommes fiers de disposer d'une flotte moderne de plus de 20 véhicules et d'une équipe de chauffeurs professionnels dédiés à offrir une expérience de transport de premier ordre.
              </p>
              <p className="text-gray-600">
                Notre mission est simple : rendre vos déplacements aussi confortables, fiables et agréables que possible. Que vous soyez un habitant local ou un visiteur, nous sommes là pour vous servir avec excellence.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Histoire de GrandTaxi Rabat" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-500/10 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-500">{stat.icon}</div>
                </div>
                <h3 className="text-4xl font-bold text-secondary-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-gray-600 text-lg">
              Chaque membre de notre équipe s'engage à respecter ces valeurs fondamentales qui guident notre service quotidien.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fiabilité',
                description: 'Nous respectons toujours nos engagements et sommes là quand vous avez besoin de nous.',
              },
              {
                title: 'Professionnalisme',
                description: 'Nos chauffeurs sont formés pour offrir un service courtois et professionnel en toutes circonstances.',
              },
              {
                title: 'Sécurité',
                description: 'Votre sécurité est notre priorité absolue. Nos véhicules sont régulièrement entretenus et inspectés.',
              },
              {
                title: 'Innovation',
                description: 'Nous cherchons constamment à améliorer notre service et à intégrer les dernières technologies.',
              },
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="mt-1 mr-4">
                  <CheckCircle size={24} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre équipe</h2>
            <p className="text-gray-600 text-lg">
              Rencontrez les personnes qui travaillent dur pour vous offrir un service exceptionnel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Hassan Benjelloun',
                role: 'Fondateur & Directeur',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
              },
              {
                name: 'Fatima Zahra',
                role: 'Responsable Clientèle',
                image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1600',
              },
              {
                name: 'Youssef Amrani',
                role: 'Chef des Opérations',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600',
              },
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;