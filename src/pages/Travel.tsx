import React, { useState } from 'react';
import { MapPin, Navigation, Image as ImageIcon, ChevronLeft, ChevronRight, X, Globe } from 'lucide-react';

/* London Photos */
import londonTowerBridge from '../assets/travel/londonTowerBridge.jpg';
import londonBigBen from '../assets/travel/bigBen.jpg';
import londonWestminster from '../assets/travel/westminsterPalace.jpg';
import worldMapSvg from '../assets/world.svg';

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

interface MapPin {
  city: string;
  country: string;
  x: number;  // Manual x coordinate (0-2000)
  y: number;  // Manual y coordinate (0-857)
}

const Travel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMapModal, setShowMapModal] = useState(false);
  const [mapZoom, setMapZoom] = useState(1);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

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

  const mapPins: MapPin[] = [
    /* USA */
    { city: 'Seattle', country: 'USA', x: 377, y: 200 },
    { city: 'Los Angeles', country: 'USA', x: 346, y: 278 },
    { city: 'San Diego', country: 'USA', x: 355, y: 292 },
    { city: 'San Francisco', country: 'USA', x: 340, y: 260 },
    { city: 'Portland', country: 'USA', x: 360, y: 225 },
    { city: 'Las Vegas', country: 'USA', x: 370, y: 279 },

    /* Canada */
    { city: 'Vancouver', country: 'Canada', x: 380, y: 187 },

    /* Europe */
    { city: 'London', country: 'UK', x: 985, y: 175 },
    { city: 'Paris', country: 'France', x: 1000, y: 200 },
    { city: 'Rome', country: 'Italy', x: 1055, y: 235 },
    { city: 'Amsterdam', country: 'Netherlands', x: 1010, y: 170 },

    /* Mexico */
    { city: 'Mexico City', country: 'Mexico', x: 435, y: 375 },
    { city: 'Guadalajara', country: 'Mexico', x: 413, y: 370 },
    { city: 'Guanajuato', country: 'Mexico', x: 420, y: 370 },
    { city: 'Cancun', country: 'Mexico', x: 500, y: 369 },
    { city: 'Puerto Vallarta', country: 'Mexico', x: 403, y: 370 },
    { city: 'Tulum', country: 'Mexico', x: 496, y: 380 },
    { city: 'Acapulco', country: 'Mexico', x: 425, y: 395 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const visitedCountries = [
    { name: 'United States', cities: ['Seattle', 'Los Angeles', 'San Diego', 'San Francisco', 'Portland', 'Las Vegas'], flag: '🇺🇸' },
    { name: 'Mexico', cities: ['Mexico City', 'Guadalajara', 'Guanajuato', 'Cancun', 'Puerto Vallarta', 'Tulum', 'Acapulco'], flag: '🇲🇽' },
    { name: 'Canada', cities: ['Vancouver'], flag: '🇨🇦' },
    { name: 'United Kingdom', cities: ['London'], flag: '🇬🇧' },
    { name: 'France', cities: ['Paris'], flag: '🇫🇷' },
    { name: 'Netherlands', cities: ['Amsterdam'], flag: '🇳🇱' },
    { name: 'Italy', cities: ['Rome'], flag: '🇮🇹' },
  ];

  // Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - mapPosition.x, y: e.clientY - mapPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMapPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetMapView = () => {
    setMapZoom(1);
    setMapPosition({ x: 0, y: 0 });
  };

  const zoomToCity = (cityName: string) => {
    setSelectedCity(cityName);
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg font-medium">{photos[currentSlide].location}</span>
                  </div>
                  <p className="text-2xl font-bold">{photos[currentSlide].caption}</p>
                </div>

                {/* Dots */}
                <div className="absolute bottom-8 right-8 flex gap-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Countries Visited */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-teal mb-6 flex items-center gap-2">
              <MapPin className="w-8 h-8" />
              Countries I've Visited
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visitedCountries.map((country, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{country.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-navy">{country.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {country.cities.map((city, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-lightBlue text-white rounded-full text-sm"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Masonry Photo Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-teal mb-6">London Gallery</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentSlide(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{photo.caption}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* World Map Modal */}
      {showMapModal && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMapModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-teal to-lightBlue p-6 text-white flex justify-between items-center">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Globe className="w-8 h-8" />
                Places I've Been
              </h2>
              <button
                onClick={() => setShowMapModal(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Map Container */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="relative bg-sand rounded-xl p-4">
                {/* Zoom Controls */}
                <div className="absolute top-8 right-8 z-10 flex flex-col gap-2">
                  <button
                    onClick={() => setMapZoom(Math.min(mapZoom + 0.25, 4))}
                    className="bg-white hover:bg-gray-100 p-2 rounded-lg shadow-lg transition-colors"
                    title="Zoom In"
                  >
                    <span className="text-xl font-bold text-navy">+</span>
                  </button>
                  <button
                    onClick={() => setMapZoom(Math.max(mapZoom - 0.25, 1))}
                    className="bg-white hover:bg-gray-100 p-2 rounded-lg shadow-lg transition-colors"
                    title="Zoom Out"
                  >
                    <span className="text-xl font-bold text-navy">−</span>
                  </button>
                  <button
                    onClick={resetMapView}
                    className="bg-white hover:bg-gray-100 p-2 rounded-lg shadow-lg transition-colors"
                    title="Reset View"
                  >
                    <Globe className="w-5 h-5 text-navy" />
                  </button>
                </div>

                {/* Map with zoom and pan */}
                <div 
                  className="relative overflow-hidden rounded-xl"
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <div
                    style={{
                      transform: `translate(${mapPosition.x}px, ${mapPosition.y}px) scale(${mapZoom})`,
                      transformOrigin: 'center center',
                      transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                    }}
                  >
                    {/* World Map SVG */}
                    <div className="relative">
                      <img 
                        src={worldMapSvg} 
                        alt="World Map" 
                        className="w-full h-auto select-none"
                        style={{ maxHeight: '600px', pointerEvents: 'none' }}
                        draggable={false}
                      />
                      
                      {/* Overlay for pins */}
                      <svg 
                        viewBox="0 0 2000 857" 
                        className="absolute inset-0 w-full h-full"
                        style={{ pointerEvents: 'none' }}
                      >
                        {/* Map Pins */}
                        {mapPins.map((pin, index) => {
                          const x = pin.x;
                          const y = pin.y;
                          const isSelected = selectedCity === pin.city;
                          const pinSize = isSelected ? 28 : 24;
                          
                          return (
                            <g key={index} className="group">
                              {/* Smaller invisible hitbox for hover detection */}
                              <circle
                                cx={x}
                                cy={y}
                                r="8"
                                fill="transparent"
                                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                              />
                              <foreignObject
                                x={x - pinSize / 2}
                                y={y - pinSize}
                                width={pinSize}
                                height={pinSize}
                                style={{ pointerEvents: 'none', overflow: 'visible' }}
                              >
                                <div style={{ 
                                  display: 'flex', 
                                  justifyContent: 'center', 
                                  alignItems: 'center',
                                  width: '100%',
                                  height: '100%',
                                }}>
                                  <MapPin
                                    size={pinSize}
                                    fill={isSelected ? '#10b981' : '#ff6b6b'}
                                    stroke="white"
                                    strokeWidth={2}
                                    style={{
                                      filter: isSelected 
                                        ? 'drop-shadow(0 2px 4px rgba(16, 185, 129, 0.5))' 
                                        : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                                    }}
                                  />
                                </div>
                              </foreignObject>
                              
                              {/* Label - visible on hover OR if selected */}
                              <g className={isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity duration-200"}>
                                {/* Background for label */}
                                <rect
                                  x={x - 50}
                                  y={y - pinSize - 28}
                                  width="100"
                                  height="22"
                                  rx="4"
                                  fill={isSelected ? '#10b981' : 'white'}
                                  stroke={isSelected ? '#059669' : '#cbd5e1'}
                                  strokeWidth="1"
                                />
                                {/* Label text */}
                                <text
                                  x={x}
                                  y={y - pinSize - 14}
                                  textAnchor="middle"
                                  fill={isSelected ? 'white' : '#1e293b'}
                                  fontSize="13"
                                  fontWeight="600"
                                  className="pointer-events-none"
                                >
                                  {pin.city}
                                </text>
                              </g>
                            </g>
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visited Places List - Grouped by Country */}
              <div className="mt-6 space-y-6">
                {visitedCountries.map((country, countryIndex) => {
                  // Get all cities for this country from mapPins
                  const countryCities = mapPins.filter(
                    pin => pin.country === country.name.split(' ').pop() // Match country names
                  );
                  
                  // If no cities found, use the cities from visitedCountries array
                  const citiesToShow = countryCities.length > 0 
                    ? countryCities.map(pin => pin.city)
                    : country.cities;
                  
                  return (
                    <div key={countryIndex} className="bg-white rounded-xl p-6 shadow-lg border-2 border-teal">
                      {/* Country Header */}
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-sand">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="text-2xl font-bold text-navy">{country.name}</h3>
                      </div>
                      
                      {/* Cities Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {citiesToShow.map((city, cityIndex) => (
                          <button
                            key={cityIndex}
                            onClick={() => zoomToCity(city)}
                            className="flex items-center gap-2 p-3 bg-sand rounded-lg hover:bg-lightBlue hover:text-white transition-colors cursor-pointer text-left"
                          >
                            <MapPin className="w-5 h-5 text-coral flex-shrink-0" />
                            <span className="font-medium">{city}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      </section>
      </main>
    </div>
  );
};

export default Travel;