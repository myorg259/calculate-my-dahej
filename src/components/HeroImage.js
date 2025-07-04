import React from 'react';

const HeroImage = () => {
  return (
    <div className="hero-image">
      <svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-svg"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4A90E2', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: '#7B68EE', stopOpacity: 0.1 }} />
          </linearGradient>
          
          <linearGradient id="calculatorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3A4D63', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2C3E50', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="moneyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F39C12', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#E67E22', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2ECC71', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#27AE60', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="300" height="200" fill="url(#bgGradient)" />
        
        {/* Money bag on the left */}
        <g transform="translate(40, 50)">
          <ellipse cx="20" cy="35" rx="18" ry="20" fill="url(#moneyGradient)" />
          <rect x="10" y="15" width="20" height="8" fill="url(#moneyGradient)" />
          <circle cx="12" cy="19" r="1.5" fill="#C0392B" />
          <circle cx="28" cy="19" r="1.5" fill="#C0392B" />
          <text x="20" y="42" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFF">₹</text>
          
          {/* Money bag strings */}
          <path d="M 14 15 Q 16 10 18 15" fill="none" stroke="#C0392B" strokeWidth="2" />
          <path d="M 22 15 Q 24 10 26 15" fill="none" stroke="#C0392B" strokeWidth="2" />
        </g>
        
        {/* Calculator in the center */}
        <g transform="translate(120, 30)">
          {/* Calculator body */}
          <rect x="0" y="0" width="60" height="80" rx="4" fill="url(#calculatorGradient)" />
          
          {/* Calculator screen */}
          <rect x="5" y="5" width="50" height="15" rx="2" fill="url(#screenGradient)" />
          <text x="30" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FFF">123,456</text>
          
          {/* Calculator buttons */}
          <g fill="#5D6D7E">
            {/* Top row */}
            <rect x="8" y="25" width="8" height="8" rx="1" />
            <rect x="19" y="25" width="8" height="8" rx="1" />
            <rect x="30" y="25" width="8" height="8" rx="1" />
            <rect x="41" y="25" width="8" height="8" rx="1" />
            
            {/* Second row */}
            <rect x="8" y="36" width="8" height="8" rx="1" />
            <rect x="19" y="36" width="8" height="8" rx="1" />
            <rect x="30" y="36" width="8" height="8" rx="1" />
            <rect x="41" y="36" width="8" height="8" rx="1" />
            
            {/* Third row */}
            <rect x="8" y="47" width="8" height="8" rx="1" />
            <rect x="19" y="47" width="8" height="8" rx="1" />
            <rect x="30" y="47" width="8" height="8" rx="1" />
            <rect x="41" y="47" width="8" height="8" rx="1" />
            
            {/* Bottom row */}
            <rect x="8" y="58" width="19" height="8" rx="1" />
            <rect x="30" y="58" width="8" height="8" rx="1" />
            <rect x="41" y="58" width="8" height="8" rx="1" />
          </g>
          
          {/* Calculator button labels */}
          <g fontSize="4" fontWeight="bold" fill="#FFF" textAnchor="middle">
            <text x="12" y="30">7</text>
            <text x="23" y="30">8</text>
            <text x="34" y="30">9</text>
            <text x="45" y="30">÷</text>
            
            <text x="12" y="41">4</text>
            <text x="23" y="41">5</text>
            <text x="34" y="41">6</text>
            <text x="45" y="41">×</text>
            
            <text x="12" y="52">1</text>
            <text x="23" y="52">2</text>
            <text x="34" y="52">3</text>
            <text x="45" y="52">-</text>
            
            <text x="17.5" y="63">0</text>
            <text x="34" y="63">.</text>
            <text x="45" y="63">+</text>
          </g>
        </g>
        
        {/* Money bag on the right */}
        <g transform="translate(220, 45)">
          <ellipse cx="20" cy="35" rx="18" ry="20" fill="url(#moneyGradient)" />
          <rect x="10" y="15" width="20" height="8" fill="url(#moneyGradient)" />
          <circle cx="12" cy="19" r="1.5" fill="#C0392B" />
          <circle cx="28" cy="19" r="1.5" fill="#C0392B" />
          <text x="20" y="42" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFF">₹</text>
          
          {/* Money bag strings */}
          <path d="M 14 15 Q 16 10 18 15" fill="none" stroke="#C0392B" strokeWidth="2" />
          <path d="M 22 15 Q 24 10 26 15" fill="none" stroke="#C0392B" strokeWidth="2" />
        </g>
        
        {/* Equals sign */}
        <g transform="translate(90, 85)">
          <rect x="0" y="5" width="12" height="2" fill="#4A90E2" />
          <rect x="0" y="10" width="12" height="2" fill="#4A90E2" />
        </g>
        
        {/* Arrow pointing to calculator */}
        <g transform="translate(195, 85)">
          <path d="M 0 7 L 8 7 L 6 5 M 8 7 L 6 9" fill="none" stroke="#4A90E2" strokeWidth="2" />
        </g>
        
        {/* Floating money symbols */}
        <g fontSize="12" fill="#F39C12" opacity="0.6">
          <text x="80" y="25">₹</text>
          <text x="210" y="25">₹</text>
          <text x="60" y="120">₹</text>
          <text x="230" y="125">₹</text>
        </g>
        
        {/* Animated sparkles */}
        <g className="sparkle-group">
          <circle cx="45" cy="40" r="1" fill="#FFD700" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="180" cy="30" r="1" fill="#FFD700" opacity="0.8">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="60" r="1" fill="#FFD700" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default HeroImage; 