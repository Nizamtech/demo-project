if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2780d724"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/675-b1c0bfa226b363b1.js",revision:"b1c0bfa226b363b1"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-2727f92b6a285a16.js",revision:"2727f92b6a285a16"},{url:"/_next/static/chunks/pages/_app-06954eb47d25655e.js",revision:"06954eb47d25655e"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/about-2b7311e043b812fe.js",revision:"2b7311e043b812fe"},{url:"/_next/static/chunks/pages/app-136ba5576800809b.js",revision:"136ba5576800809b"},{url:"/_next/static/chunks/pages/contactForm-1b0d1f2a0cffdbd5.js",revision:"1b0d1f2a0cffdbd5"},{url:"/_next/static/chunks/pages/index-706a257d35b87f5a.js",revision:"706a257d35b87f5a"},{url:"/_next/static/chunks/pages/pic-68e354f5b9298536.js",revision:"68e354f5b9298536"},{url:"/_next/static/chunks/pages/user-5379a3102fcf497c.js",revision:"5379a3102fcf497c"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/adf6895ec356eb64.css",revision:"adf6895ec356eb64"},{url:"/_next/static/css/bc3c1b29c450fdfc.css",revision:"bc3c1b29c450fdfc"},{url:"/_next/static/media/tree.d8f428e8.jpg",revision:"80b28aef4cbedfb33310aeda3f529bce"},{url:"/_next/static/tALhwgEvpGq3CD__4E6Fp/_buildManifest.js",revision:"4a3d91de152c5c5c6afa7552659397b5"},{url:"/_next/static/tALhwgEvpGq3CD__4E6Fp/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/tALhwgEvpGq3CD__4E6Fp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/client.js",revision:"4d0945f7fd09b301ca2c5fce813d0af5"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"ec9b2394c5edd299dd6333fdd287aca0"},{url:"/icon-256x256.png",revision:"d653a446fc8dd0c8eab00bc8b66bd07d"},{url:"/icon-384x384.png",revision:"70c6b077e62278eda6a738595adb90d3"},{url:"/icon-512x512.png",revision:"19b6e007aac9c15384bd4d4be3817f98"},{url:"/manifest.json",revision:"3b5a86608cedee0d5834dad6a6d5fd79"},{url:"/maskable.png",revision:"ec9b2394c5edd299dd6333fdd287aca0"},{url:"/sw.js",revision:"9221b05597e2bf999c8a5d0399918d84"},{url:"/sw.js.map",revision:"062d5d5b74db7fc35a2fbeaffd46a934"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/worker.js",revision:"b40db6aaac23252708d929bdff421b4c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
