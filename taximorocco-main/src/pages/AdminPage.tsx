import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

interface BusinessInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

const AdminPage: React.FC = () => {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    phone: '+212 663-151212',
    email: 'contact@taxi-morocco.com',
    address: 'Avenue Mohammed V, Rabat 10000, Maroc',
    workingHours: '24/7',
  });

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to a backend
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-3xl font-bold mb-8">Gestion des Informations</h1>
            
            {saved && (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                Informations mises à jour avec succès!
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={businessInfo.phone}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={businessInfo.email}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse
                  </label>
                  <textarea
                    name="address"
                    value={businessInfo.address}
                    onChange={handleChange}
                    rows={3}
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Heures d'ouverture
                  </label>
                  <input
                    type="text"
                    name="workingHours"
                    value={businessInfo.workingHours}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Save size={18} className="mr-2" />
                  Sauvegarder les modifications
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;