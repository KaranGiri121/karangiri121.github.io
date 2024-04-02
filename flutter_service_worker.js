'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a49a1d9572ede62532fe46e9556bfb99",
"assets/AssetManifest.bin.json": "ae5bafe93fdb027afba94137d75ae4c4",
"assets/AssetManifest.json": "670c5123bdd66197e1e65de33196d15e",
"assets/assets/fonts/Super-Dessert.ttf": "e8754943009bc03ac0c0755fbf90ee83",
"assets/assets/images/android.png": "549d0830da4a9dc0e04608256eedb6f9",
"assets/assets/images/androidshowcase.riv": "f5fdcfb651624fb38e762636e5620622",
"assets/assets/images/c++.png": "e96a2abf6d41ccb42c4fe489178a9562",
"assets/assets/images/coder.riv": "416de5c2851b82b1e78ca06831290863",
"assets/assets/images/css.png": "ad3527a40c42001dd3fd6cbbe41f02e9",
"assets/assets/images/css_black.png": "2df0b4f8b05f1fbc831b94c8f4090924",
"assets/assets/images/firebase.png": "9fb349f63b69559fb8ba2bba4c2924db",
"assets/assets/images/flutter.png": "1d9c91247bd6ff591182d4b5500b066f",
"assets/assets/images/git.png": "5255afde9ba9f26aafad716445ec8d8c",
"assets/assets/images/github.png": "5aca2ae4eec215ae7a6edcbe164f1a45",
"assets/assets/images/html.png": "dcc8922b3c5cd7c46f7e2c6149fd6228",
"assets/assets/images/html_black.png": "c9dc17f8de4d36e82e379f1f823f1b33",
"assets/assets/images/idea.png": "1c0ccb1afed6b962656fdc3d65f008fd",
"assets/assets/images/jio.png": "ebb552dba59cb4d8f27bf71aa37d3a94",
"assets/assets/images/js.png": "ee3fd706250367822d0a5bbda3dd8b0d",
"assets/assets/images/js_black.png": "88e43eccf1241a9ec9be17719a187b45",
"assets/assets/images/mongodb.png": "1aa19a226b37d2aaa0d8ec0663189bd5",
"assets/assets/images/portfolio.jpg": "2ee3e58d75555be4b96277435b3666a6",
"assets/assets/images/python.png": "841d2d44139429f227b7ae24f24dfe24",
"assets/assets/images/sudoku.jpg": "a24466ea62275001c9db5f3df7b2602c",
"assets/assets/images/web_design.png": "40d2643d1230d4643f858b55c0763cf3",
"assets/assets/showcase/cartoon_page/anime.png": "3870e2589f5d47d4987142f8e14142f1",
"assets/assets/showcase/cartoon_show/ben-10-64.png": "848e92efb4c3171cb2a87677516408dd",
"assets/assets/showcase/cartoon_show/ben-10-68.png": "58d126b694fe697889042d78e89bc039",
"assets/assets/showcase/cartoon_show/ben-10-76.png": "16bfc3281a60e6039c8d91d4a923f78d",
"assets/assets/showcase/cartoon_show/card1.png": "988ec6d8c90bec5e298f7613f5719040",
"assets/assets/showcase/cartoon_show/card2.jpg": "8f0dd53ad88cd412f7144e9dfa3ae279",
"assets/assets/showcase/cartoon_show/doctor-strange-17.png": "fcb0398caa2fd01f01f1525f6ca5a417",
"assets/assets/showcase/cartoon_show/family-guy-17.png": "5245b4aad09feca2e91c23a7e5826f9e",
"assets/assets/showcase/cartoon_show/family_guy_logo.png": "ac58c986bef4198ecdcad6246e4bce6a",
"assets/assets/showcase/cartoon_show/Mr-Bean-7.png": "731ee1a5ef594b79145a029c9e6a6c39",
"assets/assets/showcase/cartoon_show/oggy-22.png": "775e23238afb6f99fcb9a75b6dfe5d9d",
"assets/assets/showcase/cartoon_show/oggy-25.png": "dc0e57ca7a67f3a780b8198173cd3816",
"assets/assets/showcase/cartoon_show/pngwing.com.png": "04c9abd37126de0e5bf5e672546eb09a",
"assets/assets/showcase/cartoon_show/Saitama-19.png": "d0130695e010e2a1302d2d1d94e8dc35",
"assets/assets/showcase/cartoon_show/showcaseCartoon.png": "bf7f8a265abd1de9842e8a901969e0b1",
"assets/assets/showcase/cartoon_show/spongebob-79.png": "2644fa83a35220164c6e2d8258fd02dc",
"assets/assets/showcase/cartoon_show/spongebob-81.png": "a98c78da4513ed80e216f48f9a75cc80",
"assets/assets/showcase/cartoon_show/spongebob-89.png": "f91e38c3053108d72b874bfdf25a2469",
"assets/assets/showcase/cartoon_show/spongebob-91.png": "acf8e56794dbd404ce2688a366366af1",
"assets/assets/showcase/cartoon_show/teen-titans-10.png": "cc1073481fe56b2fdbeb95b7df0495a6",
"assets/FontManifest.json": "4db6064c2dd1ce0eacdcbafb96049243",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "be32d0c75569981f3d3f5df4476dde2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d74351d74c339fb88f10c11132db7edc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "649f49f8387d2015f59246963bf6f9bc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4f55fa876233bfea4a2a2fa077f29196",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "def17e1899cb562699be48e94c7171d7",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "8aa3c7f53bf5787f339cc5145b48dd9c",
"icons/Icon-512.png": "1313bdd47782799ddd1f97fbc543239c",
"index.html": "cc97cd63792a4e7e02a190aef5ee695c",
"/": "cc97cd63792a4e7e02a190aef5ee695c",
"main.dart.js": "4026ff8b092ae4f31c96bb48b35608ce",
"manifest.json": "f429d4f9f9534798cdcb605a13b3bad6",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
