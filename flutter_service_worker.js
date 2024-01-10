'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9ad05029f04e43c435b437955dea49ae",
"index.html": "ae2eb6b12f3eb9cc79817a55843f7fc1",
"/": "ae2eb6b12f3eb9cc79817a55843f7fc1",
"main.dart.js": "0ac4f448c0a8656444d5f7795647e263",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bc5628bd42ded166a461a1cdbd86d010",
"assets/AssetManifest.json": "f7ac110b699ad7a288bdee19c9b47fe8",
"assets/NOTICES": "1185049701bcc298b11e1dbcc01392b1",
"assets/FontManifest.json": "d1e2a075cfd5250083c90b09fb508f36",
"assets/AssetManifest.bin.json": "dc530997736dbc4e8b76b8ae48f8df34",
"assets/packages/guru_widgets/assets/images/pic_success.png": "e8ef846c4fba0cc84649e735f35ddf34",
"assets/packages/guru_widgets/assets/images/ic_close.png": "88136c4a40f8b7f4c15497a93d1d6e27",
"assets/packages/guru_widgets/assets/lottie/loading.json": "60994ca49f556a6a9229fd9f4828a846",
"assets/packages/guru_widgets/assets/lottie/successful.json": "1f790a20ea8ca9334f884a3364b8fb59",
"assets/packages/guru_widgets/assets/lottie/fail.json": "5bf624adfdd1ab274272c8b947a1538b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/guru_popup/assets/images/iap_received.png": "06dabd7a1d4902fc568a916a869ba6b9",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "a33d4ada596927e1b8e90e4366b5bac5",
"assets/fonts/MaterialIcons-Regular.otf": "56c78a41b776aa0046ec3781ffa3e288",
"assets/assets/svg/ic_share.svg": "b7a08000a94d9453afef567b23f28fcc",
"assets/assets/svg/top_bar_plus.svg": "ee75b9d2fb68418de59689ff852bef7f",
"assets/assets/svg/ic_arrow_left.svg": "79057129576170f039bc7a40b75c79d6",
"assets/assets/svg/ic_arrow_right.svg": "1309dd3084d418772acc425ea2afc091",
"assets/assets/svg/ic_coin_animation.svg": "9f1c754d54d96522c5f932f8dcf30640",
"assets/assets/svg/ic_game_cleared_star.svg": "ecbc0a171df32456f55e2f99cd0b90e2",
"assets/assets/svg/ic_hint.svg": "d1f4f6881c65c147c31eaebe96e9303a",
"assets/assets/svg/ic_mistake.svg": "fed24ae895a482ddc4b26113bc80d369",
"assets/assets/svg/top_bar_coin.svg": "8d90bec4ee1cdbcf1dc3d6b9a0fc70a6",
"assets/assets/images/heart.png": "5a202b9e1837b8656a4fc1ed42f00e41",
"assets/assets/images/bg_game_cleared.png": "49a0f48b10874e304c0fe7ed8b164593",
"assets/assets/images/bg_game_cleared_bottom.png": "80626fec31d90195886c9bf61a931204",
"assets/assets/audio/solved_letter.wav": "9542319429ae7f9b046c70ffb2f3efd6",
"assets/assets/audio/collect_coin.wav": "f5dd071e5787d039ed41bf542092a282",
"assets/assets/audio/wrong_letter.wav": "bc8f582a5a3856d3f7f4e76f078346cc",
"assets/assets/lottie/congratulations.json": "8a7457b22388bd5317de8d4e7e09a233",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/EncodeSansExpanded-SemiBold.ttf": "cc9531559377886d0793d0039d786144",
"assets/assets/fonts/EncodeSansExpanded-Black.ttf": "6531624f7d5b8e0a24b643309d9b4e8d",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/EncodeSansExpanded-Regular.ttf": "7b36b6375528ed0c52aad1705c362aee",
"assets/assets/fonts/EncodeSansExpanded-Medium.ttf": "fc0a72d2e4d3d70c2749a4e1a101160e",
"assets/assets/fonts/EncodeSansExpanded-ExtraBold.ttf": "5e572bb399e1868b020234491477fa20",
"assets/assets/fonts/EncodeSansExpanded-Light.ttf": "b1c1626fbe6cb8fcaac6118e7fa59e07",
"assets/assets/fonts/EncodeSansExpanded-Thin.ttf": "140b1aba3dbe8e96f1b65929bbb22f2f",
"assets/assets/fonts/EncodeSansExpanded-Bold.ttf": "cbcf863faa649d9e258d464ca1a58708",
"assets/assets/data/levels.json": "51e132296602e6faac2f8435758fb9d2",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
