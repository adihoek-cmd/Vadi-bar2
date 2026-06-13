// The Vadi Bar — service worker
// IMPORTANT: index.html and db.js are ALWAYS fetched fresh from the network
// (never served stale from cache) so app-logic bugs can't get "stuck". Only
// static assets (icons, manifest) are cached, purely for offline launch.
const CACHE = 'vadi-bar-v3';
const STATIC_ASSETS = ['./manifest.json', './icon-192.png', './icon-512.png'];
// These must never be served from cache while online:
const ALWAYS_FRESH = ['index.html', 'db.js', '/'];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(cache){ return cache.addAll(STATIC_ASSETS).catch(function(){}); }));
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
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;

  var path = url.pathname.split('/').pop() || '/';
  var isAppCode = ALWAYS_FRESH.indexOf(path) !== -1 || url.pathname.endsWith('/');

  if (isAppCode) {
    // Network-only with offline fallback — never serve a cached old version while online
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match(e.request).then(function(hit){ return hit || caches.match('./index.html'); });
      })
    );
    return;
  }

  // Static assets: cache-first (fine to serve from cache, they rarely change)
  e.respondWith(
    caches.match(e.request).then(function(hit) {
      return hit || fetch(e.request).then(function(resp) {
        var copy = resp.clone();
        caches.open(CACHE).then(function(cache){ cache.put(e.request, copy).catch(function(){}); });
        return resp;
      });
    })
  );
});

// Allow the page to tell a waiting SW to activate immediately
self.addEventListener('message', function(e) {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
