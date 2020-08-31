importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({debug: false,});

const { registerRoute } = workbox.routing;
// const {StaleWhileRevalidate} = workbox.strategies;
const { NetworkFirst } = workbox.strategies;
const { CacheFirst } = workbox.strategies;
const { NetworkOnly } = workbox.strategies;
const { StaleWhileRevalidate } = workbox.strategies;
// const {CacheOnly} = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;
const { precacheAndRoute } = workbox.precaching;
const { setCacheNameDetails } = workbox.core;

setCacheNameDetails({
  prefix: 'PROBTP-dicodoc',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'app',
  googleAnalytics: 'ga',
});

precacheAndRoute([
  { url: 'manifest.webmanifest', revision: null },
  { url: 'index.html', revision: null },
  // { url: 'css/style.css', revision: null },

  { url: 'i/apple-touch-icon.png', revision:null},
  { url: 'i/favicon-32x32.png', revision:null},
  { url: 'i/favicon-16x16.png', revision:null},
  { url: 'i/safari-pinned-tab.svg', revision:null},
  { url: 'data.json', revision:null},

  { url: 'j/app.js', revision: null },
  { url: 'j/search.js', revision: null },
  { url: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js', revision: null },
]);



const manifestHandler = new CacheFirst();
const docHandler = new StaleWhileRevalidate();
const cssHandler = new StaleWhileRevalidate();
const jsHandler = new NetworkOnly();
const jsonHandler = new NetworkOnly();

registerRoute(new RegExp('.+\\.webmanifest'), manifestHandler);

registerRoute(new RegExp('.+\\.css$'), docHandler);

registerRoute(new RegExp('.+\\.css$'), cssHandler);

registerRoute(new RegExp('.+\\.js$'), jsHandler);

registerRoute(new RegExp('.+\\.json$'), jsonHandler);

// handling json fetch event -> serve from cache or get network
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return response || fetch(event.request);
//     })
//   );
// });