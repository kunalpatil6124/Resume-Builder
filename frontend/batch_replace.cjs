const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/kp041/.gemini/antigravity/scratch/resume-generator/frontend/src/components/Builder/steps';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const replacements = [
  { search: /\bbg-white\b/g, replace: 'bg-transparent' },
  { search: /\bbg-gray-50\b/g, replace: 'bg-gray-50 dark:bg-muted' },
  { search: /\bbg-gray-100\b/g, replace: 'bg-gray-100 dark:bg-gray-800' },
  { search: /\bborder-gray-300\b/g, replace: 'border-border' },
  { search: /\bborder-gray-200\b/g, replace: 'border-border' },
  { search: /\btext-gray-400\b/g, replace: 'text-gray-400 dark:text-gray-500' },
  { search: /\btext-gray-500\b/g, replace: 'text-secondary' },
  { search: /\btext-gray-700\b/g, replace: 'text-gray-700 dark:text-gray-300' },
];

let changedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const { search, replace } of replacements) {
    if (search.test(content)) {
      content = content.replace(search, replace);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    changedCount++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Done. Updated ${changedCount} files.`);
