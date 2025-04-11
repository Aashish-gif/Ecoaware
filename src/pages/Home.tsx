import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Leaf, Factory, Car, Trash2, Droplets, Radio } from 'lucide-react';
import { pollutionData } from '../data/pollutionData';

const PollutionCard = ({ title, description, icon: Icon, image, delay = 0, type }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => navigate(`/pollution/${type}`)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

function Home() {
  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Understanding Environmental Pollution
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore different types of pollution affecting our planet and learn about their environmental impact.
        </p>
      </motion.header>

      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pollutionData.map((pollution) => (
            <PollutionCard key={pollution.title} {...pollution} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;