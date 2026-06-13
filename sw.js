// The Vadi Bar — service worker
// Network-first so updates always come through when online; cache fallback
// keeps the app usable offline behind the bar.
const CACHE = 'vadi-bar-v1';
const ASSETS = ['./', './index.html', './db.js', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(cache){ return cache.addAll(ASSETS).catch(function(){}); }));
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  var url = new URL(e.request.url);
  // Only handle same-origin GETs; let Firebase, proxies, fonts pass through
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request).then(function(resp) {
      var copy = resp.clone();
      caches.open(CACHE).then(function(cache){ cache.put(e.request, copy).catch(function(){}); });
      return resp;
    }).catch(function() {
      return caches.match(e.request).then(function(hit) {
        return hit || caches.match('./index.html');
      });
    })
  );
});
