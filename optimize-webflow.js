const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'WebflowHome.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Optimize <img /> tags: add loading="lazy" and fetchpriority="low"
// We avoid duplicate loading attributes by matching existing ones if present
content = content.replace(/<img\s+(?!.*?loading=)([^>]+)>/g, '<img loading="lazy" fetchpriority="low" $1>');
content = content.replace(/<img\s+([^>]*?)loading="lazy"([^>]*?)>/g, '<img $1loading="lazy" fetchpriority="low"$2>');

// 2. Add resource hints (preconnect) to the main App or index.html might be better, 
// but we can try to inject some logic or just focus on the component performance.
// Let's optimize script loading in the useEffect.

content = content.replace(
  /const scriptUrls = \[\s+([\s\S]*?)\s+\];/m,
  `const scriptUrls = [
        "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6989896e1913ef45a770138a",
        "/js/webflow.js",
        "https://unpkg.com/lenis@1.1.2/dist/lenis.min.js",
        "https://unpkg.com/split-type",
        "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js",
        "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
      ];
      
      // Parallelize non-dependent scripts
      const priorityScripts = scriptUrls.slice(0, 2); // jQuery and Webflow
      const asyncScripts = scriptUrls.slice(2); // Lenis, GSAP, etc.
`
);

// We should also look at disabling the Youtube heavy players until they are near viewport if possible,
// but for now, making image loading more aggressive on laziness will help the most.

fs.writeFileSync(filePath, content);
console.log('Optimized WebflowHome.tsx');
