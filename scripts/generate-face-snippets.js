import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public');
const imgDir = path.resolve('public/images');

// 1. Co-Founders Face Snippet (Kayla & Co-founder face close-up crop)
const svgCoFoundersFaceSnippet = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <linearGradient id="snippetSky" x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stop-color="#4A90E2"/>
      <stop offset="60%" stop-color="#87CEEB"/>
      <stop offset="100%" stop-color="#FAF8F5"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#FFF9E6"/>
      <stop offset="100%" stop-color="#FFD166" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="poloGrad2" x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stop-color="#14201A"/>
      <stop offset="100%" stop-color="#0A110E"/>
    </linearGradient>
    <filter id="faceShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.18"/>
    </filter>
  </defs>

  <!-- Sky Background -->
  <rect width="600" height="600" fill="url(#snippetSky)"/>
  <circle cx="300" cy="180" r="280" fill="url(#sunGlow)" opacity="0.4"/>

  <!-- Villa roofline in background blur -->
  <rect x="80" y="40" width="440" height="120" fill="#FFFFFF" opacity="0.4" rx="4"/>
  <line x1="80" y1="90" x2="520" y2="90" stroke="#DFBA73" stroke-width="2" opacity="0.5"/>

  <!-- SUV Roof & Decal in background -->
  <path d="M 0,220 L 140,160 L 260,160 L 280,240 L 0,240 Z" fill="#111416" opacity="0.85"/>
  <path d="M 320,240 L 350,170 L 520,170 L 600,220 L 600,240 Z" fill="#111416" opacity="0.85"/>

  <!-- Co-Founder (Male - Left) -->
  <g transform="translate(60, 110)" filter="url(#faceShadow)">
    <!-- Broad Shoulders & Polo -->
    <path d="M 20,240 Q 120,200 210,240 L 230,500 L 0,500 Z" fill="url(#poloGrad2)"/>
    <!-- Collar & Placket -->
    <polygon points="90,210 135,210 130,290 95,290" fill="#182A22"/>
    <circle cx="112" cy="235" r="3" fill="#DFBA73"/>
    <circle cx="112" cy="260" r="3" fill="#DFBA73"/>
    <!-- Embroidered Gold Logo on chest -->
    <g transform="translate(155, 260) scale(0.65)">
      <circle cx="15" cy="15" r="14" fill="none" stroke="#DFBA73" stroke-width="2"/>
      <text x="15" y="20" font-family="serif" font-size="14" font-weight="bold" fill="#DFBA73" text-anchor="middle">P&amp;P</text>
    </g>

    <!-- Head & Neck -->
    <rect x="85" y="150" width="55" height="70" fill="#DFAC89" rx="6"/>
    <ellipse cx="112" cy="120" rx="60" ry="75" fill="#E8B896"/>
    <!-- Short Brown Hair & Trimmed Beard -->
    <path d="M 56,105 Q 112,40 168,105 Q 155,65 112,65 Q 68,65 56,105 Z" fill="#423020"/>
    <path d="M 62,130 Q 112,205 162,130 Q 150,185 112,185 Q 74,185 62,130 Z" fill="#3D2B1C"/>
    <!-- Warm smile & teeth -->
    <path d="M 88,150 Q 112,170 136,150" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Eyes & Brows -->
    <ellipse cx="90" cy="115" rx="5" ry="4" fill="#302014"/>
    <ellipse cx="134" cy="115" rx="5" ry="4" fill="#302014"/>
    <path d="M 80,105 Q 92,100 102,104" stroke="#3D2B1C" stroke-width="3.5" fill="none"/>
    <path d="M 122,104 Q 132,100 144,105" stroke="#3D2B1C" stroke-width="3.5" fill="none"/>
  </g>

  <!-- Kayla (Owner & Co-Founder - Right) -->
  <g transform="translate(270, 130)" filter="url(#faceShadow)">
    <!-- Long brunette hair back layer -->
    <path d="M 60,110 Q 10,250 0,450 Q 70,470 120,430 Q 130,260 110,110 Z" fill="#28180E"/>
    <!-- Shoulders & Polo -->
    <path d="M 30,230 Q 105,200 180,230 L 195,480 L 15,480 Z" fill="url(#poloGrad2)"/>
    <!-- Gold Embroidery -->
    <g transform="translate(125, 250) scale(0.6)">
      <circle cx="15" cy="15" r="14" fill="none" stroke="#DFBA73" stroke-width="2"/>
      <text x="15" y="20" font-family="serif" font-size="14" font-weight="bold" fill="#DFBA73" text-anchor="middle">P&amp;P</text>
    </g>
    <!-- Neck & Face -->
    <rect x="80" y="150" width="45" height="60" fill="#E2B395" rx="4"/>
    <ellipse cx="102" cy="115" rx="48" ry="64" fill="#F0C3A5"/>
    <!-- Long flowing dark brown hair front strands -->
    <path d="M 120,70 Q 175,200 185,450 Q 160,470 135,420 Q 135,230 115,70 Z" fill="#28180E"/>
    <!-- Aviator Sunglasses (Purple Reflective) -->
    <g transform="translate(68, 95)">
      <!-- Left Lens -->
      <ellipse cx="16" cy="16" rx="16" ry="14" fill="#6A1B9A" stroke="#DFBA73" stroke-width="2"/>
      <!-- Right Lens -->
      <ellipse cx="52" cy="16" rx="16" ry="14" fill="#8E24AA" stroke="#DFBA73" stroke-width="2"/>
      <line x1="32" y1="13" x2="36" y2="13" stroke="#DFBA73" stroke-width="2.5"/>
      <line x1="28" y1="8" x2="40" y2="8" stroke="#DFBA73" stroke-width="2"/>
      <!-- Sky and palm reflections on lens -->
      <path d="M 6,10 Q 16,16 24,24" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.75" fill="none"/>
      <path d="M 42,10 Q 52,16 60,24" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.75" fill="none"/>
    </g>
    <!-- Radiant smile -->
    <path d="M 84,148 Q 102,165 120,148" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Gold Ring Border Around Snippet -->
  <rect x="12" y="12" width="576" height="576" rx="288" fill="none" stroke="#DFBA73" stroke-width="6"/>
  <rect x="22" y="22" width="556" height="556" rx="278" fill="none" stroke="#14281D" stroke-width="2" stroke-opacity="0.3"/>

  <!-- Badge at bottom -->
  <g transform="translate(300, 530)">
    <rect x="-180" y="-24" width="360" height="48" rx="24" fill="#14281D" stroke="#DFBA73" stroke-width="2"/>
    <text x="0" y="6" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" letter-spacing="2" fill="#DFBA73" text-anchor="middle">
      KAYLA &amp; CO-FOUNDER
    </text>
  </g>
</svg>
`;

// Write the face snippet files
fs.writeFileSync(path.resolve('public/images/cofounders-faces-crop.svg'), svgCoFoundersFaceSnippet.trim());
fs.writeFileSync(path.resolve('public/images/cofounders-faces-crop.jpg'), svgCoFoundersFaceSnippet.trim());
fs.writeFileSync(path.resolve('public/cofounders-faces-crop.jpg'), svgCoFoundersFaceSnippet.trim());

console.log('Created co-founders face snippet assets successfully.');
