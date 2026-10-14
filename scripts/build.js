'use strict';
// Қарапайым build: src бумасын dist бумасына көшіреді және build-info.json жасайды
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'src');
const dist = path.join(__dirname, '..', 'dist');

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, entry.name);
    const d = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

fs.rmSync(dist, { recursive: true, force: true });
copyDir(src, dist);
fs.writeFileSync(
  path.join(dist, 'build-info.json'),
  JSON.stringify({ builtAt: new Date().toISOString(), node: process.version }, null, 2)
);
console.log('Build сәтті аяқталды: dist/ жасалды');