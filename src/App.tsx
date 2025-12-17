import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Research from './pages/Research';
import ResearchInterest from './pages/ResearchInterest';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Internship from './pages/Internship';
import Experience from './pages/Experience';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0 md:ml-[300px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/research_interest" element={<ResearchInterest />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

          {/* Footer */}
          <footer className="fixed bottom-0 w-full mx-auto mt-auto py-2 flex items-center text-center text-sm text-gray-600 bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="flex justify-center items-center h-full">
              Copyright © 2025 Tasnimul Hoque Rafi. All rights reserved.
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
}

export default App;