const CACHE = 'calcclinicas-v1';
const ASSETS = [
  
  'index.html',
  'styles.css',
  'script.js',
  'privacy.html',
  'disclaimer.html',
  'contacto.html',
  'calculadoras/cockcroft-gault.html',
  'calculadoras/cha2ds2-vasc.html',
  'calculadoras/has-bled.html',
  'calculadoras/fib-4.html',
  'assets/logo.svg',
  'assets/favicon.png',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
  }
});
