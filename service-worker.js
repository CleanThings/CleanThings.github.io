const wholeCache = [
  "/images/water.svg",
  "/images/leaf_and_phone.svg",
  "/images/landing-specious_mobile.jpg",
  "/images/landing-specious.jpg",
  "/images/landing-infected_mobile.jpg",
  "/images/landing-infected.jpg",
  "/images/landing-home_mobile.jpg",
  "/images/landing-home.jpg",
  "/images/landing-clean_mobile.jpg",
  "/images/landing-clean.jpg",
  "/images/certified.svg",
  "/images/bubble-specious.jpg",
  "/images/bubble-infected.jpg",
  "/images/bubble-clean.jpg",
  "/images/Specious_Things_badge(white).svg",
  "/images/Specious_Things_badge(black).svg",
  "/images/Infected_Things_badge(white).svg",
  "/images/Infected_Things_badge(black).svg",
  "/images/Clean_Things_badge(white).svg",
  "/images/Clean_Things_badge(black).svg",
  "/icons/Clean_Things.svg",
  "/icons/Clean_Things_logo(1024x1024).png",
  "/icons/Clean_Things_logo(512x512).png",
  "/icons/Clean_Things_logo.svg",
  "/icons/Clean_Things_selected.svg",
  "/icons/Home.svg",
  "/icons/Home_selected.svg",
  "/icons/Infected_Things_selected.svg",
  "/icons/Specious_Things.svg",
  "/icons/Specious_Things_selected.svg",
  "/icons/close.svg",
  "/icons/favicon.ico",
  "/icons/vertical_ellipsis.svg",
  "/fonts/SamsungSharpSans-Bold.woff",
  "/fonts/SamsungSharpSans-Bold.ttf",
  "/fonts/SamsungSharpSans-Regular.woff",
  "/fonts/SamsungSharpSans-Regular.ttf",
  "/fonts/samsungone-300-webfont.woff",
  "/fonts/samsungone-300-webfont.woff2",
  "/fonts/samsungone-600-webfont.woff",
  "/fonts/samsungone-600-webfont.woff2",
  "/fonts/samsungone-700-webfont.woff",
  "/fonts/samsungone-700-webfont.woff2",
  "/fonts/samsungone-800-webfont.woff",
  "/fonts/samsungone-800-webfont.woff2",
];

// Install the service worker
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("my-cache").then(function (cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/script.js",
                ...wholeCache
            ]);
        })
    );
});
// Serve content from cache if available
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
// Update the cache with new resources

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames
                    .filter(function (cacheName) {
                        return (
                            cacheName.startsWith("my-cache-") &&
                            cacheName != "my-cache-v1"
                        );
                    })
                    .map(function (cacheName) {
                        return caches.delete(cacheName);
                    })
            );
        })
    );
});

// Background Sync
self.addEventListener("sync", function(event) {
  if (event.tag === "sync-data") {
    event.waitUntil(syncData());
  }
});

function syncData() {
  return Promise.all([
    // add your sync tasks here
  ]);
}

// Periodic Sync
self.addEventListener("periodicsync", function(event) {
  if (event.tag === "sync-data") {
    event.waitUntil(syncData());
  }
});

self.addEventListener("activate", function(event) {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: "start_periodic_sync" });
  }
});

self.addEventListener("message", function(event) {
  if (event.data.type === "start_periodic_sync") {
    self.registration.periodicSync.register("sync-data", {
      minInterval: 24 * 60 * 60 * 1000 // set your interval time here
    });
  }
});
