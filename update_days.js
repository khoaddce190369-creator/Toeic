const fs = require('fs');
const path = 'index.html';
let html = fs.readFileSync(path, 'utf8');

for (let i = 6; i <= 10; i++) {
  const dayStr = i.toString().padStart(2, '0');
  const jsonPath = `C:/Users/khoad/.gemini/antigravity/brain/a3306fc4-478f-4274-8608-d4c254828e9a/scratch/day${dayStr}_quiz.json`;
  
  if (fs.existsSync(jsonPath)) {
    const jsonStr = fs.readFileSync(jsonPath, 'utf8');
    const innerContent = jsonStr.trim().replace(/^\[/, '').replace(/\]$/, '').trim();
    
    const regex = new RegExp(`\\n${i}:\\[[\\s\\S]*?\\n\\],`, 'g');
    html = html.replace(regex, `\n${i}:[\n${innerContent}\n],`);
    console.log(`Replaced Day ${i}`);
  } else {
    console.log(`File not found: ${jsonPath}`);
  }
}

fs.writeFileSync(path, html);
console.log("Done");
