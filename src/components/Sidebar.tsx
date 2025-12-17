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
  Layers,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ------------------ Custom Hook ------------------ */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

/* ------------------ Sidebar ------------------ */
const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/education', icon: GraduationCap, label: 'Education' },
    { path: '/experience', icon: Layers, label: 'Experience' },
    { path: '/research', icon: BookOpen, label: 'Research Work' },
    { path: '/projects', icon: FolderGit2, label: 'Projects' },
    { path: '/skills', icon: Code2, label: 'Skills' },
    { path: '/internship', icon: Briefcase, label: 'Internship' },
    {
      path: '/research_interest',
      icon: Settings,
      label: 'Research Interest & Expertise',
    },
    { path: '/contact', icon: Mail, label: 'Contact' },
    { path: '/resume', icon: FileText, label: 'Resume' },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{
        x: isDesktop || isOpen ? 0 : -300,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className="fixed top-0 left-0 z-40 h-full w-[300px] bg-white shadow-xl"
    >
      <div className="flex h-full flex-col">
        {/* Profile */}
        <div className="border-b border-gray-200 p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Tasnimul Hoque Rafi
          </h2>
          <p className="font-medium text-purple-600">
            Electrical Engineer
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-2">
            {menuItems.map(({ path, icon: Icon, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={!isDesktop ? onClose : undefined}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                      isActive
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;