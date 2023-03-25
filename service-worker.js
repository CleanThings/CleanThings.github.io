// Install the service worker
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("my-cache").then(function (cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/script.js",
                "/path/to/image.png"
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
