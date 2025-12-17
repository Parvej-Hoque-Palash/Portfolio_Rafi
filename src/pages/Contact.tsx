import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("meoalevz"); 

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+33605549606',
      href: 'tel:+33605549606'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hoquerafi727@gmail.com',
      href: 'mailto:hoquerafi727@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Paris, France',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Rafi0198?tab=repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tasnimul-hoque-rafi/'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@rafihoque7431'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto mb-4"
    >
      <h1 className="page-title">Contact Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-4 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <item.icon className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h2>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-100 p-3 rounded-lg text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>

            {state.succeeded && (
              <p className="text-green-600 text-center">Thanks for your message!</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
