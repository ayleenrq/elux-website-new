// @ts-nocheck
import React, { useEffect } from 'react';

export default function WebflowHome() {
  useEffect(() => {
    let isMounted = true;
    let lenisInstance = null;
    let lenisRafId = null;

    const loadExternalScripts = async () => {
      const scriptUrls = ["https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6989896e1913ef45a770138a","/js/webflow.js","https://unpkg.com/lenis@1.1.2/dist/lenis.min.js","https://unpkg.com/split-type","https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js","https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"];
      for (const url of scriptUrls) {
        if (document.querySelector('script[src="' + url + '"]')) continue;
        const s = document.createElement('script');
        s.src = url.startsWith('http') ? url : (url.startsWith('/') ? url : '/' + url);
        s.async = false;
        document.body.appendChild(s);
        await new Promise(res => { s.onload = res; s.onerror = res; });
      }

      if (!isMounted) return;

      if (window.Webflow && window.Webflow.destroy && window.Webflow.ready && window.Webflow.require) {
        window.Webflow.destroy();
        window.Webflow.ready();
        window.Webflow.require('ix2').init();
      }

      
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-player', {
      events: {
        'onReady': onPlayerReady
      }
    });
  }
  function onPlayerReady(event) {
    var btn = document.getElementById('toggle-btn');
    var iconPlay = document.getElementById('icon-play');
    var iconPause = document.getElementById('icon-pause');
    var isPlaying = true;
    btn.addEventListener('click', function() {
      if (isPlaying) {
        player.pauseVideo();
        iconPause.style.display = 'none';
        iconPlay.style.display = 'block';
      } else {
        player.playVideo();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
      }
      isPlaying = !isPlaying;
    });
    // Hover effect
    btn.onmouseover = function() { this.style.background = "rgba(255, 255, 255, 0.25)"; this.style.transform = "scale(1.05)"; };
    btn.onmouseout = function() { this.style.background = "rgba(255, 255, 255, 0.1)"; this.style.transform = "scale(1)"; };
    btn.parentElement.style.pointerEvents = "auto";
  }


  // Kita bungkus dalam fungsi sendiri agar variable tidak tabrakan
  (function() {
    // Cek API, load jika belum ada
    if (!window.YT) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    var player2; // Variable player dibedakan
    // Fungsi inisialisasi khusus player 2
    // Kita gunakan teknik interval check karena onYouTubeIframeAPIReady global mungkin sudah dipakai kode 1
    var checkYT = setInterval(function () {
        if (window.YT && window.YT.Player) {
            initPlayer2();
            clearInterval(checkYT);
        }
    }, 100);
    function initPlayer2() {
      player2 = new YT.Player('video-player-2', { // Target ID baru
        events: {
          'onReady': onPlayerReady2
        }
      });
    }
    function onPlayerReady2(event) {
      var btn = document.getElementById('toggle-btn-2'); // Target ID baru
      var iconPlay = document.getElementById('icon-play-2');
      var iconPause = document.getElementById('icon-pause-2');
      var isPlaying = true; // Default true karena autoplay
      // Pastikan video jalan & mute
      event.target.mute();
      event.target.playVideo();
      btn.addEventListener('click', function() {
        // Cek status langsung dari player agar akurat
        var state = player2.getPlayerState();
        if (state == 1) { // Jika Playing
          player2.pauseVideo();
          iconPause.style.display = 'none';
          iconPlay.style.display = 'block';
        } else { // Jika Pause/Ended
          player2.playVideo();
          iconPlay.style.display = 'none';
          iconPause.style.display = 'block';
        }
      });
      // Hover effect
      btn.onmouseover = function() { this.style.background = "rgba(255, 255, 255, 0.25)"; this.style.transform = "scale(1.05)"; };
      btn.onmouseout = function() { this.style.background = "rgba(255, 255, 255, 0.1)"; this.style.transform = "scale(1)"; };
      // Aktifkan pointer events
      btn.parentElement.style.pointerEvents = "auto";
    }
  })();


  // Menggunakan Scope (function(){}) agar variable tidak bentrok dengan video lain
  (function() {
    // Load YouTube API jika belum ada (Safe check)
    if (!window.YT) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    var player3; // Variable khusus player 3
    // Cek berulang sampai API YouTube siap, baru jalankan player 3
    var checkYT3 = setInterval(function () {
        if (window.YT && window.YT.Player) {
            initPlayer3();
            clearInterval(checkYT3);
        }
    }, 100);
    function initPlayer3() {
      player3 = new YT.Player('video-player-3', { // Target ID video-player-3
        events: {
          'onReady': onPlayerReady3
        }
      });
    }
    function onPlayerReady3(event) {
      var btn = document.getElementById('toggle-btn-3');      // Target btn-3
      var iconPlay = document.getElementById('icon-play-3');  // Target icon-3
      var iconPause = document.getElementById('icon-pause-3'); // Target icon-3
      // Pastikan video jalan & mute
      event.target.mute();
      event.target.playVideo();
      btn.addEventListener('click', function() {
        var state = player3.getPlayerState();
        if (state == 1) { // Jika Playing -> Pause
          player3.pauseVideo();
          iconPause.style.display = 'none';
          iconPlay.style.display = 'block';
        } else { // Jika Pause/Stop -> Play
          player3.playVideo();
          iconPlay.style.display = 'none';
          iconPause.style.display = 'block';
        }
      });
      // Hover effect manual
      btn.onmouseover = function() { this.style.background = "rgba(255, 255, 255, 0.25)"; this.style.transform = "scale(1.05)"; };
      btn.onmouseout = function() { this.style.background = "rgba(255, 255, 255, 0.1)"; this.style.transform = "scale(1)"; };
      // Aktifkan pointer
      btn.parentElement.style.pointerEvents = "auto";
    }
  })();


  // Bungkus dalam fungsi tertutup agar variabel tidak bentrok dengan video lain
  (function() {
    // Cek apakah API YouTube sudah ada, jika belum, load scriptnya
    if (!window.YT) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    var player4; // Variabel khusus untuk player 4
    // Cek berulang sampai API YouTube siap, baru jalankan inisialisasi player 4
    var checkYT4 = setInterval(function () {
        if (window.YT && window.YT.Player) {
            initPlayer4();
            clearInterval(checkYT4);
        }
    }, 100);
    function initPlayer4() {
      player4 = new YT.Player('video-player-4', { // Target ID video-player-4
        events: {
          'onReady': onPlayerReady4
        }
      });
    }
    function onPlayerReady4(event) {
      var btn = document.getElementById('toggle-btn-4');      // Target btn-4
      var iconPlay = document.getElementById('icon-play-4');  // Target icon-4
      var iconPause = document.getElementById('icon-pause-4'); // Target icon-4
      // Pastikan video jalan & mute
      event.target.mute();
      event.target.playVideo();
      btn.addEventListener('click', function() {
        var state = player4.getPlayerState(); // Cek status player 4
        if (state == 1) { // Jika Playing -> Pause
          player4.pauseVideo();
          iconPause.style.display = 'none';
          iconPlay.style.display = 'block';
        } else { // Jika Pause/Stop -> Play
          player4.playVideo();
          iconPlay.style.display = 'none';
          iconPause.style.display = 'block';
        }
      });
      // Hover effect manual
      btn.onmouseover = function() { this.style.background = "rgba(255, 255, 255, 0.25)"; this.style.transform = "scale(1.05)"; };
      btn.onmouseout = function() { this.style.background = "rgba(255, 255, 255, 0.1)"; this.style.transform = "scale(1)"; };
      // Aktifkan pointer events
      btn.parentElement.style.pointerEvents = "auto";
    }
  })();


const lenis = new Lenis({
  lerp: 0.2,
  smoothWheel: true,
  wheelMultiplier: 1,
  autoResize: true
});
lenisInstance = lenis;
function raf(time) {
  lenis.raf(time);
  lenisRafId = requestAnimationFrame(raf);
}
lenisRafId = requestAnimationFrame(raf);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      lenis.scrollTo(target);
    }
  });
});


(function() {
  const animateNumber = (element, target, duration) => {
    let startTime;
    const initialNumber = 0;
    const easingFunction = t => 1 - Math.pow(1 - t, 4);
    const animate = time => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      const t = Math.min(elapsedTime / duration, 1);
      const newValue = initialNumber + (target - initialNumber) * easingFunction(t);
      element.textContent = Math.round(newValue);
      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target;
      }
    };
    requestAnimationFrame(animate);
  };
  const onIntersection = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const finalNumber = parseInt(el.textContent, 10);
        const animDuration = parseInt(el.getAttribute('duration'), 10) || 2000;
        animateNumber(el, finalNumber, animDuration);
        observer.unobserve(el);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersection);
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[counter-element="number"]').forEach(el => {
      observer.observe(el);
    });
  });
})();


// Tunggu sampai Webflow siap
window.addEventListener("DOMContentLoaded", (event) => {
  // Register GSAP
  gsap.registerPlugin(ScrollTrigger);
  // Jalankan SplitType pada elemen dengan class .split-text
  const text = new SplitType('.split-text', { types: 'words' });
  // Animasi untuk setiap kata
  $(".word-animation").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".word"); // SplitType pakai class .word, bukan .split-words
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 85%", 
        end: "bottom top",
        toggleActions: "play none none reverse"
      }
    });
    tl.from(targetElement, {
      duration: 1.5,
      y: "100%",       // Gerak dari bawah
      rotationX: -90,  // Efek putar
      opacity: 0,
      ease: "power3.out",
      stagger: 0.05    // Jeda antar kata
    });
  });
  // Perbaiki bug saat resize layar (Reset SplitType)
  let windowWidth = window.innerWidth;
  window.addEventListener('resize', function() {
    if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
        text.revert();
        location.reload(); // Reload agar kalkulasi ulang
    }
  });
});


      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    };
    loadExternalScripts();

    return () => {
      isMounted = false;

      if (lenisRafId !== null) {
        cancelAnimationFrame(lenisRafId);
      }

      if (lenisInstance && typeof lenisInstance.destroy === 'function') {
        lenisInstance.destroy();
      }

      document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped');
      document.body.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped');
      document.documentElement.style.removeProperty('scroll-behavior');
      document.body.style.removeProperty('scroll-behavior');
      document.body.style.removeProperty('overflow');
    };
  }, []);

  return (
    <div className="webflow-wrapper body">
      <style dangerouslySetInnerHTML={{ __html: `
  /* Hide the Webflow exported navbar if using React navbar */
  .webflow-wrapper .navbar.w-nav {
    display: none !important;
  }
` }} />
      
  <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
    <div className="container w-container">
      <div data-w-id="826b20bb-5919-85e3-fbbc-7c55ac670f26" style={{opacity: "0"}} className="nav-wrapper">
        <a href="#" className="brand w-nav-brand"><img src="/images/Frame-117.webp" loading="lazy" alt="" /></a>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <a href="#" className="menu-text w-nav-link">Works</a>
          <a href="#" className="menu-text w-nav-link">Proccess</a>
          <a href="#" className="menu-text w-nav-link">Pricing</a>
          <a href="#" className="menu-text w-nav-link">FAQ</a>
          <div className="button-cta">
            <a data-w-id="2123f460-acf2-09be-7d57-40476fd39dd9" href="#" className="gradient-button inner w-inline-block">
              <div className="shadow-1"></div>
              <div className="call-button">
                <div className="text-lg">Book Discovery Call</div>
              </div>
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{ __html: `
  .call-button {
    transition: box-shadow 0.4s ease !important;
  }
` }} />
              </div>
            </a>
          </div>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="icon w-icon-nav-menu"></div>
        </div>
        <a data-w-id="e31b7f6a-3e4a-358f-50d9-f4526cd0c5ef" href="#" className="gradient-button outer w-inline-block">
          <div className="shadow-1"></div>
          <div className="call-button">
            <div className="text-lg">Book Discovery Call</div>
          </div>
          <div className="w-embed">
            <style dangerouslySetInnerHTML={{ __html: `
  .call-button {
    transition: box-shadow 0.4s ease !important;
  }
` }} />
          </div>
        </a>
      </div>
    </div>
  </div>
  <div data-w-id="3d7902d7-b942-48a0-6a68-4a9b209ac5fe" className="scroll-close-wrap">
    <div className="sticky-wrap _1">
      <section className="section dark">
        <div className="w-layout-blockcontainer container w-container" style={{ marginTop: "60px" }}>
          <div className="v-flex-xxl z-1">
            <div className="v-flex-4xl">
              <div className="v-flex-xxl center">
                <div className="v-flex-lg center">
                  <div data-w-id="2defad79-c10b-d9f1-c414-5e50cdbab148" style={{opacity: "0"}} className="label">
                    <div className="dot"></div>
                    <div className="label-text">Accepting 2 New Partners for Q1</div>
                  </div>
                  <div className="word-animation">
                    <h1 className="heading-1"><span className="split-text">The Pragmatic Product Design Partner.</span></h1>
                  </div>
                  <div data-w-id="ab833106-d74a-995f-0ac7-f5dd54833156" style={{opacity: "0"}} className="text-xl heading-text">We combine enterprise-grade UX frameworks with custom branding to design <span className="white">SaaS, MVPs, and interfaces</span> that convert. No bloat. No endless meetings. Just shipping.</div>
                </div>
                <div data-w-id="0470b4bd-1012-faa6-4fda-6b3096a07ab5" style={{opacity: "0"}} className="h-flex-md">
                  <a data-w-id="d6c1e40d-44c0-01b2-9843-8944f18c491e" href="#" className="primary-button w-inline-block">
                    <div className="shadow"></div>
                    <div className="button-wrap">
                      <div className="h-flex-sm">
                        <div className="text-lg"><span className="bold uppercase">LET’S TALKS</span></div>
                        <div className="code-embed w-embed"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 12.4167L12.4167 0.75M12.4167 0.75H0.75M12.4167 0.75V12.4167" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg></div>
                      </div>
                    </div>
                  </a>
                  <a data-w-id="2291af21-3e54-efea-c189-15ec27f4d840" href="#" className="secondary-button w-inline-block">
                    <div className="secondary-button-wrap">
                      <div className="text-lg black"><span className="bold uppercase">See Our Portfolio</span><br /></div>
                    </div>
                    <div className="shadow-2"></div>
                  </a>
                </div>
              </div>
              <div className="v-flex-sm">
                <div data-w-id="291c3e20-6b7d-5bc0-f342-3648d78528d8" className="video-show w-embed"><video src="https://res.cloudinary.com/dhhruv4xd/video/upload/v1770626929/Scene_4_gj66wn.webm" autoPlay muted loop style={{width: "100%", height: "auto", borderRadius: "12px"}}>
                  </video></div>
                <div data-w-id="9cc985dd-8828-e647-feef-be1e0c24f9f0" style={{opacity: "0"}} className="h-flex-space none">
                  <div className="text-xl semibold"><span className="white">Project Showreel</span></div>
                  <div className="text-lg"><span className="neutral-70">[1:20 Min]</span></div>
                </div>
              </div>
            </div>
            <div data-w-id="787f78a9-d4a8-50e4-450e-6e206e3bb5d3" style={{opacity: "0"}} className="content-wrap">
              <div className="w-layout-grid grid-2xl">
                <div className="v-flex-sm">
                  <div className="text-xl"><span className="white">From MVP to Market Leader, Pragmatic Partner That Gets It Shipped.</span></div>
                  <div className="text-base">We turn heavy logic into intuitive UI/UX, so founders ship valuable products without endless Figma cycles.</div>
                </div>
                <div className="w-layout-grid grid-2x2">
                  <div className="v-flex-md">
                    <div className="v-flex-default">
                      <div className="text-4xl"><span duration="3000" counter-element="number" className="number">95</span>+</div>
                      <div className="line"></div>
                    </div>
                    <div className="text-base">Digital Products Shipped</div>
                  </div>
                  <div className="v-flex-md">
                    <div className="v-flex-default">
                      <div className="text-4xl"><span duration="3000" counter-element="number" className="number">100</span>+</div>
                      <div className="line"></div>
                    </div>
                    <div className="text-base">Clients We’ve Worked With</div>
                  </div>
                  <div className="v-flex-md">
                    <div className="v-flex-default">
                      <div className="text-4xl"><span duration="3000" counter-element="number" className="number">20</span>+</div>
                      <div className="line"></div>
                    </div>
                    <div className="text-base">Countries Served Worldwide</div>
                  </div>
                  <div className="v-flex-md">
                    <div className="v-flex-default">
                      <div className="text-4xl"><span number="3000" counter-element="number" className="number">57</span>%</div>
                      <div className="line"></div>
                    </div>
                    <div className="text-base">Clients Keep Coming Back</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><img src="/images/Vector.svg" loading="lazy" width="954" style={{opacity: "0"}} alt="" data-w-id="8ef8975a-efaf-8dbf-5f0c-256440d53ae7" className="bg-image" />
      </section>
    </div>
    <div className="sticky-section">
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="v-flex-2xl">
            <div className="v-flex-lg center">
              <div data-w-id="3f31962d-c1d0-df87-aab3-c28e73157b49" style={{opacity: "0"}} className="label">
                <div className="dot"></div>
                <div className="label-text black">FEATURED CLIENTS</div>
              </div>
              <div className="word-animation">
                <h2 className="text-7xl"><span className="split-text">Our Featured Clients Who Shipped Fast, Then Scaled.</span></h2>
              </div>
              <div data-w-id="e7e8cd4e-31e5-2032-8cbe-d847a5b89562" style={{opacity: "0"}} className="text-2xl center">You’re next. See how these teams turned MVPs into launch-ready products with build-ready UI/UX.</div>
            </div>
            <div data-w-id="21f6043c-6591-57d8-9106-5f5151d14acf" style={{opacity: "0"}} className="w-layout-grid grid-4x2">
              <div className="card-content">
                <div data-w-id="470048bf-5c74-3970-3cb6-e8ae2dd3f594" className="card-wrap outer"><img src="/images/Frame-2147229429.webp" loading="lazy" alt="" /></div>
                <div className="card-wrap inner">
                  <div className="v-flex-default sapce">
                    <div className="h-flex-xs">
                      <div className="card-label">
                        <div className="text-sm">SaaS</div>
                      </div>
                      <div className="card-label">
                        <div className="text-sm">United States</div>
                      </div>
                    </div>
                    <div className="v-flex-md">
                      <div className="v-flex-xs">
                        <div className="text-2xl white"><span className="semibold">AliaPopups</span></div>
                        <div className="w-layout-grid card-grid">
                          <div className="v-flex-xs">
                            <div className="text-xs">Launch in</div>
                            <div className="text-xl white"><span className="semibold">1 month</span></div>
                          </div>
                          <div className="v-flex-xs">
                            <div className="text-xs">Reduce cost</div>
                            <div className="text-xl white"><span className="semibold">30%</span></div>
                          </div>
                        </div>
                        <div className="text-xs">Lean presence MVP to support the product. Designed and launched the company site as a lean MVP foundation.</div>
                      </div>
                      <div className="line border"></div>
                      <div className="h-flex-xs center">
                        <div className="text-xs">Web Design</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">Framer Development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div data-w-id="1e54cd47-d8b4-d758-62f9-12f91d1684eb" className="card-wrap outer"><img src="/images/upnova-logo-1.webp" loading="lazy" alt="" className="image" /></div>
                <div className="card-wrap inner">
                  <div className="v-flex-default sapce">
                    <div className="h-flex-xs">
                      <div className="card-label">
                        <div className="text-sm">SaaS</div>
                      </div>
                      <div className="card-label">
                        <div className="text-sm">Finland</div>
                      </div>
                    </div>
                    <div className="v-flex-md">
                      <div className="v-flex-xs">
                        <div className="text-2xl white"><span className="semibold">Upnova</span></div>
                        <div className="w-layout-grid card-grid">
                          <div className="v-flex-xs">
                            <div className="text-xs">Launch in</div>
                            <div className="text-xl white"><span className="semibold">1 month</span></div>
                          </div>
                          <div className="v-flex-xs">
                            <div className="text-xs">Reduce cost</div>
                            <div className="text-xl white"><span className="semibold">30%</span></div>
                          </div>
                        </div>
                        <div className="text-xs">Delivered a full-cycle UX audit, redesign, and Framer build in 5 weeks without delays, reducing friction across key journeys by 15%.</div>
                      </div>
                      <div className="line border"></div>
                      <div className="h-flex-xs center">
                        <div className="text-xs">Web Design</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">Web Development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div data-w-id="10423fd5-9b7f-d0e3-0d6d-db07552a29aa" className="card-wrap outer"><img src="/images/Frame-2147229429_1.webp" loading="lazy" alt="" className="image-2" /></div>
                <div className="card-wrap inner">
                  <div className="v-flex-default sapce">
                    <div className="h-flex-xs">
                      <div className="card-label">
                        <div className="text-sm">B2B SaaS</div>
                      </div>
                      <div className="card-label">
                        <div className="text-sm">United States</div>
                      </div>
                    </div>
                    <div className="v-flex-md">
                      <div className="v-flex-xs">
                        <div className="text-2xl white"><span className="semibold">Makewaves</span></div>
                        <div className="w-layout-grid card-grid">
                          <div className="v-flex-xs">
                            <div className="text-xs">Launch in</div>
                            <div className="text-xl white"><span className="semibold">1 month</span></div>
                          </div>
                          <div className="v-flex-xs">
                            <div className="text-xs">Reduce cost</div>
                            <div className="text-xl white"><span className="semibold">30%</span></div>
                          </div>
                        </div>
                        <div className="text-xs">Shipped multiple Webflow design and development projects, reducing time-to-launch by 30% through clean structure and build quality.</div>
                      </div>
                      <div className="line border"></div>
                      <div className="h-flex-xs center">
                        <div className="text-xs">Web Design</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">Web Development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div data-w-id="9b32ea90-32bf-3d96-e586-016c37de803e" className="card-wrap outer"><img src="/images/lamah-1.webp" loading="lazy" alt="" className="image" /></div>
                <div className="card-wrap inner">
                  <div className="v-flex-default sapce">
                    <div className="card-label-wrap">
                      <div className="h-flex-xs grid">
                        <div className="card-label">
                          <div className="text-sm">SaaS</div>
                        </div>
                        <div className="card-label">
                          <div className="text-sm">United States</div>
                        </div>
                      </div>
                      <div className="card-label">
                        <div className="text-sm">United States</div>
                      </div>
                    </div>
                    <div className="v-flex-md">
                      <div className="v-flex-xs">
                        <div className="text-2xl white"><span className="semibold">Lamah Technologies</span></div>
                        <div className="w-layout-grid card-grid">
                          <div className="v-flex-xs">
                            <div className="text-xs">Launch in</div>
                            <div className="text-xl white"><span className="semibold">1 month</span></div>
                          </div>
                          <div className="v-flex-xs">
                            <div className="text-xs">Reduce cost</div>
                            <div className="text-xl white"><span className="semibold">30%</span></div>
                          </div>
                        </div>
                        <div className="text-xs">Lean presence MVP to support the product. Designed and launched the company site as a lean MVP foundation.</div>
                      </div>
                      <div className="line border"></div>
                      <div className="h-flex-xs center">
                        <div className="text-xs">Product Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div data-w-id="b270f815-bb37-38c2-db78-88513efe2fe3" className="card-wrap outer"><img src="/images/Frame-2147229429-1.webp" loading="lazy" alt="" className="image" /></div>
                <div className="card-wrap inner">
                  <div className="v-flex-default sapce">
                    <div className="h-flex-xs">
                      <div className="card-label">
                        <div className="text-sm">AI</div>
                      </div>
                      <div className="card-label">
                        <div className="text-sm">United States</div>
                      </div>
                    </div>
                    <div className="v-flex-md">
                      <div className="v-flex-xs">
                        <div className="text-2xl white"><span className="semibold">Allen AI</span></div>
                        <div className="w-layout-grid card-grid">
                          <div className="v-flex-xs">
                            <div className="text-xs">Launch in</div>
                            <div className="text-xl white"><span className="semibold">1 month</span></div>
                          </div>
                          <div className="v-flex-xs">
                            <div className="text-xs">Reduce cost</div>
                            <div className="text-xl white"><span className="semibold">30%</span></div>
                          </div>
                        </div>
                        <div className="text-xs">Delivered fast, intuitive design across website and AI app interfaces, with 3+ repeat engagements driven by on-time delivery and audit-led UI/UX improvements.</div>
                      </div>
                      <div className="line border"></div>
                      <div className="h-flex-xs center">
                        <div className="text-xs">App Design</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">Web Development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div data-w-id="cff4de03-203b-afed-8290-0e425b301f6a" className="card-wrap outer"><img src="/images/Frame-2147229429-2.webp" loading="lazy" alt="" /></div>
                <div className="card-wrap inner">
                  <div className="v-flex-default sapce">
                    <div className="h-flex-xs">
                      <div className="card-label">
                        <div className="text-sm">FinTech</div>
                      </div>
                      <div className="card-label">
                        <div className="text-sm">United States</div>
                      </div>
                    </div>
                    <div className="v-flex-md">
                      <div className="v-flex-xs">
                        <div className="text-2xl white"><span className="semibold">Postcredit</span></div>
                        <div className="w-layout-grid card-grid">
                          <div className="v-flex-xs">
                            <div className="text-xs">Launch in</div>
                            <div className="text-xl white"><span className="semibold">1 month</span></div>
                          </div>
                          <div className="v-flex-xs">
                            <div className="text-xs">Reduce cost</div>
                            <div className="text-xl white"><span className="semibold">30%</span></div>
                          </div>
                        </div>
                        <div className="text-xs">Supported a $1M+ funding raise by delivering a conversion-ready MVP website and web app that built credibility fast!</div>
                      </div>
                      <div className="line border"></div>
                      <div className="h-flex-xxs">
                        <div className="text-xs">App Design</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">Web Design</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">Web Development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div data-w-id="11f19e74-0bee-f910-1359-defa289cfac9" className="card-wrap outer"><img src="/images/Frame-2147229429-3.webp" loading="lazy" alt="" /></div>
                <div className="card-wrap inner">
                  <div className="v-flex-default sapce">
                    <div className="h-flex-xs">
                      <div className="card-label">
                        <div className="text-sm">Enterprice</div>
                      </div>
                      <div className="card-label">
                        <div className="text-sm">Indonesia</div>
                      </div>
                    </div>
                    <div className="v-flex-md">
                      <div className="v-flex-xs">
                        <div className="text-2xl white"><span className="semibold">Multivision Plus</span></div>
                        <div className="w-layout-grid card-grid">
                          <div className="v-flex-xs">
                            <div className="text-xs">Launch in</div>
                            <div className="text-xl white"><span className="semibold">1 month</span></div>
                          </div>
                          <div className="v-flex-xs">
                            <div className="text-xs">Reduce cost</div>
                            <div className="text-xl white"><span className="semibold">30%</span></div>
                          </div>
                        </div>
                        <div className="text-xs">Supported IPO documentation needs by delivering a 12-page internal Webflow MVP in 4 weeks, including QA and stock data embedding, for a public listing context worth IDR 250B+.</div>
                      </div>
                      <div className="line border"></div>
                      <div className="h-flex-xxs">
                        <div className="text-xs">Web Design</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">Web Development</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">App Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div data-w-id="64385c68-2147-ef9a-6e78-22453ea0ba6e" className="card-wrap outer"><img src="/images/Frame-2147229429-4.webp" loading="lazy" alt="" /></div>
                <div className="card-wrap inner">
                  <div className="v-flex-default sapce">
                    <div className="h-flex-xs">
                      <div className="card-label">
                        <div className="text-sm">UI Templates</div>
                      </div>
                      <div className="card-label">
                        <div className="text-sm">Global</div>
                      </div>
                    </div>
                    <div className="v-flex-md">
                      <div className="v-flex-xs">
                        <div className="text-2xl white"><span className="semibold">UI Core</span></div>
                        <div className="w-layout-grid card-grid">
                          <div className="v-flex-xs">
                            <div className="text-xs">Launch in</div>
                            <div className="text-xl white"><span className="semibold">1 month</span></div>
                          </div>
                          <div className="v-flex-xs">
                            <div className="text-xs">Reduce cost</div>
                            <div className="text-xl white"><span className="semibold">30%</span></div>
                          </div>
                        </div>
                        <div className="text-xs">Shipped multiple UI templates through a long-term collaboration, built on reusable components for fast delivery and consistent quality.</div>
                      </div>
                      <div className="line border"></div>
                      <div className="h-flex-xs center">
                        <div className="text-xs">Web Design</div>
                        <div className="dot-card"></div>
                        <div className="text-xs">App Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <section className="section sticky-bottom-1">
    <div className="w-layout-blockcontainer container w-container">
      <div className="v-flex-2xl">
        <div className="v-flex-lg center">
          <div data-w-id="a36c4849-c265-fc93-2b4c-c17f0879863e" style={{opacity: "0"}} className="label">
            <div className="dot"></div>
            <div className="label-text black">Problem to solution</div>
          </div>
          <div className="word-animation">
            <h2 className="text-7xl _2"><span className="split-text">Building Is Hard. The Right Partner Makes It Simpler and Faster.</span></h2>
          </div>
          <div data-w-id="a36c4849-c265-fc93-2b4c-c17f08798644" style={{opacity: "0"}} className="text-2xl center">Pick the situation you’re in. These are the most common founder cases, and the fastest path to get it shipped.</div>
        </div>
        <div className="v-flex-md">
          <div data-w-id="0df59607-44ca-64f7-a569-f9ada28772e7" style={{opacity: "0"}} className="w-layout-grid grid-2xl card-wrapper">
            <div className="card-content-wrap">
              <div className="v-flex-md">
                <div className="text-xl color-blue">You are short on hands.</div>
                <h4 className="text-4xl black">You need to ship fast, but your team’s at capacity.</h4>
                <div className="text-2xl">We step in with clear ownership from UX to build-ready UI. You get focused sprints, fast feedback, and delivery that keeps your roadmap moving without delays.</div>
              </div>
              <a data-w-id="9548fe05-9cd8-eaeb-c4fd-e30beaddffb0" href="#" className="primary-button w-inline-block">
                <div className="button-wrap">
                  <div className="h-flex-sm">
                    <div className="text-lg uppercase"><span className="bold uppercase">EXTEND MY TEAM</span></div>
                  </div>
                </div>
                <div className="shadow"></div>
              </a>
            </div>
            <div id="w-node-_6d60b71b-f38c-c6a8-0faf-4f2bfe6520e4-a7701396" className="video-wrap">
              <div className="w-embed w-iframe w-script">
                <div className="video-container" style={{position: "relative", paddingBottom: "100%", height: "0", overflow: "hidden", borderRadius: "8px"}}>
                  <iframe id="video-player" src="https://www.youtube.com/embed/xYz4nXFTh_k?autoplay=1&mute=1&loop=1&playlist=xYz4nXFTh_k&controls=0&enablejsapi=1&start=1972" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", pointerEvents: "none", transform: "scale(1.2)"}} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">
                  </iframe>
                  <button id="toggle-btn" style={{position: "absolute", bottom: "20px", left: "20px", zIndex: "20", background: "rgba(255, 255, 255, 0.1)", border: "3px solid rgba(255, 255, 255, 0.5)", borderRadius: "50%", width: "60px", height: "60px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)", transition: "all 0.3s ease"}}>
                    <div id="btn-icon-wrapper" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
                      <svg id="icon-pause" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                      <svg id="icon-play" width="24" height="24" viewBox="0 0 24 24" fill="white" style={{display: "none", marginLeft: "4px"}}>
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          <div data-w-id="4e8d20c9-1555-0d87-cd64-a8028a1f195e" style={{opacity: "0"}} className="w-layout-grid grid-2xl card-wrapper">
            <div className="card-content-wrap">
              <div className="v-flex-md">
                <div className="text-xl color-blue">Adoption is slowing down.</div>
                <h4 className="text-4xl black">You’re growing, but UX friction is holding users back.</h4>
                <div className="text-2xl">We run an audit to identify what’s breaking the experience, then redesign the flows that matter most so users move faster and your product scales cleanly. Less friction, faster adoption, and a UX system your team can build on.</div>
              </div>
              <a data-w-id="9548fe05-9cd8-eaeb-c4fd-e30beaddffb0" href="#" className="primary-button w-inline-block">
                <div className="button-wrap">
                  <div className="h-flex-sm">
                    <div className="text-lg uppercase">REDESIGN MY PRODUCT</div>
                  </div>
                </div>
                <div className="shadow"></div>
              </a>
            </div>
            <div id="w-node-abc9c443-1e9c-4570-5a53-8683288cd4ee-a7701396" className="video-wrap">
              <div className="w-embed w-iframe w-script">
                <div className="video-container" style={{position: "relative", paddingBottom: "100%", height: "0", overflow: "hidden", borderRadius: "8px"}}>
                  <iframe id="video-player-2" src="https://www.youtube.com/embed/ng4v6MHxNFU?autoplay=1&mute=1&loop=1&playlist=ng4v6MHxNFU&controls=0&enablejsapi=1&start=481" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", pointerEvents: "none", transform: "scale(1.2)"}} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">
                  </iframe>
                  <button id="toggle-btn-2" style={{position: "absolute", bottom: "20px", left: "20px", zIndex: "20", background: "rgba(255, 255, 255, 0.1)", border: "3px solid rgba(255, 255, 255, 0.5)", borderRadius: "50%", width: "60px", height: "60px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)", transition: "all 0.3s ease"}}>
                    <div id="btn-icon-wrapper-2" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
                      <svg id="icon-pause-2" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                      <svg id="icon-play-2" width="24" height="24" viewBox="0 0 24 24" fill="white" style={{display: "none", marginLeft: "4px"}}>
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          <div data-w-id="1d380937-3cee-ab96-08e8-f1b32ff35b01" style={{opacity: "0"}} className="w-layout-grid grid-2xl card-wrapper">
            <div className="card-content-wrap">
              <div className="v-flex-md">
                <div className="text-xl color-blue">You are short on hands.</div>
                <h4 className="text-4xl black">You need an MVP that’s credible enough to launch, sell, or raise.</h4>
                <div className="text-2xl">We cut scope to what matters, design for trust, and ship a launch-ready MVP without wasted cycles. Clear UX, solid UI, and build support to get you live.</div>
              </div>
              <a data-w-id="9548fe05-9cd8-eaeb-c4fd-e30beaddffb0" href="#" className="primary-button w-inline-block">
                <div className="button-wrap">
                  <div className="h-flex-sm">
                    <div className="text-lg uppercase">SHIP MY MVP</div>
                  </div>
                </div>
                <div className="shadow"></div>
              </a>
            </div>
            <div id="w-node-b3581415-e3a0-e96f-ba82-e5866fd3536e-a7701396" className="video-wrap">
              <div className="w-embed w-iframe w-script">
                <div className="video-container" style={{position: "relative", paddingBottom: "100%", height: "0", overflow: "hidden", borderRadius: "8px"}}>
                  <iframe id="video-player-3" src="https://www.youtube.com/embed/nR1WwHAFQ8U?autoplay=1&mute=1&loop=1&playlist=nR1WwHAFQ8U&controls=0&enablejsapi=1" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", pointerEvents: "none", transform: "scale(1.2)"}} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">
                  </iframe>
                  <button id="toggle-btn-3" style={{position: "absolute", bottom: "20px", left: "20px", zIndex: "20", background: "rgba(255, 255, 255, 0.1)", border: "3px solid rgba(255, 255, 255, 0.5)", borderRadius: "50%", width: "60px", height: "60px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)", transition: "all 0.3s ease"}}>
                    <div id="btn-icon-wrapper-3" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
                      <svg id="icon-pause-3" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                      <svg id="icon-play-3" width="24" height="24" viewBox="0 0 24 24" fill="white" style={{display: "none", marginLeft: "4px"}}>
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-layout-grid grid-2xl card-wrapper">
            <div className="card-content-wrap">
              <div className="v-flex-md">
                <div className="text-xl color-blue">You are short on hands.</div>
                <h4 className="text-4xl black">The story is strong, but the product doesn’t feel investor-ready.</h4>
                <div className="text-2xl">We design the surfaces that signal credibility fast, so you look ready when it counts. You get pitch-ready flows, sharper product pages, and a product experience that feels fundable.</div>
              </div>
              <a data-w-id="9548fe05-9cd8-eaeb-c4fd-e30beaddffb0" href="#" className="primary-button w-inline-block">
                <div className="button-wrap">
                  <div className="h-flex-sm">
                    <div className="text-lg uppercase">POLISH FOR INVESTORS</div>
                  </div>
                </div>
                <div className="shadow"></div>
              </a>
            </div>
            <div id="w-node-_515a5d09-4818-9e76-b488-a554e96e0fec-a7701396" className="video-wrap">
              <div className="w-embed w-iframe w-script">
                <div className="video-container" style={{position: "relative", paddingBottom: "100%", height: "0", overflow: "hidden", borderRadius: "8px"}}>
                  <iframe id="video-player-4" src="https://www.youtube.com/embed/ajvXxR1Di54?autoplay=1&mute=1&loop=1&playlist=ajvXxR1Di54&controls=0&enablejsapi=1" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", pointerEvents: "none", transform: "scale(1.2)"}} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">
                  </iframe>
                  <button id="toggle-btn-4" style={{position: "absolute", bottom: "20px", left: "20px", zIndex: "20", background: "rgba(255, 255, 255, 0.1)", border: "3px solid rgba(255, 255, 255, 0.5)", borderRadius: "50%", width: "60px", height: "60px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)", transition: "all 0.3s ease"}}>
                    <div id="btn-icon-wrapper-4" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
                      <svg id="icon-pause-4" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                      <svg id="icon-play-4" width="24" height="24" viewBox="0 0 24 24" fill="white" style={{display: "none", marginLeft: "4px"}}>
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section dark-2">
    <div className="w-layout-blockcontainer container w-container">
      <div className="v-flex-2xl center">
        <div className="v-flex-lg center">
          <div data-w-id="def83005-1823-8ded-56ad-e5cfaece8d2a" style={{opacity: "0"}} className="label">
            <div className="dot"></div>
            <div className="label-text">Services by startup stage</div>
          </div>
          <div className="word-animation">
            <h2 className="text-7xl white"><span className="split-text">Support That Fits Your Stage, From First MVP to Market Scale.</span></h2>
          </div>
          <div data-w-id="def83005-1823-8ded-56ad-e5cfaece8d32" style={{opacity: "0"}} className="text-2xl _w-52">Pick where you are right now. We’ll show the services built for that stage, so you can move fast without guessing.</div>
        </div>
        <div data-w-id="61eb20d9-21d4-6edf-6ef6-53b44bedff93" style={{opacity: "0"}} className="toggle-button border">
          <a data-w-id="93301641-7d18-793b-c6fd-e0f39ab59118" href="#" className="button _1 w-inline-block">
            <div className="text-lg uppercase"><span data-w-id="3a5bf9db-27c2-92bc-2f6f-804313efef0b" className="color-white">SEED</span></div>
          </a>
          <a data-w-id="a7116bad-5f32-6a17-4752-9ba99d6d3b20" href="#" className="button _2 w-inline-block">
            <div className="text-lg uppercase"><span data-w-id="c0a3829e-bf48-ff97-c260-815f364cad88" className="color-inverse">GROWTH</span></div>
          </a>
          <a data-w-id="00307e84-ea21-c854-4bc2-ecd312538340" href="#" className="button _3 w-inline-block">
            <div className="text-lg uppercase"><span data-w-id="a9d54598-363b-3044-2f33-9fd7f7da7ac5" className="color-inverse">SCALE</span></div>
          </a>
        </div>
        <div className="content-wrapper">
          <div data-w-id="389f6ffc-c5c9-ae51-dd0f-7c6ba05ed448" style={{opacity: "0"}} className="w-layout-grid service-content-grid _1">
            <div id="w-node-def83005-1823-8ded-56ad-e5cfaece8d35-a7701396" className="v-flex-default sapce">
              <div className="v-flex-xs">
                <div className="label-text">SEED</div>
                <h4 className="text-4xl"><span className="reguler">Validate Fast. Ship a Credible MVP in 7 Days.        </span></h4>
                <div className="text-xl">Prove the core value, ship the first version, and look legit from day one.</div>
              </div>
            </div>
            <div id="w-node-def83005-1823-8ded-56ad-e5cfaece8d4e-a7701396" className="service-wrapper">
              <div data-w-id="def83005-1823-8ded-56ad-e5cfaece8d4f" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">MVP UX and UI Design</h6>
                  <div className="text-base">Core flows and screens users actually need, ready for development.</div>
                </div><img src="/images/Service-Image---MVP-UX-and-UI-Design.webp" loading="lazy" data-w-id="35fb03be-7848-087b-01f3-2365e7eaa9ed" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 768px" alt="" srcset="/images/Service-Image---MVP-UX-and-UI-Design-p-500.webp 500w, /images/Service-Image---MVP-UX-and-UI-Design.webp 768w" className="service-image" />
              </div>
              <div data-w-id="a24eafb9-bbc7-5441-75cc-342c2597ecd5" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Clickable Prototype</h6>
                  <div className="text-base">Demo-ready prototype to sell the idea, test the flow, and align stakeholders.<br /></div>
                </div><img src="/images/Service-Image.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 768px" srcset="/images/Service-Image-p-500.webp 500w, /images/Service-Image.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="7b06b660-0bde-90a4-5631-a88e7a29c7fe" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Launch Ready Landing Page</h6>
                  <div className="text-base">Conversion-first page that explains value fast and builds trust instantly.<br /></div>
                </div><img src="/images/Service-Image---Launch-Ready-Landing-Page.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 768px" srcset="/images/Service-Image---Launch-Ready-Landing-Page-p-500.webp 500w, /images/Service-Image---Launch-Ready-Landing-Page.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="2fc53821-ac77-3f76-8c88-9e63764a6324" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">No-Code MVP Build</h6>
                  <div className="text-base">Go live fast with a clean build, responsive layout, and QA included.</div>
                </div><img src="/images/Service-Image---No-Code-MVP-Build.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 768px" srcset="/images/Service-Image---No-Code-MVP-Build-p-500.webp 500w, /images/Service-Image---No-Code-MVP-Build.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="7dc13f69-2bd8-571a-41db-6572822e4416" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Pitch and Demo Readiness</h6>
                  <div className="text-base">Make the product feel credible for investors, pilots, and sales conversations.</div>
                </div><img src="/images/Service-Image---Pitch-and-Demo-Readiness.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 768px" srcset="/images/Service-Image---Pitch-and-Demo-Readiness-p-500.webp 500w, /images/Service-Image---Pitch-and-Demo-Readiness.webp 768w" alt="" className="service-image" />
              </div>
            </div>
          </div>
          <div className="w-layout-grid service-content-grid _2">
            <div id="w-node-_9b8cd529-b6a2-c75a-e761-d633fd3f5597-a7701396" className="v-flex-default sapce">
              <div className="v-flex-xs">
                <div className="label-text">GROWTH</div>
                <h4 className="text-4xl">Increase Adoption  and Cut Drop-Off, So Traction Keeps Growing</h4>
                <div className="text-xl">We remove UX friction across key journeys, so users activate faster, stay longer, and come back more often.</div>
              </div>
            </div>
            <div id="w-node-_9b8cd529-b6a2-c75a-e761-d633fd3f55a7-a7701396" className="service-wrapper">
              <div data-w-id="9b8cd529-b6a2-c75a-e761-d633fd3f55a8" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">UX Audit and Priorities</h6>
                  <div className="text-base">Find where users get stuck, then focus on the highest-impact fixes first.</div>
                </div><img src="/images/Service-Image---UX-Audit-and-Priorities.webp" loading="lazy" sizes="100vw" srcset="/images/Service-Image---UX-Audit-and-Priorities-p-500.webp 500w, /images/Service-Image---UX-Audit-and-Priorities.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="9b8cd529-b6a2-c75a-e761-d633fd3f55b0" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Brand and Visual Enhancement</h6>
                  <div className="text-base">A sharper, more consistent product feel across UI, visuals, and key touchpoints.</div>
                </div><img src="/images/Service-Image---Brand-and-Visual-Enhancement.webp" loading="lazy" sizes="100vw" srcset="/images/Service-Image---Brand-and-Visual-Enhancement-p-500.webp 500w, /images/Service-Image---Brand-and-Visual-Enhancement.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="9b8cd529-b6a2-c75a-e761-d633fd3f55b9" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Product Redesign</h6>
                  <div className="text-base">Simplify key flows and upgrade screens that drive conversion, trust, and repeat usage.</div>
                </div><img src="/images/Service-Image---Product-Redesign.webp" loading="lazy" sizes="100vw" srcset="/images/Service-Image---Product-Redesign-p-500.webp 500w, /images/Service-Image---Product-Redesign.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="9b8cd529-b6a2-c75a-e761-d633fd3f55c2" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Dashboard and Data UX</h6>
                  <div className="text-base">Turn complex data into decision-ready dashboards users can act on.</div>
                </div><img src="/images/Service-Image---Dashboard-and-Data-UX.webp" loading="lazy" sizes="100vw" srcset="/images/Service-Image---Dashboard-and-Data-UX-1-p-500.webp 500w, /images/Service-Image---Dashboard-and-Data-UX.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="9b8cd529-b6a2-c75a-e761-d633fd3f55ca" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Team Extension by Expert</h6>
                  <div className="text-base">Senior UX/UI support to keep shipping improvements every sprint.</div>
                </div><img src="/images/Image.webp" loading="lazy" sizes="100vw" srcset="/images/Image-p-500.webp 500w, /images/Image.webp 768w" alt="" className="service-image" />
              </div>
            </div>
          </div>
          <div className="w-layout-grid service-content-grid _3">
            <div id="w-node-cec532d8-e240-5ed5-5716-8a6559bfd7ab-a7701396" className="v-flex-default sapce">
              <div className="v-flex-xs">
                <div className="label-text">scale</div>
                <h4 className="text-4xl">Optimize Without Breaking UX. Reach More Users With Confidence.</h4>
                <div className="text-xl">Improve UX quality, increase conversion, and add capacity without slowing down.</div>
              </div>
            </div>
            <div id="w-node-cec532d8-e240-5ed5-5716-8a6559bfd7ba-a7701396" className="service-wrapper">
              <div data-w-id="cec532d8-e240-5ed5-5716-8a6559bfd7bb" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">UX Audit </h6>
                  <div className="text-base">Identify scale bottlenecks, friction, and drop-offs that limit growth.</div>
                </div><img src="/images/Service-Image---UX-Audit-and-Priorities.webp" loading="lazy" sizes="100vw" srcset="/images/Service-Image---UX-Audit-and-Priorities-p-500.webp 500w, /images/Service-Image---UX-Audit-and-Priorities.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="cec532d8-e240-5ed5-5716-8a6559bfd7c3" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Product Redesign</h6>
                  <div className="text-base">Upgrade core journeys so the experience stays fast, clear, and conversion-ready.</div>
                </div><img src="/images/Service-Image---Product-Redesign-1.webp" loading="lazy" sizes="100vw" srcset="/images/Service-Image---Product-Redesign-1-p-500.webp 500w, /images/Service-Image---Product-Redesign-1.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="cec532d8-e240-5ed5-5716-8a6559bfd7cb" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Team Extension</h6>
                  <div className="text-base">Add a dedicated senior team to keep shipping without hiring delays.</div>
                </div><img src="/images/Image-1.webp" loading="lazy" sizes="100vw" srcset="/images/Image-1-p-500.webp 500w, /images/Image-1.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="cec532d8-e240-5ed5-5716-8a6559bfd7d3" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Dashboard and Data UX</h6>
                  <div className="text-base">Go live fast with a clean build, responsive layout, and QA included.</div>
                </div><img src="/images/Service-Image---Dashboard-and-Data-UX.webp" loading="lazy" sizes="100vw" srcset="/images/Service-Image---Dashboard-and-Data-UX-1-p-500.webp 500w, /images/Service-Image---Dashboard-and-Data-UX.webp 768w" alt="" className="service-image" />
              </div>
              <div data-w-id="cec532d8-e240-5ed5-5716-8a6559bfd7db" className="service-content">
                <div className="bar-current"></div>
                <div className="v-flex-md">
                  <h6 className="text-2xl color-white">Website Redesign</h6>
                  <div className="text-base">Modernize your site to improve clarity, trust, and conversion as traffic grows.</div>
                </div><img className="service-image" src="/images/Service-Image---Website-Redesign.webp" alt="" style={{opacity: "0"}} sizes="100vw" data-w-id="cec532d8-e240-5ed5-5716-8a6559bfd7e2" loading="lazy" srcset="/images/Service-Image---Website-Redesign-p-500.webp 500w, /images/Service-Image---Website-Redesign.webp 768w" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="section-relative">
    <section className="section dark-color">
      <div className="w-layout-blockcontainer container p-48 w-container">
        <div className="v-flex-2xl">
          <div className="v-flex-lg center">
            <div data-w-id="5c94aaa1-54a4-1ad4-f92e-bb8dc37bcc81" style={{opacity: "0"}} className="label">
              <div className="dot"></div>
              <div className="label-text">Featured Cases</div>
            </div>
            <div className="word-animation">
              <h2 className="text-7xl white"><span className="split-text">Real Problems Solved, With Work That’s Been Shipped.</span></h2>
            </div>
            <div data-w-id="5c94aaa1-54a4-1ad4-f92e-bb8dc37bcc87" style={{opacity: "0"}} className="text-xl center">Explore shipped MVPs, product redesigns, dashboards, and Webflow builds, backed by real timelines and measurable results.</div>
          </div>
        </div>
      </div>
      <div className="fetaure-content">
        <div className="content-bg content-1">
          <div className="v-flex-default sapce">
            <div className="h-flex-sm">
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">ALIA POPUPS</span></div>
              </div>
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">3 MONTh</span></div>
              </div>
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">Shopify APps</span></div>
              </div>
            </div>
            <div className="h-flex-space bottom">
              <div className="v-flex-xl _w-50">
                <div className="v-flex-sm">
                  <h4 className="text-4xl _w-70"><span className="reguler">End-to-end Webflow redesign and full website build shipped in 3 months.</span></h4>
                  <div className="text-lg color-inverse">We delivered a full website redesign and Webflow build with a modular page system, animations, and complex pricing interactions, optimized for performance and maintainability while elevating credibility and visual polish.</div>
                </div>
                <a data-w-id="9548fe05-9cd8-eaeb-c4fd-e30beaddffb0" href="#" className="primary-button w-inline-block">
                  <div className="button-wrap">
                    <div className="h-flex-sm">
                      <div className="text-lg uppercase">view case study</div>
                    </div>
                  </div>
                  <div className="shadow"></div>
                </a>
              </div>
              <div className="v-flex-sm">
                <h4 className="text-4xl"><span className="reguler">80%</span></h4>
                <div className="line"></div>
                <div className="text-xl">Increase in Qualified Demos</div>
                <div className="line"></div>
                <div className="h-flex-xs center">
                  <div className="text-xs">Web Design</div>
                  <div className="dot-card"></div>
                  <div className="text-xs">Web Development</div>
                  <div className="dot-card"></div>
                  <div className="text-xs">Webflow</div>
                  <div className="dot-card"></div>
                  <div className="text-xs">Website UX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-bg content-2">
          <div className="v-flex-default sapce">
            <div className="h-flex-sm">
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">ALLEN AI</span></div>
              </div>
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">Website design</span></div>
              </div>
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">AI APPS DESIGN</span></div>
              </div>
            </div>
            <div className="h-flex-space bottom">
              <div className="v-flex-xl _w-50">
                <div className="v-flex-sm">
                  <h4 className="text-4xl _w-80"><span className="reguler">Fast, audit-led design shipped across multiple engagements for an AI research platform.</span></h4>
                  <div className="text-lg color-inverse">Deliver through audit-led UI/UX improvements and intuitive experiences with zero delivery delays, to achieve a reliable interfaces across both their website and AI product surfaces.</div>
                </div>
                <a data-w-id="9548fe05-9cd8-eaeb-c4fd-e30beaddffb0" href="#" className="primary-button w-inline-block">
                  <div className="button-wrap">
                    <div className="h-flex-sm">
                      <div className="text-lg uppercase">view case study</div>
                    </div>
                  </div>
                  <div className="shadow"></div>
                </a>
              </div>
              <div className="v-flex-sm">
                <h4 className="text-4xl"><span className="reguler">80%</span></h4>
                <div className="line"></div>
                <div className="text-xl">Increase in Qualified Demos</div>
                <div className="line"></div>
                <div className="h-flex-xs center">
                  <div className="text-xs">AI App Design</div>
                  <div className="dot-card"></div>
                  <div className="text-xs">Web Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-bg content-3">
          <div className="v-flex-default sapce">
            <div className="h-flex-sm">
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">FUNDFLOW</span></div>
              </div>
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">MVP WEBSITE</span></div>
              </div>
              <div className="lable-feature">
                <div className="text-xl label-text"><span className="white">FINTECH</span></div>
              </div>
            </div>
            <div className="h-flex-space bottom">
              <div className="v-flex-xl _w-50">
                <div className="v-flex-sm">
                  <h4 className="text-4xl _w-90"><span className="reguler">Supported a $1M+ funding raise with a conversion-ready MVP website and web app.</span></h4>
                  <div className="text-lg color-inverse">Designed and delivered an MVP website and web app focused on trust, clarity, and conversion, helping the product communicate value clearly to investors and early users at a critical stage to look credible fast ahead of fundraising.</div>
                </div>
                <a data-w-id="9548fe05-9cd8-eaeb-c4fd-e30beaddffb0" href="#" className="primary-button w-inline-block">
                  <div className="button-wrap">
                    <div className="h-flex-sm">
                      <div className="text-lg uppercase">view case study</div>
                    </div>
                  </div>
                  <div className="shadow"></div>
                </a>
              </div>
              <div className="v-flex-sm">
                <h4 className="text-4xl"><span className="reguler">80%</span></h4>
                <div className="line"></div>
                <div className="text-xl">Increase in Qualified Demos</div>
                <div className="line"></div>
                <div className="h-flex-xs center">
                  <div className="text-xs">MVP</div>
                  <div className="dot-card"></div>
                  <div className="text-xs">Web Design</div>
                  <div className="dot-card"></div>
                  <div className="text-xs">Web Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div data-w-id="d6f1ddfe-bc10-e975-9aef-a1d6cdf3cc1b" className="scroll-close-wrap _2">
    <div className="sticky-wrap _2">
      <section className="section dark">
        <div className="w-layout-blockcontainer container w-container">
          <div className="v-flex-2xl center _1">
            <div className="v-flex-lg center">
              <div data-w-id="43e66dd7-b975-d597-990e-e80119e7766d" style={{opacity: "0"}} className="label">
                <div className="dot"></div>
                <div className="label-text">Key Industries</div>
              </div>
              <div className="word-animation">
                <h2 className="text-7xl white"><span className="split-text">Built for Products Across Industries.</span></h2>
              </div>
              <div data-w-id="43e66dd7-b975-d597-990e-e80119e77673" style={{opacity: "0"}} className="text-xl center">Proven patterns. Real best practices. A pragmatic partner that helps you ship faster and scale with confidence.</div>
            </div>
            <div data-w-id="7b9ee98e-b34e-5437-a701-67fafc3aca49" style={{opacity: "0"}} className="toggle-button _2">
              <a data-w-id="7b9ee98e-b34e-5437-a701-67fafc3aca4a" href="#" className="button _1 w-inline-block">
                <div className="text-lg uppercase"><span data-w-id="7b9ee98e-b34e-5437-a701-67fafc3aca4c" className="color-white">Fintech</span></div>
              </a>
              <a data-w-id="7b9ee98e-b34e-5437-a701-67fafc3aca4e" href="#" className="button _2 w-inline-block">
                <div className="text-lg uppercase"><span data-w-id="7b9ee98e-b34e-5437-a701-67fafc3aca50" className="color-inverse">Saas</span></div>
              </a>
              <a data-w-id="7b9ee98e-b34e-5437-a701-67fafc3aca52" href="#" className="button _3 w-inline-block">
                <div className="text-lg uppercase"><span data-w-id="7b9ee98e-b34e-5437-a701-67fafc3aca54" className="color-inverse">Edtech</span></div>
              </a>
            </div>
            <div className="w-layout-grid key-industries-content">
              <div data-w-id="53dbb199-0df3-59c0-e24b-eefa3eeba001" style={{opacity: "0"}} className="key-content-wrap _1">
                <div className="w-layout-grid grid-2xl key-industries"><img src="/images/image.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" srcset="/images/image-p-500.png 500w, /images/image-p-800.png 800w, /images/image.png 966w" alt="" className="image-13" />
                  <div className="v-flex-lg align-left">
                    <h4 className="text-4xl _w-90"><span className="reguler">FinTech UX built for trust, clarity, and compliance.</span></h4>
                    <div className="w-layout-grid grid-2xl gap-md">
                      <div className="v-flex-sm">
                        <div className="text-xl semibold"><span className="white">Challenges:</span></div>
                        <div className="v-flex-lg">
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Users hesitate when trust signals are unclear</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Complex flows like KYC and transactions increase friction</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Dense dashboards overwhelm users</div>
                          </div>
                        </div>
                      </div>
                      <div className="v-flex-sm">
                        <div className="text-xl semibold"><span className="white">How we solve them:</span></div>
                        <div className="v-flex-lg">
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Trust-first UX with clear guidance and reassurance</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Simplified KYC and transaction flows without compromising compliance</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm">Decision-ready dashboards that make complex data easy to act on</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line"></div>
                    <a data-w-id="63bfe59a-4905-c297-53f8-a5498dbf960e" href="#" className="primary-button white-button w-inline-block">
                      <div className="shadow-2"></div>
                      <div className="secondary-button-wrap">
                        <div className="h-flex-sm">
                          <div className="text-lg blue-color"><span className="bold">Explore Work</span></div>
                          <div className="code-embed w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L13 18M19 12L13 6" stroke="#2853FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="key-content-wrap _2">
                <div className="w-layout-grid grid-2xl key-industries"><img src="/images/image-1.png" loading="lazy" sizes="100vw" srcset="/images/image-1-p-500.png 500w, /images/image-1-p-800.png 800w, /images/image-1.png 966w" alt="" className="image-13" />
                  <div className="v-flex-lg align-left">
                    <h4 className="text-4xl _w-90"><span className="reguler">Scalable SaaS That Converts and Retains.</span></h4>
                    <div className="w-layout-grid grid-2xl gap-md">
                      <div className="v-flex-sm">
                        <div className="text-xl semibold"><span className="white">Challenges:</span></div>
                        <div className="v-flex-lg">
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Users hesitate when trust signals are unclear</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Feature growth creates inconsistent UX</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Pricing and upgrade flows hurt conversion</div>
                          </div>
                        </div>
                      </div>
                      <div className="v-flex-sm">
                        <div className="text-xl semibold"><span className="white">How we solve them:</span></div>
                        <div className="v-flex-lg">
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Clear onboarding and guided flows that surface value fast</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Simplified KYC and transaction flows without compromising compliance</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm">Pricing and upgrade experiences designed to support conversion</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line"></div>
                    <a data-w-id="268a300f-844d-d91f-5980-8753818772a7" href="#" className="primary-button white-button w-inline-block">
                      <div className="shadow-2"></div>
                      <div className="secondary-button-wrap">
                        <div className="h-flex-sm">
                          <div className="text-lg blue-color"><span className="bold">Explore Work</span></div>
                          <div className="code-embed w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L13 18M19 12L13 6" stroke="#2853FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="key-content-wrap _3">
                <div className="w-layout-grid grid-2xl key-industries"><img src="/images/image-2.png" loading="lazy" sizes="100vw" srcset="/images/image-2-p-500.png 500w, /images/image-2-p-800.png 800w, /images/image-2.png 966w" alt="" className="image-13" />
                  <div className="v-flex-lg align-left">
                    <h4 className="text-4xl _w-90"><span className="reguler">Learning experiences designed for engagement and continuity.</span></h4>
                    <div className="w-layout-grid grid-2xl gap-md">
                      <div className="v-flex-sm">
                        <div className="text-xl semibold"><span className="white">Challenges:</span></div>
                        <div className="v-flex-lg">
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Learners drop off after early sessions</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Progress feels unclear and motivation fades</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#EF4444"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#721313"></stop>
                                    <stop offset="1" stop-color="#721313" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Multiple roles create complex UX requirements</div>
                          </div>
                        </div>
                      </div>
                      <div className="v-flex-sm">
                        <div className="text-xl semibold"><span className="white">How we solve them:</span></div>
                        <div className="v-flex-lg">
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Learning flows built around habit and engagement</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm regular">Clear progress, milestones, and feedback loops</div>
                          </div>
                          <div className="h-felx-md center">
                            <div className="checklist w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="8" fill="#2E8C2E"></rect>
                                <rect width="30" height="30" rx="8" fill="url(#paint0_radial)" fill-opacity="0.2"></rect>
                                <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="url(#paint1_radial)"></rect>
                                <path d="M9.75 15L13.5 18.75L21 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                  <radialgradient id="paint0_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(13.66 24.1) rotate(74.5) scale(18 21)">
                                    <stop stop-color="#155915"></stop>
                                    <stop offset="1" stop-color="#155915" stop-opacity="0"></stop>
                                  </radialgradient>
                                  <radialgradient id="paint1_radial" cx="0" cy="0" r="1" gradientunits="userSpaceOnUse" gradienttransform="translate(15 0) rotate(90) scale(30 17.8)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.04"></stop>
                                  </radialgradient>
                                </defs>
                              </svg></div>
                            <div className="text-sm">Role-based dashboards that stay usable as the platform grows</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line"></div>
                    <a data-w-id="468b3ed0-095d-e479-3658-86275603cadc" href="#" className="primary-button white-button w-inline-block">
                      <div className="shadow-2"></div>
                      <div className="secondary-button-wrap">
                        <div className="h-flex-sm">
                          <div className="text-lg blue-color"><span className="bold">Explore Work</span></div>
                          <div className="code-embed w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L13 18M19 12L13 6" stroke="#2853FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="sticky-wrap-2">
      <section className="section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="v-flex-lg center">
            <div data-w-id="facec014-06d0-30d4-94e7-654615fb8f8a" style={{opacity: "0"}} className="label">
              <div className="dot"></div>
              <div className="label-text black">OUR TEAMS</div>
            </div>
            <div className="word-animation">
              <h2 className="text-7xl _w-50"><span className="split-text">Meet the Team Behind Your Next Winning Launch.</span></h2>
            </div>
            <div data-w-id="facec014-06d0-30d4-94e7-654615fb8f90" style={{opacity: "0"}} className="text-3xl _w-80">Our team was built to be the pragmatic product design partner for founders who need to launch, grow, and scale without guesswork. Every project runs on clear ownership, lean collaboration, and build-ready UX/UI so you ship faster and scale with confidence. Let’s build it together!</div>
          </div>
        </div>
        <div className="carousel-content">
          <div className="carousel-wrap">
            <div className="img-wrap"><img src="/images/Copy-of-DSC00549-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/Copy-of-DSC00549-1-p-500.png 500w, /images/Copy-of-DSC00549-1.png 718w" alt="" className="carousel-image _1" /><img src="/images/DSC05452-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/DSC05452-1-p-500.png 500w, /images/DSC05452-1.png 718w" alt="" className="carousel-image _3" /><img src="/images/IMG_5494-1.png" loading="lazy" alt="" className="carousel-image _2" /><img src="/images/Copy-of-DSC00563-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/Copy-of-DSC00563-1-p-500.png 500w, /images/Copy-of-DSC00563-1.png 718w" alt="" className="carousel-image _1" /><img src="/images/IMG_9543-1.png" loading="lazy" alt="" className="carousel-image _2" /><img src="/images/IMG_2331-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/IMG_2331-1-p-500.png 500w, /images/IMG_2331-1.png 718w" alt="" className="carousel-image _1" /><img src="/images/Copy-of-DSC00538-1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 991px" srcset="/images/Copy-of-DSC00538-1-p-500.png 500w, /images/Copy-of-DSC00538-1-p-800.png 800w, /images/Copy-of-DSC00538-1.png 991w" alt="" className="carousel-image _1" /><img src="/images/P1011613-1.png" loading="lazy" alt="" className="carousel-image _2" /><img src="/images/IMG-20250430-WA0024-1.png" loading="lazy" sizes="(max-width: 587px) 100vw, 587px" srcset="/images/IMG-20250430-WA0024-1-p-500.png 500w, /images/IMG-20250430-WA0024-1.png 587w" alt="" className="carousel-image _1" /><img src="/images/DSC05458-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/DSC05458-1-p-500.png 500w, /images/DSC05458-1.png 718w" alt="" className="carousel-image _3" /><img src="/images/DSC09412-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/DSC09412-1-p-500.png 500w, /images/DSC09412-1.png 718w" alt="" className="carousel-image _1" /><img src="/images/DSC09426-1.png" loading="lazy" alt="" className="carousel-image _2" /><img src="/images/DSC05452-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/DSC05452-1-p-500.png 500w, /images/DSC05452-1.png 718w" alt="" className="carousel-image _3" /><img src="/images/IMG-20250430-WA0004-1.png" loading="lazy" alt="" className="carousel-image _2" /></div>
            <div className="img-wrap"><img src="/images/Copy-of-DSC00549-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/Copy-of-DSC00549-1-p-500.png 500w, /images/Copy-of-DSC00549-1.png 718w" alt="" className="carousel-image _1" /><img src="/images/DSC05452-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/DSC05452-1-p-500.png 500w, /images/DSC05452-1.png 718w" alt="" className="carousel-image _3" /><img src="/images/IMG_5494-1.png" loading="lazy" alt="" className="carousel-image _2" /><img src="/images/Copy-of-DSC00563-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/Copy-of-DSC00563-1-p-500.png 500w, /images/Copy-of-DSC00563-1.png 718w" alt="" className="carousel-image _1" /><img src="/images/IMG_9543-1.png" loading="lazy" alt="" className="carousel-image _2" /><img src="/images/IMG_2331-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/IMG_2331-1-p-500.png 500w, /images/IMG_2331-1.png 718w" alt="" className="carousel-image _1" /><img src="/images/Copy-of-DSC00538-1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 991px" srcset="/images/Copy-of-DSC00538-1-p-500.png 500w, /images/Copy-of-DSC00538-1-p-800.png 800w, /images/Copy-of-DSC00538-1.png 991w" alt="" className="carousel-image _1" /><img src="/images/P1011613-1.png" loading="lazy" alt="" className="carousel-image _2" /><img src="/images/IMG-20250430-WA0024-1.png" loading="lazy" sizes="(max-width: 587px) 100vw, 587px" srcset="/images/IMG-20250430-WA0024-1-p-500.png 500w, /images/IMG-20250430-WA0024-1.png 587w" alt="" className="carousel-image _1" /><img src="/images/DSC05458-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/DSC05458-1-p-500.png 500w, /images/DSC05458-1.png 718w" alt="" className="carousel-image _3" /><img src="/images/DSC09412-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/DSC09412-1-p-500.png 500w, /images/DSC09412-1.png 718w" alt="" className="carousel-image _1" /><img src="/images/DSC09426-1.png" loading="lazy" alt="" className="carousel-image _2" /><img src="/images/DSC05452-1.png" loading="lazy" sizes="(max-width: 718px) 100vw, 718px" srcset="/images/DSC05452-1-p-500.png 500w, /images/DSC05452-1.png 718w" alt="" className="carousel-image _3" /><img src="/images/IMG-20250430-WA0004-1.png" loading="lazy" alt="" className="carousel-image _2" /></div>
          </div>
          <div className="w-embed">
            <style dangerouslySetInnerHTML={{ __html: `
@keyframes scroll {
  from {
    transform: translateX(0%); 
  }
  to {
    transform: translateX(-50%); 
  }
}
.carousel-wrap {
  display: flex;
  width: max-content; 
  animation: scroll 80s linear infinite;
}
.carousel-wrap:hover {
  animation-play-state: paused;
}
` }} />
          </div>
        </div>
      </section>
    </div>
  </div>
  <section className="section sticky-bottom">
    <div className="w-layout-blockcontainer container w-container">
      <div className="w-layout-grid grid-2xl benefit-section">
        <div className="v-flex-default sapce">
          <div className="v-flex-lg align-left">
            <div data-w-id="0ec343c5-c1a8-b8b0-98c8-f1c26beb43fd" style={{opacity: "0"}} className="label border">
              <div className="dot"></div>
              <div className="label-text color-black">Why Choose Elux Space?</div>
            </div>
            <div className="word-animation">
              <h2 className="text-7xl _w-full"><span className="split-text">Your Launch and Growth Come First.</span></h2>
            </div>
          </div>
          <div className="cta-card">
            <div className="v-flex-xl align-left">
              <div className="v-flex-md">
                <div className="text-3xl white">We don’t want to be hired. We want to be responsible.</div>
                <div className="text-lg color-inverse">Think like owners. Act like partners. Deliver like operators.</div>
              </div>
              <a data-w-id="001c71eb-b423-381f-fa7f-33b8f4d8e2af" href="#" className="primary-button white-button w-inline-block">
                <div className="shadow-2"></div>
                <div className="secondary-button-wrap">
                  <div className="h-flex-sm">
                    <div className="text-lg blue-color"><span className="bold uppercase">Book a call</span></div>
                  </div>
                </div>
              </a>
            </div><img src="/images/Vector.png" loading="lazy" alt="" className="image-5" />
          </div>
        </div>
        <div className="w-layout-grid grid-1x6">
          <div className="benefit-card">
            <div className="v-flex-md">
              <div className="text-xl color-blue"><span className="medium uppercase">PRODUCT DESIGN THAT SHIPS</span></div>
              <div className="text-3xl black">Build-ready UX and UI, not concept decks.</div>
              <div className="text-lg color-neu-70">We design for real implementation, with responsive layouts and scalable components your team can actually build and maintain.</div>
            </div>
          </div>
          <div className="benefit-card">
            <div className="v-flex-md">
              <div className="text-xl color-blue"><span className="medium uppercase">PRAGMATIC, METRICS-FIRST THINKING</span></div>
              <div className="text-3xl black">Every decision ties back to <br />outcomes.</div>
              <div className="text-lg color-neu-70">We prioritize what moves the needle, focusing on activation, conversion, retention, and trust instead of subjective taste.</div>
            </div>
          </div>
          <div className="benefit-card">
            <div className="v-flex-md">
              <div className="text-xl color-blue"><span className="medium uppercase">NO BLACK BOX PROCESS</span></div>
              <div className="text-3xl black">Clear ownership. Visible progress. Daily updates.</div>
              <div className="text-lg color-neu-70">We keep the work transparent with clear scope, daily updates, and decisions explained so you always know what’s next.</div>
            </div>
          </div>
          <div className="benefit-card">
            <div className="v-flex-md">
              <div className="text-xl color-blue"><span className="medium uppercase">WORK DIRECTLY WITH THE DOERS</span></div>
              <div className="text-3xl black">Direct collaboration, no layers <br />in between.</div>
              <div className="text-lg color-neu-70">You collaborate with the people doing the work, so feedback stays tight, timelines stay realistic, and execution stays fast.</div>
            </div>
          </div>
          <div className="benefit-card">
            <div className="v-flex-md">
              <div className="text-xl color-blue"><span className="medium uppercase">LESS VENDOR, MORE VELOCITY</span></div>
              <div className="text-3xl black">We don’t want to be hired. We want to be responsible.</div>
              <div className="text-lg color-neu-70">Think like owners. Act like partners. Deliver like operators.</div>
            </div>
          </div>
          <div className="benefit-card">
            <div className="v-flex-md">
              <div className="text-xl color-blue"><span className="medium uppercase">CONSISTENCY THAT SCALES</span></div>
              <div className="text-3xl black">Systems that stay clean as <br />you grow.</div>
              <div className="text-lg color-neu-70">We build reusable patterns and components that keep the experience consistent as complexity increases.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section dark-2">
    <div className="w-layout-blockcontainer container z-1 w-container">
      <div className="v-flex-xxl">
        <div className="v-flex-lg center">
          <div data-w-id="3926ada2-b26e-31d7-8237-72cac327c471" style={{opacity: "0"}} className="label">
            <div className="dot"></div>
            <div className="label-text-2">TESTIMONIALS</div>
          </div>
          <div className="word-animation">
            <h2 className="text-7xl color-white"><span className="split-text">Rated 5.0 on Clutch, backed by real founder feedback.</span></h2>
          </div>
          <div data-w-id="3926ada2-b26e-31d7-8237-72cac327c477" style={{opacity: "0"}} className="text-xl center">Proven patterns. Real best practices. A pragmatic partner that helps you ship faster and scale with confidence.</div>
        </div>
        <div className="h-flex-lg-2 center"><img loading="lazy" src="/images/Clutch.png" alt="" className="image-6" /><img sizes="(max-width: 588px) 100vw, 588px" srcset="/images/Clutch-1-p-500.png 500w, /images/Clutch-1.png 588w" alt="" src="/images/Clutch-1.png" loading="lazy" className="image-6" /></div>
        <div className="testimonial-content">
          <div data-delay="4000" data-animation="slide" className="testimonial-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
            <div className="slider-mask w-slider-mask">
              <div data-w-id="af5c355f-3038-c417-3810-069aa0032213" className="testimonial-slider-content w-slide">
                <div className="ghost-slide">
                  <div id="player1" className="video-slider">
                    <div className="code-embed-4 w-embed w-iframe">
                      <div style={{position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden"}}>
                        <iframe id="yt-video-2" src="https://www.youtube.com/embed/QPCYF2qyR8w?autoplay=1&mute=1&loop=1&playlist=QPCYF2qyR8w&controls=0&playsinline=1&enablejsapi=1&vq=small&rel=0&modestbranding=1" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                      </div>
                    </div>
                  </div>
                  <div id="player1" className="ghost-slider-content">
                    <div className="code-embed-4 w-embed w-iframe">
                      <div style={{position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden"}}>
                        <iframe id="yt-video-3" src="https://www.youtube.com/embed/-1o-CQd2G1A?autoplay=1&mute=1&loop=1&playlist=-1o-CQd2G1A&controls=0&modestbranding=1&rel=0&playsinline=1" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="35d74b0b-a6c6-0596-2df1-50fcd71627a7" className="testimonial-slider-content w-slide">
                <div id="player1" className="video-slider">
                  <div className="code-embed-4 w-embed w-iframe">
                    <div style={{position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden"}}>
                      <iframe id="yt-video-1" src="https://www.youtube.com/embed/zhjJtXDguLA?autoplay=1&mute=1&loop=1&playlist=zhjJtXDguLA&controls=0&playsinline=1&modestbranding=1&rel=0" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} frameborder="0" allow="autoplay; fullscreen; encrypted-media" allowfullscreen=""></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="6fc613d9-eb22-a8d0-0014-483323f42dab" className="testimonial-slider-content w-slide">
                <div className="ghost-slide ghost-2">
                  <div id="player1" className="ghost-slider-content _2">
                    <div className="code-embed-4 w-embed w-iframe">
                      <div style={{position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden"}}>
                        <iframe id="yt-video-2" src="https://www.youtube.com/embed/QPCYF2qyR8w?autoplay=1&mute=1&loop=1&playlist=QPCYF2qyR8w&controls=0&playsinline=1&enablejsapi=1&vq=small&rel=0&modestbranding=1" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                      </div>
                    </div>
                  </div>
                  <div id="player1" className="video-slider">
                    <div className="code-embed-4 w-embed w-iframe">
                      <div style={{position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden"}}>
                        <iframe id="yt-video-3" src="https://www.youtube.com/embed/-1o-CQd2G1A?autoplay=1&mute=1&loop=1&playlist=-1o-CQd2G1A&controls=0&modestbranding=1&rel=0&playsinline=1" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="arrow left w-slider-arrow-left">
              <div className="code-embed w-embed"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66406 16H25.3307M6.66406 16L14.6641 24M6.66406 16L14.6641 8" stroke="url(#paint0_linear_14610_26250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6.66406 16H25.3307M6.66406 16L14.6641 24M6.66406 16L14.6641 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <defs>
                    <lineargradient id="paint0_linear_14610_26250" x1="15.9974" y1="8" x2="15.9974" y2="24" gradientunits="userSpaceOnUse">
                      <stop stop-color="#B8FF33"></stop>
                      <stop offset="1" stop-color="#DBFF99"></stop>
                    </lineargradient>
                  </defs>
                </svg></div>
            </div>
            <div className="arrow right w-slider-arrow-right">
              <div className="code-embed w-embed"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66406 16H25.3307M25.3307 16L17.3307 24M25.3307 16L17.3307 8" stroke="url(#paint0_linear_14610_26252)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6.66406 16H25.3307M25.3307 16L17.3307 24M25.3307 16L17.3307 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <defs>
                    <lineargradient id="paint0_linear_14610_26252" x1="15.9974" y1="8" x2="15.9974" y2="24" gradientunits="userSpaceOnUse">
                      <stop stop-color="#B8FF33"></stop>
                      <stop offset="1" stop-color="#DBFF99"></stop>
                    </lineargradient>
                  </defs>
                </svg></div>
            </div>
            <div className="slide-nav w-slider-nav"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonial-carousel">
      <div className="testimonial-carousel-wrap left">
        <div className="testimonial-carousel-content">
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/_Group_.png" loading="lazy" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">Wow, that is amazing! Thank you so much for this proactive initiative. I’ll review it in detail and get back to you with my feedback as soon as possible.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Niklas</span></div>
                <div className="text-sm regular">Founder of Samsa AI</div>
              </div>
            </div><img src="/images/Card-Image-1.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-1-p-500.png 500w, /images/Card-Image-1.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-212-Vectorized.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Hi Elux team. Thank you so much for your work thus far. Things are looking really nice. We complied some specific in this doc.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Yvonne Chou</span></div>
                <div className="text-sm regular">Chief of Staff Ai2</div>
              </div>
            </div><img src="/images/Card-Image-2.png" loading="lazy" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-213-Vectorized.png" loading="lazy" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">This style works, it makes it easier tointroduce new features in the future</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Taha Elraaid</span></div>
                <div className="text-sm regular">Founder of Founder and CEO Lamah Technologies</div>
              </div>
            </div><img src="/images/Card-Image-3.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-3-p-500.png 500w, /images/Card-Image-3.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-1-Vectorized.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">We&#x27;ve been working with Elux since 2022, and it&#x27;s been a great experience fromthe start. Their design work is consistently top-notch, and the team is always quick to respond and super easy to communicate with. They really get ourfeedback and always come through with great solutions. We&#x27;re definitely looking forward to continuing this partnership.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Gabriel Sirbu</span></div>
                <div className="text-sm regular">CoFounder of UI Core</div>
              </div>
            </div><img src="/images/Card-Image-4.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-4-p-500.png 500w, /images/Card-Image-4.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-212-Vectorized.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">OK designs look great! I have a meeting with the Molmo team later this afternoon. I will share it with the team then and follow up with any other changes after that.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">David Albright</span></div>
                <div className="text-sm regular">Head of Design and Comunications</div>
              </div>
            </div><img src="/images/Card-Image-5.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-5-p-500.png 500w, /images/Card-Image-5.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/tc-logo-red.svg.png" loading="lazy" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">Hi, thanks for all the deliverables. Everythinglooks good as discussed before. Thanks for thecollaboration! Wish you all the best!</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">PUI</span></div>
              </div>
            </div><img src="/images/Card-Image-10.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-10-p-500.png 500w, /images/Card-Image-10.png 720w" alt="" className="image-14" />
          </div>
        </div>
        <div className="testimonial-carousel-content _1">
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/_Group_.png" loading="lazy" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">Wow, that is amazing! Thank you so much for this proactive initiative. I’ll review it in detail and get back to you with my feedback as soon as possible.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Niklas</span></div>
                <div className="text-sm regular">Founder of Samsa AI</div>
              </div>
            </div><img src="/images/Card-Image-1.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-1-p-500.png 500w, /images/Card-Image-1.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-212-Vectorized.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Hi Elux team. Thank you so much for your work thus far. Things are looking really nice. We complied some specific in this doc.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Yvonne Chou</span></div>
                <div className="text-sm regular">Chief of Staff Ai2</div>
              </div>
            </div><img src="/images/Card-Image-2.png" loading="lazy" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-213-Vectorized.png" loading="lazy" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">This style works, it makes it easier tointroduce new features in the future</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Taha Elraaid</span></div>
                <div className="text-sm regular">Founder of Founder and CEO Lamah Technologies</div>
              </div>
            </div><img src="/images/Card-Image-3.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-3-p-500.png 500w, /images/Card-Image-3.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-1-Vectorized.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">We&#x27;ve been working with Elux since 2022, and it&#x27;s been a great experience fromthe start. Their design work is consistently top-notch, and the team is always quick to respond and super easy to communicate with. They really get ourfeedback and always come through with great solutions. We&#x27;re definitely looking forward to continuing this partnership.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Gabriel Sirbu</span></div>
                <div className="text-sm regular">CoFounder of UI Core</div>
              </div>
            </div><img src="/images/Card-Image-4.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-4-p-500.png 500w, /images/Card-Image-4.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-212-Vectorized.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">OK designs look great! I have a meeting with the Molmo team later this afternoon. I will share it with the team then and follow up with any other changes after that.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">David Albright</span></div>
                <div className="text-sm regular">Head of Design and Comunications</div>
              </div>
            </div><img src="/images/Card-Image-5.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-5-p-500.png 500w, /images/Card-Image-5.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/tc-logo-red.svg.png" loading="lazy" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">Hi, thanks for all the deliverables. Everythinglooks good as discussed before. Thanks for thecollaboration! Wish you all the best!</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">PUI</span></div>
              </div>
            </div><img src="/images/Card-Image-10.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-10-p-500.png 500w, /images/Card-Image-10.png 720w" alt="" className="image-14" />
          </div>
        </div>
      </div>
    </div><img sizes="(max-width: 2262px) 100vw, 2262px" srcset="/images/Rectangle-24-1-p-500.png 500w, /images/Rectangle-24-1-p-800.png 800w, /images/Rectangle-24-1-p-1080.png 1080w, /images/Rectangle-24-1-p-1600.png 1600w, /images/Rectangle-24-1-p-2000.png 2000w, /images/Rectangle-24-1.png 2262w" alt="" src="/images/Rectangle-24-1.png" loading="lazy" className="image-12" />
    <div className="testimonial-carousel _2">
      <div className="testimonial-carousel-wrap right">
        <div className="testimonial-carousel-code w-embed">
          <style dangerouslySetInnerHTML={{ __html: `
@keyframes scroll-carousel {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
.testimonial-carousel-wrap {
  display: flex;
  width: max-content;
}
.testimonial-carousel-wrap.left {
  animation: scroll-carousel 120s linear infinite;
}
.testimonial-carousel-wrap.right {
  animation: scroll-carousel 120s linear infinite reverse;
}
.testimonial-carousel-wrap:hover {
  animation-play-state: paused;
}
` }} />
        </div>
        <div className="testimonial-carousel-content">
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-214-Vectorized.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Great thanks I&#x27;ve carved out time to review and go over this tomorrow morning Cannot wait !!</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">TJ Kolesnik</span></div>
                <div className="text-sm regular">CEO and Founder Make Waves Agency</div>
              </div>
            </div><img src="/images/Card-Image-6.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-6-p-500.png 500w, /images/Card-Image-6.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/Logo.png" loading="lazy" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">I like both Hero sections, it&#x27;s really difficult to decide which one is better, I have to think about that. Really cool!</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Habil Masuri</span></div>
                <div className="text-sm regular">CEO of Digital Quartier</div>
              </div>
            </div><img src="/images/Card-Image.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-p-500.png 500w, /images/Card-Image.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-216.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Love this style</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Cory Gill</span></div>
                <div className="text-sm regular">CO Founder and CCO Alia</div>
              </div>
            </div><img src="/images/Card-Image-11.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-11-p-500.png 500w, /images/Card-Image-11.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/LOGO_1.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Hi, after checking the wireframes, awesome job to the Elux team! The wireframes have captured the core structure well, and we now have a very solid foundation to build on. To take this from &#x27;great&#x27; to &#x27;perfect,&#x27; here is some feedback to help us match Mellow Art&#x27;s unique vibe.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white">Sadam Ali</div>
                <div className="text-sm regular">Jen Clark Design</div>
              </div>
            </div><img src="/images/Card-Image_1.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image_1-p-500.png 500w, /images/Card-Image_1.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-9-1-1.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Great design arrangement, both versions confirmed after update.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Florian</span></div>
                <div className="text-sm regular">Frontside Media</div>
              </div>
            </div><img src="/images/Card-Image-1_1.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-1_1-p-500.png 500w, /images/Card-Image-1_1.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/S5ruRGq-1.png" loading="lazy" sizes="(max-width: 2054px) 100vw, 2054px" srcset="/images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-500.png 500w, /images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-800.png 800w, /images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-1080.png 1080w, /images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-1600.png 1600w, /images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-2000.png 2000w, /images/S5ruRGq-1.png 2054w" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">We engaged Elux for website design and development, and the experience was exceptional. Their work stood out for its aesthetic appeal and professional quality. The team understood our needs well and delivered everything as expected with great support.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Karthik Murali</span></div>
                <div className="text-sm regular">Marketing Manager at Resync</div>
              </div>
            </div><img src="/images/Card-Image-2_1.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-2_1-p-500.png 500w, /images/Card-Image-2_1.png 720w" alt="" className="image-14" />
          </div>
        </div>
        <div className="testimonial-carousel-content">
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-214-Vectorized.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Great thanks I&#x27;ve carved out time to review and go over this tomorrow morning Cannot wait !!</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">TJ Kolesnik</span></div>
                <div className="text-sm regular">CEO and Founder Make Waves Agency</div>
              </div>
            </div><img src="/images/Card-Image-6.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-6-p-500.png 500w, /images/Card-Image-6.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/Logo.png" loading="lazy" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">I like both Hero sections, it&#x27;s really difficult to decide which one is better, I have to think about that. Really cool!</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Habil Masuri</span></div>
                <div className="text-sm regular">CEO of Digital Quartier</div>
              </div>
            </div><img src="/images/Card-Image.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-p-500.png 500w, /images/Card-Image.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-216.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Love this style</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Cory Gill</span></div>
                <div className="text-sm regular">CO Founder and CCO Alia</div>
              </div>
            </div><img src="/images/Card-Image-11.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-11-p-500.png 500w, /images/Card-Image-11.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/LOGO_1.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Hi, after checking the wireframes, awesome job to the Elux team! The wireframes have captured the core structure well, and we now have a very solid foundation to build on. To take this from &#x27;great&#x27; to &#x27;perfect,&#x27; here is some feedback to help us match Mellow Art&#x27;s unique vibe.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white">Sadam Ali</div>
                <div className="text-sm regular">Jen Clark Design</div>
              </div>
            </div><img src="/images/Card-Image_1.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image_1-p-500.png 500w, /images/Card-Image_1.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/image-9-1-1.png" loading="lazy" alt="" className="logo-image _2" />
                <div className="text-sm testimonial-text">Great design arrangement, both versions confirmed after update.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Florian</span></div>
                <div className="text-sm regular">Frontside Media</div>
              </div>
            </div><img src="/images/Card-Image-1_1.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-1_1-p-500.png 500w, /images/Card-Image-1_1.png 720w" alt="" className="image-14" />
          </div>
          <div className="card-testimonial">
            <div className="v-flex-default sapce">
              <div className="v-flex-xl"><img src="/images/S5ruRGq-1.png" loading="lazy" sizes="(max-width: 2054px) 100vw, 2054px" srcset="/images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-500.png 500w, /images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-800.png 800w, /images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-1080.png 1080w, /images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-1600.png 1600w, /images/8fd427d5497433c1f4accd13f6c2f838_S5ruRGq-1-p-2000.png 2000w, /images/S5ruRGq-1.png 2054w" alt="" className="logo-image" />
                <div className="text-sm testimonial-text">We engaged Elux for website design and development, and the experience was exceptional. Their work stood out for its aesthetic appeal and professional quality. The team understood our needs well and delivered everything as expected with great support.</div>
              </div>
              <div className="v-flex-xs">
                <div className="text-xl white"><span className="semibold">Karthik Murali</span></div>
                <div className="text-sm regular">Marketing Manager at Resync</div>
              </div>
            </div><img src="/images/Card-Image-2_1.png" loading="lazy" sizes="(max-width: 720px) 100vw, 720px" srcset="/images/Card-Image-2_1-p-500.png 500w, /images/Card-Image-2_1.png 720w" alt="" className="image-14" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="section-relative">
    <section className="section dark-3">
      <div className="w-layout-blockcontainer container w-container">
        <div className="v-flex-2xl">
          <div className="v-flex-lg center">
            <div data-w-id="c481c5b0-ac42-cb87-6673-1094c6b513ee" style={{opacity: "0"}} className="label">
              <div className="dot"></div>
              <div className="label-text">Awwards</div>
            </div>
            <div className="word-animation">
              <h2 className="text-7xl _w-100"><span className="split-text white">Recognized for Design Excellence</span></h2>
            </div>
          </div>
          <div className="v-flex-xxs">
            <div className="awward-content">
              <div className="w-layout-grid grdi-3x1"><img src="/images/1.-Top-Clutch-Company-Indonesia-2022-Award-1.png" loading="lazy" alt="" className="image" />
                <div className="text-2xl white">Top Clutch Company Indonesia 2022 Award</div>
                <div className="text-xl">Nominated by Clutch as a top company in Indonesia, based on verified client reviews, delivery quality, and consistent product outcomes.</div>
              </div>
            </div>
            <div className="line"></div>
            <div className="awward-content">
              <div className="w-layout-grid grdi-3x1"><img src="/images/Image-Container.png" loading="lazy" alt="" className="image" />
                <div className="text-2xl white">DesignRush Design Awards Nominee 2025</div>
                <div className="text-xl">Nominated by DesignRush for design excellence in 2025, recognizing Elux Space’s work in delivering pragmatic, build-ready product design for SaaS, MVPs, and scalable digital products.</div>
              </div>
            </div>
            <div className="line"></div>
            <div className="awward-content">
              <div className="w-layout-grid grdi-3x1"><img src="/images/Image-Container-1.png" loading="lazy" alt="" className="image" />
                <div className="text-2xl white">Clutch Top Webflow Development Company Indonesia 2026</div>
                <div className="text-xl">Listed by Clutch as a top Webflow development partner for building fast, maintainable, and launch-ready Webflow products.</div>
              </div>
            </div>
            <div className="line"></div>
            <div className="awward-content">
              <div className="w-layout-grid grdi-3x1"><img src="/images/Image-Container-2.png" loading="lazy" alt="" className="image" />
                <div className="text-2xl white">Clutch Top Web Design Company Indonesia 2026</div>
                <div className="text-xl">Nominated by Clutch as a top company in Indonesia, based on verified client reviews, delivery quality, and consistent product outcomes.</div>
              </div>
            </div>
            <div className="line"></div>
            <div className="awward-content">
              <div className="w-layout-grid grdi-3x1"><img src="/images/Image-Container_1.png" loading="lazy" alt="" className="image" />
                <div className="text-2xl white">Dribbble Top Product Design Company Select</div>
                <div className="text-xl">Selected by Dribbble as a Top Product Design Company, recognizing excellence in crafting visually compelling, high-impact digital product experiences.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="section-relative">
    <section className="section dark-3">
      <div className="w-layout-blockcontainer container w-container">
        <div className="v-flex-2xl">
          <div className="v-flex-lg center">
            <div data-w-id="2753b1f8-1dd2-5770-99e8-54755ce9c19d" style={{opacity: "0"}} className="label">
              <div className="dot"></div>
              <div className="label-text">CALL TO ACTION</div>
            </div>
            <div className="word-animation">
              <h2 className="text-7xl _100"><span className="white split-text">Great Product dies <br />in bad interfaces and experiences</span></h2>
            </div>
            <div className="v-flex-2xl">
              <div className="text-xl">Let&#x27;s start to create and fix yours. Book a discovery call today!</div>
            </div>
          </div>
          <div className="w-layout-grid grid-2xl cta">
            <div id="w-node-ddb07485-992f-57db-bdfb-f0a71b2709ff-a7701396" className="v-flex-xl bootm">
              <div className="v-flex-lg">
                <div className="text-2xl white">Have a project to discuss?</div>
                <div className="cta-card-wrap">
                  <div className="h-flex-md"><img src="/images/Profile-Image.png" loading="lazy" alt="" className="image-10" />
                    <div className="v-flex-md _w-100">
                      <div className="v-flex-xxs">
                        <div className="text-2xl white">Kseniia Shalia</div>
                        <div className="text-lg color-inverse">Account Executive</div>
                      </div>
                      <div className="line"></div>
                      <div className="h-flex-xxs">
                        <div className="text-lg color-inverse">hello@elux.space</div>
                        <div className="code-embed-2 w-embed"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 5.25L5.25 12.75M12.75 5.25H6M12.75 5.25V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v-flex-lg">
                <div className="text-2xl white">Have a partnership in mind?</div>
                <div className="cta-card-wrap">
                  <div className="h-flex-md"><img src="/images/Profile-Image-1.png" loading="lazy" alt="" className="image-10" />
                    <div className="v-flex-md _w-100">
                      <div className="v-flex-xxs">
                        <div className="text-2xl white">Kseniia Shalia</div>
                        <div className="text-lg color-inverse">Account Executive</div>
                      </div>
                      <div className="line"></div>
                      <div className="h-flex-xxs">
                        <div className="text-lg color-inverse">hello@elux.space</div>
                        <div className="code-embed-2 w-embed"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 5.25L5.25 12.75M12.75 5.25H6M12.75 5.25V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-block w-form p-8">
              <form id="wf-form-" name="wf-form-" data-name="form" method="get" className="from-wrap" data-wf-page-id="6989896f1913ef45a7701396" data-wf-element-id="56f6f423-6941-da6e-9274-a24f0bfca33e">
                <div className="w-layout-grid grid-2x2 form-grid">
                  <div className="v-flex-md">
                    <div className="text-lg color-inverse">Your Name</div><input className="text-form w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter Your Name" type="text" id="name" />
                  </div>
                  <div className="v-flex-md">
                    <div className="text-lg color-inverse">Enter Your Email<br /></div><input className="text-form w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter Your Email" type="text" id="name" />
                  </div>
                  <div className="v-flex-md">
                    <div className="text-lg color-inverse">Your Company Name</div><input className="text-form w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter Your Company Name" type="text" id="name" />
                  </div>
                  <div className="v-flex-md">
                    <div className="text-lg color-inverse">Your Title</div><input className="text-form w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your Title in Company" type="text" id="name" />
                  </div>
                </div>
                <div className="v-flex-md pt-6">
                  <div className="text-lg color-inverse">Message</div><input className="text-form w-input" maxlength="256" name="name" data-name="Name" placeholder="Tell us about your project" type="text" id="name" />
                </div>
                <div className="v-flex-lg pt-6">
                  <div className="text-lg color-inverse">Project type</div>
                  <div className="grid"><label className="radio-field w-radio"><input type="radio" data-name="project type" id="UX" name="project-type" className="w-form-formradioinput hidden w-radio-input" value="UX" /><span className="text-xl white w-form-label" htmlFor="UX"><span className="medium">UI/UX Design</span></span></label><label className="radio-field w-radio"><input type="radio" data-name="project type" id="Product" name="project-type" className="w-form-formradioinput hidden w-radio-input" value="Product" /><span className="text-xl white w-form-label" htmlFor="Product">Product Design</span></label><label id="w-node-_444aee8f-6fad-e8ab-5a02-28ec465265d5-a7701396" className="radio-field _2 w-radio"><input type="radio" data-name="project type" id="web-dev" name="project-type" className="w-form-formradioinput hidden w-radio-input" value="web dev" /><span className="text-xl white w-form-label" htmlFor="web-dev">Webflow/Framer Development</span></label><label id="w-node-_679c6aac-4804-4a57-5510-9c2782702cee-a7701396" className="radio-field _3 w-radio"><input type="radio" data-name="project type" id="branding" name="project-type" className="w-form-formradioinput hidden w-radio-input" value="branding" /><span className="text-xl white w-form-label" htmlFor="branding">Branding Identity</span></label></div>
                </div>
                <div className="v-flex-lg pt-6">
                  <div className="text-lg color-inverse">Your Budget About This Project</div>
                  <div className="grid budget"><label className="radio-field w-radio"><input type="radio" data-name="Radio" id="radio" name="radio" className="w-form-formradioinput hidden w-radio-input" value="Radio" /><span className="text-xl white w-form-label" htmlFor="radio">&lt; $5,000</span></label><label className="radio-field budget w-radio"><input type="radio" data-name="Radio" id="radio" name="radio" className="w-form-formradioinput hidden w-radio-input" value="Radio" /><span className="text-xl white w-form-label" htmlFor="radio">$5-$10k</span></label><label className="radio-field budget w-radio"><input type="radio" data-name="Radio" id="radio" name="radio" className="w-form-formradioinput hidden w-radio-input" value="Radio" /><span className="text-xl white w-form-label" htmlFor="radio">$10-$20k</span></label><label className="radio-field budget w-radio"><input type="radio" data-name="Radio" id="radio" name="radio" className="w-form-formradioinput hidden w-radio-input" value="Radio" /><span className="text-xl white w-form-label" htmlFor="radio">$20-$50k</span></label><label className="radio-field budget w-radio"><input type="radio" data-name="Radio" id="radio" name="radio" className="w-form-formradioinput hidden w-radio-input" value="Radio" /><span className="text-xl white w-form-label" htmlFor="radio">$50k+</span></label></div>
                </div>
                <div className="v-flex-default left">
                  <div className="h-flex-lg pt-16"><input type="submit" data-wait="Please wait..." className="submit w-button" value="Submit" />
                    <div className="_w-50">
                      <div className="text-lg color-inverse">By clicking this button you accept Terms of Service and Privacy Policy.</div>
                    </div>
                  </div>
                </div>
                <div className="code-embed-3 w-embed">
                  <style dangerouslySetInnerHTML={{ __html: `
  .text-form {
    background-color: transparent !important;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff !important; 
    font-size: 18px; 
    font-weight: 600; 
    line-height: 1.5;
    /* Spacing */
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 0;
    outline: none;
    transition: all 0.3s ease;
  }
  .text-form::placeholder {
    color: #ffffff;
    opacity: 1; 
    font-size: clamp(14px, 2vw + 10px, 24px) !important;
  }
  .text-form:focus {
    border-bottom: 1px solid #3B6EF5; 
  }
` }} />
                  <style dangerouslySetInnerHTML={{ __html: `
  .radio-field:has(input[type="radio"]:checked) {
    background-color: #2853ff !important; 
    color: white !important; 
  }
` }} />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="section-relative border">
    <section className="section dark-3">
      <div className="w-layout-blockcontainer container w-container">
        <div className="v-flex-2xl">
          <div className="w-layout-grid grid-2xl footer">
            <div className="v-flex-md">
              <a href="#" className="brand footer w-nav-brand"><img src="/images/Frame-117.webp" loading="lazy" alt="" /></a>
              <div className="text-2xl color-neu-30">We help startups and companies design digital products people love and trust.</div>
            </div>
            <div className="w-layout-grid grid-1x3">
              <div className="v-flex-lg">
                <div className="text-2xl bold"><span className="white">Find Us On</span></div>
                <div className="v-flex-md">
                  <a href="#" className="text-lg footer-link">Clutch</a>
                  <a href="#" className="text-lg footer-link">Design Rush</a>
                  <a href="#" className="text-lg footer-link">Contra</a>
                </div>
              </div>
              <div className="v-flex-lg">
                <div className="text-2xl bold"><span className="white">Product</span></div>
                <div className="v-flex-md">
                  <a href="#" className="text-lg footer-link">UI8</a>
                  <a href="#" className="text-lg footer-link">Creative Market</a>
                  <a href="#" className="text-lg footer-link">Craftwork</a>
                  <a href="#" className="text-lg footer-link">Gumroad</a>
                </div>
              </div>
              <div className="v-flex-lg">
                <div className="text-2xl bold"><span className="white">Our Social</span></div>
                <div className="v-flex-md">
                  <a href="#" className="text-lg footer-link">Linkedin Page</a>
                  <a href="#" className="text-lg footer-link">Dribbble</a>
                  <a href="#" className="text-lg footer-link">Bahance</a>
                  <a href="#" className="text-lg footer-link">Instagram</a>
                  <a href="#" className="text-lg footer-link">Layers</a>
                </div>
              </div>
            </div>
          </div>
          <div className="v-flex-default">
            <div className="line"></div>
            <div className="h-flex-space pt-16">
              <a href="#" className="h-flex-xxs link w-inline-block">
                <div className="text-xl white">hello@elux.space</div>
                <div className="code-embed-2 w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L7 17M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg></div>
              </a>
              <div className="h-flex-xxs link">
                <div className="text-xl white">+62 851-5698-9279</div>
                <div className="code-embed-2 w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L7 17M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg></div>
              </div>
              <div className="h-flex-xxs">
                <div className="text-xl color-inverse">© 2025 eluxspace-All Rights Reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  
  
  
  <style dangerouslySetInnerHTML={{ __html: `

  .webflow-wrapper .grid-4x2 .card-content { position: relative; cursor: pointer; overflow: hidden; }
  .webflow-wrapper .grid-4x2 .card-wrap.inner {
    position: absolute !important;
    top: 0; left: 0; width: 100%; height: 100%;
    background-color: #2853ff !important;
    z-index: 10;
    display: flex !important;
    flex-direction: column;
    padding: 20px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(100%);
    transition: all 600ms cubic-bezier(.165, .840, .440, 1);
  }
  .webflow-wrapper .grid-4x2 .card-content:hover .card-wrap.inner {
    visibility: visible;
    opacity: 1;
    transform: translateY(0%);
    transition-delay: 200ms;
  }
  .webflow-wrapper .grid-4x2 .card-wrap.inner * { color: white !important; }
  .sticky-section.empty-space { display: none !important; }
  .scroll-close-wrap { min-height: auto !important; height: auto !important; padding-bottom: 0 !important; margin-bottom: 0 !important; }
  .sticky-wrap { position: relative !important; height: auto !important; }
  .sticky-section { position: relative !important; height: auto !important; }
  .service-wrapper { position: relative !important; }
  .service-image {
    position: absolute !important;
    top: 50% !important;
    right: -40% !important;
    transform: translateY(-50%) !important;
    width: 350px !important;
    height: auto !important;
    z-index: 100 !important;
    pointer-events: none !important;
    border-radius: 12px !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
    opacity: 0 !important;
    transition: opacity 0.3s ease !important;
  }
  .service-content:hover .service-image {
    opacity: 1 !important;
  }
  @media (max-width: 991px) {
    .service-image { display: none !important; }
  }
  .logo-image, .logo-image._2 {
    max-width: 120px !important;
    max-height: 40px !important;
    width: auto !important;
    height: auto !important;
    object-fit: contain !important;
    margin-bottom: 20px !important;
    display: block !important;
  }
  .section-relative .grid-2xl.cta {
    display: grid !important;
    grid-template-columns: 1fr 1.5fr !important;
    gap: 60px !important;
    align-items: start !important;
  }
  .section-relative .form-block {
    background-color: #1a1a1a !important;
    padding: 40px !important;
    border-radius: 24px !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
  }
  .section-relative .cta-card-wrap {
    background-color: #1a1a1a !important;
    padding: 24px !important;
    border-radius: 16px !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    margin-bottom: 20px !important;
  }
  .section-relative .form-grid {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 24px !important;
  }
  .section-relative .grid.budget, .section-relative .grid {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 12px !important;
  }
  .section-relative .radio-field {
    padding: 12px 20px !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 100px !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
  }
  .section-relative .submit {
    background-color: #2853ff !important;
    padding: 16px 40px !important;
    border-radius: 100px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    border: none !important;
  }



  .scroll-close-wrap:has(.sticky-wrap:empty), .scroll-close-wrap:not(:has(section)), .scroll-close-wrap:not(:has(div)) { display: none !important; }

  .webflow-wrapper .grid-4x2 .card-wrap.outer { transition: transform 0.4s ease; }
  .webflow-wrapper .grid-4x2 .card-content:hover .card-wrap.outer { transform: scale(1.05); }
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}
.lenis.lenis-smooth iframe {
  pointer-events: none;
}
` }} />
  
  
  
  
  
  <style dangerouslySetInnerHTML={{ __html: `
.word {
  transform-style: preserve-3d;
  display: inline-block;
  line-height: 1.2; /* Sesuaikan jarak antar baris */
}
` }} />

    </div>
  );
}
