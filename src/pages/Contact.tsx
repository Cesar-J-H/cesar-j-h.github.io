import React from 'react';
import LinkCableAnimation from '../components/LinkCable';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Link Cable Animation */}
      <LinkCableAnimation />

      {/* Let's Connect Heading */}
      <div className="min-h-screen">
        
        <h1 className="text-4xl font-bold text-lightBlue">Let's Connect!</h1>
        <p className="text-lighterBlue mt-4">Contact form coming soon...</p>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-4 items-center max-w-md mx-auto">
        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-20 h-20 text-slate-300" />
            <span className="text-4xl text-white font-medium">GitHub Profile</span>
          </a>
        </div>
        <div className="flex gap-4 pt-2">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6 text-slate-300" />
          </a>
        </div>
        <div className="flex gap-4 pt-2">
          <a
            href="mailto:cesarjoelherrera@icloud.com"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-slate-300" />
          </a>
        </div>
      </div>
    </section>

  );
}


export default Contact;