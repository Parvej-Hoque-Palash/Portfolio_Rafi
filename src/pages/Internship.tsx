import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const internships = [
  {
    organisation: 'Grameenphone Limited (Telecommunication Service Provider)',
    supervisor: 'Badsha Faysal Kabir, Head of Enterprise Support System Planning',
    summary: 'Learned the deployment of BTS (Base Transceiver Station) and types of antennas like GSM and Microwave including the challenges and power management. Explored the core cellular communication technologies like GSM, CDMA, GPRS, EDGE, 3G, 4G, and LTE.'
  }
];

const Internship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mb-4"
    >
      <h1 className="page-title">Internship</h1>

      <div className="space-y-8">
        {internships.map((intern, index) => (
          <motion.div
            key={intern.organisation}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Briefcase className="text-purple-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{intern.organisation}</h3>
                    <p className="text-purple-600 font-medium"><span className='font-bold'>Supervisor: </span>{intern.supervisor}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-600"><span className='font-bold'>Summary: </span>{intern.summary}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Internship;
