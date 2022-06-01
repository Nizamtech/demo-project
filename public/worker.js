self.addEventListener("install", (e) => {
  console.log("Service worker : install");
});

self.addEventListener("push", function (e) {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
  });
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
});

// self.addEventListener("push", function (e) {
//   var options = {
//     body: "This notification was generated from a push!",
//     icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR82rBvjs2SSYkIcozms5HfLTP-BMTVqW8NX-dy18jyvySkowIB82V0y8NZMVsFTnkgho&usqp=CAU",
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: "2",
//     },
//     actions: [
//       {
//         action: "explore",
//         title: "Explore this new world",
//         icon: "https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png",
//       },
//       {
//         action: "close",
//         title: "Close",
//         icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjX3S4CwCVU8hKvdy-9ZcfONiI_lW_JdpPaFN4brgb1O4wx5RO8A6EFabw1QVhk-GwCQ&usqp=CAU",
//       },
//     ],
//   };
//   e.waitUntil(self.registration.showNotification("Hello world!", options));
// });

try {
  const PRECACHE = "precache-v2";
  const RUNTIME = "runtime";

  // A list of local resources we always want to be cached.
  const PRECACHE_URLS = [
    "/",
    "user",
    "about",
    "contactForm",
    "app",

    // `any url`, // Alias for index.html
  ];

  // The install handler takes care of precaching the resources we always need.
  self.addEventListener("install", (event) => {
    console.log("installing sw");
    event.waitUntil(
      caches
        .open(PRECACHE)
        .then((cache) => cache.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    );
  });
  // The activate handler takes care of cleaning up old caches.
  self.addEventListener("activate", (event) => {
    const currentCaches = [PRECACHE, RUNTIME];
    console.log("activate cache");
    event.waitUntil(
      caches
        .keys()
        .then((cacheNames) => {
          return cacheNames.filter(
            (cacheName) => !currentCaches.includes(cacheName)
          );
        })
        .then((cachesToDelete) => {
          console.log("cache is deleting");
          return Promise.all(
            cachesToDelete.map((cacheToDelete) => {
              return caches.delete(cacheToDelete);
            })
          );
        })
        .then(() => self.clients.claim())
    );
  });

  // The fetch handler serves responses for same-      	origin resources from a cache.
  // If no response is found, it populates the runtime cache with the response
  // from the network before returning it to the page.
  self.addEventListener("fetch", (event) => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return caches.open(RUNTIME).then((cache) => {
            return fetch(event.request, {}).then((response) => {
              // Put a copy of the response in the runtime cache.
              return cache.put(event.request, response.clone()).then(() => {
                return response;
              });
            });
          });
        })
      );
    }
  });
} catch (e) {
  console.log(e);
}
