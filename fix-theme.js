const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace text-white with text-slate-900
  content = content.replace(/\btext-white\b/g, 'text-slate-900');
  
  // Replace border-white/ with border-slate-900/
  content = content.replace(/\bborder-white\//g, 'border-slate-900/');
  
  // Replace bg-white/ with bg-slate-900/
  content = content.replace(/\bbg-white\//g, 'bg-slate-900/');
  
  // Replace text-white/ with text-slate-900/
  content = content.replace(/\btext-white\//g, 'text-slate-900/');
  
  // Revert keep-white text-slate-900 to keep-white text-white
  content = content.replace(/keep-white text-slate-900/g, 'keep-white text-white');
  
  // Revert buttons that should be white text
  content = content.replace(/bg-slate-900([^\"]*?)text-slate-900/g, 'bg-slate-900$1text-white');
  content = content.replace(/bg-slate-800([^\"]*?)text-slate-900/g, 'bg-slate-800$1text-white');
  
  // Revert red/green background text
  content = content.replace(/bg-rose-600([^"]*?)text-slate-900/g, 'bg-rose-600$1text-white');
  content = content.replace(/bg-emerald-600([^"]*?)text-slate-900/g, 'bg-emerald-600$1text-white');

  // Fix SVG fill rules (e.g. fill="white" -> maybe keep, but we don't touch these since it's tailwind text-white)

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
