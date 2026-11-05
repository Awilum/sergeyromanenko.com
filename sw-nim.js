/**
 * Nim: Dedicated Offline Service Worker
 * 
 * Provides offline caching for the Nim game. Uses Cache-First strategy for
 * hashed static bundles and Stale-While-Revalidate for the game page.
 */

const CACHE_NAME = 'nim-cache-v1';

const PRECACHE_URLS = [
  '/games/nim/',
  '/site.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[Nim SW] Precache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME && name.startsWith('nim-')) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only handle GET requests within same origin for the game route and Astro bundles
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  const isGameRoute = url.pathname.includes('/games/nim');
  const isAstroBundle = url.pathname.startsWith('/_astro/');
  const isPublicAsset = url.pathname.endsWith('.svg') || url.pathname.endsWith('.png') || url.pathname.endsWith('.woff2');

  if (isGameRoute || isAstroBundle || isPublicAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Fetch update in background for HTML pages (stale-while-revalidate)
          if (isGameRoute && navigator.onLine) {
            fetch(event.request)
              .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                  caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                  });
                }
              })
              .catch(() => {});
          }
          return cachedResponse;
        }

        // Cache miss: fetch from network and cache
        return fetch(event.request)
          .then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });

            return networkResponse;
          })
          .catch(() => {
            // Offline fallback — show a basic error if truly unavailable
            return new Response('Offline', { status: 503 });
          });
      })
    );
  }
});
