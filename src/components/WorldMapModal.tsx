import React, { useState, useRef, useEffect } from 'react';
import { MapPin, X, Globe } from 'lucide-react';
import worldMapSvg from '../assets/world.svg';
import MapPinMarker from './MapPinMarker';

interface MapPinType {
  city: string;
  country: string;
  x: number;  // Manual x coordinate (0-2000)
  y: number;  // Manual y coordinate (0-857)
}

interface Country {
  name: string;
  cities: string[];
  flag: string;
}

interface WorldMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorldMapModal: React.FC<WorldMapModalProps> = ({ isOpen, onClose }) => {
  const [mapZoom, setMapZoom] = useState(1);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapScrollRef = useRef<HTMLDivElement>(null);

  const mapPins: MapPinType[] = [
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

  const visitedCountries: Country[] = [
    { name: 'United States', cities: ['Seattle', 'Los Angeles', 'San Diego', 'San Francisco', 'Portland', 'Las Vegas'], flag: '🇺🇸' },
    { name: 'Mexico', cities: ['Mexico City', 'Guadalajara', 'Guanajuato', 'Cancun', 'Puerto Vallarta', 'Tulum', 'Acapulco'], flag: '🇲🇽' },
    { name: 'Canada', cities: ['Vancouver'], flag: '🇨🇦' },
    { name: 'United Kingdom', cities: ['London'], flag: '🇬🇧' },
    { name: 'France', cities: ['Paris'], flag: '🇫🇷' },
    { name: 'Netherlands', cities: ['Amsterdam'], flag: '🇳🇱' },
    { name: 'Italy', cities: ['Rome'], flag: '🇮🇹' },
  ];

  // Constrain map position within bounds
  const constrainPosition = (x: number, y: number, zoom: number) => {
    if (!mapContainerRef.current) return { x, y };
    
    const container = mapContainerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Calculate the scaled dimensions of the map
    const scaledWidth = containerWidth * zoom;
    const scaledHeight = containerHeight * zoom;
    
    // Calculate maximum allowed offset (half the difference between scaled and container size)
    const maxX = (scaledWidth - containerWidth) / 2;
    const maxY = (scaledHeight - containerHeight) / 2;
    
    // Constrain position
    const constrainedX = Math.max(-maxX, Math.min(maxX, x));
    const constrainedY = Math.max(-maxY, Math.min(maxY, y));
    
    return { x: constrainedX, y: constrainedY };
  };

  // Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - mapPosition.x, y: e.clientY - mapPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newPosition = constrainPosition(
      e.clientX - dragStart.x,
      e.clientY - dragStart.y,
      mapZoom
    );
    setMapPosition(newPosition);
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
    // Scroll to the map
    mapScrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Recalculate bounds when zoom changes
  useEffect(() => {
    const constrained = constrainPosition(mapPosition.x, mapPosition.y, mapZoom);
    if (constrained.x !== mapPosition.x || constrained.y !== mapPosition.y) {
      setMapPosition(constrained);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapZoom]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b-2 border-sand p-6 flex justify-between items-center z-[60]">
          <h2 className="text-3xl font-bold text-navy flex items-center gap-3">
            <Globe className="w-8 h-8 text-coral" />
            My World Travel Map
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-sand rounded-lg transition-colors"
            title="Close"
          >
            <X className="w-6 h-6 text-navy" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div ref={mapScrollRef} className="relative bg-sand rounded-xl p-4">
            {/* Zoom Controls */}
            <div className="absolute top-8 right-4 z-50 flex flex-col gap-2">
              <button
                onClick={() => {
                  const newZoom = Math.min(mapZoom + 0.25, 4);
                  setMapZoom(newZoom);
                }}
                className="bg-white hover:bg-gray-100 w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transition-colors border border-gray-200"
                title="Zoom In"
              >
                <span className="text-xl font-bold text-navy">+</span>
              </button>
              <button
                onClick={() => {
                  const newZoom = Math.max(mapZoom - 0.25, 1);
                  setMapZoom(newZoom);
                }}
                className="bg-white hover:bg-gray-100 w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transition-colors border border-gray-200"
                title="Zoom Out"
              >
                <span className="text-xl font-bold text-navy">−</span>
              </button>
              <button
                onClick={resetMapView}
                className="bg-white hover:bg-gray-100 w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transition-colors border border-gray-200"
                title="Reset View"
              >
                <Globe className="w-5 h-5 text-navy" />
              </button>
            </div>

            {/* Map with zoom and pan */}
            <div 
              ref={mapContainerRef}
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
                    {/* Map Pins - sorted so hovered/selected appear on top */}
                    {[...mapPins]
                      .sort((a, b) => {
                        // Put hovered pin at the end (on top)
                        if (a.city === hoveredCity) return 1;
                        if (b.city === hoveredCity) return -1;
                        // Put selected pin second to last
                        if (a.city === selectedCity) return 1;
                        if (b.city === selectedCity) return -1;
                        return 0;
                      })
                      .map((pin, index) => (
                        <MapPinMarker
                          key={`${pin.city}-${index}`}
                          city={pin.city}
                          x={pin.x}
                          y={pin.y}
                          isSelected={selectedCity === pin.city}
                          isHovered={hoveredCity === pin.city}
                          onMouseEnter={() => setHoveredCity(pin.city)}
                          onMouseLeave={() => setHoveredCity(null)}
                        />
                      ))}
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
  );
};

export default WorldMapModal;