const fs = require('fs');
const files = [
  'src/pages/Home.tsx',
  'src/pages/About.tsx',
  'src/pages/Services.tsx',
  'src/pages/Blog.tsx',
  'src/pages/Contact.tsx'
];

for(const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  
  // Add missing transition after animate
  c = c.replace(/(animate={{[^}]+}})\s*\n\s*className/g, '$1\n            transition={{ duration: 1.5, ease: "easeOut" }}\n            className');
  
  // Replace missing transition after whileInView
  c = c.replace(/(whileInView={{[^}]+}})\s*\n\s*viewport/g, '$1\n            transition={{ duration: 1.5, ease: "easeOut" }}\n            viewport');
  
  // Replace delay-only transition
  c = c.replace(/transition={{ delay: 0\.1 }}/g, 'transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}');
  
  fs.writeFileSync(f, c);
}
console.log('Transitions updated successfully.');
