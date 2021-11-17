'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f1e41ef27c2c176ebc9d0c034b260330",
"index.html": "ac19ab389a4554dfea11639ec8bbc583",
"/": "ac19ab389a4554dfea11639ec8bbc583",
"main.dart.js": "f80f585ee1704825e5e2507f6aebd58d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b006d83b6041388e7697a5b2bec22b1",
".git/config": "a11576862a1631eef9d86c946ecb0ff6",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/154c923c5e6fed94392f13f4e23c572ef57964": "3820b8b66adf5de1918825c7ada0ce64",
".git/objects/6a/5d5cffba7a3aa3c80c563ade0b360586488eb8": "bee93ca3cdf2f01ec50cdd08c6b02e2d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/a72d9cefe692361887816b210a64e10ef1df98": "5fbeebc526ae6ec14ef16f282432fa55",
".git/objects/5f/459cd3a3f5f2c2cb2c5372126e07955dd9c60f": "ba8cdf087b055c17eda04bb6074b633a",
".git/objects/b5/9cd8f6d18f1f0d3e5e43a3796d569d9314ce4b": "153bf28bee71b5e66f03fdf72513c5ba",
".git/objects/d9/33447481cf8f06b5cb49ffcb6d432021ef9abf": "788d268eded895eb2c1694dabb3334e6",
".git/objects/ad/526e258bbf87d840e84713e6a2234cb413e4c8": "fe3052a65adac8ef518414080cc32cc6",
".git/objects/b3/af06c10dffed22775ecce46e93afd1fce2e260": "95cfa1a040afa1bab6e54d7cec4bde31",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/2a74e70891bbead8e2d41ef87d992fa15269c3": "a91036591d889705bf93dc32a04c075c",
".git/objects/f4/ddd10c5c08155d0ff07973caa86909bc8fc23d": "0c437ac0fb52b94b1cd6480e9ed53afe",
".git/objects/f3/132db71dd747d9b4353318715f40ceeb5a892c": "453f0031d73a528617ff0d3a3d14965f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/f77df5da603a972d6175551a710cfc956c77a6": "e43801cbde373ea0adf6129476382e0a",
".git/objects/c8/8b61ab77a0fad6f8a7d4d49092ca7544e0adc0": "c3897d819a67224940384099a777da8d",
".git/objects/4e/8567e027062e1e7a6e98b51a33aa399c159e53": "eedb6639c3910643b9d89d27106543eb",
".git/objects/16/0317aecd37f1fe83182ad0e40faae103a61198": "a5ae91f690279515a88bb5138d4f4b66",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/a5986387b2776c2762a6a59ca755271ea73ccc": "2bce3aec9cb5a25ef1ddec4df72a8b68",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/dbc3840f593696cf9a369054da7fbdf0d20423": "04c7d36c5854fd1528e1533c79c2c6e3",
".git/objects/0f/c842dd3b130a10dac2edf18cf51e7f7418c3a8": "e6635272efe95c26987c9374d19b23ee",
".git/objects/90/8bd18bdcb34aabde05afa062d11b0980fc8103": "a54e01121d4be98950782d31ef4e34e2",
".git/objects/a7/a146e0ddc7f9b17bc6b05c8587d621f0ea7cde": "f19aa5ea29199d831b14a816371b705e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/d2914f05bf5d4a80366c30f58fe4efc005d8ff": "39b5d9c1086dec1a8dc364b23419144b",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/e9/3eac38026fe2fa1a5663ce1bdbe3307dd1c978": "a8781745ef26774d5ea37582e98f6480",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/4f/190f54dbee7b40995911072e1fcc8b892c602a": "3335c6cc631690299cebd037cf00c62a",
".git/objects/8c/0348c08ac9af7c689552baf840aad9c99623f6": "6a6d24bdb8cad4d8adb854ef6ba720da",
".git/objects/85/a96a0e2572ea7f96aeccdd25086da6cd8cde52": "6b5e50b0858e8fa3fe58863df1917498",
".git/objects/8e/9dbc36c9720cdc0e9b996dc4ae2a73e4f3807c": "415ef40d820c2c051bb1b38f53d33e30",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e7cc4dca0fc791327bee3cb864be26b",
".git/logs/refs/heads/master": "7e7cc4dca0fc791327bee3cb864be26b",
".git/logs/refs/remotes/origin/master": "dae2f7a2d43ff4321d397786350b6d4b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "7168c21d42dc0809f75348fe575fbf09",
".git/refs/remotes/origin/master": "7168c21d42dc0809f75348fe575fbf09",
".git/index": "c6257989ff1e7403a718b377b978ba38",
".git/COMMIT_EDITMSG": "0cc54dec15b788eb381b60e9c0d72a69",
"assets/AssetManifest.json": "6452aa3c98c20dd10a8dc00e4bd38e9b",
"assets/NOTICES": "5d38c7a26fdc81c211af9dc974b582ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/switch1.png": "5ae195a5b4c9b201b1e8d1f300d3d5ae",
"assets/assets/switch3.png": "c9f178844be533c55414a7dc5e6df223",
"assets/assets/switch2.png": "321f8b7dbe23b90fbe4b1292cb4f11f9",
"assets/assets/switch6.png": "bedd498489b74e6b84043f44b3fd7f64",
"assets/assets/switch5.png": "bb20c6e9868f0b1d63a2c90c2270b5ef",
"assets/assets/switch4.png": "dbf3fa8f54a99f61cc79625e6e2c95de",
"assets/assets/down.png": "c702243df31f1c8b168846eb5c4cc199",
"assets/assets/switch_main.png": "c667d5c6e34aeba770d7a66615908c93",
"assets/assets/4.png": "1dc1c38fee526928b74677e99e67c6fa",
"assets/assets/5.png": "253843fbde3afaf0bb1c08c0f98896e6",
"assets/assets/6.png": "7e4e1079bce59c8acbf18e3a696d9d9a",
"assets/assets/2.png": "2e21cb01e6a72288db9948462ed2b1d9",
"assets/assets/3.png": "c9c9a9cdd73795aacf7f79fa9947c4f6",
"assets/assets/1.png": "a77a79c541d4719247db48c504222a06"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
