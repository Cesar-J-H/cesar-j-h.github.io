import React, { useState } from 'react';
import { Navigation, Image as ImageIcon, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import WorldMapModal from '../components/WorldMapModal';

/* London Photos */
import londonTowerBridge from '../assets/travel/londonTowerBridge.jpg';
import londonBigBen from '../assets/travel/bigBen.jpg';
import londonWestminster from '../assets/travel/westminsterPalace.jpg';

/* Italy Photos */
import romeColosseum from '../assets/travel/romeColosseum.jpg';
import romanForum from '../assets/travel/romanForum.jpg';
import spanishSteps from '../assets/travel/spanishSteps.jpg';

/* France Photos */
import notreDame from '../assets/travel/notreDame.jpg';
import notreDameInside from '../assets/travel/notreDameInside.jpg';
import wingedVictory from '../assets/travel/wingedVictory.jpg';
import sacreCoeur from '../assets/travel/sacreCoeur.jpg';

interface Photo {
  src: string;
  caption: string;
  location: string;
}

const Travel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMapModal, setShowMapModal] = useState(false);

  const photos: Photo[] = [
    {
      src: londonWestminster,
      caption: 'Westminster Palace and the River Thames',
      location: 'London, UK'
    },
    {
      src: londonBigBen,
      caption: 'Big Ben Clock Tower',
      location: 'London, UK'
    },
    {
      src: londonTowerBridge,
      caption: 'Elizabeth Tower from Parliament Square',
      location: 'London, UK'
    },
    {
      src: londonBigBen,
      caption: 'Westminster Palace and the River Thames',
      location: 'London, UK'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen bg-sand">
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Navigation className="w-10 h-10 text-coral" />
              <h1 className="text-6xl font-bold text-teal">World Travels</h1>
            </div>
            <p className="text-lighterBlue text-xl max-w-3xl mx-auto">
              "People of the World! <i>Spice up your life!</i>" 
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-teal mb-2">7</div>
              <div className="text-lighterBlue">Countries Visited</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-lightBlue mb-2">18</div>
              <div className="text-lighterBlue">Cities Explored</div>
            </div>
            <button
              onClick={() => setShowMapModal(true)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <Globe className="w-10 h-10 text-coral mb-2 mx-auto group-hover:rotate-12 transition-transform" />
              <div className="text-lighterBlue font-semibold group-hover:text-coral transition-colors">View World Map</div>
            </button>
          </div>

          {/* Featured Slideshow */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-teal mb-6 flex items-center gap-2">
              <ImageIcon className="w-8 h-8" />
              Featured Photos
            </h2>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-[600px]">
                <img
                  src={photos[currentSlide].src}
                  alt={photos[currentSlide].caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-navy" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-navy" />
                </button>

                {/* Photo Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-2xl font-bold mb-2">{photos[currentSlide].caption}</p>
                  <p className="text-lg opacity-90">{photos[currentSlide].location}</p>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* World Map Modal */}
      <WorldMapModal 
        isOpen={showMapModal} 
        onClose={() => setShowMapModal(false)} 
      />
    </div>
  );
};

export default Travel;