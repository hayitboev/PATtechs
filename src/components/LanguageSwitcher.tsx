import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </motion.button>
  );
};

export default LanguageSwitcher; 