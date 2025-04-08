import { motion } from 'framer-motion';
import myphoto from '../images/myphto.webp'

import {
  Users,
  Brain,
  Car,
  Rocket,
  Radio,
  Computer,
  BrainCircuit,
  BrainCog
} from 'lucide-react';

const characteristics = [
  { icon: Users, title: 'Robotics and Automation', color: 'bg-yellow-500' },
  { icon: Computer, title: 'Computer Vision', color: 'bg-blue-500' },
  { icon: Brain, title: 'Human Machine Interaction', color: 'bg-green-500' },
  { icon: Car, title: 'Autonomous Driving', color: 'bg-red-500' },
  { icon: BrainCircuit, title: 'Machine Learning', color: 'bg-indigo-500' },
  { icon: BrainCog, title: 'Deep Learning', color: 'bg-pink-500' },
  { icon: Rocket, title: 'Autonomous Drones', color: 'bg-teal-500' },
  { icon: Radio, title: 'Wireless Communications', color: 'bg-orange-500' },
];

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-theme(space.16))] flex flex-col items-center justify-center mb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-600 ring-offset-4">
          <img
            src={myphoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600">
          Turning ideas into reality through creativity
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {characteristics.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`${item.color} text-white p-3 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300`}>
              <item.icon size={24} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;