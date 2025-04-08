import { motion } from 'framer-motion';
import myphoto from '../images/myphto.webp'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mb-4"
    >
      <h1 className="page-title">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={myphoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">General Information</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">Name:</span> Tasnimul Hoque Rafi</p>
              <p><span className="font-semibold">Date of Birth:</span> 1st July, 1998</p>
              <p><span className="font-semibold">Location:</span> 607/B, Silver Zakir Palace, 2A, East Talpukurpar, Comilla</p>
              <p><span className="font-semibold">Nationality:</span> Italian</p>
              <p><span className="font-semibold">Email:</span> hoquerafi727@gmail.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
                  I am a prospective Post-Graduate student completing B.Sc in Electrical and Electronics Engineering (EEE) from the Bangladesh University of Engineering and Technology (BUET) with major in Communication & Signal Processing. I have expertise in Robotics & Automation, Computer Vision, UAV & Wireless Communication Systems having completed plenty of relavent projects. My academic thesis focused on Autonomous Traffic Monitoring & Driver Assistance Based on Computer Vision that includes the following modules:
                  1. Detection & Classification of Traffic Signs
                  2. Detection & Classification of Vehicles
                  3. Recognition of Vehicle's Registration Plate
                  4. Speed Estimation of Vehicles
                  5. Virtual Zone Based Vehicles Counting Including Wrong Side Promt
                  6. Virtual Zone Based Collision Avoidance Altert.
                  7. Drawsiness & Yawn Detection of Driver

                  Currently, my thesis work in progress to be submitted in an International Conference.

                  I look forward to contributing to the Robotics & Automation and Wiresless Communication Industry having the expertise I gathered ever since my undergrad period.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;