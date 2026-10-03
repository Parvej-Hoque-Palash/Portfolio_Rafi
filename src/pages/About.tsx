import { motion } from 'framer-motion';
import myphoto from '../images/myphto.webp'
import { useState } from 'react';

const About = () => {
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => {
    setShowFull(!showFull);
  };
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
              <p><span className="font-semibold">Location:</span> Île-de-France</p>
              <p><span className="font-semibold">Nationality:</span> Italian</p>
              <p><span className="font-semibold">Email:</span> hoquerafi727@gmail.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
            <div className="text-gray-600 leading-relaxed w-full break-words">
                  I am pursuing my M.Sc. at the Université Paris-Saclay, specializing in Mechatronics, Machine Vision and AI. My research interests lie at the intersection of robotics, computer vision, embedded systems, digital twins, and extended reality. Having developed a solid foundation through a range of relevant projects and research experience, I aim to develop intelligent robotic systems that integrate perception, computation, and autonomous decision-making.
                  <br></br>
                  During my tenure as a Research Intern at CESI in Rouen, France, I worked on the “Fusion of a Planar LiDAR and an RGB-D Camera for Real-Time Robotic Perception”
                  <br></br>
                  I completed my B.Sc. in Electrical and Electronics Engineering (EEE) from the Bangladesh University of Engineering and Technology (BUET) with major in Communication & Signal Processing. My undergrad thesis focused on Autonomous Traffic Monitoring & Driver Assistance Based on Computer Vision that includes the following modules:
            </div>
            {showFull && (
                <div className='w-full break-words'>
                  <ul>
                    <li>1. Detection & Classification of Traffic Signs</li>
                    <li>2. Detection & Classification of Vehicles</li>
                    <li>3. Recognition of Vehicle's Registration Plate</li>
                    <li>4. Speed Estimation of Vehicles</li>
                    <li>5. Virtual Zone Based Vehicles Counting Including Wrong Side Prompt</li>
                    <li>6. Virtual Zone Based Collision Avoidance Alert</li>
                    <li>7. Drowsiness & Yawn Detection of Driver</li>
                  </ul>
                  Currently, my thesis work in progress to be submitted in an International Conference.

                  I look forward to contributing to the Robotics & Automation and Wiresless Communication Industry having the expertise I gathered ever since my undergrad period.
              </div>)}
                <button
                onClick={toggleDescription}
                className="text-blue-600 hover:underline font-medium"
              >
                {showFull ? "See less..." : "See more..."}
              </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;