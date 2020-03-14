'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "03f2e638a24fd8099a9739326d7a895b",
"/index.html": "241a7679e7cdf729bd484c93bbd8957f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/ManRope/manrope-regular.ttf": "f9736c4c8cf0ae20669d2e04eb20fab5",
"/assets/fonts/ManRope/manrope-medium.ttf": "6608eee398f08a422e0d2e59493863a3",
"/assets/fonts/ManRope/manrope-bold.ttf": "4e52de26746dee5a53685ed68bd914ef",
"/assets/fonts/ManRope/manrope-extrabold.ttf": "5c850b424c2b8c249f7049e2fdfc4e17",
"/assets/fonts/ManRope/manrope-light.ttf": "7d08b75b830d5c338c8c9cbbe244692c",
"/assets/fonts/ManRope/manrope-thin.ttf": "e1ce34fd5957e7560d690a68c5fa1cc2",
"/assets/FontManifest.json": "02a16443cd63015e372e461879a15733",
"/assets/LICENSE": "112d129cb98e701f3c11642e4afced98",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/AssetManifest.json": "55fcd5d3d4541f31ce0dd5c0551439ed"
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
