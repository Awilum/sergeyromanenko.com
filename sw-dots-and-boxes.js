/**
 * Dots and Boxes: Dedicated Offline Service Worker
 *
 * Provides offline caching for the Dots and Boxes game.
 * Uses Cache-First strategy for hashed static bundles and Stale-While-Revalidate
 * for the game page.
 */

const CACHE_NAME = 'dots-and-boxes-cache-v1';

const PRECACHE_URLS = [
  '/games/dots-and-boxes/',
  '/site.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[Dots and Boxes SW] Precache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME && name.startsWith('dots-and-boxes-')) {
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

  const isGameRoute = url.pathname.includes('/games/dots-and-boxes');
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
            // If offline and requesting the game page, fallback to precached game HTML
            if (isGameRoute) {
              return caches.match('/games/dots-and-boxes/');
            }
          });
      })
    );
  }
});
