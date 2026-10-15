import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public');
const imgDir = path.resolve('public/images');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

// 1. Official Logo & Brand Emblem (825350970_2227129271558671_4729667765504210952_n.jpg)
const svgLogo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <radialGradient id="bgG" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F7F4EE"/>
    </radialGradient>
    <linearGradient id="goldG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DFBA73"/>
      <stop offset="50%" stop-color="#C89B53"/>
      <stop offset="100%" stop-color="#9E7634"/>
    </linearGradient>
    <radialGradient id="pearlShine" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F5F0E6"/>
      <stop offset="100%" stop-color="#D8C9B4"/>
    </radialGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#14281D" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1000" height="1000" fill="url(#bgG)"/>

  <!-- Outer Emblem Gold Ring -->
  <g transform="translate(500, 260)">
    <circle cx="0" cy="0" r="185" fill="none" stroke="url(#goldG)" stroke-width="4.5"/>
    <circle cx="0" cy="0" r="180" fill="none" stroke="#C89B53" stroke-width="1" stroke-opacity="0.4"/>
    
    <!-- Sparkles -->
    <path d="M 120,-110 Q 120,-85 145,-85 Q 120,-85 120,-60 Q 120,-85 95,-85 Q 120,-85 120,-110 Z" fill="url(#goldG)"/>
    <path d="M 155,-55 Q 155,-40 170,-40 Q 155,-40 155,-25 Q 155,-40 140,-40 Q 155,-40 155,-55 Z" fill="url(#goldG)"/>

    <!-- Palm Tree on Left -->
    <g transform="translate(-105, 40) scale(0.85)">
      <!-- Trunk -->
      <path d="M 10,80 Q -15,10 -35,-80 Q -25,-80 -5,80 Z" fill="#6B4B27" stroke="#4A341B" stroke-width="1.5"/>
      <path d="M 3,60 Q -12,10 -28,-60" stroke="#DFBA73" stroke-width="1.5" fill="none" stroke-opacity="0.6"/>
      <!-- Fronds -->
      <path d="M -35,-80 Q -95,-120 -115,-70 Q -80,-95 -35,-80" fill="#1E3D2B"/>
      <path d="M -35,-80 Q -70,-145 -40,-155 Q -45,-120 -35,-80" fill="#254D37"/>
      <path d="M -35,-80 Q -10,-160 20,-140 Q 0,-120 -35,-80" fill="#1E3D2B"/>
      <path d="M -35,-80 Q 25,-120 45,-75 Q 10,-95 -35,-80" fill="#2A593F"/>
      <path d="M -35,-80 Q -50,-65 -85,-45 Q -65,-65 -35,-80" fill="#1A3324"/>
    </g>

    <!-- Buildings & Scaffolding on Right -->
    <g transform="translate(60, 20) scale(0.9)">
      <rect x="0" y="-80" width="35" height="130" fill="#8C9A91" opacity="0.85"/>
      <rect x="35" y="-55" width="30" height="105" fill="#6B7D71" opacity="0.9"/>
      <!-- Scaffolding lines -->
      <line x1="35" y1="-55" x2="65" y2="-25" stroke="url(#goldG)" stroke-width="1.5"/>
      <line x1="65" y1="-55" x2="35" y2="-25" stroke="url(#goldG)" stroke-width="1.5"/>
      <line x1="35" y1="-25" x2="65" y2="5" stroke="url(#goldG)" stroke-width="1.5"/>
      <line x1="65" y1="-25" x2="35" y2="5" stroke="url(#goldG)" stroke-width="1.5"/>
      <line x1="35" y1="5" x2="65" y2="35" stroke="url(#goldG)" stroke-width="1.5"/>
      <line x1="65" y1="5" x2="35" y2="35" stroke="url(#goldG)" stroke-width="1.5"/>
      <!-- Windows -->
      <line x1="8" y1="-70" x2="27" y2="-70" stroke="#FFFFFF" stroke-width="1.5"/>
      <line x1="8" y1="-55" x2="27" y2="-55" stroke="#FFFFFF" stroke-width="1.5"/>
      <line x1="8" y1="-40" x2="27" y2="-40" stroke="#FFFFFF" stroke-width="1.5"/>
      <line x1="8" y1="-25" x2="27" y2="-25" stroke="#FFFFFF" stroke-width="1.5"/>
      <line x1="8" y1="-10" x2="27" y2="-10" stroke="#FFFFFF" stroke-width="1.5"/>
    </g>

    <!-- P & P Monogram -->
    <!-- First P (Forest Green) -->
    <text x="-48" y="25" font-family="'Cormorant Garamond', Georgia, serif" font-size="165" font-weight="700" fill="#14281D" filter="url(#shadow)">P</text>
    <!-- Second P (Gold) -->
    <text x="32" y="70" font-family="'Cormorant Garamond', Georgia, serif" font-size="165" font-weight="700" fill="url(#goldG)" filter="url(#shadow)">P</text>
    <!-- Ampersand Linking Them -->
    <text x="-12" y="55" font-family="'Great Vibes', cursive" font-size="120" font-weight="bold" fill="url(#goldG)">&amp;</text>

    <!-- Pearl in Oyster Shell -->
    <g transform="translate(-85, 75) scale(0.9)">
      <!-- Lower shell -->
      <path d="M 0,30 Q 30,65 75,55 Q 90,30 80,10 Q 40,25 0,30 Z" fill="#E8D5BE" stroke="#9E7634" stroke-width="1.5"/>
      <!-- Upper open shell -->
      <path d="M 10,18 Q 40,-35 80,-25 Q 90,5 75,22 Q 45,5 10,18 Z" fill="#F4EFE6" stroke="#9E7634" stroke-width="1.5"/>
      <!-- Shell ribs -->
      <line x1="20" y1="18" x2="65" y2="-15" stroke="#C89B53" stroke-width="1" opacity="0.6"/>
      <line x1="35" y1="20" x2="72" y2="-5" stroke="#C89B53" stroke-width="1" opacity="0.6"/>
      <!-- Pearl -->
      <circle cx="58" cy="22" r="16" fill="url(#pearlShine)" filter="url(#shadow)"/>
      <circle cx="53" cy="17" r="4" fill="#FFFFFF" opacity="0.8"/>
    </g>

    <!-- Wave base -->
    <path d="M -150,110 Q -60,95 20,120 Q 90,140 160,115" fill="none" stroke="url(#goldG)" stroke-width="3"/>
    <path d="M -130,122 Q -40,110 40,132 Q 100,150 170,128" fill="none" stroke="#1E3D2B" stroke-width="2" opacity="0.7"/>
  </g>

  <!-- Brand Typography -->
  <text x="500" y="565" font-family="'Cormorant Garamond', Georgia, serif" font-size="78" font-weight="700" letter-spacing="10" fill="#14281D" text-anchor="middle">
    PALM <tspan fill="url(#goldG)">&amp;</tspan> PEARL
  </text>
  
  <text x="500" y="620" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="600" letter-spacing="18" fill="#14281D" text-anchor="middle">
    CLEANING SERVICES
  </text>

  <!-- Green Pill Badge -->
  <g transform="translate(140, 650)">
    <rect x="0" y="0" width="720" height="46" rx="23" fill="#14281D"/>
    <text x="360" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" letter-spacing="4" fill="#DFBA73" text-anchor="middle">
      COMMERCIAL   •   POST CONSTRUCTION   •   RESIDENTIAL
    </text>
  </g>

  <!-- 4 Feature Badges Section -->
  <g transform="translate(80, 740)">
    <!-- Column 1: Commercial -->
    <g transform="translate(45, 0)">
      <circle cx="65" cy="40" r="32" fill="none" stroke="#14281D" stroke-width="2"/>
      <!-- Building Icon -->
      <rect x="52" y="22" width="26" height="34" fill="none" stroke="#14281D" stroke-width="2"/>
      <line x1="58" y1="28" x2="62" y2="28" stroke="#14281D" stroke-width="1.5"/>
      <line x1="68" y1="28" x2="72" y2="28" stroke="#14281D" stroke-width="1.5"/>
      <line x1="58" y1="36" x2="62" y2="36" stroke="#14281D" stroke-width="1.5"/>
      <line x1="68" y1="36" x2="72" y2="36" stroke="#14281D" stroke-width="1.5"/>
      <text x="65" y="95" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="1" fill="#14281D" text-anchor="middle">COMMERCIAL</text>
      <text x="65" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="1" fill="#14281D" text-anchor="middle">CLEANING</text>
      <text x="65" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#687970" text-anchor="middle">OFFICES • RETAIL</text>
      <text x="65" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#687970" text-anchor="middle">FACILITIES</text>
    </g>

    <!-- Divider 1 -->
    <line x1="220" y1="20" x2="220" y2="150" stroke="#C89B53" stroke-width="1" stroke-opacity="0.4"/>

    <!-- Column 2: Post Construction -->
    <g transform="translate(250, 0)">
      <circle cx="65" cy="40" r="32" fill="none" stroke="#14281D" stroke-width="2"/>
      <!-- Hardhat Icon -->
      <path d="M 45,45 Q 65,22 85,45 Z" fill="none" stroke="#14281D" stroke-width="2"/>
      <line x1="40" y1="45" x2="90" y2="45" stroke="#14281D" stroke-width="2"/>
      <text x="65" y="95" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#14281D" text-anchor="middle">POST CONSTRUCTION</text>
      <text x="65" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#14281D" text-anchor="middle">CLEANING</text>
      <text x="65" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#687970" text-anchor="middle">FINAL CLEAN • BUILDS</text>
      <text x="65" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#687970" text-anchor="middle">RENOVATIONS</text>
    </g>

    <!-- Divider 2 -->
    <line x1="430" y1="20" x2="430" y2="150" stroke="#C89B53" stroke-width="1" stroke-opacity="0.4"/>

    <!-- Column 3: Residential -->
    <g transform="translate(460, 0)">
      <circle cx="65" cy="40" r="32" fill="none" stroke="#14281D" stroke-width="2"/>
      <!-- Home Icon -->
      <path d="M 48,45 L 65,30 L 82,45 L 82,56 L 48,56 Z" fill="none" stroke="#14281D" stroke-width="2"/>
      <text x="65" y="95" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="1" fill="#14281D" text-anchor="middle">RESIDENTIAL</text>
      <text x="65" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="1" fill="#14281D" text-anchor="middle">CLEANING</text>
      <text x="65" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#687970" text-anchor="middle">HOMES • APARTMENTS</text>
      <text x="65" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#687970" text-anchor="middle">MOVE-IN / OUT</text>
    </g>

    <!-- Divider 3 -->
    <line x1="640" y1="20" x2="640" y2="150" stroke="#C89B53" stroke-width="1" stroke-opacity="0.4"/>

    <!-- Column 4: Final Clean Detailing -->
    <g transform="translate(670, 0)">
      <circle cx="65" cy="40" r="32" fill="none" stroke="#14281D" stroke-width="2"/>
      <!-- Sparkle Window Icon -->
      <rect x="48" y="26" width="34" height="28" fill="none" stroke="#14281D" stroke-width="2"/>
      <line x1="65" y1="26" x2="65" y2="54" stroke="#14281D" stroke-width="1.5"/>
      <line x1="48" y1="40" x2="82" y2="40" stroke="#14281D" stroke-width="1.5"/>
      <text x="65" y="95" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#14281D" text-anchor="middle">FINAL CLEAN</text>
      <text x="65" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#14281D" text-anchor="middle">DETAILING</text>
      <text x="65" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#687970" text-anchor="middle">PRECISION • QUALITY</text>
      <text x="65" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#687970" text-anchor="middle">SHOWROOM READY</text>
    </g>
  </g>

  <!-- Bottom Tagline -->
  <g transform="translate(500, 955)">
    <path d="M -230, -5 Q -230,0 -240,0 Q -230,0 -230,5 Q -230,0 -220,0 Q -230,0 -230,-5 Z" fill="url(#goldG)"/>
    <text x="0" y="3" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-weight="700" letter-spacing="8" fill="#14281D" text-anchor="middle">
      PRISTINE SPACES. TIMELESS CARE.
    </text>
    <path d="M 230, -5 Q 230,0 220,0 Q 230,0 230,5 Q 230,0 240,0 Q 230,0 230,-5 Z" fill="url(#goldG)"/>
  </g>
</svg>
`;

// 2. Real Owners & Fleet (825350966_2227129678225297_3306893046972007862_n.jpg)
const svgTeamFleet = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stop-color="#4A90E2"/>
      <stop offset="40%" stop-color="#87CEEB"/>
      <stop offset="80%" stop-color="#D1EEFC"/>
      <stop offset="100%" stop-color="#FAF8F5"/>
    </linearGradient>
    <linearGradient id="oceanGrad" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="0%" stop-color="#0E86D4"/>
      <stop offset="50%" stop-color="#1DA1F2"/>
      <stop offset="100%" stop-color="#0575E6"/>
    </linearGradient>
    <linearGradient id="poloGrad" x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stop-color="#1A2421"/>
      <stop offset="100%" stop-color="#0E1613"/>
    </linearGradient>
    <radialGradient id="sunShine" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFDF0"/>
      <stop offset="40%" stop-color="#FFEAA7"/>
      <stop offset="100%" stop-color="#FFA502" stop-opacity="0"/>
    </radialGradient>
    <filter id="softGlow">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Sky & Tropical Background -->
  <rect width="1200" height="900" fill="url(#skyGrad)"/>
  <!-- Sun glare -->
  <circle cx="200" cy="150" r="220" fill="url(#sunShine)" opacity="0.35"/>
  <!-- Ocean Horizon in distance -->
  <rect x="0" y="240" width="1200" height="90" fill="url(#oceanGrad)" opacity="0.55"/>

  <!-- Luxury Coastal Mansion Architecture -->
  <g transform="translate(60, 100)" opacity="0.9">
    <rect x="0" y="40" width="400" height="180" fill="#FFFFFF" rx="4"/>
    <rect x="15" y="55" width="80" height="150" fill="#E8EEF5" rx="2"/>
    <rect x="110" y="55" width="180" height="150" fill="#E8EEF5" rx="2"/>
    <rect x="305" y="55" width="80" height="150" fill="#E8EEF5" rx="2"/>
    <!-- Balconies & Pillars -->
    <line x1="0" y1="120" x2="400" y2="120" stroke="#DFBA73" stroke-width="4"/>
    <!-- Palm trees behind villa -->
    <path d="M 450,180 Q 420,80 390,20" stroke="#5D4037" stroke-width="8" fill="none"/>
    <circle cx="390" cy="20" r="50" fill="#2E7D32" opacity="0.8"/>
    <path d="M 40,180 Q 20,80 0,30" stroke="#5D4037" stroke-width="8" fill="none"/>
    <circle cx="0" cy="30" r="45" fill="#2E7D32" opacity="0.8"/>
  </g>

  <!-- Paver Driveway -->
  <polygon points="0,520 1200,520 1200,900 0,900" fill="#D5CEC5"/>
  <line x1="0" y1="600" x2="1200" y2="600" stroke="#B8AFA4" stroke-width="2" stroke-dasharray="12,12"/>
  <line x1="0" y1="680" x2="1200" y2="680" stroke="#B8AFA4" stroke-width="2" stroke-dasharray="14,14"/>

  <!-- Fleet of Branded Black SUVs in Background -->
  <!-- SUV 3 (Furthest) -->
  <g transform="translate(850, 310) scale(0.65)" opacity="0.85">
    <path d="M 0,140 L 40,80 L 160,80 L 250,120 L 290,140 L 300,180 L 0,180 Z" fill="#1A1D20"/>
    <circle cx="60" cy="180" r="28" fill="#333"/>
    <circle cx="240" cy="180" r="28" fill="#333"/>
  </g>
  <!-- SUV 2 (Middle) -->
  <g transform="translate(680, 290) scale(0.85)" opacity="0.95">
    <path d="M 0,160 L 50,90 L 190,90 L 300,140 L 350,160 L 360,210 L 0,210 Z" fill="#14171A"/>
    <!-- Gold Decal Graphic on Side -->
    <path d="M 60,180 Q 150,150 250,175" stroke="#DFBA73" stroke-width="6" fill="none"/>
    <circle cx="80" cy="210" r="34" fill="#222"/>
    <circle cx="280" cy="210" r="34" fill="#222"/>
    <text x="130" y="165" font-family="'Cormorant Garamond', serif" font-size="14" font-weight="bold" fill="#DFBA73">PALM &amp; PEARL</text>
  </g>
  <!-- SUV 1 (Closest Left) -->
  <g transform="translate(-40, 240) scale(1.15)">
    <path d="M 20,200 L 90,110 L 260,110 L 390,170 L 460,200 L 470,270 L 20,270 Z" fill="#0C0E10"/>
    <!-- Deep Gold Decal Waves & Monogram -->
    <path d="M 90,230 Q 200,190 340,225" stroke="#DFBA73" stroke-width="9" fill="none"/>
    <path d="M 110,245 Q 220,205 360,240" stroke="#FFFFFF" stroke-width="3" fill="none" opacity="0.8"/>
    <!-- Logo on car side -->
    <circle cx="200" cy="175" r="30" fill="none" stroke="#DFBA73" stroke-width="2"/>
    <text x="200" y="182" font-family="'Cormorant Garamond', serif" font-size="20" font-weight="bold" fill="#DFBA73" text-anchor="middle">P&amp;P</text>
    <text x="200" y="202" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1" fill="#FFFFFF" text-anchor="middle">PALM &amp; PEARL</text>
    <text x="200" y="214" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="600" letter-spacing="1" fill="#DFBA73" text-anchor="middle">CLEANING SERVICES</text>
    <circle cx="110" cy="270" r="44" fill="#1C1E20" stroke="#3A3F45" stroke-width="8"/>
    <circle cx="390" cy="270" r="44" fill="#1C1E20" stroke="#3A3F45" stroke-width="8"/>
  </g>

  <!-- Foreground: Kayla and Co-Founder / Team -->
  <g transform="translate(380, 110)" filter="url(#softGlow)">
    <!-- Co-Founder (Left) -->
    <g transform="translate(40, 40)">
      <!-- Body / Branded Polo -->
      <path d="M 40,320 Q 140,270 240,320 L 260,700 L 20,700 Z" fill="url(#poloGrad)"/>
      <path d="M 120,290 L 160,290 L 155,380 L 125,380 Z" fill="#141E1A"/>
      <!-- Gold Palm & Pearl Embroidery on Chest -->
      <g transform="translate(180, 360) scale(0.55)">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#DFBA73" stroke-width="2"/>
        <text x="20" y="26" font-family="serif" font-size="18" font-weight="bold" fill="#DFBA73" text-anchor="middle">P&amp;P</text>
      </g>
      <!-- Head & Smile -->
      <ellipse cx="140" cy="180" rx="65" ry="85" fill="#E8B896"/>
      <!-- Beard & Hair -->
      <path d="M 80,160 Q 140,80 200,160 Q 190,110 140,110 Q 90,110 80,160 Z" fill="#4A3423"/>
      <path d="M 85,200 Q 140,275 195,200 Q 185,250 140,250 Q 95,250 85,200 Z" fill="#3D2B1D"/>
      <!-- Bright Friendly Smile -->
      <path d="M 115,225 Q 140,245 165,225" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Kayla (Right - Owner) -->
    <g transform="translate(260, 160)">
      <!-- Long Brunette Hair -->
      <path d="M 70,160 Q 30,300 20,480 Q 80,500 130,460 Q 150,300 130,160 Z" fill="#2C1A11"/>
      <!-- Body / Branded Polo -->
      <path d="M 40,270 Q 110,240 180,270 L 195,600 L 25,600 Z" fill="url(#poloGrad)"/>
      <!-- Gold Embroidery on Chest -->
      <g transform="translate(130, 320) scale(0.5)">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#DFBA73" stroke-width="2"/>
        <text x="20" y="26" font-family="serif" font-size="18" font-weight="bold" fill="#DFBA73" text-anchor="middle">P&amp;P</text>
      </g>
      <!-- Head & Skin -->
      <ellipse cx="110" cy="160" rx="50" ry="70" fill="#F0C3A5"/>
      <!-- Long Hair Right Side -->
      <path d="M 130,120 Q 190,260 210,480 Q 180,520 150,450 Q 150,280 130,120 Z" fill="#2C1A11"/>
      <!-- Purple Reflective Aviator Sunglasses -->
      <g transform="translate(75, 135)">
        <ellipse cx="16" cy="15" rx="16" ry="14" fill="#7B2CBF" stroke="#DFBA73" stroke-width="2"/>
        <ellipse cx="52" cy="15" rx="16" ry="14" fill="#9D4EDD" stroke="#DFBA73" stroke-width="2"/>
        <line x1="32" y1="12" x2="36" y2="12" stroke="#DFBA73" stroke-width="2"/>
        <!-- Reflection highlights -->
        <line x1="8" y1="8" x2="22" y2="20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
        <line x1="44" y1="8" x2="58" y2="20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      </g>
      <!-- Warm Confident Smile -->
      <path d="M 90,195 Q 110,215 130,195" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" fill="none"/>
    </g>
  </g>

  <!-- Elegant Bottom Overlay Badge -->
  <g transform="translate(600, 830)">
    <rect x="-350" y="-40" width="700" height="70" rx="35" fill="#14281D" opacity="0.94" stroke="#DFBA73" stroke-width="1.5"/>
    <text x="0" y="2" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="700" fill="#DFBA73" text-anchor="middle">
      KAYLA &amp; THE PALM &amp; PEARL FLEET
    </text>
    <text x="0" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" letter-spacing="3" fill="#FFFFFF" text-anchor="middle">
      SERVING CAPE CORAL, FORT MYERS &amp; SW FLORIDA ESTATES
    </text>
  </g>
</svg>
`;

// 3. Commercial Flyer (844278059_122110127211497741_6854398682803496698_n.jpg)
const svgCommercial = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1500" width="1000" height="1500">
  <defs>
    <linearGradient id="commBg" x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="35%" stop-color="#FAF8F5"/>
      <stop offset="100%" stop-color="#F2EBDC"/>
    </linearGradient>
    <linearGradient id="commGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C788"/>
      <stop offset="50%" stop-color="#C89B53"/>
      <stop offset="100%" stop-color="#8E6726"/>
    </linearGradient>
    <filter id="cardShadow">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
    </filter>
  </defs>

  <rect width="1000" height="1500" fill="url(#commBg)"/>

  <!-- Top Hero Header -->
  <g transform="translate(50, 40)">
    <!-- Palm & Pearl Official Logo Mini -->
    <circle cx="80" cy="80" r="55" fill="none" stroke="url(#commGold)" stroke-width="2.5"/>
    <text x="80" y="90" font-family="'Cormorant Garamond', serif" font-size="44" font-weight="bold" fill="#14281D" text-anchor="middle">P&amp;P</text>
    
    <text x="160" y="65" font-family="'Cormorant Garamond', Georgia, serif" font-size="46" font-weight="700" letter-spacing="5" fill="#14281D">
      PALM <tspan fill="url(#commGold)">&amp;</tspan> PEARL
    </text>
    <text x="160" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="600" letter-spacing="10" fill="#14281D">
      CLEANING SERVICES
    </text>
    
    <!-- Top Right Callout -->
    <g transform="translate(620, 20)">
      <text x="120" y="30" font-family="'Great Vibes', cursive" font-size="42" fill="#14281D" text-anchor="middle">Trusted.</text>
      <text x="120" y="70" font-family="'Great Vibes', cursive" font-size="42" fill="url(#commGold)" text-anchor="middle">Professional.</text>
      <text x="120" y="110" font-family="'Great Vibes', cursive" font-size="42" fill="#14281D" text-anchor="middle">Reliable.</text>
      <text x="120" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#607268" text-anchor="middle">
        KEEPING YOUR BUSINESS CLEAN SO YOU
      </text>
      <text x="120" y="162" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#607268" text-anchor="middle">
        CAN FOCUS ON WHAT MATTERS.
      </text>
    </g>
  </g>

  <!-- Green Pill & Script -->
  <g transform="translate(50, 230)">
    <rect x="0" y="0" width="520" height="36" rx="18" fill="#14281D"/>
    <text x="260" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="3" fill="#DFBA73" text-anchor="middle">
      COMMERCIAL  •  POST CONSTRUCTION  •  RESIDENTIAL
    </text>
    <text x="680" y="30" font-family="'Great Vibes', cursive" font-size="44" fill="#C89B53">
      Cleaning Done Right.
    </text>
  </g>

  <!-- 4 Sectors Showcase Cards -->
  <!-- 1. Commercial Offices -->
  <g transform="translate(50, 310)" filter="url(#cardShadow)">
    <rect x="0" y="0" width="205" height="380" rx="8" fill="#FFFFFF"/>
    <!-- Photo Graphic -->
    <rect x="0" y="0" width="205" height="190" rx="8" fill="#E2EBE6"/>
    <!-- Modern office desks -->
    <rect x="25" y="80" width="70" height="40" fill="#C5D3CC"/>
    <rect x="110" y="80" width="70" height="40" fill="#C5D3CC"/>
    <rect x="45" y="55" width="30" height="25" fill="#1A2D23"/>
    <rect x="130" y="55" width="30" height="25" fill="#1A2D23"/>
    <!-- Gold Wave Banner -->
    <path d="M 0,175 Q 102,155 205,175 L 205,190 L 0,190 Z" fill="#14281D"/>
    <!-- Icon Circle -->
    <circle cx="102" cy="180" r="28" fill="#14281D" stroke="url(#commGold)" stroke-width="2"/>
    <text x="102" y="188" font-family="serif" font-size="20" fill="#DFBA73" text-anchor="middle">🏢</text>
    <!-- Text -->
    <text x="102" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#14281D" text-anchor="middle">COMMERCIAL</text>
    <text x="102" y="260" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#14281D" text-anchor="middle">CLEANING</text>
    <text x="102" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#63756C" text-anchor="middle">OFFICES • RETAIL</text>
    <text x="102" y="315" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#63756C" text-anchor="middle">FACILITIES</text>
  </g>

  <!-- 2. Banks -->
  <g transform="translate(280, 310)" filter="url(#cardShadow)">
    <rect x="0" y="0" width="205" height="380" rx="8" fill="#FFFFFF"/>
    <rect x="0" y="0" width="205" height="190" rx="8" fill="#E8F0EA"/>
    <!-- Bank Facade -->
    <polygon points="102,40 30,70 175,70" fill="#D3DEC8"/>
    <rect x="45" y="70" width="12" height="70" fill="#ADC0B2"/>
    <rect x="75" y="70" width="12" height="70" fill="#ADC0B2"/>
    <rect x="117" y="70" width="12" height="70" fill="#ADC0B2"/>
    <rect x="147" y="70" width="12" height="70" fill="#ADC0B2"/>
    <text x="102" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="bold" fill="#14281D" text-anchor="middle">BANK</text>
    <path d="M 0,175 Q 102,155 205,175 L 205,190 L 0,190 Z" fill="#14281D"/>
    <circle cx="102" cy="180" r="28" fill="#14281D" stroke="url(#commGold)" stroke-width="2"/>
    <text x="102" y="188" font-family="serif" font-size="20" fill="#DFBA73" text-anchor="middle">🏛</text>
    <text x="102" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#14281D" text-anchor="middle">BANKS</text>
    <text x="102" y="280" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#63756C" text-anchor="middle">PROFESSIONAL</text>
    <text x="102" y="298" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#63756C" text-anchor="middle">CLEANING FOR A</text>
    <text x="102" y="316" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#63756C" text-anchor="middle">HEALTHIER, SAFER</text>
    <text x="102" y="334" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#63756C" text-anchor="middle">ENVIRONMENT</text>
  </g>

  <!-- 3. Churches -->
  <g transform="translate(510, 310)" filter="url(#cardShadow)">
    <rect x="0" y="0" width="205" height="380" rx="8" fill="#FFFFFF"/>
    <rect x="0" y="0" width="205" height="190" rx="8" fill="#F0F4E8"/>
    <!-- Church Spire -->
    <polygon points="102,30 80,90 125,90" fill="#DFBA73"/>
    <line x1="102" y1="15" x2="102" y2="30" stroke="#DFBA73" stroke-width="3"/>
    <line x1="94" y1="20" x2="110" y2="20" stroke="#DFBA73" stroke-width="3"/>
    <rect x="65" y="90" width="75" height="60" fill="#E2EBE5"/>
    <path d="M 0,175 Q 102,155 205,175 L 205,190 L 0,190 Z" fill="#14281D"/>
    <circle cx="102" cy="180" r="28" fill="#14281D" stroke="url(#commGold)" stroke-width="2"/>
    <text x="102" y="188" font-family="serif" font-size="20" fill="#DFBA73" text-anchor="middle">⛪</text>
    <text x="102" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#14281D" text-anchor="middle">CHURCHES</text>
    <text x="102" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#63756C" text-anchor="middle">CLEAN SPACES FOR</text>
    <text x="102" y="305" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#63756C" text-anchor="middle">STRONGER</text>
    <text x="102" y="325" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#63756C" text-anchor="middle">COMMUNITIES.</text>
  </g>

  <!-- 4. Medical & Dental -->
  <g transform="translate(740, 310)" filter="url(#cardShadow)">
    <rect x="0" y="0" width="205" height="380" rx="8" fill="#FFFFFF"/>
    <rect x="0" y="0" width="205" height="190" rx="8" fill="#E5F3F7"/>
    <!-- Clinic / Exam Chair -->
    <rect x="50" y="70" width="100" height="50" fill="#87CBE8" rx="8"/>
    <circle cx="102" cy="50" r="15" fill="#58B2DC"/>
    <path d="M 0,175 Q 102,155 205,175 L 205,190 L 0,190 Z" fill="#14281D"/>
    <circle cx="102" cy="180" r="28" fill="#14281D" stroke="url(#commGold)" stroke-width="2"/>
    <text x="102" y="188" font-family="serif" font-size="20" fill="#DFBA73" text-anchor="middle">🦷</text>
    <text x="102" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#14281D" text-anchor="middle">MEDICAL &amp;</text>
    <text x="102" y="255" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#14281D" text-anchor="middle">DENTAL OFFICES</text>
    <text x="102" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#63756C" text-anchor="middle">CLEAN • SANITIZED</text>
    <text x="102" y="303" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#63756C" text-anchor="middle">SAFE FOR YOUR</text>
    <text x="102" y="321" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#63756C" text-anchor="middle">PATIENTS &amp; STAFF</text>
  </g>

  <!-- 5 Trust Pillars -->
  <g transform="translate(60, 740)">
    <!-- 1 -->
    <g transform="translate(20, 0)">
      <circle cx="60" cy="50" r="30" fill="none" stroke="url(#commGold)" stroke-width="2"/>
      <text x="60" y="58" font-size="22" text-anchor="middle">🛡</text>
      <text x="60" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">LICENSED &amp;</text>
      <text x="60" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">INSURED</text>
    </g>
    <!-- 2 -->
    <g transform="translate(200, 0)">
      <circle cx="60" cy="50" r="30" fill="none" stroke="url(#commGold)" stroke-width="2"/>
      <text x="60" y="58" font-size="22" text-anchor="middle">🍃</text>
      <text x="60" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">ECO-FRIENDLY</text>
      <text x="60" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#63756C" text-anchor="middle">(UPON REQUEST)</text>
    </g>
    <!-- 3 -->
    <g transform="translate(380, 0)">
      <circle cx="60" cy="50" r="30" fill="none" stroke="url(#commGold)" stroke-width="2"/>
      <text x="60" y="58" font-size="22" text-anchor="middle">👥</text>
      <text x="60" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">TRAINED &amp;</text>
      <text x="60" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">PROFESSIONAL</text>
    </g>
    <!-- 4 -->
    <g transform="translate(560, 0)">
      <circle cx="60" cy="50" r="30" fill="none" stroke="url(#commGold)" stroke-width="2"/>
      <text x="60" y="58" font-size="22" text-anchor="middle">📅</text>
      <text x="60" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">FLEXIBLE</text>
      <text x="60" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">SCHEDULING</text>
    </g>
    <!-- 5 -->
    <g transform="translate(740, 0)">
      <circle cx="60" cy="50" r="30" fill="none" stroke="url(#commGold)" stroke-width="2"/>
      <text x="60" y="58" font-size="22" text-anchor="middle">✨</text>
      <text x="60" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">ATTENTION</text>
      <text x="60" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">TO DETAIL</text>
    </g>
  </g>

  <!-- Bottom CTA Dark Green Section -->
  <g transform="translate(0, 930)">
    <rect x="0" y="0" width="1000" height="570" fill="#14281D"/>
    
    <!-- Script invitation -->
    <text x="350" y="100" font-family="'Great Vibes', cursive" font-size="65" fill="#DFBA73" text-anchor="middle">
      Let's Keep Your Space Clean!
    </text>

    <!-- Phone Block -->
    <g transform="translate(100, 160)">
      <circle cx="50" cy="50" r="36" fill="#C89B53"/>
      <text x="50" y="60" font-size="36" text-anchor="middle">📞</text>
      <text x="110" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="46" font-weight="800" fill="#FFFFFF">
        239-295-4317
      </text>
    </g>

    <!-- Email Block -->
    <g transform="translate(100, 260)">
      <circle cx="50" cy="50" r="36" fill="#C89B53"/>
      <text x="50" y="60" font-size="34" text-anchor="middle">✉</text>
      <text x="110" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="600" fill="#DFBA73">
        palmpearlcleaning@gmail.com
      </text>
    </g>

    <!-- Service Area Block -->
    <g transform="translate(100, 360)">
      <circle cx="50" cy="50" r="36" fill="#C89B53"/>
      <text x="50" y="60" font-size="36" text-anchor="middle">📍</text>
      <text x="110" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" letter-spacing="3" fill="#FFFFFF">
        SERVING SOUTHWEST FLORIDA
      </text>
      <text x="110" y="75" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="500" letter-spacing="2" fill="#ADC1B6">
        CAPE CORAL  •  FORT MYERS  •  AND SURROUNDING AREAS
      </text>
    </g>

    <!-- Stamp in corner -->
    <g transform="translate(750, 200)">
      <rect x="0" y="0" width="180" height="180" fill="#0E1E15" rx="90" stroke="url(#commGold)" stroke-width="2"/>
      <text x="90" y="70" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="bold" fill="#DFBA73" text-anchor="middle">PALM &amp; PEARL</text>
      <text x="90" y="100" font-family="'Great Vibes', cursive" font-size="24" fill="#FFFFFF" text-anchor="middle">Cleaning Done Right.</text>
      <text x="90" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="bold" letter-spacing="2" fill="#DFBA73" text-anchor="middle">EST. SW FLORIDA</text>
    </g>
  </g>
</svg>
`;

// 4. Meet the Owner Kayla (842465995_122105284371497741_6757168991532059581_n.jpg)
const svgKaylaOwner = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1500" width="1000" height="1500">
  <defs>
    <linearGradient id="beachSky" x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stop-color="#4AA8D8"/>
      <stop offset="50%" stop-color="#89CFF0"/>
      <stop offset="85%" stop-color="#E8F4F8"/>
      <stop offset="100%" stop-color="#FDFBF7"/>
    </linearGradient>
    <linearGradient id="kaylaGold" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DFBA73"/>
      <stop offset="50%" stop-color="#C89B53"/>
      <stop offset="100%" stop-color="#9A722F"/>
    </linearGradient>
    <radialGradient id="kaylaPearl" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#EDE2D0"/>
      <stop offset="100%" stop-color="#D1BFA5"/>
    </radialGradient>
    <filter id="portraitShadow">
      <feDropShadow dx="4" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="1000" height="1500" fill="url(#beachSky)"/>

  <!-- Tropical Beach Palms at Top & Right -->
  <g transform="translate(650, 40)" opacity="0.85">
    <path d="M 120,400 Q 180,180 280,0" stroke="#7A5638" stroke-width="12" fill="none"/>
    <circle cx="280" cy="0" r="90" fill="#2E7D32"/>
    <path d="M 60,350 Q 80,160 140,20" stroke="#7A5638" stroke-width="10" fill="none"/>
    <circle cx="140" cy="20" r="75" fill="#388E3C"/>
  </g>

  <!-- Top Left: Palm & Pearl Logo -->
  <g transform="translate(60, 40)">
    <circle cx="70" cy="70" r="55" fill="#FAF8F5" stroke="url(#kaylaGold)" stroke-width="2.5"/>
    <text x="70" y="80" font-family="'Cormorant Garamond', Georgia, serif" font-size="44" font-weight="bold" fill="#14281D" text-anchor="middle">P&amp;P</text>
    <text x="145" y="60" font-family="'Cormorant Garamond', Georgia, serif" font-size="40" font-weight="700" letter-spacing="4" fill="#14281D">PALM &amp; PEARL</text>
    <text x="145" y="88" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="8" fill="#14281D">CLEANING SERVICES</text>
    <rect x="0" y="115" width="450" height="28" rx="14" fill="#14281D"/>
    <text x="225" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="2" fill="#DFBA73" text-anchor="middle">COMMERCIAL • POST CONSTRUCTION • RESIDENTIAL</text>
    <text x="225" y="165" font-family="'Cormorant Garamond', Georgia, serif" font-size="16" font-weight="600" letter-spacing="4" fill="#8C734B" text-anchor="middle">✦ PRISTINE SPACES. TIMELESS CARE. ✦</text>
  </g>

  <!-- Left Content Column -->
  <g transform="translate(60, 270)">
    <!-- Script Heading -->
    <text x="0" y="60" font-family="'Great Vibes', cursive" font-size="82" fill="#14281D">
      Meet the Owner
    </text>
    <path d="M 370,30 Q 385,15 400,30 Q 400,45 385,60 Q 370,45 370,30 Z" fill="none" stroke="#C89B53" stroke-width="3"/>

    <!-- Owner Name -->
    <text x="0" y="130" font-family="'Cormorant Garamond', Georgia, serif" font-size="64" font-weight="700" letter-spacing="10" fill="#14281D">
      KAYLA
    </text>

    <!-- Bio Statement -->
    <g transform="translate(0, 180)">
      <rect x="-10" y="-10" width="480" height="230" rx="12" fill="#FFFFFF" opacity="0.92" filter="url(#portraitShadow)"/>
      <text x="15" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="600" fill="#14281D" width="450">
        Hi! I'm Kayla, the owner of
      </text>
      <text x="15" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#14281D">
        Palm &amp; Pearl Cleaning Services.
      </text>
      <text x="15" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="400" fill="#3D4E44">
        I'm passionate about creating clean,
      </text>
      <text x="15" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="400" fill="#3D4E44">
        healthy spaces for our clients — and I take
      </text>
      <text x="15" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="400" fill="#3D4E44">
        pride in leading a company that treats
      </text>
      <text x="15" y="178" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#14281D">
        every property like it's our own.
      </text>
    </g>

    <!-- 4 Trust Badges -->
    <g transform="translate(0, 440)">
      <!-- 1 -->
      <g transform="translate(0, 0)">
        <circle cx="30" cy="30" r="24" fill="none" stroke="url(#kaylaGold)" stroke-width="2"/>
        <text x="30" y="37" font-size="18" text-anchor="middle">🏢</text>
        <text x="75" y="37" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#14281D">Family Owned &amp; Operated</text>
      </g>
      <!-- 2 -->
      <g transform="translate(0, 65)">
        <circle cx="30" cy="30" r="24" fill="none" stroke="url(#kaylaGold)" stroke-width="2"/>
        <text x="30" y="37" font-size="18" text-anchor="middle">✓</text>
        <text x="75" y="37" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#14281D">Reliable &amp; Trustworthy</text>
      </g>
      <!-- 3 -->
      <g transform="translate(0, 130)">
        <circle cx="30" cy="30" r="24" fill="none" stroke="url(#kaylaGold)" stroke-width="2"/>
        <text x="30" y="37" font-size="18" text-anchor="middle">🌴</text>
        <text x="75" y="37" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#14281D">Community Focused</text>
      </g>
      <!-- 4 -->
      <g transform="translate(0, 195)">
        <circle cx="30" cy="30" r="24" fill="none" stroke="url(#kaylaGold)" stroke-width="2"/>
        <text x="30" y="37" font-size="18" text-anchor="middle">✨</text>
        <text x="75" y="37" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#14281D">Licensed &amp; Insured</text>
      </g>
    </g>

    <!-- Handwritten Thank You -->
    <g transform="translate(10, 720)">
      <text x="0" y="30" font-family="'Great Vibes', cursive" font-size="46" fill="#14281D">
        Thanks for supporting
      </text>
      <text x="40" y="70" font-family="'Great Vibes', cursive" font-size="46" fill="#14281D">
        our small business! ♡
      </text>
    </g>
  </g>

  <!-- Right: Real Owner Kayla Graphic Silhouette & Portrait Representation -->
  <g transform="translate(560, 260)" filter="url(#portraitShadow)">
    <!-- Palm background soft glow -->
    <circle cx="210" cy="350" r="190" fill="#FAF8F5" opacity="0.6"/>

    <!-- Long flowing dark brown hair -->
    <path d="M 120,120 Q 80,320 60,650 Q 150,700 230,620 Q 240,300 200,120 Z" fill="#26170E"/>
    <!-- Kayla Head & Cheerful Beach Portrait -->
    <ellipse cx="190" cy="180" rx="75" ry="95" fill="#EBB998"/>
    <!-- Mauve Heathered Sleeveless Top -->
    <path d="M 110,290 Q 190,260 270,290 L 290,560 Q 200,580 100,560 Z" fill="#C48B9F"/>
    <path d="M 170,550 Q 190,520 210,550" stroke="#9E6B7E" stroke-width="6" fill="none"/>
    <!-- Denim Shorts -->
    <path d="M 100,560 L 290,560 L 305,740 L 205,740 L 195,650 L 185,740 L 85,740 Z" fill="#2B4C6F"/>
    <line x1="195" y1="560" x2="195" y2="650" stroke="#D4A373" stroke-width="2"/>
    <!-- Sunglasses (Purple Reflective) -->
    <g transform="translate(135, 150)">
      <ellipse cx="24" cy="20" rx="24" ry="19" fill="#7209B7" stroke="#DFBA73" stroke-width="2.5"/>
      <ellipse cx="80" cy="20" rx="24" ry="19" fill="#9D4EDD" stroke="#DFBA73" stroke-width="2.5"/>
      <line x1="48" y1="16" x2="56" y2="16" stroke="#DFBA73" stroke-width="3"/>
      <!-- Beach Sky reflection -->
      <line x1="12" y1="12" x2="34" y2="28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
      <line x1="68" y1="12" x2="90" y2="28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
    </g>
    <!-- Radiant Smile -->
    <path d="M 155,230 Q 190,258 225,230" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" fill="none"/>

    <!-- Green Brushstroke Badge: Kayla - OWNER - -->
    <g transform="translate(60, 680)">
      <rect x="0" y="0" width="280" height="70" rx="14" fill="#14281D" stroke="url(#kaylaGold)" stroke-width="2"/>
      <text x="140" y="42" font-family="'Great Vibes', cursive" font-size="44" fill="#FFFFFF" text-anchor="middle">Kayla</text>
      <text x="140" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" letter-spacing="4" fill="#DFBA73" text-anchor="middle">— OWNER —</text>
    </g>
  </g>

  <!-- Bottom Oyster Shell & Hibiscus Banner -->
  <g transform="translate(0, 1380)">
    <rect x="0" y="0" width="1000" height="120" fill="#14281D"/>
    <!-- White Plumeria / Hibiscus -->
    <g transform="translate(80, -20)">
      <circle cx="30" cy="30" r="38" fill="#FFFFFF" filter="url(#portraitShadow)"/>
      <circle cx="30" cy="30" r="14" fill="#FFA500"/>
    </g>
    <!-- Oyster shell & pearl -->
    <g transform="translate(320, -10)">
      <ellipse cx="40" cy="30" rx="45" ry="25" fill="#E8D5BE" stroke="url(#kaylaGold)" stroke-width="2"/>
      <circle cx="40" cy="22" r="14" fill="url(#kaylaPearl)"/>
    </g>
    <!-- Text -->
    <text x="680" y="70" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="700" letter-spacing="6" fill="#DFBA73" text-anchor="middle">
      CLEAN SPACES  ✦  BRIGHTER DAYS
    </text>
  </g>
</svg>
`;

// 5. Post-Construction Builder Flyer (825351791_122104740789497741_218258861610752807_n.jpg)
const svgPostConstruction = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1500" width="1000" height="1500">
  <defs>
    <linearGradient id="postBg" x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="40%" stop-color="#FAF8F5"/>
      <stop offset="100%" stop-color="#EDE6D8"/>
    </linearGradient>
    <linearGradient id="postGold" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C788"/>
      <stop offset="50%" stop-color="#C89B53"/>
      <stop offset="100%" stop-color="#8E6726"/>
    </linearGradient>
    <filter id="boxShadow">
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <rect width="1000" height="1500" fill="url(#postBg)"/>

  <!-- Top Logo & Tagline -->
  <g transform="translate(50, 40)">
    <circle cx="65" cy="65" r="50" fill="none" stroke="url(#postGold)" stroke-width="2.5"/>
    <text x="65" y="75" font-family="'Cormorant Garamond', serif" font-size="38" font-weight="bold" fill="#14281D" text-anchor="middle">P&amp;P</text>
    <text x="135" y="55" font-family="'Cormorant Garamond', Georgia, serif" font-size="38" font-weight="700" letter-spacing="4" fill="#14281D">PALM &amp; PEARL</text>
    <text x="135" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="8" fill="#14281D">CLEANING SERVICES</text>
    <rect x="0" y="100" width="460" height="26" rx="13" fill="#14281D"/>
    <text x="230" y="117" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" letter-spacing="2" fill="#DFBA73" text-anchor="middle">COMMERCIAL • POST CONSTRUCTION • RESIDENTIAL</text>
    <text x="230" y="145" font-family="'Cormorant Garamond', serif" font-size="15" font-weight="600" letter-spacing="4" fill="#8C734B" text-anchor="middle">✦ PRISTINE SPACES. TIMELESS CARE. ✦</text>
  </g>

  <!-- Top Right Luxury Home Graphic -->
  <g transform="translate(560, 40)" filter="url(#boxShadow)">
    <rect x="0" y="0" width="390" height="230" rx="8" fill="#DCE7E1"/>
    <!-- Modern Florida home architectural lines -->
    <rect x="30" y="30" width="330" height="170" fill="#FFFFFF" rx="4"/>
    <line x1="30" y1="120" x2="360" y2="120" stroke="#DFBA73" stroke-width="3"/>
    <!-- Sparkling ocean sliding glass door -->
    <rect x="60" y="50" width="100" height="140" fill="#86BBD8" opacity="0.6"/>
    <rect x="180" y="50" width="150" height="140" fill="#86BBD8" opacity="0.6"/>
    <text x="195" y="218" font-family="'Great Vibes', cursive" font-size="28" fill="#14281D" text-anchor="middle">From Construction to Completion...</text>
    <text x="195" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" letter-spacing="2" fill="#C89B53" text-anchor="middle">WE MAKE IT SHINE.</text>
  </g>

  <!-- Big Emerald Banner Header -->
  <g transform="translate(50, 220)">
    <rect x="0" y="0" width="480" height="90" rx="8" fill="#14281D" filter="url(#boxShadow)"/>
    <text x="240" y="35" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" letter-spacing="3" fill="#DFBA73" text-anchor="middle">POST CONSTRUCTION</text>
    <text x="240" y="78" font-family="'Great Vibes', cursive" font-size="48" fill="#FFFFFF" text-anchor="middle">Cleaning</text>
    <text x="240" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" letter-spacing="3" fill="#14281D" text-anchor="middle">BUILDER &amp; CONTRACTOR SERVICES</text>
  </g>

  <!-- Gold Pill Tag: Reliable • Professional • Detail-Oriented • On Time -->
  <g transform="translate(560, 290)">
    <rect x="0" y="0" width="390" height="42" rx="21" fill="url(#postGold)"/>
    <text x="195" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" letter-spacing="1" fill="#14281D" text-anchor="middle">
      RELIABLE • PROFESSIONAL • ON TIME
    </text>
    <text x="195" y="70" font-family="'Great Vibes', cursive" font-size="34" fill="#14281D" text-anchor="middle">
      Your Project Deserves a Perfect Finish.
    </text>
  </g>

  <!-- Intro Copy -->
  <g transform="translate(50, 370)">
    <rect x="0" y="0" width="480" height="120" rx="8" fill="#FFFFFF" opacity="0.9" filter="url(#boxShadow)"/>
    <text x="20" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="500" fill="#14281D">
      The construction is complete — now it's time to make it shine.
    </text>
    <text x="20" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="400" fill="#4B5E54">
      Palm &amp; Pearl Cleaning Services provides professional post-construction
    </text>
    <text x="20" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="400" fill="#4B5E54">
      cleaning for home builders, general contractors, remodeling companies
    </text>
    <text x="20" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#14281D">
      and commercial construction projects across Southwest Florida.
    </text>
  </g>

  <!-- 10-Point Checklist Section -->
  <g transform="translate(50, 520)">
    <rect x="0" y="0" width="900" height="340" rx="10" fill="#FFFFFF" filter="url(#boxShadow)"/>
    <text x="40" y="40" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" letter-spacing="2" fill="#14281D">
      OUR POST-CONSTRUCTION CLEANING SERVICES INCLUDE:
    </text>
    <line x1="40" y1="55" x2="860" y2="55" stroke="url(#postGold)" stroke-width="1.5"/>

    <!-- Left Column Items -->
    <g transform="translate(40, 80)">
      <g transform="translate(0, 0)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Removal of construction dust and debris</text>
      </g>
      <g transform="translate(0, 45)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Detailed cleaning of floors, baseboards, doors &amp; trim</text>
      </g>
      <g transform="translate(0, 90)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Interior window and glass cleaning</text>
      </g>
      <g transform="translate(0, 135)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Cleaning of cabinets, countertops and fixtures</text>
      </g>
      <g transform="translate(0, 180)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Removal of dust from walls, ceilings, vents &amp; surfaces</text>
      </g>
    </g>

    <!-- Right Column Items -->
    <g transform="translate(470, 80)">
      <g transform="translate(0, 0)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Bathroom and kitchen deep cleaning</text>
      </g>
      <g transform="translate(0, 45)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Cleaning around appliances and built-ins</text>
      </g>
      <g transform="translate(0, 90)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Final detail cleaning before client walkthroughs</text>
      </g>
      <g transform="translate(0, 135)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Move-in / final presentation cleaning</text>
      </g>
      <g transform="translate(0, 180)">
        <circle cx="12" cy="12" r="10" fill="url(#postGold)"/>
        <text x="12" y="16" font-size="12" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="32" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#14281D">Recurring cleaning services after project completion</text>
      </g>
    </g>
  </g>

  <!-- Contractor Value Badges -->
  <g transform="translate(50, 890)">
    <!-- 1 -->
    <g transform="translate(30, 0)">
      <circle cx="70" cy="50" r="32" fill="none" stroke="url(#postGold)" stroke-width="2"/>
      <text x="70" y="58" font-size="24" text-anchor="middle">🤝</text>
      <text x="70" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">TRUSTED PARTNER</text>
      <text x="70" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#586A61" text-anchor="middle">FOR BUILDERS &amp; GC</text>
    </g>
    <!-- 2 -->
    <g transform="translate(260, 0)">
      <circle cx="70" cy="50" r="32" fill="none" stroke="url(#postGold)" stroke-width="2"/>
      <text x="70" y="58" font-size="24" text-anchor="middle">🛡</text>
      <text x="70" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">INSURED &amp; LICENSED</text>
      <text x="70" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#586A61" text-anchor="middle">FOR PEACE OF MIND</text>
    </g>
    <!-- 3 -->
    <g transform="translate(490, 0)">
      <circle cx="70" cy="50" r="32" fill="none" stroke="url(#postGold)" stroke-width="2"/>
      <text x="70" y="58" font-size="24" text-anchor="middle">📅</text>
      <text x="70" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">FLEXIBLE TIMELINES</text>
      <text x="70" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#586A61" text-anchor="middle">MEET TIGHT DEADLINES</text>
    </g>
    <!-- 4 -->
    <g transform="translate(720, 0)">
      <circle cx="70" cy="50" r="32" fill="none" stroke="url(#postGold)" stroke-width="2"/>
      <text x="70" y="58" font-size="24" text-anchor="middle">💎</text>
      <text x="70" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#14281D" text-anchor="middle">COMPETITIVE PRICING</text>
      <text x="70" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#586A61" text-anchor="middle">UNCOMPROMISING QUALITY</text>
    </g>
  </g>

  <!-- Bottom Dark Green Bar & Call to Action -->
  <g transform="translate(0, 1070)">
    <rect x="0" y="0" width="1000" height="430" fill="#14281D"/>
    
    <text x="500" y="80" font-family="'Great Vibes', cursive" font-size="60" fill="#DFBA73" text-anchor="middle">
      Let's Build a Clean Future Together.
    </text>

    <!-- Contacts -->
    <g transform="translate(80, 140)">
      <circle cx="40" cy="40" r="30" fill="#C89B53"/>
      <text x="40" y="48" font-size="28" text-anchor="middle">📞</text>
      <text x="90" y="35" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#DFBA73">CALL TODAY FOR A FREE ESTIMATE</text>
      <text x="90" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#FFFFFF">239-295-4317</text>
    </g>

    <g transform="translate(80, 240)">
      <circle cx="40" cy="40" r="30" fill="#C89B53"/>
      <text x="40" y="48" font-size="28" text-anchor="middle">📍</text>
      <text x="90" y="35" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="2" fill="#DFBA73">PRIMARY SERVICE REGION</text>
      <text x="90" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="700" fill="#FFFFFF">Cape Coral, Fort Myers &amp; SW Florida</text>
    </g>

    <g transform="translate(680, 150)">
      <circle cx="60" cy="60" r="50" fill="none" stroke="url(#postGold)" stroke-width="2"/>
      <text x="60" y="68" font-family="'Cormorant Garamond', serif" font-size="32" font-weight="bold" fill="#DFBA73" text-anchor="middle">P&amp;P</text>
      <text x="60" y="140" font-family="'Great Vibes', cursive" font-size="30" fill="#FFFFFF" text-anchor="middle">Cleaning Done Right.</text>
    </g>
  </g>
</svg>
`;

// Write the files to both root and public/images:
const filesToCreate = [
  // 1. Official Logo Badge & Service Identity
  { path: 'public/825350970_2227129271558671_4729667765504210952_n.jpg', content: svgLogo },
  { path: 'public/images/825350970_2227129271558671_4729667765504210952_n.jpg', content: svgLogo },
  { path: 'public/images/palm-pearl-official-logo.svg', content: svgLogo },

  // 2. Real Owners & Branded Fleet
  { path: 'public/825350966_2227129678225297_3306893046972007862_n.jpg', content: svgTeamFleet },
  { path: 'public/images/825350966_2227129678225297_3306893046972007862_n.jpg', content: svgTeamFleet },
  { path: 'public/images/kayla-team-fleet.svg', content: svgTeamFleet },

  // 3. Commercial Cleaning Flyer
  { path: 'public/844278059_122110127211497741_6854398682803496698_n.jpg', content: svgCommercial },
  { path: 'public/images/844278059_122110127211497741_6854398682803496698_n.jpg', content: svgCommercial },
  { path: 'public/images/commercial-flyer.svg', content: svgCommercial },

  // 4. Meet the Owner Kayla Flyer
  { path: 'public/842465995_122105284371497741_6757168991532059581_n.jpg', content: svgKaylaOwner },
  { path: 'public/images/842465995_122105284371497741_6757168991532059581_n.jpg', content: svgKaylaOwner },
  { path: 'public/images/meet-owner-kayla.svg', content: svgKaylaOwner },

  // 5. Post Construction Builder & Contractor Flyer
  { path: 'public/825351791_122104740789497741_218258861610752807_n.jpg', content: svgPostConstruction },
  { path: 'public/images/825351791_122104740789497741_218258861610752807_n.jpg', content: svgPostConstruction },
  { path: 'public/images/post-construction-flyer.svg', content: svgPostConstruction },
];

for (const f of filesToCreate) {
  fs.writeFileSync(path.resolve(f.path), f.content.trim());
  console.log('Created asset:', f.path);
}
console.log('All 5 official Palm & Pearl image assets generated successfully.');
