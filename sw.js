if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>n(e,r),a={module:{uri:r},exports:o,require:d};i[r]=Promise.all(s.map((e=>a[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"a39e13bc7d0a73b5c7fb9e42eba1a56e"},{url:"assets/index-BYozBG7z.css",revision:null},{url:"assets/index-CjF-DVtS.js",revision:null},{url:"favicon.ico",revision:"8a0156db2e0db7065cbc7f895f77c171"},{url:"favicon.png",revision:"22918c3c9ee5a9845590e3d909ab493c"},{url:"index.html",revision:"e2ca991ce4f3c85e6cceaecdf89d4551"},{url:"maskable-icon-512x512.png",revision:"4d1dc1044a0984b0fdbfcc7a0b4a64d0"},{url:"pwa-192x192.png",revision:"17b6ac139542ab5efb1207c6fa08147f"},{url:"pwa-512x512.png",revision:"ddba33dd77ee336b82293957bf639083"},{url:"pwa-64x64.png",revision:"94fa68b3c1203c6dfdaa447f1921638d"},{url:"manifest.webmanifest",revision:"2811fe809ba0344fbe510ddde5dcc591"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));