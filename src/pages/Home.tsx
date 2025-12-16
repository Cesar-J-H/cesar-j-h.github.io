import React from 'react';
import { Code2, Briefcase, MapPin, Mail, ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="bg-blue-500 md:bg-green-500 p-4 text-white">
        If this is BLUE, you're on mobile view. If GREEN, you're on desktop view.
      </div>
      <div className="bg-red-500 p-8 text-white text-2xl mb-8">
        RED BOX - If you see a bright red box, Tailwind is 100% working
      </div>
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Profile Image - REPLACE WITH YOUR OWN */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
          <img
            src="/path-to-your-image.jpg"
            alt="Cesar J. H."
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        </div>
        
        {/* Name and Title */}
        <div className="space-y-2">
          <h1 className="text-9xl md:text-9xl font-bold text-white">
            Cesar J. H.
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-light">
            Full Stack Developer
          </p>
        </div>

        {/* Brief Introduction */}
        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
          Passionate about building elegant solutions to complex problems. 
          I specialize in creating scalable web applications with modern technologies 
          and clean, maintainable code.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="GitHub Profile"
          >
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="LinkedIn Profile"
          >
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-slate-300" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 pt-6">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            View Projects
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Quick Stats/Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition-colors">
          <Code2 className="w-8 h-8 text-blue-400 mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
          <p className="text-slate-400">
            Writing maintainable, scalable, and efficient code is my priority.
          </p>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500 transition-colors">
          <Briefcase className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">Full Stack</h3>
          <p className="text-slate-400">
            From database design to responsive frontends, I handle it all.
          </p>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-green-500 transition-colors">
          <MapPin className="w-8 h-8 text-green-400 mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">Remote Ready</h3>
          <p className="text-slate-400">
            Experienced in collaborating with distributed teams globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;