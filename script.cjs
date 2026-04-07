const fs = require('fs');

const htmlContent = fs.readFileSync('home-webflow/index.html', 'utf8');

// match body content
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
const bodyAttrMatch = htmlContent.match(/<body([^>]*)>/i);
const bodyAttrs = bodyAttrMatch ? bodyAttrMatch[1] : '';

if(!bodyMatch) {
    console.error("No body found");
    process.exit(1);
}
let bodyHTML = bodyMatch[1];

// Ensure all paths mapping for all possible asset folders
const folders = ['images', 'assets', 'scripts', 'css', 'fonts', 'js'];
folders.forEach(folder => {
    const regexHRef = new RegExp(`href="${folder}/`, 'g');
    const regexSrc = new RegExp(`src="${folder}/`, 'g');
    bodyHTML = bodyHTML.replace(regexHRef, `href="/${folder}/`);
    bodyHTML = bodyHTML.replace(regexSrc, `src="/${folder}/`);
});

bodyHTML = bodyHTML.replace(/srcset="([^"]+)"/g, (match, p1) => {
    const parts = p1.split(',').map(part => {
        let text = part.trim();
        folders.forEach(folder => {
            if (text.startsWith(folder + '/')) {
                text = '/' + text;
            }
        });
        return text;
    });
    return `srcset="${parts.join(', ')}"`;
});

// Convert class to className
bodyHTML = bodyHTML.replace(/class="/g, 'className="');
bodyHTML = bodyHTML.replace(/ for="/g, ' htmlFor="');

// Convert inline styles!
bodyHTML = bodyHTML.replace(/style="([^"]+)"/g, (match, p1) => {
    if (p1.includes('{{')) return match; // Already converted
    try {
        const rules = p1.split(';').filter(r => r.trim());
        const reactStyle = rules.map(rule => {
            let [key, val] = rule.split(':');
            if (!key || !val) return null;
            key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            
            let value = val.trim().replace(/"/g, "'");
            
            return `${key}: "${value}"`;
        }).filter(r => r).join(', ');
        return `style={{${reactStyle}}}`;
    } catch (e) {
        return match;
    }
});

// Fix svg attributes
const svgFixes = {
    'viewbox': 'viewBox',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'enable-background': 'enableBackground'
};
for (const [key, val] of Object.entries(svgFixes)) {
    bodyHTML = bodyHTML.split(key + '="').join(val + '="');
}

// Convert attributes without values (boolean attributes like autoplay, muted, loop)
bodyHTML = bodyHTML.replace(/ autoplay=""/g, ' autoPlay');
bodyHTML = bodyHTML.replace(/ muted=""/g, ' muted');
bodyHTML = bodyHTML.replace(/ loop=""/g, ' loop');
bodyHTML = bodyHTML.replace(/ playsinline=""/g, ' playsInline');

// Self close non-container tags
const voidElements = ['img', 'br', 'hr', 'input', 'source', 'track'];
voidElements.forEach(tag => {
    const r = new RegExp(`<${tag}(\\s+[^>]*?)?>`, 'gi');
    bodyHTML = bodyHTML.replace(r, (match) => {
        if (match.endsWith('/>')) return match;
        return match.replace(/>$/, ' />');
    });
});

// Extract IDs for script loading
const scripts = [];
const externalScripts = [];
bodyHTML = bodyHTML.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, (match, p1) => {
    const srcMatch = match.match(/src="([^"]+)"/);
    if (srcMatch) {
        externalScripts.push(srcMatch[1]);
        return '';
    }
    scripts.push(p1);
    return ``;
});

// Handle <style> tags
bodyHTML = bodyHTML.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, p1) => {
    // Escape template literals
    const escaped = p1.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<style dangerouslySetInnerHTML={{ __html: \`${escaped}\` }} />`;
});

// Visibility fix: ensure common Webflow hidden elements are visible OR rely on IX2
const visibilityFix = `
  /* Hide the Webflow exported navbar if using React navbar */
  .webflow-wrapper .navbar.w-nav {
    display: none !important;
  }
`;

// Build final component
let componentCode = "// @ts-nocheck\nimport React, { useEffect } from 'react';\n\n";
componentCode += "export default function WebflowHome() {\n";
componentCode += "  useEffect(() => {\n";
componentCode += "    const loadExternalScripts = async () => {\n";
componentCode += "      const scriptUrls = " + JSON.stringify(externalScripts) + ";\n";
componentCode += "      for (const url of scriptUrls) {\n";
componentCode += "        if (document.querySelector('script[src=\"' + url + '\"]')) continue;\n";
componentCode += "        const s = document.createElement('script');\n";
componentCode += "        s.src = url.startsWith('http') ? url : (url.startsWith('/') ? url : '/' + url);\n";
componentCode += "        s.async = false;\n";
componentCode += "        document.body.appendChild(s);\n";
componentCode += "        await new Promise(res => { s.onload = res; s.onerror = res; });\n";
componentCode += "      }\n\n";
componentCode += "      if (window.Webflow && window.Webflow.destroy && window.Webflow.ready && window.Webflow.require) {\n";
componentCode += "        window.Webflow.destroy();\n";
componentCode += "        window.Webflow.ready();\n";
componentCode += "        window.Webflow.require('ix2').init();\n";
componentCode += "      }\n\n";
componentCode += "      " + scripts.join('\n') + "\n\n";
componentCode += "      if (window.ScrollTrigger) window.ScrollTrigger.refresh();\n";
componentCode += "    };\n";
componentCode += "    loadExternalScripts();\n";
componentCode += "  }, []);\n\n";
componentCode += "  return (\n";
componentCode += "    <div className=\"webflow-wrapper body\">\n";
componentCode += "      <style dangerouslySetInnerHTML={{ __html: `" + visibilityFix + "` }} />\n";
componentCode += "      " + bodyHTML + "\n";
componentCode += "    </div>\n";
componentCode += "  );\n";
componentCode += "}\n";

fs.writeFileSync('src/components/WebflowHome.tsx', componentCode);
console.log('Successfully wrote src/components/WebflowHome.tsx');
