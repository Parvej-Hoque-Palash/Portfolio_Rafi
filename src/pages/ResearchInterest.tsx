import { motion } from 'framer-motion';
import { Code2, Layout, Database, Cloud, Monitor, Smartphone } from 'lucide-react';

const research_interest = [
  {
    title: 'Robotics & Automation',
    description: 'My expertise in robotics and automation focuses on developing smart systems incorporating autonomous perception and control, capable of performing complex tasks with minimal human intervention. I extensively work with different types of microcontrollers like ESP, Arduino, STM, Raspberry Pi etc., interfacing hardware and sensors for real time data acquisition to control actuators. Besides, I have incorporated IoT with my systems for remote monitoring, control and alert purpose. I am particularly interested in incorporating machine learning algorithms for adaptive control, enabling robots to learn from their environment, optimize their actions and improve performance over time. I aim to explore the intersection of AI, reinforcement learning, and real-time control to develop more efficient and intelligent robotic and autonomous systems, capable of handling dynamic and unpredictable environments.',
    icon: Code2,
    color: 'bg-blue-500'
  },
  {
    title: 'Computer Vision',
    description: 'My expertise in computer vision focuses on designing intelligent systems incorporating object detection using different deep learning models like YOLO, MobileNet, SSD, CNN, Fast R-CNN etc. I have implemented numerous vision driven control strategies leveraging different image processing techniques. I aim to modify the existing detection architecture to optimise their performance in specific tasks with the goal of enhancing accuracy, speed and robustness. By integrating advanced deep learning techniques, lightweight models and real time processing optimisation with reduced inference time, I look forward to developing vision based systems for robotics and automation including autonomous driving. Additionally, my research interest centres on Human-Computer-Interaction to develop Autonomous Driver Assistance Systems (ADAS).',
    icon: Layout,
    color: 'bg-purple-500'
  },
  {
    title: 'UAV Development',
    description: 'I have extensive experience in developing fully autonomous Unmanned Aerial Vehicles (UAV) including advanced features like Return to Launch (RTL), Geo-fence, Radio-failsafe etc. with a cheap ESP8266 based Wi-Fi telemetry, ensuring reliable and safe operations. I have utilised my drone in real world applications such as delivery and surveillance purpose, real time weather monitoring and so on. I aspire to integrate vision based navigation in my drone to perform complex missions autonomously using the DroneKit framework with raspberry-pi. Additionally, I am exploring the integration of 3D LiDAR with my drone for real time obstacle avoidance and surrounding mapping. I am eager to explore the swarm coordination to push the boundaries of UAV to perform complex missions.',
    icon: Database,
    color: 'bg-green-500'
  },
  {
    title: 'Embedded Systems',
    description: 'Developing hardware and software for real-time and embedded applications.',
    icon: Monitor,
    color: 'bg-red-500'
  },
  {
    title: 'Wireless Communications',
    description: 'I have a strong interest in information theory, data transmission principles, signal processing, cellular networks (5G/6G), spectrum efficiency optimisation and microwave antennas, which are the critical aspects of the future of advanced wireless communications. My hands on experience includes working with Free Space Optical Communication (FSO) or Li-Fi including morse code encoding. I am eager to explore the application of Machine Learning in 5G/6G networks focusing on adaptive modulation, intelligent resource allocation and self-optimising network architectures. I aim to dive deeper into advanced microwave antenna design that can play a significant role in next generation communication systems.',
    icon: Smartphone,
    color: 'bg-yellow-500'
  }
];

const ResearchInterest = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto mb-4"
    >
      <h1 className="page-title">Research Interest & Expertise</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {research_interest.map((research_interest, index) => (
          <motion.div
            key={research_interest.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`${research_interest.color} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
              <research_interest.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{research_interest.title}</h3>
            <p className="text-gray-600">{research_interest.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResearchInterest;
