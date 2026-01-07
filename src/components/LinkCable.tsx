import React from 'react';

const LinkCableAnimation = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-8">
        {/* Heading */}
        <div className="text-center mt-6">
            <h2 className="text-5xl font-bold text-lightBlue mb-2">Let's Connect!</h2>
        </div>
      <svg
        viewBox="0 0 600 200"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cable Gradient */}
        <defs>
          <linearGradient id="cableGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Data flow animation */}
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0 }}>
              <animate
                attributeName="offset"
                values="0;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }}>
              <animate
                attributeName="offset"
                values="0;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0 }}>
              <animate
                attributeName="offset"
                values="0;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Left Game Boy */}
        <g transform="translate(30, 50)">
          {/* Game Boy Body */}
          <rect x="0" y="0" width="80" height="100" rx="8" fill="#9ca3af" stroke="#1f2937" strokeWidth="2"/>
          
          {/* Screen */}
          <rect x="10" y="10" width="60" height="40" rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
          <rect x="15" y="15" width="50" height="30" fill="#0f172a"/>
          
          {/* Screen content - pixels */}
          <rect x="20" y="20" width="8" height="8" fill="#22d3ee">
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="32" y="20" width="8" height="8" fill="#22d3ee">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="44" y="20" width="8" height="8" fill="#22d3ee">
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
          </rect>
          
          {/* D-pad */}
          <circle cx="25" cy="70" r="12" fill="#374151" stroke="#1f2937" strokeWidth="1"/>
          <rect x="20" y="67" width="10" height="6" fill="#1f2937"/>
          <rect x="22" y="65" width="6" height="10" fill="#1f2937"/>
          
          {/* Buttons */}
          <circle cx="55" cy="70" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1"/>
          <circle cx="65" cy="65" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1"/>
          
          {/* Link Port */}
          <rect x="75" y="45" width="12" height="10" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
          <rect x="77" y="47" width="8" height="6" fill="#4b5563"/>
        </g>

        {/* Cable */}
        <g filter="url(#glow)">
          {/* Main cable body */}
          <path
            d="M 117 95 C 180 95, 180 95, 240 80 C 300 65, 360 65, 420 80 C 480 95, 480 95, 513 95"
            stroke="url(#cableGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Data flow effect */}
          <path
            d="M 117 95 C 180 95, 180 95, 240 80 C 300 65, 360 65, 420 80 C 480 95, 480 95, 513 95"
            stroke="url(#flowGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          
          {/* Cable connectors */}
          <rect x="110" y="90" width="7" height="10" fill="#6b7280" stroke="#374151" strokeWidth="1" rx="1"/>
          <rect x="513" y="90" width="7" height="10" fill="#6b7280" stroke="#374151" strokeWidth="1" rx="1"/>
        </g>

        {/* Floating data particles */}
        <circle cx="150" cy="95" r="3" fill="#60a5fa">
          <animate attributeName="cx" values="150;500" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="120" cy="95" r="2" fill="#60a5fa">
          <animate attributeName="cx" values="120;500" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="180" cy="90" r="2.5" fill="#22d3ee">
          <animate attributeName="cx" values="180;500" dur="3.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" dur="3.5s" repeatCount="indefinite"/>
        </circle>

        {/* Right Game Boy */}
        <g transform="translate(490, 50)">
          {/* Game Boy Body */}
          <rect x="0" y="0" width="80" height="100" rx="8" fill="#9ca3af" stroke="#1f2937" strokeWidth="2"/>
          
          {/* Screen */}
          <rect x="10" y="10" width="60" height="40" rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
          <rect x="15" y="15" width="50" height="30" fill="#0f172a"/>
          
          {/* Screen content - pixels */}
          <rect x="20" y="20" width="8" height="8" fill="#a78bfa">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="32" y="20" width="8" height="8" fill="#a78bfa">
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="44" y="20" width="8" height="8" fill="#a78bfa">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
          </rect>
          
          {/* D-pad */}
          <circle cx="25" cy="70" r="12" fill="#374151" stroke="#1f2937" strokeWidth="1"/>
          <rect x="20" y="67" width="10" height="6" fill="#1f2937"/>
          <rect x="22" y="65" width="6" height="10" fill="#1f2937"/>
          
          {/* Buttons */}
          <circle cx="55" cy="70" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1"/>
          <circle cx="65" cy="65" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1"/>
          
          {/* Link Port */}
          <rect x="-7" y="45" width="12" height="10" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
          <rect x="-5" y="47" width="8" height="6" fill="#4b5563"/>
        </g>

        {/* Labels */}
        <text x="70" y="170" textAnchor="middle" fill="#64748b" fontSize="14" fontWeight="600">
          YOU
        </text>
        <text x="530" y="170" textAnchor="middle" fill="#64748b" fontSize="14" fontWeight="600">
          ME
        </text>
      </svg>
      
      <div className="text-center mt-6">
        <p className="text-slate-400">Want to reach out? Link up with me to start Level 1!</p>
      </div>
    </div>
  );
};

export default LinkCableAnimation;