const CACHE = "ganpati-app-v1";

const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./ganpati.jpg",
  "./red-texture.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});