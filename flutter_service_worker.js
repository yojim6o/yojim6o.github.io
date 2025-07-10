'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5d461d3f114d71f066c6429e87a3c7fe",
"assets/AssetManifest.bin.json": "d396eede9670b1bacb30e52a84405944",
"assets/AssetManifest.json": "76b91542ef0f7bf4d016de12380e7353",
"assets/assets/fonts/BricolageGrotesque-Light.ttf": "a1f1439e622b6998c9b639bbf0a23f01",
"assets/assets/fonts/BricolageGrotesque-Medium.ttf": "1363130c7bdf956d164cb7e605619849",
"assets/assets/fonts/BricolageGrotesque-Regular.ttf": "6586800789b30b19bbaeb349ca5d240a",
"assets/assets/fonts/Inter_18pt-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/icons/css.svg": "8f7247295a43d53a6cb70a10f463b4de",
"assets/assets/icons/en.svg": "6dcadf6916764560c2f1fec586e2c1de",
"assets/assets/icons/es.svg": "e3ee044c3d0dd611613075a24e7639ae",
"assets/assets/icons/git.svg": "395d8c6917b47ac4dcde3600673f6519",
"assets/assets/icons/ic-code.svg": "4e4468f1285d5c6eeb722177a2695ac7",
"assets/assets/icons/ic-flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/icons/ic-github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/icons/ic-go.svg": "60d7bf410afea4fc1dd9e57f3c10b2d3",
"assets/assets/icons/ic-idea.svg": "2bf7870afd105ea50bad735482db94c2",
"assets/assets/icons/ic-java.svg": "2ae4636a86ab462bdd844e0bfd2835f5",
"assets/assets/icons/ic-js.svg": "c2df5ab5b57cc7d19b5e9461a7ebc08c",
"assets/assets/icons/ic-linkedin.svg": "05a86a0c4dfa89a3370294d478045963",
"assets/assets/icons/ic-mongo.svg": "cae33adfcd23c8c5002505082bf7661a",
"assets/assets/icons/ic-postman.svg": "707885a9e4632efc76397c2319ab8907",
"assets/assets/icons/ic-react.svg": "83d0d18b2db11b55bf2e54af7036f432",
"assets/assets/icons/ic-rust.svg": "3941d1edb5278d19651e20f99d553e81",
"assets/assets/icons/ic-spring.svg": "c254a24f66da4377a24e6477a6149fc6",
"assets/assets/icons/ic-sql.svg": "690b33c2180b2ad1905d893a8622ebbe",
"assets/assets/icons/ic-tailwind.svg": "a5d7e53c1485b55bbe286476c3b00959",
"assets/assets/images/back.jpg": "8dc4066a60579d11d84794e6c0781e18",
"assets/assets/images/flutter.png": "496166b5b52e02865c338bb52558e54e",
"assets/assets/images/me.jpg": "b41bd7cefe8f3ad17ba8b356e9f674b1",
"assets/assets/images/me2.jpg": "108bab7c47fdcebf0170a35746329952",
"assets/assets/images/portfolio.jpg": "1bef233a2a335fcf1d38ea6eef5252a0",
"assets/assets/images/score-share.jpg": "20f7ec5d8bae0a83d1263309eb81f429",
"assets/assets/images/weather-dark.jpg": "d7fb8a0da5e987931ee71d748eb8b43f",
"assets/assets/images/weather-light.jpg": "77202b62e0bf970e7f92ed3decb90b58",
"assets/FontManifest.json": "b32efa983353511bf590fba461f8f215",
"assets/fonts/MaterialIcons-Regular.otf": "91665b0371d6bc0ed98129d7593c73fe",
"assets/NOTICES": "d9ec9315a27926b66b0fcac4f64d5816",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c1c158b6a3be9832026070d8eb96e7c8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "9c9d29bcbf2147a8f5c685bd6aa8a3ba",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
