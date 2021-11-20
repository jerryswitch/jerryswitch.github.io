'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f1e41ef27c2c176ebc9d0c034b260330",
"index.html": "70e138030ca80aa88894e3b3cb1b4250",
"/": "70e138030ca80aa88894e3b3cb1b4250",
"main.dart.js": "e6df990ea397a750fa061d379d742796",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b006d83b6041388e7697a5b2bec22b1",
".git/config": "a11576862a1631eef9d86c946ecb0ff6",
".git/objects/92/10e484f0904d1cfb1302e701ff6f06dcc0120f": "896dc52be7752c99580003a3afcf7a9f",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/99651d7ad5211bce2c831bb012ebaf439e19e8": "8fcd13026385f1dd6eb0d6cb8bf5e50b",
".git/objects/50/154c923c5e6fed94392f13f4e23c572ef57964": "3820b8b66adf5de1918825c7ada0ce64",
".git/objects/3b/7fd1f56c3b9d59258eab792023e31130f010e7": "52441c9efd0ac756ad0c4244fa7a0251",
".git/objects/9b/ca6bb012e62263b73e68f6c10cb8df422a0a89": "4bd9b62f0bb7dcead4800a05c8e51936",
".git/objects/04/c0c35e91bdb5f2c2474c54d4de9c2afffe1999": "aa0a2ee910caeac520b71b2dca2f4aed",
".git/objects/6a/5d5cffba7a3aa3c80c563ade0b360586488eb8": "bee93ca3cdf2f01ec50cdd08c6b02e2d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/e6ed39d72ecb8a04157004e8f25f038346c563": "0ea0f9815563172ec4a9f1d29d39f150",
".git/objects/32/81fa393d9d381aa63ee7659c623129f5f4498f": "75195cf9d6ae222324d0bf60b40fcd62",
".git/objects/69/a7a6234fb09cec69284044a161527862e67236": "02651a2b98488c036b4f1f9cc63724a7",
".git/objects/94/ec8bc83f47cad68fb322b7aa3ccf190771bd59": "ae7dcf005a3a0763ea8fba85dd2c61f5",
".git/objects/34/a72d9cefe692361887816b210a64e10ef1df98": "5fbeebc526ae6ec14ef16f282432fa55",
".git/objects/5f/459cd3a3f5f2c2cb2c5372126e07955dd9c60f": "ba8cdf087b055c17eda04bb6074b633a",
".git/objects/b5/9cd8f6d18f1f0d3e5e43a3796d569d9314ce4b": "153bf28bee71b5e66f03fdf72513c5ba",
".git/objects/b5/bb91a505b95683831a85dae2cc3ce655522e81": "5c170ee3eb08300d5cccd7c6293fd170",
".git/objects/d9/33447481cf8f06b5cb49ffcb6d432021ef9abf": "788d268eded895eb2c1694dabb3334e6",
".git/objects/ad/526e258bbf87d840e84713e6a2234cb413e4c8": "fe3052a65adac8ef518414080cc32cc6",
".git/objects/b3/3ee1be09479159331ff35e9263e5879743c645": "deaf2ff52b709f1b98468d542a56e22e",
".git/objects/b3/af06c10dffed22775ecce46e93afd1fce2e260": "95cfa1a040afa1bab6e54d7cec4bde31",
".git/objects/da/9ee16e13e56e6a21ac6cd3664173d49a8920a8": "20c0232a372540ab766b6ef10a15f428",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/61a53a3f622c9fc3454331ce73e153f1933c06": "1fabf8fc68df6c8d036a66c4ab4c2016",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/2a74e70891bbead8e2d41ef87d992fa15269c3": "a91036591d889705bf93dc32a04c075c",
".git/objects/f4/ddd10c5c08155d0ff07973caa86909bc8fc23d": "0c437ac0fb52b94b1cd6480e9ed53afe",
".git/objects/f3/132db71dd747d9b4353318715f40ceeb5a892c": "453f0031d73a528617ff0d3a3d14965f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/f77df5da603a972d6175551a710cfc956c77a6": "e43801cbde373ea0adf6129476382e0a",
".git/objects/e4/621c665a48d8d02ac0c04d6e6b98db64b306b1": "3607b2a8a825a8e925da8c05bd6093b6",
".git/objects/c8/8b61ab77a0fad6f8a7d4d49092ca7544e0adc0": "c3897d819a67224940384099a777da8d",
".git/objects/4e/8567e027062e1e7a6e98b51a33aa399c159e53": "eedb6639c3910643b9d89d27106543eb",
".git/objects/20/06701268abeb78454c5b530c94bb5f6ab32cae": "46bdb69ccdfcab99677c3b0cef992ac4",
".git/objects/16/0317aecd37f1fe83182ad0e40faae103a61198": "a5ae91f690279515a88bb5138d4f4b66",
".git/objects/89/dad0d9492b5b9ac6dec3de6dcfd9243397f5b4": "4db3ced690e5af2b7717c9d80cae0075",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/a5986387b2776c2762a6a59ca755271ea73ccc": "2bce3aec9cb5a25ef1ddec4df72a8b68",
".git/objects/86/5a5f4eb81285c7776dd3f1c5ea108e56663251": "9684068cdc34af54fe0ab60bc4e01d18",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/dbc3840f593696cf9a369054da7fbdf0d20423": "04c7d36c5854fd1528e1533c79c2c6e3",
".git/objects/00/f6bfa3060103be27a849caeeba11b5ab04df38": "5e9482ce623334050f80b18570f9eaa5",
".git/objects/5d/ed3972171b61847d7c53335d80fa9e05936149": "6013315f6535ee4ca6361a7832ede68d",
".git/objects/96/9310b7a2ae7254330aafe0c6b28f9e43bc9c78": "0d068a08cca06e9a2b4ced583ffec528",
".git/objects/3a/69f2a68714d8943b5ecbf8fac9993784fe816d": "0f573207314ea1f115a718bb61fb43ba",
".git/objects/98/bb8aa9cffb2c445fecf5b1bd6527f95727c675": "f7cb5b27d479873074d018f3a9cb46c4",
".git/objects/5e/4fd51ee3a25a99284a0ed2f03af92e9c960036": "bf4ba3e7f461ee4e0c3fcb30d9d74334",
".git/objects/0f/c842dd3b130a10dac2edf18cf51e7f7418c3a8": "e6635272efe95c26987c9374d19b23ee",
".git/objects/64/86cc001fa8ec388ddc10c4047a11dc401d495e": "6efa3e02092eeafabc1da27896886345",
".git/objects/64/42eedd42956a733058c1b4f481bdd7d9f6379f": "4ef7632948d64e264bcf323ebf0e753c",
".git/objects/90/8bd18bdcb34aabde05afa062d11b0980fc8103": "a54e01121d4be98950782d31ef4e34e2",
".git/objects/d4/64933f64c3b6199b5a2cf01b0467f1ce093a5b": "ec4f35dea47ab6c9ea126df2b8404f80",
".git/objects/a7/a146e0ddc7f9b17bc6b05c8587d621f0ea7cde": "f19aa5ea29199d831b14a816371b705e",
".git/objects/dc/81a7c771b1f66e8807f38c89833138590a1b16": "260cf5f985b98ae7cc886aff873ef8ca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/0684ecab6bb01248840637447a0758385d118e": "40b96f5959890471db4f79f79cdc19ec",
".git/objects/cc/d2914f05bf5d4a80366c30f58fe4efc005d8ff": "39b5d9c1086dec1a8dc364b23419144b",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/e9/3eac38026fe2fa1a5663ce1bdbe3307dd1c978": "a8781745ef26774d5ea37582e98f6480",
".git/objects/e0/60dc46f466b54cca75ce85aceca84110e40124": "b8d819e42c32b561a3ac389e2cf6a7b8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/48/55a60957dda115f2865f3785854a60fd17621e": "b324f47b1ff75bfe967b48e00a1b5383",
".git/objects/24/81dc18a78aa1c32118bf152682306d08f006f1": "6575999acbf7a3c7647f2e9dd18e96b0",
".git/objects/4f/190f54dbee7b40995911072e1fcc8b892c602a": "3335c6cc631690299cebd037cf00c62a",
".git/objects/8c/0348c08ac9af7c689552baf840aad9c99623f6": "6a6d24bdb8cad4d8adb854ef6ba720da",
".git/objects/85/a96a0e2572ea7f96aeccdd25086da6cd8cde52": "6b5e50b0858e8fa3fe58863df1917498",
".git/objects/49/9918f47ebf914527c2f7273ed86f91aed90513": "9f0f9ea3a8eab8ad8300c0a9f100f65c",
".git/objects/78/ca6cb379fcb5a82b36dafabfd4d05d1865545a": "62521ff7d537a3cd3e199fe2cdfa2aec",
".git/objects/8e/9dbc36c9720cdc0e9b996dc4ae2a73e4f3807c": "415ef40d820c2c051bb1b38f53d33e30",
".git/objects/25/95b2b36b55f7e9fe8f3a3fe2e99edad137db00": "5ea807fa480f09fbe59afe3e58f6cebc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d964fee2c3f63e7699a8d7fa9e990cb",
".git/logs/refs/heads/master": "0d964fee2c3f63e7699a8d7fa9e990cb",
".git/logs/refs/remotes/origin/master": "8958bc541eda2c7825103b7276d2631b",
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
".git/refs/heads/master": "cf7d0ddf13f6e289d15cf97b065b0ff7",
".git/refs/remotes/origin/master": "cf7d0ddf13f6e289d15cf97b065b0ff7",
".git/index": "645ee71fd31af2c06349fcb2aa2c0f8c",
".git/COMMIT_EDITMSG": "3f5ce8a8bda6114f35fee4903907b05c",
"assets/AssetManifest.json": "bed3a8e2f997e4e974679b975bb6bc01",
"assets/NOTICES": "5d38c7a26fdc81c211af9dc974b582ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/instructions/8.jpg": "7e987cbc0ebfee9e025995c34e0acd88",
"assets/assets/instructions/4.jpg": "f6ebbb3a62b1c30c35f924e7f87d3902",
"assets/assets/instructions/5.jpg": "aca9595cee9e0dbd40c848fdf459176a",
"assets/assets/instructions/7.jpg": "22f1b5f6f4a65663afa9ccd79c6a05f5",
"assets/assets/instructions/6.jpg": "399f170d4b9fb7bd4ef594647d7dd277",
"assets/assets/instructions/2.jpg": "f9e61a537de402866b5fc25fb6813978",
"assets/assets/instructions/3.jpg": "49b7fb2212b8ca6ce6fcb5e7ba6902cb",
"assets/assets/instructions/1.jpg": "fbd0176c5c38f6d6c058bb026e66b380",
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
