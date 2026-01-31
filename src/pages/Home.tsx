import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { FaExplosion } from 'react-icons/fa6';
import { GrGrow } from 'react-icons/gr';
import profileImage from '../assets/travel/londonTowerBridge.jpg'

const Home: React.FC = () => {
  return (
    
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Profile Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-teal shadow-xl">
          <img
            src={profileImage}
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
          <h1 className="text-9xl md:text-9xl font-bold text-teal">
            Cesar J. H.
          </h1>
          <p className="text-xl md:text-2xl text-lightBlue font-light">
            Aspirational Wayfinder
          </p>
        </div>

        {/* Intro */}
        <p className="text-lg text-lighterBlue max-w-2xl leading-relaxed">
          Hello everyone! Welcome to my own personal website. As you can see, I'm still in the process of building it out. Like most things in life, everything is under constant change.
          Feel free to explore and check back regularly through the growing pains!
          Maybe you'll be surprised by something new each time you visit. No matter how small or hidden!
        </p>

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
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="mt-12 mb-6 flex-col items-center gap-3">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-teal via-lightBlue to-coral bg-clip-text text-transparent">
          Personal Philosophies
        </h2>
      </div>

      {/* Quick Stats/Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="
          bg-coral p-6 rounded-xl
          border border-red shadow-xl 
          hover:shadow-2xl hover:border-blue-500 hover:-translate-y-1 
          transition-all duration-300"
        >
          <FaExplosion className="w-8 h-8 text-blue-400 mb-3" />
          <h3 className="text-xl font-semibold text-blue-400 mb-2">Fail, Learn, Repeat</h3>
          <p className="text-white">
            Failure is a constant yet invaluable teacher. Some of the greatest inventions came from mistakes. Seeking perfection often hinders progress.
          </p>
        </div>

        <div className="
          bg-coral p-6 rounded-xl 
          border border-red shadow-xl 
          hover:shadow-2xl hover:border-purple-500 hover:-translate-y-1 
          transition-all duration-300"
        >
          <GrGrow className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="text-xl font-semibold text-purple-400 mb-2">Changes Big and Small</h3>
          <p className="text-white">
            Even the smallest wins can feel like big victories. Growth is growth no matter the size. Embrace change as an opportunity to evolve and improve, both personally and professionally.
          </p>
        </div>
        
        <div className="
          bg-coral p-6 rounded-xl 
          border border-red shadow-xl 
          hover:shadow-2xl hover:border-green-500 hover:-translate-y-1 
          transition-all duration-300"
        >
          <MapPin className="w-8 h-8 text-green-400 mb-3" />
          <h3 className="text-xl font-semibold text-green-400 mb-2">Having Fun</h3>
          <p className="text-white">
            The journey is much more enjoyable when you learn to enjoy the views. Tunnel-vision rarely leads to happiness so why limit yourself when there is so much to explore? Take the road less traveled and you might find a better destination at the end.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;