import { motion } from 'framer-motion';
import { Cpu, Code2, FileText, Globe, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Microcontrollers',
    icon: Cpu,
    skills: ['Arduino', 'ESP', 'STM', 'FPGA', 'Raspberry Pi'],
    color: 'bg-blue-500'
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'C/C++', 'VHDL', 'Matlab'],
    color: 'bg-green-500'
  },
  {
    title: 'Simulation',
    icon: Layout,
    skills: ['PSpice', 'PSAF', 'AutoCAD', 'Matlab/Simulink', 'Quartus', 'Keil', 'Proteus', 'SITL', 'ROS'],
    color: 'bg-purple-500'
  },
  {
    title: 'Document Preparation',
    icon: FileText,
    skills: ['Overleaf (LaTeX)', 'Microsoft Word/PowerPoint/Excel'],
    color: 'bg-yellow-500'
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['English (Professional Fluency)', 'French (Early B1)', 'Italian (A2)', 'Bengali (Native)'],
    color: 'bg-red-500'
  }
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto mb-4"
    >
      <h1 className="page-title">My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
              <category.icon size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
