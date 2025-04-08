import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Code2,
  FolderGit2,
  BookOpen,
  Briefcase,
  Settings,
  GraduationCap,
  Mail,
  FileText,
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom hook to check media query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/skills', icon: Code2, label: 'Skills' },
    { path: '/projects', icon: FolderGit2, label: 'Projects' },
    { path: '/research', icon: BookOpen, label: 'Research Work' },
    { path: '/internship', icon: Briefcase, label: 'Internship' },
    { path: '/research_interest', icon: Settings, label: 'Research Interest & Expertise' },
    { path: '/education', icon: GraduationCap, label: 'Education' },
    { path: '/contact', icon: Mail, label: 'Contact' },
    { path: '/resume', icon: FileText, label: 'Resume' },
  ];

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: isDesktop || isOpen ? 0 : -300 }}
      transition={{ type: 'spring', damping: 20 }}
      className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
        isDesktop ? 'translate-x-0' : isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Scrollable Container */}
      <div className="h-full flex flex-col">
        {/* Profile Section */}
        <div className="p-6 text-center border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Tasnimul Hoque Rafi</h2>
          <p className="text-purple-600 font-medium">Electrical Engineer</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-purple-50'
                  }`
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;