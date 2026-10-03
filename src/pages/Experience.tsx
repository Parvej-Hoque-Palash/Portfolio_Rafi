import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';
import cesi_logo from '../images/cesi.webp'


const experience = [
  {
    company: 'CESI',
    logo: cesi_logo,
    designation: 'Research Intern',
    period: 'September 2025- March 2026',
    location: 'Saint-Étienne-du-Rouvray, Rouen, France',
    title: '3D LiDAR and RGB-D Camera Fusion for Real-Time Robotic Perception',
    link: 'https://www.youtube.com/embed/d9QjcBIu-P8',
    setup: 'Intel RealSense D-435i, LDS-01, OptiTrack Motion Capture System, NVDIA Jetson Orin Nano',
    supervisors: [
      {
        name: 'Dr. Fabrice Duval',
        link: 'https://lineact.cesi.fr/cv-chercheurs/duval-fabrice/'
      },
      {
        name: 'Dr. Nicolas Ragot',
        link: 'https://lineact.cesi.fr/cv-chercheurs/ragot-nicolas/'
      },
      {
        name: 'Dr. Argui Imane',
        link: 'https://lineact.cesi.fr/cv-chercheurs/argui-imane/'
      }
    ],
    responsibilities: [
      'Deployed real-time 3D object detection on an NVIDIA Jetson Orin Nano, achieving ~75 FPS with TensorRT.',
      'Estimated and filtered object depth using clustering-based and instance segmentation-based approaches.',
      'Performed camera extrinsic calibration using an OptiTrack Motion Capture System to establish ground-truth depth measurements.',
      'Decoded 42-byte LDS-01 LiDAR data packets and performed camera–LiDAR extrinsic calibration using point-to-point correspondences and nonlinear least-squares optimization, achieving a mean re-projection error of 3.66 pixels.',
      'Fused the LiDAR point cloud with RGB images through an early-fusion approach using the calibrated sensor transformation.',
    ]
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mb-4"
    >
      <h1 className="page-title">Experience</h1>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* 🔹 Company Logo (Top Right) */}
            {exp.logo && (
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="absolute top-6 right-6 h-12 w-auto object-contain"
              />
            )}

            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Briefcase className="text-purple-600" size={24} />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    {exp.designation}
                  </h2>

                  <h3 className="text-xl text-purple-600 mb-2">
                    {exp.company}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-2">
                    Project Title:
                  </h4>
                  <p className="text-gray-600 mb-4">{exp.title}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Users size={18} className="mr-2" />
                      Supervisors:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {exp.supervisors.map((sup, i) => (
                        <li key={i}>
                          <a
                            href={sup.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:underline"
                          >
                            {sup.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Hardware Setup:
                  </h4>
                  <p className="text-gray-600 mb-4">{exp.setup}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Summary & Contributions:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 mb-2 text-gray-600">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-2">
                    Youtube:
                  </h4>
                  {/* <p className="text-gray-600 mb-4">{exp.link}</p> */}
                  <div className="aspect-w-16 aspect-h-12 mb-4">
                  {exp.link && (
                    <iframe
                      src={exp.link}
                      // title={project.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-80 rounded-lg"
                    ></iframe>
                  )}
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

export default Experience;
