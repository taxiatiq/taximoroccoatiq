import React from 'react';
import { Clock, ThumbsUp, CreditCard, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-t-4 border-primary-500"
    >
      <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
        <div className="text-primary-500">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServiceFeatures: React.FC = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: 'Ponctualité garantie',
      description: 'Nos chauffeurs sont toujours à l\'heure pour que vous puissiez respecter votre emploi du temps.',
    },
    {
      icon: <ThumbsUp size={24} />,
      title: 'Confort et qualité',
      description: 'Voyagez dans des véhicules propres, climatisés et bien entretenus pour un maximum de confort.',
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Tarifs transparents',
      description: 'Prix fixes et sans surprises. Pas de frais cachés, vous savez exactement ce que vous payez.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Sécurité prioritaire',
      description: 'Chauffeurs professionnels, véhicules inspectés régulièrement pour votre sécurité.',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Pourquoi choisir GrandTaxi Rabat?</h2>
          <p className="text-gray-600 text-lg">
            Notre priorité est de vous offrir un service de transport fiable, confortable et sécurisé dans toute la région de Rabat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;