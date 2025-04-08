import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  // {
  //   degree: 'Master of Science in Computer Science',
  //   institution: 'Bangladesh University of Engineering and Technology',
  //   location: 'Dhaka, Bangladesh',
  //   period: '2019 - 2024',
  //   description: 'Major in Communication & Signal Processing',
  //   achievements: [
  //     'Published 2 research papers',
  //     'Graduated with distinction',
  //     'Teaching Assistant for Data Structures course'
  //   ]
  // },
  {
    degree: 'Bachelor of Science in Electrical and Electronic Engineering',
    institution: 'Bangladesh University of Engineering and Technology',
    location: 'Dhaka, Bangladesh',
    period: '2019 - 2024',
    description: 'Major in Communication & Signal Processing',
    achievements: [
      // 'First Class Honours',
      // 'President of Computer Science Society',
      // 'Won Best Final Year Project Award'
    ]
  },
  {
    degree: 'HSC',
    institution: 'Cumilla Victoria Govt. College',
    location: 'Cumilla, Chattogram, Bangladesh',
    period: '2016 - 2018',
    description: '',
    achievements: [
      // 'First Class Honours',
      // 'President of Computer Science Society',
      // 'Won Best Final Year Project Award'
    ]
  },
  {
    degree: 'SSC',
    institution: 'Cumilla Modern High School',
    location: 'Cumilla, Chattogram, Bangladesh',
    period: '2014 - 2016',
    description: '',
    achievements: [
      // 'First Class Honours',
      // 'President of Computer Science Society',
      // 'Won Best Final Year Project Award'
    ]
  }
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mb-4"
    >
      <h1 className="page-title">Education</h1>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h2>
                  <h3 className="text-xl text-purple-600 mb-4">{edu.institution}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  {edu.degree == 'Bachelor of Science in Electrical and Electronic Engineering' && (
                  <div className="space-y-2 mb-2">
                    <h4 className="font-semibold text-gray-800">Relevant Courses:</h4>
                    <div className="flex text-gray-600">
                    Control Systems, 
                    Power Electronics, 
                    Digital Electronics, 
                    Microprocessors and Embedded Systems, 
                    Robotics and Automation, 
                    Digital Signal Processing, 
                    Microwave Engineering, 
                    Optical Communications, 
                    Radar and Satellite Communications, 
                    Wireless Communications
                    </div>
                  </div>
                  )}
                  <div className="space-y-2 mb-2">
                    {/* <h4 className="font-semibold text-gray-800">Key Achievements:</h4> */}
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;