importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.loadModule('workbox-background-sync');

workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

const {registerRoute} = workbox.routing;
const {CacheFirst, NetworkFirst, NetworkOnly} = workbox.strategies;
const {BackgroundSyncPlugin} = workbox.backgroundSync;




const cacheNetworkFirst = [
  '/api/auth/renew', 
  '/api/devices/getall',
  '/api/auth ',
  '/equipos/equipo'
]


registerRoute(
  ({request, url}) => {
    if(cacheNetworkFirst.includes(url.pathname)) return true
    return false
  },
  new NetworkFirst()
);


const cacheFirst = [
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
  'https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/stats-chart-outline.svg',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css',
  'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
  'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
]

registerRoute(
  ({request, url}) => {
    if(cacheFirst.includes(url.href)) return true
    return false
  },
  new CacheFirst()
);


//posteos offline routes

const bgSyncPlugin = new BackgroundSyncPlugin('offline_datos', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

const posteos = [
  '/api/devices/updatedate1',
  '/api/devices/updatedate2',
  '/api/devices/updatedate3',
  '/api/devices/updatedate4',
]


registerRoute(
  ({request, url}) => {
    if(posteos.includes(url.pathname)) return true
    return false
  },
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'PUT'
);
