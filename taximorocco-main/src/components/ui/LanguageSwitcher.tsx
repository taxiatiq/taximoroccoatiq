import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectLanguage = (code: string) => {
    setCurrentLang(code);
    // Update HTML lang attribute
    document.documentElement.lang = code;
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-sm text-secondary-500 font-medium hover:text-primary-500 transition"
        onClick={toggleDropdown}
      >
        {languages.find(lang => lang.code === currentLang)?.name}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg py-2 w-24 z-10">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${
                currentLang === lang.code ? 'font-semibold text-primary-500' : 'text-secondary-500'
              }`}
              onClick={() => selectLanguage(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;