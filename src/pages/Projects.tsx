import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Medicine/Relief Delivery Drone for Flood Affected Region ',
    description: 'A fully autonomous Radiolink Pixhawk based drone is built & programmed featuring Auto-Flight, Return to Launch (RTL), Geo fence, Radio Failsafe & a cheap ESP8266 based WiFi telemetry. The attached bottom plate includes the delivery mechanism designed with micro-servo which is assigned to a radio channel that can be triggered to drop the payload.',
    link: 'https://www.youtube.com/embed/s_e5pHGLhOU?si=nI_QO12VMCuUnQP_',
    github: ''
  },
  {
    name: 'The Aerial Weather Station (Weather Monitoring Drone)',
    description: 'A fully autonomous Radiolink Pixhawk based drone is built & programmed featuring Auto-Flight, Return to Launch (RTL), Geo fence, Radio Failsafe & a cheap ESP8266 based WiFi telemetry. A bottom plate is attached with the drone having the GSM based weather monitoring circuit capable of sensing different weather parameters like Air Temperature, Humidity, Pressure, Smoke Level etc & share via SMS.',
    link: 'https://www.youtube.com/embed/0koc044lpJM?si=Oprs6SO8LF_xWnSX',
    github: 'https://github.com/Rafi0198/The-Aerial-Weather-Station-Weather-Monitoring-Drone-'
  },
  {
    name: 'Computer Vision Based Gesture Controlled Obstacle Avoiding BOT',
    description: 'An obstacle avoiding bot that is controlled by hand gestures captured using the camera. After recognizing the state of the hand & the fingers using mediapipe, the corresponding control commands are sent to ESP32 using websockets on a local network.',
    link: 'https://www.youtube.com/embed/Zd1ug9pdfVs?si=Vr-G6tV98mcF8nlv',
    github: 'https://github.com/Rafi0198/Computer-Vision-Based-Gesture-Controlled-Obstacle-Avoiding-BOT-'
  },
    {
    name: 'Gesture Controlled Drone Simulation Using Computer Vision',
    description: 'The drone is controlled using different hand gestures, with real-time hand tracking powered by OpenCV and Mediapipe. The estimated hand landmarks are processed to generate the control commands which is then sent to the simulated drone. The flight control is handled via DroneKit on a simulated environment using SITL and ArduPilot. The target waypoint of the actual drone is mapped according to the position of the virtual copter which is dragged virtually using the finger-tip. Again, the virtual zone is mapped to a physical space of 80mx80m. As a result, the drone will not go beyond this area. Included features are (1) Hand gesture-based take off, altitude control, and RTL (Return to Launch). (2) Dynamic movement of the drone in physical space mapped based on the position of the virtual copter which is dragged with the finger-tip within the virtual zone.',
    link: 'https://www.youtube.com/embed/ad-8fXphrLs?si=yf_0zLtn4fzxQ8UU',
    github: 'https://github.com/Rafi0198/Gesture-Controlled-Drone-Simulation-Using-Computer-Vision'
  },
  {
    name: 'Gesture Controlled Robotic Manipulator (2 DoF) Using Computer Vision',
    description: 'A two DoF Robotic Manipulator using micro servos that are controlled on basis of the position of the hand captured by the camera. After recognizing the position of the hand, the corresponding control commands are sent to ESP32 using serial communication.',
    link: 'https://www.youtube.com/embed/mqNkA-lt4gE?si=PBZkFW9ICDaH5EyT',
    github: 'https://github.com/Rafi0198/Gesture-Controlled-Robotic-Manipulator-2-DoF-Using-Computer-Vision-'
  },
  {
    name: 'Computer Vision Based Speed Control of DC Fan Using Hand Gesture',
    description: 'The speed of a DC motor is varied with the adaptive PWM signals based on the separation between thumb & index fingers captured by the camera.',
    link: 'https://www.youtube.com/embed/W5piTIla70Y?si=SHfo5tqxIUtVyRLP',
    github: 'https://github.com/Rafi0198/Gesture-Controlled-Robotic-Manipulator-2-DoF-Using-Computer-Vision-'
  },
  {
    name: 'Computer Vision Based Electric Load Control Using Hand Gesture',
    description: 'The AC loads are switched by using the hand gestures captured by the camera. After recognizing the state of the hand & the fingers using mediapipe, the corresponding control commands are sent to ESP32 using websockets over a local network.',
    link: 'https://www.youtube.com/embed/_F5XC20a4lE?si=ro8xawHWjtPZ62Xb',
    github: 'https://github.com/Rafi0198/Computer-Vision-Based-Electric-Load-Control-Using-Hand-Gesture'  },
  {
    name: 'Electric Load Control Using Virtual Buttons',
    description: 'The AC loads are switched by using the virtual buttons. After recognizing the state of the hand & the fingers using mediapipe, the state of the load is switched.',
    link: 'https://www.youtube.com/embed/oLyNIpHurMM?si=YJUGrpWa2bXb0kJz',
    github: 'https://github.com/Rafi0198/Electric-Load-Control-Using-Virtual-Buttons'
  },
  {
    name: 'Face Recognition Based Smart Door Lock',
    description: 'The lock is secured with authorised face IDs. The encoded root database is easily upgradable using new samples. Any unauthorised attempts are logged to the database, captured by the camera & then sent to the authorized person via telegram. The state of the lock can be monitored and controlled remotely with the IoT Dashboard.',
    link: 'https://www.youtube.com/embed/0u-6crgMWtc?si=j-NzT1L82a9LPM4S',
    github: 'https://github.com/Rafi0198/Face-Recognition-Based-Smart-Door-Lock-'
  },
  {
    name: 'QR Code Based Smart Door Lock',
    description: 'The lock is secured with authorised QR codes. The existing root database is easily upgradable using new QR codes. Any unauthorised attempts are logged to the database & then sent to the authorized person via telegram. The state of the lock can be monitored and controlled remotely with the IoT Dashboard.',
    link: 'https://www.youtube.com/embed/0mpUTs2ENfM?si=--v3skjY1-ou0hCn',
    github: 'https://github.com/Rafi0198/QR-Code-Based-Smart-Door-Lock-'
  },
  {
    name: 'Face Recognition Based Smart Attendance System',
    description: 'The attendance (Daily/Individual) information (Entry/Exit) is logged into the database with corresponding date & time. The existing root database is easily upgradable with new samples. The project is suitable to deploy in any educational institutions, offices, organisations etc. requiring face id based attendance.',
    link: 'https://www.youtube.com/embed/rhM8Yz5K3tI?si=BqHovqKXE_ta3WHl',
    github: 'https://github.com/Rafi0198/Face-Recognition-Based-Smart-Attendance-System-'
  },
  {
    name: 'QR Code Based Smart Attendance System',
    description: 'The attendance (Daily/Individual) information (Entry/Exit) is logged into the database with corresponding date & time. The existing root database is easily upgradable with new samples. The project is suitable to deploy in any educational institutions, offices, organisations etc. requiring QR code based attendance system.',
    link: 'https://www.youtube.com/embed/TBPju3l5ni8?si=IEz1y4uk5Az48N7N',
    github: 'https://github.com/Rafi0198/QR-Code-Based-Smart-Attendance-System-'
  },
  {
    name: 'Face ID Based Smart Door Bell with Secured Door Lock',
    description: 'Whenever a face is detected for 3 seconds at the door, the bell rings out & the face snippet is sent to the authorised person on telegram. If the authorised person wants to allow access, then the door can be remotely unlocked from the IoT Dashboard.',
    link: 'https://www.youtube.com/embed/_EINm0wcPWk?si=LbK8Y_owmFtdyiBb',
    github: 'https://github.com/Rafi0198/Face-ID-Based-Smart-Door-Bell-with-Secured-Door-Lock-'
  },
  {
    name: 'Eye Blink Based Secured Door Lock',
    description: 'The lock is opened once a pre-set number of eye blinks are made within the virtual zone in front of the camera for 5 seconds.',
    link: 'https://www.youtube.com/embed/L81spl3dqjQ?si=B0V9GmltDWhOsNGQ',
    github: 'https://github.com/Rafi0198/Eye-Blink-Based-Secured-Door-Lock '
  },
  {
    name: 'Drowsiness & Yawn Detection for Driver Assistance Using Computer Vision',
    description: 'Drowsiness & Yawn are detected by estimating the relative separation between the eyes & the lips respectively using Mediapipe. An alert is triggered if a person is in drowsiness or having yawn. The information is updated in a log accordingly.',
    link: 'https://www.youtube.com/embed/qGDjkYSs6DY?si=mUZJmf-efMMKYPse',
    github: 'https://github.com/Rafi0198/Drowsiness-Yawn-Detection-for-Driver-Assistance-Using-Computer-Vision-'
  },
  {
    name: 'Bluetooth Controlled Obstacle Avoiding BOT',
    description: 'An obstacle avoiding bot controlled by smartphone using the Bluetooth & Serial Communication.',
    link: 'https://www.youtube.com/embed/BAaH6UeIDSI?si=hMog8PE5D-twzOc3',
    github: 'https://github.com/Rafi0198/Bluetooth-Controlled-Obstacle-Avoiding-BOT'
  },
  {
    name: 'Voice Controlled Obstacle Avoiding BOT',
    description: 'An obstacle avoiding bot that is controlled by using voice command from smartphone via Bluetooth.',
    link: 'https://www.youtube.com/embed/bJ06RiQwuCQ?si=eAu4JPYqqaxRwtAJ',
    github: 'https://github.com/Rafi0198/Voice-Controlled-Obstacle-Avoiding-BOT-'
  },
  {
    name: 'IoT Based Patient Monitoring System',
    description: 'Patient’s health parameters like Heart Rate, Blood SpO2, Body Temperature have been measured by different sensors & the data has been extracted by different communication protocol using ESP32. The extracted data is shared via SMS, Email & IoT dashboard so that any person can remotely observe the status of the patient. Besides, the ambient condition of the patient’s room has been monitored including temperature, humidity, pressure, location etc. The room is also equipped with safety features like fire & smoke alert including the automated fire extinguishing system with adaptive room temperature.',
    link: 'https://www.youtube.com/embed/Qf4UcImb7-E?si=yDaRFwqvqcjqDCoJ',
    github: 'https://github.com/Rafi0198/IoT-Based-Patient-Monitoring-System-'
  },
  {
    name: 'IoT Based Weather Station',
    description: 'The designed system reads different weather parameters like Temperature, Humidity, Pressure, Gas Level etc. and shares the information to IoT dashboard, Telegram & SMS.',
    link: 'https://www.youtube.com/embed/TRySSwVuEIA?si=Ac8zCCCBqdDoVYHL',
    github: 'https://github.com/Rafi0198/IoT-Based-Weather-Station'
  },
  {
    name: 'IoT Based Smart Door Lock Using Password/OTP/RFID',
    description: 'The door can be unlocked by using a pre-set password or by using the OTP sent to the verified person or by scanning the authorised RFID or by sending verified telegram commands or from the IoT dashboard. In case of any suspicious attempts made to unlock the door, the notification would be sent to the authorised person via SMS/Email/Telegram message. A simple user interface has been designed so that a user can easily interact with the designed system.',
    link: 'https://www.youtube.com/embed/3gL0f1Lo42I?si=CUyVUHXKhRB3Jrkp',
    github: 'https://github.com/Rafi0198/IoT-Based-Smart-Door-Lock'
  },
  {
    name: 'IoT Based Gas Burner Monitoring System',
    description: 'The designed system detects any gas leakage/fire from the burner and alerts the authorized person via IoT dashboard/Email/SMS/Phone Call having terminated the burner immediately. The state of the burner can also be controlled remotely from the IoT cloud dashboard. The presence/absence of human inside the kitchen is detected by counting the number of persons inside the kitchen using Infra-Red rays.',
    link: '',
    github: ' https://github.com/Rafi0198/IoT-Based-Gas-Burner-Monitoring-System'
  },
  {
    name: 'OTP Based Secured Door Lock',
    description: 'A One Time Password is sent to the verified person via SMS to unlock the door. The authorised person is also alerted if any suspicious attempts have been made to unlock the door.',
    link: 'https://www.youtube.com/embed/psMsa54y-rk?si=xs4U00Hg7H70vPLI',
    github: 'https://github.com/Rafi0198/OTP-Based-Secured-Door-Lock'
  },
  {
    name: 'RFID Based Secured Door Lock',
    description: 'The Solenoid Electric Lock is opened only once verified RFIDs are scanned. The authorised person is also alerted if any suspicious attempts have been made to unlock the door.',
    link: 'https://www.youtube.com/embed/r3FFoszNisw?si=1qE3irg9qRw_djGN',
    github: 'https://github.com/Rafi0198/RFID-Based-Secured-Door-Lock'
  },
  {
    name: 'GSM Based Smart Irrigation System',
    description: 'The plants are automatically watered if the soil moisture level is below a threshold value. Besides, the automation can also be overridden by GSM alerts. That means, the water pump can be switched remotely simply by using an SMS.',
    link: 'https://www.youtube.com/embed/rfbSYN2haxY?si=yJZZxfxdJ2yNnyvX',
    github: 'https://github.com/Rafi0198/GSM-Based-Smart-Irrigation-System'
  },
  {
    name: 'Data Transmission Using Light (Li-Fi) with Morse Code Encoding',
    description: 'Text is transmitted between Tx-Rx using light pulses. A string consists of 8bit ASCII characters. So the input string is transmitted character by character where each character is a byte or 8 bits. The photo detector at the receiver end decodes the received bit sequence to characters and eventually to string. Proper synchronisation between Tx-Rx is achieved by using the START bit at the beginning of each transmission. The sampling time or the bit duration must be the same at both Rx-Tx ends. The received string is then encoded with Morse Coding. The range of communication can be increased by using powerful LASER or by using an optical fibre as the communication medium.',
    link: 'https://www.youtube.com/embed/CJVfaXv-rNU?si=LsawFN8Jgx0KmWd0',
    github: 'https://github.com/Rafi0198/Data-Transmission-Using-Light-LiFi-with-Morse-Code-Encoding'
  },
  {
    name: 'Design and Fabrication of a Single Phase Transformer (100VA, 220V-170V)',
    description: 'In this project, we designed and built a single phase transformer applying the knowledge and skills developed through the theory and sessional courses of Energy Conversion/Electric Machines. The number of turns in the primary and secondary sides are 656 and 507 respectively. We have used E type core formed by steel. The cross-sectional area of the core is 12.58 cm2. We selected 30 SWG wire for the Primary Side and 28 SWG wire for the Secondary Side. After the fabrication, the open circuit test and the short circuit test were performed to estimate the transformer parameters.',
    link: '',
    github: ''
  },
  {
    name: 'Electronic Speed Controller (ESC) of BLDC Motor',
    description: 'The ESC is designed using 6 IRF-250 MOSFETS and driver IC. The necessary PWM signals are generated by the microcontroller to drive the ESC and control the speed of the motor.',
    link: '',
    github: ''
  },
  {
    name: 'Automated Speed Control of DC Fan Using FPGA Board',
    description: 'The speed of the DC fan was controlled with the variation of temperature and the presence/absence of humans. Instead of using any microcontrollers, we used the FPGA board to generate necessary PWM signals using VHDL to control the speed of the fan. The NTC thermistor and the IR sensor were interfaced with the FPGA board to sense the temperature and presence of humans respectively.',
    link: '',
    github: ''
  },
  {
    name: 'Electrical Service Design of a Multi Storied Building',
    description: 'In this project, we had to choose a floor plan for a multi-storied building. Next, we had to logically place the fittings & fixtures on the floor plan. We also had to design the conduit layout for our plan. Finally, we performed calculations for switchboards & distribution boards to ensure a constant power supply. The design also included a lightning protection system & emergency power supply.',
    link: '',
    github: ''
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto mb-4">
      <h1 className="page-title">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                {project.link && (
                  <iframe
                    src={project.link}
                    title={project.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-48 rounded-lg"
                  ></iframe>
                )}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                <p className={`text-gray-600 ${expandedIndex === index ? '' : 'line-clamp-3'}`}>
                  {project.description}
                </p>
                <button
                  onClick={() => handleToggle(index)}
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  {expandedIndex === index ? 'See Less' : 'See More...'}
                </button>
              </div>
              <div className="flex justify-end">
                {project.github && (
                  <button>
                    <a
                      className="text-blue-500 hover:text-blue-700"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;