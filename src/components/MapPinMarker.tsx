import React from 'react';
import { MapPin } from 'lucide-react';

interface MapPinMarkerProps {
  city: string;
  x: number;
  y: number;
  isSelected: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MapPinMarker: React.FC<MapPinMarkerProps> = ({
  city,
  x,
  y,
  isSelected,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const pinSize = isSelected || isHovered ? 28 : 24;

  return (
    <g className="group">
      {/* Smaller invisible hitbox for hover detection */}
      <circle
        cx={x}
        cy={y}
        r="8"
        fill="transparent"
        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <foreignObject
        x={x - pinSize / 2}
        y={y - pinSize}
        width={pinSize}
        height={pinSize}
        style={{ pointerEvents: 'none', overflow: 'visible' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <MapPin
            size={pinSize}
            fill={isSelected ? '#10b981' : isHovered ? '#f59e0b' : '#ff6b6b'}
            stroke="white"
            strokeWidth={2}
            style={{
              filter: isSelected
                ? 'drop-shadow(0 4px 8px rgba(16, 185, 129, 0.6))'
                : isHovered
                ? 'drop-shadow(0 4px 8px rgba(245, 158, 11, 0.6))'
                : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
              transform: isSelected || isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.2s ease-out',
            }}
          />
        </div>
      </foreignObject>

      {/* Label - visible on hover OR if selected */}
      <g
        className={
          isSelected || isHovered
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100 transition-opacity duration-200'
        }
      >
        {/* Background for label */}
        <rect
          x={x - 50}
          y={y - pinSize - 28}
          width="100"
          height="22"
          rx="4"
          fill={isSelected ? '#10b981' : isHovered ? '#f59e0b' : 'white'}
          stroke={isSelected ? '#059669' : isHovered ? '#d97706' : '#cbd5e1'}
          strokeWidth="1.5"
        />
        {/* Label text */}
        <text
          x={x}
          y={y - pinSize - 14}
          textAnchor="middle"
          fill={isSelected || isHovered ? 'white' : '#1e293b'}
          fontSize="13"
          fontWeight="600"
          className="pointer-events-none"
        >
          {city}
        </text>
      </g>
    </g>
  );
};

export default MapPinMarker;