const fs = require('fs');
const path = require('path');

const srcFile = path.resolve(__dirname, '..', 'eluxstaging2026.webflow', 'index.html');
const outFile = path.resolve(__dirname, '..', 'src', 'pages', 'WebflowHome.tsx');

const html = fs.readFileSync(srcFile, 'utf8');

// Get body content
const bodyTagEnd = html.indexOf('>', html.indexOf('<body')) + 1;
const bodyEnd = html.lastIndexOf('</body>');
let bodyContent = html.slice(bodyTagEnd, bodyEnd).trim();

// Remove Webflow navbar (role="banner") - first top-level div
bodyContent = bodyContent.replace(/^<div[^>]+role="banner"[\s\S]*?<\/div>\s*/, '');

// Remove jQuery CDN script
bodyContent = bodyContent.replace(/<script src="https:\/\/d3e54v103j8qbb[^"]*"[^>]*><\/script>\s*/g, '');

// Remove webflow.js local script reference (we load it via useEffect)  
bodyContent = bodyContent.replace(/<script src="js\/webflow\.js"[^>]*><\/script>\s*/g, '');

// Escape for template literal
bodyContent = bodyContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const tsx = `import { useEffect } from 'react';

declare global {
  interface Window {
    Webflow?: { destroy: () => void; ready: () => void; require: (m: string) => { init: () => void } };
    gsap?: any;
    ScrollTrigger?: any;
    SplitType?: any;
  }
}

const WF_HTML = \`${bodyContent}\`;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector(\`script[src="\${src}"]\`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

export default function WebflowHome() {
  useEffect(() => {
    document.documentElement.setAttribute('data-wf-page', '6989896f1913ef45a7701396');
    document.documentElement.setAttribute('data-wf-site', '6989896e1913ef45a770138a');

    const container = document.getElementById('wf-home');
    if (!container) return;

    // Re-execute any inline <script> blocks injected via dangerouslySetInnerHTML
    container.querySelectorAll('script').forEach((old) => {
      const s = document.createElement('script');
      if (old.src) { s.src = old.src; }
      else { s.textContent = old.textContent || ''; }
      document.body.appendChild(s);
      if (!old.src) document.body.removeChild(s);
    });

    (async () => {
      await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
      await loadScript('/js/webflow.js');

      if (window.Webflow) {
        try { window.Webflow.destroy(); } catch (_) {}
        try { window.Webflow.ready(); } catch (_) {}
        try { window.Webflow.require('ix2').init(); } catch (_) {}
      }

      // Counter animation
      const animNum = (el: HTMLElement, target: number, dur: number) => {
        let t0: number | null = null;
        const ease = (t: number) => 1 - Math.pow(1 - t, 4);
        const step = (now: number) => {
          if (!t0) t0 = now;
          const p = Math.min((now - t0) / dur, 1);
          el.textContent = String(Math.round(target * ease(p)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            animNum(el, parseInt(el.textContent || '0', 10), parseInt(el.getAttribute('duration') || '2000', 10));
            obs.unobserve(el);
          }
        });
      });
      document.querySelectorAll<HTMLElement>('[counter-element="number"]').forEach((el) => obs.observe(el));

      // GSAP word animations
      if (window.gsap && window.ScrollTrigger && (window as any).SplitType) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        const splitText = new (window as any).SplitType('.split-text', { types: 'words' });
        document.querySelectorAll<HTMLElement>('.word-animation').forEach((wrap) => {
          const words = wrap.querySelectorAll('.word');
          window.gsap.timeline({
            scrollTrigger: { trigger: wrap, start: 'top 85%', toggleActions: 'play none none reverse' },
          }).from(words, { duration: 1.2, y: '100%', opacity: 0, stagger: 0.04, ease: 'power3.out' });
        });
        // Fade-in data-w-id elements with opacity:0
        document.querySelectorAll<HTMLElement>('[data-w-id]').forEach((el) => {
          if (getComputedStyle(el).opacity === '0' || el.style.opacity === '0') {
            window.gsap.to(el, {
              opacity: 1, duration: 0.8,
              scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
            });
          }
        });
      }

      // Lenis smooth scroll
      await loadScript('https://unpkg.com/lenis@1.1.2/dist/lenis.min.js');
      if ((window as any).Lenis) {
        try {
          const lenis = new (window as any).Lenis({ lerp: 0.2, smoothWheel: true, wheelMultiplier: 1 });
          const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
          requestAnimationFrame(raf);
        } catch (_) {}
      }
    })();

    return () => {
      if (window.Webflow) { try { window.Webflow.destroy(); } catch (_) {} }
      document.documentElement.removeAttribute('data-wf-page');
      document.documentElement.removeAttribute('data-wf-site');
    };
  }, []);

  return <div id="wf-home" dangerouslySetInnerHTML={{ __html: WF_HTML }} />;
}
`;

fs.writeFileSync(outFile, tsx, 'utf8');
console.log('Done! Written to:', outFile);
console.log('Size:', fs.statSync(outFile).size, 'bytes');
