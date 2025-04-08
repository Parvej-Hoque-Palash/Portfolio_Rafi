import { motion } from 'framer-motion';
import { FileText, Youtube } from 'lucide-react';
import feature1 from '../images/feature1.webp'
import feature2 from '../images/feature2.webp'
import feature3 from '../images/feature3.webp'
import feature4 from '../images/feature4.webp'
import feature5 from '../images/feature5.webp'
import feature6 from '../images/feature6.webp'




const researchWorks = [
  {
    title: 'Virtual Zone Based Traffic Monitoring and Driver Assistance',
    supervisor: 'Dr. S.M. Mahbubur Rahman, Professor, Department of EEE, BUET',
    youtubeLink: 'https://www.youtube.com/embed/w7hBFadLm0I?si=fDxh0U6d_l6t5n8Y',
    githubLink: 'https://github.com/Rafi0198/Virtual-Zone-Based-Autonomous-Traffic-Monitoring',
    features: [
      {
        title: '1. Detection & Classification of Traffic Signs',
        image: feature1,
      },
      {
        title: '2. Detection & Classification of Vehicles',
        image: feature2, 
      },
      {
        title: '3. Recognition of Vehicle\'s Registration Plate',
        image: feature3,
      },
      {
        title: '4. Speed Estimation and Virtual Zone Based Vehicle Counting with Wrong Side Prompt',
        image: feature4,
      },
      {
        title: '5. Virtual Zone Based Collision Avoidance Alert',
        image: feature5,
      },
      {
        title: '6. Drowsiness & Yawn Detection of Driver',
        image: feature6,
      },
    ],
  },
];

const Research = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto mb-4">
      <h1 className="page-title">Research Work</h1>

      <div className="grid grid-cols-1 gap-8">
        {researchWorks.map((work, index) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-purple-600 mb-2"><span className='font-bold'>Title: </span>{work.title}</h3>

              {/* Supervisor */}
              <p className="text-gray-600 mb-4">
                <strong>Supervisor: </strong> 
                <a className='text-gray-800 hover:text-purple-600' href="http://mahbubur.buet.ac.bd/" target="_blank">
                  {work.supervisor}
                </a>
              </p>
              {/* YouTube Video (iframe) */}
              {work.youtubeLink && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Watch the Video</h4>
                  <iframe
                    width="100%"
                    height="315"
                    src={work.youtubeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {/* GitHub Link */}
              {work.githubLink && (
                <div className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors mb-6">
                  <FileText size={20} />
                  <a href={work.githubLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </div>
              )}

              {/* Features */}
              <div className="text-gray-600 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
                  {work.features.map((feature, idx) => (
                    <div key={idx} className="bg-gray-100 rounded-lg p-4">
                      <h5 className="text-md font-bold text-purple-600 mb-2">{feature.title}</h5>
                      <img
                        src={feature.image} // Placeholder if no image is provided
                        alt={feature.title}
                        className="w-full h-56 object-cover rounded-lg mb-4"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Research;
