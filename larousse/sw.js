importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
);

workbox.setConfig({
  debug: false,
});

const { registerRoute } = workbox.routing;
// const {StaleWhileRevalidate} = workbox.strategies;
// const {NetworkFirst} = workbox.strategies;
const { CacheFirst } = workbox.strategies;
const { NetworkOnly } = workbox.strategies;
// const {CacheOnly} = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;
const { precacheAndRoute } = workbox.precaching;
const { setCacheNameDetails } = workbox.core;

setCacheNameDetails({
  prefix: 'pbDico',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'app',
  googleAnalytics: 'ga',
});

precacheAndRoute([
  { url: 'manifest.webmanifest', revision: null },
  { url: 'index.html', revision: null },
  { url: 'css/critical-sass.css', revision: null },
  { url: 'app.js', revision: null },
  // { url: 'getdata-dev.js', revision: null },
  { url: 'search.js', revision: null },
  { url: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js', revision: null },
]);



const manifestHandler = new CacheFirst();
const docHandler = new CacheFirst();
const cssHandler = new CacheFirst();
const jsHandler = new CacheFirst();
const jsonHandler = new CacheFirst();

registerRoute(new RegExp('.+\\.webmanifest'), manifestHandler);

registerRoute(new RegExp('.+\\.css$'), docHandler);

registerRoute(new RegExp('.+\\.css$'), cssHandler);

registerRoute(new RegExp('.+\\.js$'), jsHandler);

registerRoute(new RegExp('.+\\.json$'), jsonHandler);

// handling json fetch event
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});