'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "1024.png": "9b2e5fae24278b49895e9189a12cd448",
"assets/AssetManifest.json": "99cd7ef8bacb77cdd5773af87ed9399e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/ball1.png": "a9489a5aa2ce8bcb1a2422c9c6118a34",
"assets/images/ball2.png": "2cda0c9117b9785b29ae4bc539648d0c",
"assets/images/ball3.png": "a10305beb4f0240279bdb813ebb4f3b9",
"assets/images/ball4.png": "8431a885c03a964673006118ce39b2eb",
"assets/images/ball5.png": "3d367f1f73ddb713bc2187930571156d",
"assets/LICENSE": "829acbc245bd56f693d004352b598b74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "bf93792ff4b267e78054397bbfd5ddac",
"icons/Icon-192.png": "e07240bc35411de51222398783d0887b",
"icons/Icon-512.png": "90aa0156a5f9f60c0c884b22b8fd0ab5",
"index.html": "88f3bc70693e18e5ff14fea298791d71",
"/": "88f3bc70693e18e5ff14fea298791d71",
"main.dart.js": "36ab3e1032449a4853e1dfb1a1bc4ed9",
"manifest.json": "228a811a158d3f2fd3dabf35333cd7b8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
