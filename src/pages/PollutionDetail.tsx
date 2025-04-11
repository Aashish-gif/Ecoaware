import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, Shield, Lightbulb } from 'lucide-react';
import { pollutionData } from '../data/pollutionData';

const PollutionDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const pollution = pollutionData.find(p => p.type === type);

  if (!pollution) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Pollution type not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Overview
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img
            src={pollution.detailImage}
            alt={pollution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-white mb-4">{pollution.title}</h1>
              <p className="text-xl text-white/90">{pollution.description}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-semibold">Causes</h2>
            </div>
            <ul className="space-y-2">
              {pollution.causes.map((cause, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold">Prevention</h2>
            </div>
            <ul className="space-y-2">
              {pollution.prevention.map((method, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <h2 className="text-xl font-semibold">Impact</h2>
            </div>
            <ul className="space-y-2">
              {pollution.impact.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {pollution.solutions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Innovative Solutions</h2>
            <div className="prose max-w-none">
              {pollution.solutions}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PollutionDetail;