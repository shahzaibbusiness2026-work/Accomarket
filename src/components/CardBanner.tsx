"use client";

import React from "react";

interface CardBannerProps {
  theme?: "volcano" | "cosmic" | "bull_growth" | "mountains" | "synthwave" | "candlestick" | string;
}

export default function CardBanner({ theme = "volcano" }: CardBannerProps) {
  // 1. Volcano / Magma theme (Card 1: High Trust Reddit Account)
  if (theme === "volcano") {
    return (
      <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-[#1a0803]">
        <svg className="w-full h-full object-cover" viewBox="0 0 400 176" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="volcSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#120402" />
              <stop offset="60%" stopColor="#2c0c05" />
              <stop offset="100%" stopColor="#5a1808" />
            </linearGradient>
            <linearGradient id="magmaGlow" x1="0.5" y1="1" x2="0.5" y2="0">
              <stop offset="0%" stopColor="#FF4500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFA07A" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="lavaSun" cx="65%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FF2A00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2a0a04" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Background Sky */}
          <rect width="400" height="176" fill="url(#volcSky)" />
          {/* Distant Glow */}
          <circle cx="270" cy="80" r="110" fill="url(#lavaSun)" />
          {/* Distant Mountain Peak */}
          <polygon points="120,176 180,70 240,176" fill="#200a06" />
          <polygon points="180,70 190,95 180,105 170,90" fill="#FF4500" opacity="0.6" />
          {/* Left Volcanic Peak */}
          <polygon points="0,176 90,50 190,176" fill="#180704" />
          <path d="M90 50L100 80L85 105L95 135L80 176" stroke="#FF5722" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          {/* Right Sharp Peak */}
          <polygon points="210,176 300,60 400,176" fill="#240b07" />
          <path d="M300 60L290 90L305 110L295 140L310 176" stroke="#FFA000" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          {/* Magma mist on ground */}
          <rect y="130" width="400" height="46" fill="url(#magmaGlow)" />
          {/* Floating sparks */}
          <circle cx="160" cy="110" r="1.5" fill="#FFE082" opacity="0.8" />
          <circle cx="140" cy="90" r="1" fill="#FFCC80" opacity="0.7" />
          <circle cx="210" cy="85" r="1.5" fill="#FFD54F" opacity="0.9" />
          <circle cx="230" cy="120" r="2" fill="#FFA726" opacity="0.6" />
          {/* Snoo Mascot on Right */}
          <g transform="translate(250, 48)">
            <ellipse cx="50" cy="54" rx="30" ry="24" fill="#FFFFFF" />
            <circle cx="25" cy="50" r="9" fill="#FFFFFF" />
            <circle cx="75" cy="50" r="9" fill="#FFFFFF" />
            <path d="M50 30L60 14L72 18" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="72" cy="18" r="5" fill="#FF4500" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle cx="39" cy="52" r="4.5" fill="#FF4500" />
            <circle cx="61" cy="52" r="4.5" fill="#FF4500" />
            <path d="M40 63C44 68 56 68 60 63" stroke="#FF4500" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // 2. Cosmic / Cyber Neon theme (Card 2: Organic Discussion Account)
  if (theme === "cosmic") {
    return (
      <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-[#080d26]">
        <svg className="w-full h-full object-cover" viewBox="0 0 400 176" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cosmicSky" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#05081c" />
              <stop offset="50%" stopColor="#0c1445" />
              <stop offset="100%" stopColor="#1a114f" />
            </linearGradient>
            <radialGradient id="cyberNebula" cx="65%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#2979FF" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#7C4DFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#05081c" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="176" fill="url(#cosmicSky)" />
          <circle cx="270" cy="80" r="100" fill="url(#cyberNebula)" />
          {/* Starlight dots */}
          <circle cx="50" cy="30" r="1" fill="#FFFFFF" opacity="0.7" />
          <circle cx="120" cy="50" r="1.5" fill="#00E5FF" opacity="0.8" />
          <circle cx="80" cy="90" r="1" fill="#FFFFFF" opacity="0.5" />
          <circle cx="170" cy="35" r="1.5" fill="#E040FB" opacity="0.6" />
          <circle cx="220" cy="120" r="1" fill="#FFFFFF" opacity="0.7" />
          {/* Floating Neon App Cubes */}
          <g transform="translate(60, 45)">
            <rect x="0" y="0" width="26" height="26" rx="6" stroke="#00E5FF" strokeWidth="1.5" fill="#00E5FF" fillOpacity="0.1" />
            <circle cx="13" cy="13" r="5" stroke="#00E5FF" strokeWidth="1.5" />
          </g>
          <g transform="translate(130, 80)">
            <rect x="0" y="0" width="22" height="22" rx="5" stroke="#7C4DFF" strokeWidth="1.5" fill="#7C4DFF" fillOpacity="0.1" />
            <path d="M6 11H16" stroke="#7C4DFF" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11 6V16" stroke="#7C4DFF" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g transform="translate(350, 60)">
            <rect x="0" y="0" width="22" height="22" rx="5" stroke="#E040FB" strokeWidth="1.5" fill="#E040FB" fillOpacity="0.1" />
            <circle cx="11" cy="11" r="4" stroke="#E040FB" strokeWidth="1.5" />
          </g>
          {/* Blue Cyber Glow Snoo */}
          <g transform="translate(250, 46)">
            <ellipse cx="50" cy="54" rx="30" ry="24" fill="#FFFFFF" />
            <circle cx="25" cy="50" r="9" fill="#FFFFFF" />
            <circle cx="75" cy="50" r="9" fill="#FFFFFF" />
            <path d="M50 30L60 14L72 18" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="72" cy="18" r="5" fill="#2979FF" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle cx="39" cy="52" r="4.5" fill="#2979FF" />
            <circle cx="61" cy="52" r="4.5" fill="#2979FF" />
            <path d="M40 63C44 68 56 68 60 63" stroke="#2979FF" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // 3. Bull Growth / Stock Surge theme (Card 3: Top Tier Authority Account)
  if (theme === "bull_growth") {
    return (
      <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-[#140603]">
        <svg className="w-full h-full object-cover" viewBox="0 0 400 176" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bullSky" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a0804" />
              <stop offset="60%" stopColor="#2c0c05" />
              <stop offset="100%" stopColor="#451206" />
            </linearGradient>
            <linearGradient id="arrowGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#FFA000" />
            </linearGradient>
          </defs>
          <rect width="400" height="176" fill="url(#bullSky)" />
          {/* Vertical Bar Charts background */}
          <rect x="50" y="115" width="12" height="61" fill="#FF4500" fillOpacity="0.2" rx="2" />
          <rect x="75" y="95" width="12" height="81" fill="#FF4500" fillOpacity="0.25" rx="2" />
          <rect x="100" y="80" width="12" height="96" fill="#FF4500" fillOpacity="0.3" rx="2" />
          <rect x="125" y="65" width="12" height="111" fill="#FF4500" fillOpacity="0.35" rx="2" />
          <rect x="150" y="50" width="12" height="126" fill="#FF4500" fillOpacity="0.4" rx="2" />
          {/* Big Glowing Upward Arrow */}
          <path d="M40 145L120 100L180 115L310 35" stroke="url(#arrowGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="310,25 325,45 295,48" fill="#FFA000" />
          {/* Snoo Mascot */}
          <g transform="translate(250, 48)">
            <ellipse cx="50" cy="54" rx="30" ry="24" fill="#FFFFFF" />
            <circle cx="25" cy="50" r="9" fill="#FFFFFF" />
            <circle cx="75" cy="50" r="9" fill="#FFFFFF" />
            <path d="M50 30L60 14L72 18" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="72" cy="18" r="5" fill="#FF4500" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle cx="39" cy="52" r="4.5" fill="#FF4500" />
            <circle cx="61" cy="52" r="4.5" fill="#FF4500" />
            <path d="M40 63C44 68 56 68 60 63" stroke="#FF4500" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // 4. Scenic Mountains theme (Card 4: Niche Community Account)
  if (theme === "mountains") {
    return (
      <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-[#0c1824]">
        <svg className="w-full h-full object-cover" viewBox="0 0 400 176" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="alpineSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a2e40" />
              <stop offset="60%" stopColor="#41596e" />
              <stop offset="100%" stopColor="#e39d63" />
            </linearGradient>
            <linearGradient id="snowPeak" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#8da0b3" />
            </linearGradient>
          </defs>
          <rect width="400" height="176" fill="url(#alpineSky)" />
          {/* Sun / Light behind mountains */}
          <circle cx="180" cy="110" r="50" fill="#FFE0B2" opacity="0.6" />
          {/* Distant Mountain Ridge */}
          <polygon points="0,176 100,75 190,176" fill="#2d4254" />
          <polygon points="100,75 115,100 100,110 85,95" fill="url(#snowPeak)" />
          {/* Center High Ridge */}
          <polygon points="120,176 210,65 310,176" fill="#1b2d3d" />
          <polygon points="210,65 225,90 210,105 195,85" fill="url(#snowPeak)" />
          {/* Right Ridge */}
          <polygon points="240,176 340,85 400,176" fill="#24384a" />
          {/* Pine tree silhouettes */}
          <polygon points="40,176 50,150 60,176" fill="#0f1b24" />
          <polygon points="55,176 65,145 75,176" fill="#0f1b24" />
          <polygon points="70,176 80,155 90,176" fill="#0f1b24" />
          {/* Explorer Snoo */}
          <g transform="translate(250, 48)">
            <ellipse cx="50" cy="54" rx="30" ry="24" fill="#FFFFFF" />
            <circle cx="25" cy="50" r="9" fill="#FFFFFF" />
            <circle cx="75" cy="50" r="9" fill="#FFFFFF" />
            <path d="M50 30L60 14L72 18" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="72" cy="18" r="5" fill="#FF4500" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle cx="39" cy="52" r="4.5" fill="#FF4500" />
            <circle cx="61" cy="52" r="4.5" fill="#FF4500" />
            <path d="M40 63C44 68 56 68 60 63" stroke="#FF4500" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // 5. Synthwave Sunset theme (Card 5: Vintage 7-Year Club Account)
  if (theme === "synthwave") {
    return (
      <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-[#140628]">
        <svg className="w-full h-full object-cover" viewBox="0 0 400 176" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="synthSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#12042b" />
              <stop offset="50%" stopColor="#420d5c" />
              <stop offset="100%" stopColor="#d81b60" />
            </linearGradient>
            <linearGradient id="synthSun" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe082" />
              <stop offset="100%" stopColor="#ff4081" />
            </linearGradient>
          </defs>
          <rect width="400" height="176" fill="url(#synthSky)" />
          {/* Big Retro Striped Sun */}
          <circle cx="190" cy="95" r="42" fill="url(#synthSun)" />
          {/* Sun Blinds / Horizontal Cutouts */}
          <line x1="148" y1="92" x2="232" y2="92" stroke="#420d5c" strokeWidth="2.5" />
          <line x1="150" y1="98" x2="230" y2="98" stroke="#420d5c" strokeWidth="3" />
          <line x1="155" y1="105" x2="225" y2="105" stroke="#420d5c" strokeWidth="3.5" />
          <line x1="162" y1="113" x2="218" y2="113" stroke="#420d5c" strokeWidth="4" />
          {/* City Skyline Silhouette */}
          <rect x="220" y="115" width="16" height="61" fill="#0d031c" />
          <rect x="240" y="105" width="20" height="71" fill="#0d031c" />
          <rect x="265" y="118" width="14" height="58" fill="#0d031c" />
          <rect x="282" y="98" width="18" height="78" fill="#0d031c" />
          <rect x="304" y="112" width="22" height="64" fill="#0d031c" />
          {/* Palm Tree Silhouettes Left */}
          <path d="M70 176Q75 125 90 95" stroke="#0a0217" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M90 95Q70 80 50 85M90 95Q85 70 95 55M90 95Q115 80 125 95M90 95Q105 105 115 115" stroke="#0a0217" strokeWidth="3.5" strokeLinecap="round" />
          {/* Cool Sunglasses Snoo */}
          <g transform="translate(250, 48)">
            <ellipse cx="50" cy="54" rx="30" ry="24" fill="#FFFFFF" />
            <circle cx="25" cy="50" r="9" fill="#FFFFFF" />
            <circle cx="75" cy="50" r="9" fill="#FFFFFF" />
            <path d="M50 30L60 14L72 18" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="72" cy="18" r="5" fill="#FF4081" stroke="#FFFFFF" strokeWidth="2.5" />
            {/* Sunglasses */}
            <path d="M34 50H66V56C66 60 62 64 58 64H42C38 64 34 60 34 56V50Z" fill="#18042b" />
            <rect x="36" y="52" width="12" height="7" rx="2" fill="#E040FB" opacity="0.8" />
            <rect x="52" y="52" width="12" height="7" rx="2" fill="#E040FB" opacity="0.8" />
            <path d="M40 68C44 71 56 71 60 68" stroke="#FF4081" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // 6. Emerald Candlestick / Bull Trading theme (Card 6: Starter Discussion Profile)
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-[#041913]">
      <svg className="w-full h-full object-cover" viewBox="0 0 400 176" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tradeSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#02140e" />
            <stop offset="60%" stopColor="#052e22" />
            <stop offset="100%" stopColor="#084534" />
          </linearGradient>
          <linearGradient id="greenArrowGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#00C853" />
            <stop offset="100%" stopColor="#69F0AE" />
          </linearGradient>
        </defs>
        <rect width="400" height="176" fill="url(#tradeSky)" />
        {/* Candlesticks */}
        {/* Candle 1 */}
        <line x1="55" y1="110" x2="55" y2="160" stroke="#00C853" strokeWidth="1.5" />
        <rect x="50" y="120" width="10" height="30" rx="1.5" fill="#00C853" />
        {/* Candle 2 */}
        <line x1="80" y1="90" x2="80" y2="145" stroke="#00C853" strokeWidth="1.5" />
        <rect x="75" y="100" width="10" height="35" rx="1.5" fill="#00C853" />
        {/* Candle 3 */}
        <line x1="105" y1="85" x2="105" y2="135" stroke="#00C853" strokeWidth="1.5" />
        <rect x="100" y="92" width="10" height="30" rx="1.5" fill="#00C853" />
        {/* Candle 4 */}
        <line x1="130" y1="70" x2="130" y2="120" stroke="#00C853" strokeWidth="1.5" />
        <rect x="125" y="76" width="10" height="34" rx="1.5" fill="#00E676" />
        {/* Candle 5 */}
        <line x1="155" y1="55" x2="155" y2="110" stroke="#00C853" strokeWidth="1.5" />
        <rect x="150" y="62" width="10" height="36" rx="1.5" fill="#00E676" />
        {/* Neon Green Upward Breakout Arrow */}
        <path d="M40 140L80 110L125 100L170 75L315 35" stroke="url(#greenArrowGrad)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="315,25 330,42 300,45" fill="#69F0AE" />
        {/* Happy Snoo */}
        <g transform="translate(250, 48)">
          <ellipse cx="50" cy="54" rx="30" ry="24" fill="#FFFFFF" />
          <circle cx="25" cy="50" r="9" fill="#FFFFFF" />
          <circle cx="75" cy="50" r="9" fill="#FFFFFF" />
          <path d="M50 30L60 14L72 18" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="72" cy="18" r="5" fill="#00C853" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="39" cy="52" r="4.5" fill="#00C853" />
          <circle cx="61" cy="52" r="4.5" fill="#00C853" />
          <path d="M40 63C44 68 56 68 60 63" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
