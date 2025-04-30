import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Check, XCircle, DollarSign, Shield, Target, Clock, BarChart, FileText, Zap } from 'lucide-react';
import benefitsImage from '../assets/benefits.jpg';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Professional Development',
    description: 'Access to exclusive training programs and workshops to enhance your technical skills.',
    icon: '🎓'
  },
  {
    title: 'Networking Opportunities',
    description: 'Connect with industry professionals and expand your professional network.',
    icon: '🤝'
  },
  {
    title: 'Job Opportunities',
    description: 'Get access to exclusive job listings and career advancement opportunities.',
    icon: '💼'
  },
  {
    title: 'Technical Resources',
    description: 'Access to a comprehensive library of technical documentation and resources.',
    icon: '📚'
  },
  {
    title: 'Community Support',
    description: 'Join a supportive community of like-minded professionals.',
    icon: '👥'
  },
  {
    title: 'Industry Recognition',
    description: 'Gain recognition for your expertise and contributions to the field.',
    icon: '🏆'
  }
];

const BenefitsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('benefits.title', 'Member Benefits')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('benefits.subtitle', 'Discover the advantages of being a PATtechs member')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(`benefits.${benefit.title.toLowerCase().replace(/\s+/g, '_')}.title`, benefit.title)}
              </h3>
              <p className="text-gray-600">
                {t(`benefits.${benefit.title.toLowerCase().replace(/\s+/g, '_')}.description`, benefit.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;