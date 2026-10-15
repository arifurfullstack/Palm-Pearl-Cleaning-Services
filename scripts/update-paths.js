import fs from 'fs';

const files = [
  'src/pages/HomePage.tsx',
  'src/pages/ServicesPage.tsx',
  'src/pages/AboutPage.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replaceAll('/825350970_2227129271558671_4729667765504210952_n.jpg', '/images/upload/825350970_2227129271558671_4729667765504210952_n.jpg');
  content = content.replaceAll('/825350966_2227129678225297_3306893046972007862_n.jpg', '/images/upload/825350966_2227129678225297_3306893046972007862_n.jpg');
  content = content.replaceAll('/844278059_122110127211497741_6854398682803496698_n.jpg', '/images/upload/844278059_122110127211497741_6854398682803496698_n.jpg');
  content = content.replaceAll('/842465995_122105284371497741_6757168991532059581_n.jpg', '/images/upload/842465995_122105284371497741_6757168991532059581_n.jpg');
  content = content.replaceAll('/825351791_122104740789497741_218258861610752807_n.jpg', '/images/upload/825351791_122104740789497741_218258861610752807_n.jpg');
  fs.writeFileSync(file, content);
  console.log('Successfully updated paths in:', file);
}
