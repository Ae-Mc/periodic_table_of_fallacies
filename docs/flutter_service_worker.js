'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "40610eeb6bb8b39455ee10133fbad55c",
"assets/AssetManifest.bin.json": "362f9f0592b629298b1817f33a9bd9bd",
"assets/AssetManifest.json": "c32bb2996896de8d714ca3f9b6cb8469",
"assets/assets/Ad%2520Hominem/1.jpg": "dd6dc191edf28ab84aa51ca702516820",
"assets/assets/Ad%2520Hominem/2.jpg": "77f31716c134b7de4bcf91290b9aa901",
"assets/assets/Ad%2520Hominem/3.jpg": "bdd6c33cf6040abeb4d6be3ad3923116",
"assets/assets/Ad%2520Hominem/4.jpg": "381c589ecd3f48635fabcf047c99f160",
"assets/assets/Ad%2520Hominem/5.jpg": "34f8a06d3db8da9907818a6456dc6ccc",
"assets/assets/Ad%2520Ignorantiam/1.jpg": "b7e0fc0e64df62c5a993597d2816f5dd",
"assets/assets/Ad%2520Ignorantiam/2.jpg": "60d7039aaf7c849922c63baa86983d03",
"assets/assets/Ad%2520Ignorantiam/3.jpg": "8cf38abe674861e7b6be9f1a9aeb98f6",
"assets/assets/Ad%2520Ignorantiam/4.jpg": "44e5f1760ba6801f9f8757886d536e83",
"assets/assets/Ad%2520Ignorantiam/5.jpg": "89022ccb2bfb54acba9b27937680448a",
"assets/assets/Ad%2520Ignorantiam/6.jpg": "e479e98c79560d4b3cdaf987894f3fc9",
"assets/assets/Ad%2520Lapidem/1.jpg": "a092c9d3916e4fad4992ee80ec32d47d",
"assets/assets/Ad%2520Lapidem/2.jpg": "6595d45a77a85a7cad95d3042be6ffc4",
"assets/assets/Ad%2520Lapidem/3.jpg": "b91bef87b713b49e9440b84f7920642f",
"assets/assets/Ad%2520Lapidem/4.jpg": "a49538ceb18bcef0d70b66c298e1939a",
"assets/assets/Ad%2520Lapidem/5.jpg": "e4708fdbc0f80346bc8caa6720052d04",
"assets/assets/Ad%2520Lapidem/6.jpg": "960de5ab82e2eb07362918aa27a88bc9",
"assets/assets/Ad%2520Populum/1.jpg": "766219fb1485e9c5faad068bb2a4e171",
"assets/assets/Ad%2520Populum/2.jpg": "d8a8af54cfe1696b8fa9ed195c2ef663",
"assets/assets/Ad%2520Populum/3.jpg": "8e45b157bf1be52c1766c23cacc1cb72",
"assets/assets/Ad%2520Populum/4.jpg": "21887882fe4bb90ab94dfa86453e6bc6",
"assets/assets/Ad%2520Populum/5.jpg": "d6dc93cb476084a9a71772b971f20972",
"assets/assets/Ad%2520Populum/6.jpg": "5ca0f6a846ddc51b2460d966b1e277ef",
"assets/assets/Ad%2520Populum/7.jpg": "be9d1039a21a35edf57c44bd783cf2a9",
"assets/assets/Ad%2520Verecundiam/1.jpg": "5ca6d17002dc7eedbcc9e5a4d2c6da6e",
"assets/assets/Ad%2520Verecundiam/2.jpg": "2ff7c76e1f1ce18e385484a2a76134fe",
"assets/assets/Ad%2520Verecundiam/3.jpg": "dc72fb7d73968b5998025ba6bb97590c",
"assets/assets/Ad%2520Verecundiam/4.jpg": "ab1dc984c5117d385dbe9a2acc22d889",
"assets/assets/Ad%2520Verecundiam/5.jpg": "80703790613f77467fe41630cce58f22",
"assets/assets/Ad%2520Verecundiam/6.jpg": "643bdafdba37b83cb65347e634603705",
"assets/assets/Affirming%2520the%2520Consequent/1.jpg": "36542430e4cf3cd1f59280c8e0ffdbd6",
"assets/assets/Affirming%2520the%2520Consequent/2.jpg": "0eb0eb6ee268d298e283b03dbc7da24f",
"assets/assets/Affirming%2520the%2520Consequent/3.jpg": "1e50b45b456c0056235f871d342d7e96",
"assets/assets/Affirming%2520the%2520Consequent/4.jpg": "ac57924f2510deb5fa2002357c8622ea",
"assets/assets/Affirming%2520the%2520Consequent/5.jpg": "610d19f799a1eb14dceae4c6fc971fbb",
"assets/assets/Anecdotal%2520Evidence/1.jpg": "cc8c632bad8df45b943bd9b5085ed05f",
"assets/assets/Anecdotal%2520Evidence/2.jpg": "2a41b5cffa9204cd9e790e7f7f76aa78",
"assets/assets/Anecdotal%2520Evidence/3.jpg": "5e8583f0b65634bffed3ab7d091dda0f",
"assets/assets/Anecdotal%2520Evidence/4.jpg": "4e043133dc619c18033bda2eef630552",
"assets/assets/Anecdotal%2520Evidence/5.jpg": "bf7799209c3e8ef16b7d8d9114b61969",
"assets/assets/Anecdotal%2520Evidence/6.jpg": "0bf96f7107dc3ae989529ec9e86345fe",
"assets/assets/Appeal%2520to%2520possibility/1.jpg": "fb85aa9f503be7d3394ff127657590e5",
"assets/assets/Appeal%2520to%2520possibility/2.jpg": "5f750a5af99a40c4b9e85ad069ec295e",
"assets/assets/Appeal%2520to%2520possibility/3.jpg": "5d7c3da422964d73af2eae52dd6268f5",
"assets/assets/Appeal%2520to%2520possibility/4.jpg": "81e748aa4a9787a43c5367e063cb8b65",
"assets/assets/Appeal%2520to%2520possibility/5.jpg": "761c3f3306e2668b32e2f1e9efb2262c",
"assets/assets/Appeal%2520to%2520possibility/6.jpg": "6c56442437b8fb0b36b2ec37a84b139c",
"assets/assets/Argumentum%2520Ad%2520Antiquitatem/1.jpg": "c0adcb5c628e4fe5d1ffbf5cfb7564cd",
"assets/assets/Argumentum%2520Ad%2520Antiquitatem/2.jpg": "2fbeebc1b3aec2f6513d9a2b71ff6bf1",
"assets/assets/Argumentum%2520Ad%2520Antiquitatem/3.jpg": "f9441f0720c76837211966a880b8258c",
"assets/assets/Argumentum%2520Ad%2520Antiquitatem/4.jpg": "17e77aa4a50df376c4ca6f3b2b189bbd",
"assets/assets/Argumentum%2520Ad%2520Antiquitatem/5.jpg": "ced05f6c7c1175af0f97b8fe342fc7bb",
"assets/assets/Argumentum%2520Ad%2520Antiquitatem/6.jpg": "64fd850507eccd24789e59b22f585b87",
"assets/assets/Argumentum%2520Ad%2520Antiquitatem/7.jpg": "8210f8691b1855680e7b62118a1b2cd8",
"assets/assets/Association%2520Fallacy/1.jpg": "af6a5bffd67ed43c8980aabc309b2231",
"assets/assets/Association%2520Fallacy/2.jpg": "e5d88c750a21a43759f24277d48bf7cc",
"assets/assets/Association%2520Fallacy/3.jpg": "0d2527288976a494bfda33808d58f4b7",
"assets/assets/Association%2520Fallacy/4.jpg": "6d61d0e6f35921e9036a7d5dae69daa5",
"assets/assets/Association%2520Fallacy/5.jpg": "40cd7997e656088748b90fae424acc87",
"assets/assets/Association%2520Fallacy/6.jpg": "0f6a4de83dd0b304dd006d7acc30a9b9",
"assets/assets/Begging%2520the%2520Question/1.jpg": "ee1487f6293d03613a51519b76465cce",
"assets/assets/Begging%2520the%2520Question/2.jpg": "54edc66297a238355d14af8f394cbe3b",
"assets/assets/Begging%2520the%2520Question/3.jpg": "f3827655733f337c75a359dfa176ff68",
"assets/assets/Begging%2520the%2520Question/4.jpg": "eef43fdabad10c7133a34d57f7a90ec0",
"assets/assets/Begging%2520the%2520Question/5.jpg": "19021fa3cd5492717b5fb26869b099d6",
"assets/assets/Begging%2520the%2520Question/6.jpg": "ad73faaef7531132b2cdea2e39c5ec87",
"assets/assets/Begging%2520the%2520Question/7.jpg": "0884baa7cb27fa16ce6aae43bb97efcc",
"assets/assets/Counterfactual%2520Fallacy/1.jpg": "04835d955b2815812c17bdb21eac89db",
"assets/assets/Counterfactual%2520Fallacy/2.jpg": "80e09dcf2fbe33949f4fae9b67920572",
"assets/assets/Counterfactual%2520Fallacy/3.jpg": "0643383bf07c313582e184e396774570",
"assets/assets/Counterfactual%2520Fallacy/4.jpg": "1231bcf79a1938ff133f34bdcc12c062",
"assets/assets/Counterfactual%2520Fallacy/5.jpg": "ba03a4719dd31f3783c201b821694389",
"assets/assets/Counterfactual%2520Fallacy/6.jpg": "856ba2124b02aec9e92c5cdec6e7dc27",
"assets/assets/Denying%2520the%2520Antecedent/1.jpg": "21e18a64530ac332338d0b6d25e0d3c5",
"assets/assets/Denying%2520the%2520Antecedent/2.jpg": "65b86c1e711a048372a3d3ac57621654",
"assets/assets/Denying%2520the%2520Antecedent/3.jpg": "d32b7227f8001059004ece4916cffe47",
"assets/assets/Denying%2520the%2520Antecedent/4.jpg": "72c8c5495298e0f5f131ccaa30576b48",
"assets/assets/Denying%2520the%2520Antecedent/5.jpg": "95fea53cf610bec5363bb06365d39006",
"assets/assets/False%2520Analogy/1.jpg": "3fb5f0b97209d0129a868c8860405af4",
"assets/assets/False%2520Analogy/2.jpg": "576fd9825a51fd33862cd716d854a892",
"assets/assets/False%2520Analogy/3.jpg": "1f23f59d499b2168f2ee58e1841ed98a",
"assets/assets/False%2520Analogy/4.jpg": "a8163f5e50d6d36b371f71989495c3d0",
"assets/assets/False%2520Analogy/5.jpg": "2c0931609ecbbd118ca6f6c743fdb483",
"assets/assets/False%2520Dilemma/1.jpg": "41aa73a26c5416c8631447f962b6b0c4",
"assets/assets/False%2520Dilemma/2.jpg": "377bc44ef990313a9f37ac91e428bb4a",
"assets/assets/False%2520Dilemma/3.jpg": "1451cb378d3a6dde2e87da74741964bd",
"assets/assets/False%2520Dilemma/4.jpg": "93ddef046bb6e79d9f4fcde2b13bf7b3",
"assets/assets/False%2520Dilemma/5.jpg": "680864a067c874675516bb62f2b3eeee",
"assets/assets/Middle%2520Ground%2520Fallacy/1.jpg": "64b5b5a2368d901aa146b3c4a7708213",
"assets/assets/Middle%2520Ground%2520Fallacy/2.jpg": "f9d4d8acb6d8f445d116d5298040ede5",
"assets/assets/Middle%2520Ground%2520Fallacy/3.jpg": "4735836c07423448b5eaf491e012eea5",
"assets/assets/Middle%2520Ground%2520Fallacy/4.jpg": "ca02fed7a9427c13e132f7d174b3b67a",
"assets/assets/Middle%2520Ground%2520Fallacy/5.jpg": "6bcc98e9582a4b2b6fdb177d307cdfdc",
"assets/assets/Middle%2520Ground%2520Fallacy/6.jpg": "7c0702f5711f0f640112cca79427e3f5",
"assets/assets/Naturalistic%2520Fallacy/1.jpg": "39a6c0db405f828f83b5284e9b26adee",
"assets/assets/Naturalistic%2520Fallacy/2.jpg": "f105ad93f843897c0553f074de6c5420",
"assets/assets/Naturalistic%2520Fallacy/3.jpg": "ac2ae54992c82953065a55ad8cc8d83d",
"assets/assets/Naturalistic%2520Fallacy/4.jpg": "a5a831882f61e86ff263e93616d27a7a",
"assets/assets/Naturalistic%2520Fallacy/5.jpg": "65b83c2cccb897c083893ba433286aa0",
"assets/assets/Naturalistic%2520Fallacy/6.jpg": "327155c09c4898e12d82bbbf8be6d3d7",
"assets/assets/Nirvana%2520Fallacy/1.jpg": "3d4b747688964c16c14d6b79abb57fa4",
"assets/assets/Nirvana%2520Fallacy/2.jpg": "d4ebb7017b030c536d58b6caba1d7a1f",
"assets/assets/Nirvana%2520Fallacy/3.jpg": "14f687dd5cbf6cb0bb1252c81bafec1f",
"assets/assets/Nirvana%2520Fallacy/4.jpg": "7e9d2e48869875266ecbb6b51163d5c3",
"assets/assets/Nirvana%2520Fallacy/5.jpg": "6950c0bffa38064ee70c7624245186b4",
"assets/assets/Nirvana%2520Fallacy/6.jpg": "91a5feaa880c1296e64d1ad38996b8dd",
"assets/assets/Nirvana%2520Fallacy/7.jpg": "617337b1c874f9dc33fe836e5b74d51b",
"assets/assets/No%2520True%2520Scotsman/1.jpg": "d7a382951ce1d370dda45bc89e5be24c",
"assets/assets/No%2520True%2520Scotsman/2.jpg": "5eb240e0e1721b2f861852525aab8186",
"assets/assets/No%2520True%2520Scotsman/3.jpg": "79f7de1b618673276105e7184ec725cb",
"assets/assets/No%2520True%2520Scotsman/4.jpg": "38c20671fe92b9defc2f57093519db55",
"assets/assets/No%2520True%2520Scotsman/5.jpg": "ddf2c056a9246e76dfee350e051f378f",
"assets/assets/No%2520True%2520Scotsman/6.jpg": "29f9b5ac6ccdbe648aea906f9cdbb04c",
"assets/assets/Post%2520Hoc/1.jpg": "0a024467aee6667c0c1fe97b2460fc76",
"assets/assets/Post%2520Hoc/2.jpg": "c5e6981ee13254741673cbf28536cfc4",
"assets/assets/Post%2520Hoc/3.jpg": "3bc690d52f91b55612f216a6cb925002",
"assets/assets/Post%2520Hoc/4.jpg": "1a108f359c88646abdfcfd9312324dad",
"assets/assets/Post%2520Hoc/5.jpg": "14302258df42af4657b0763c0505405d",
"assets/assets/Red%2520Herring/1.jpg": "5eb5e0dc21c8ffc23aabbc4394a3218d",
"assets/assets/Red%2520Herring/2.jpg": "8058846f2e34bd1b5878a1a0f96c060a",
"assets/assets/Red%2520Herring/3.jpg": "b26b0db7f6c5707e083810733549b379",
"assets/assets/Red%2520Herring/4.jpg": "0dd26c94c517c80050fee72846ff261d",
"assets/assets/Red%2520Herring/5.jpg": "8a8d3f70fd28453964452bdcf5844ab4",
"assets/assets/Red%2520Herring/6.jpg": "8edf9eb29b76fccdf686108f23b045b5",
"assets/assets/Secundum%2520Quid/1.jpg": "7628556e374204811bd097b582f10626",
"assets/assets/Secundum%2520Quid/2.jpg": "61782ec8de3f1cb43a11932b08929619",
"assets/assets/Secundum%2520Quid/3.jpg": "38e6a8f1492bb99d27e99b5aca5e2b68",
"assets/assets/Secundum%2520Quid/4.jpg": "b41a9176d62a5e1027bb7410116b3b12",
"assets/assets/Secundum%2520Quid/5.jpg": "8d9fa12e2f926b29a33882e25a7c862c",
"assets/assets/Slippery%2520Slope/1.jpg": "53d45187953be5758f29aa0f4464736d",
"assets/assets/Slippery%2520Slope/2.jpg": "bf8d3aa0a25ee8b99a5cf6752722ab65",
"assets/assets/Slippery%2520Slope/3.jpg": "6402d686bfe85c40a59beceb0a5031aa",
"assets/assets/Slippery%2520Slope/4.jpg": "80f782ece852c6656d219f895ccb5808",
"assets/assets/Slippery%2520Slope/5.jpg": "fc3d9a4631e848684244f7373403e011",
"assets/assets/Straw%2520Man/1.jpg": "5e5db3359d9887b51a266533e458026c",
"assets/assets/Straw%2520Man/2.jpg": "ea01d890fd749d118d157031779a997e",
"assets/assets/Straw%2520Man/3.jpg": "1ba16ce25529b8da9501525ee0fa29d2",
"assets/assets/Straw%2520Man/4.jpg": "b0176852bcffba262ab3c837e3193c1e",
"assets/assets/Straw%2520Man/5.jpg": "c1de14b11e54682eb026e7162ea4fa72",
"assets/assets/Texas%2520Sharpshooter/1.jpg": "90b87d3a8cdf7857d0a977c670a9c256",
"assets/assets/Texas%2520Sharpshooter/2.jpg": "db08938970ca1bf0f4fae3a8d9a11aff",
"assets/assets/Texas%2520Sharpshooter/3.jpg": "379d18e5efa4a760c1400bda9905f81d",
"assets/assets/Texas%2520Sharpshooter/4.jpg": "14fc52e254ff7ad7cb016934da525cb4",
"assets/assets/Texas%2520Sharpshooter/5.jpg": "e00e93acd452ed1d01f547f5c94af6d9",
"assets/assets/Texas%2520Sharpshooter/6.jpg": "cd517490951829c266bed508be6e794a",
"assets/assets/Texas%2520Sharpshooter/7.jpg": "c9e165edb55ededb3d39cf11336c8abd",
"assets/assets/Transitive%2520Fallacy/1.jpg": "cee07461b9c73007ac7ad07a76eb5800",
"assets/assets/Transitive%2520Fallacy/2.jpg": "4f9bbaf186a13e3f096cdc5b58a83041",
"assets/assets/Transitive%2520Fallacy/3.jpg": "67bfec7322eebc0ab0315fae82ce3444",
"assets/assets/Transitive%2520Fallacy/4.jpg": "890eff6e2d837b474a56de8088847e38",
"assets/assets/Transitive%2520Fallacy/5.jpg": "abba90ad39eb59294637c6ae5c1f5d51",
"assets/assets/Transitive%2520Fallacy/6.jpg": "a3fdd52ad2ae38e1aa8d4cc6e70c0ace",
"assets/assets/Transitive%2520Fallacy/7.jpg": "d9bf6244cccf79e874be6e9aa58c619e",
"assets/assets/Two%2520Wrongs%2520Make%2520a%2520Right/1.jpg": "f923890b1edcb7d497f284510a69e009",
"assets/assets/Two%2520Wrongs%2520Make%2520a%2520Right/2.jpg": "25647c9c3435ef9716aefc6c6281e79f",
"assets/assets/Two%2520Wrongs%2520Make%2520a%2520Right/3.jpg": "073752aebf128c093bdae1c258679fba",
"assets/assets/Two%2520Wrongs%2520Make%2520a%2520Right/4.jpg": "19486ff9fdeb24db8df1f602b23a02b6",
"assets/assets/Two%2520Wrongs%2520Make%2520a%2520Right/5.jpg": "846cf21e2f86d4d87a01a397f4569e32",
"assets/assets/Two%2520Wrongs%2520Make%2520a%2520Right/6.jpg": "d0f8de9f30b3dce98deae28ac702987f",
"assets/assets/Two%2520Wrongs%2520Make%2520a%2520Right/7.jpg": "6db489e8dae175c1b51d2e920c5663d8",
"assets/assets/Two%2520Wrongs%2520Make%2520a%2520Right/8.jpg": "9b5a987e33590c6ad240fb41ff7eb69d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "4b4259a80b594175f38df73c71122353",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2a1d433a537080a65f07a06196458b49",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85810fe2c73c96e0d653fbd4a250148c",
"/": "85810fe2c73c96e0d653fbd4a250148c",
"main.dart.js": "ae8af5d9fcc56d1b9e809809fe0c9297",
"manifest.json": "4f09e798f7cd7769e308765c661fbc29",
"version.json": "5655f3886b186e2335b6397bdcdc6a59"};
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
