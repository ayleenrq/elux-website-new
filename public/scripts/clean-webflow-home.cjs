const fs = require('fs');
const path = require('path');

const f = path.resolve(__dirname, '..', 'src', 'pages', 'WebflowHome.tsx');
let c = fs.readFileSync(f, 'utf8');

// Find the marker where real content starts (the first section after navbar)
const marker = '<div data-w-id="3d7902d7';
const backtickStart = c.indexOf('const WF_HTML = `') + 'const WF_HTML = `'.length;
const markerPos = c.indexOf(marker, backtickStart);

if (markerPos > backtickStart) {
  // Replace everything between the opening backtick and the marker with just the marker
  c = c.slice(0, backtickStart) + c.slice(markerPos);
  fs.writeFileSync(f, c, 'utf8');
  console.log('Cleaned successfully. Content now starts at scroll-close-wrap.');
} else {
  console.log('Marker not found - content may already be clean.');
}

console.log('File size:', fs.statSync(f).size, 'bytes');
