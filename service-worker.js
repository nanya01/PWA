var cacheName = "petstore-v1";
var cacheFiles = [
    'index.html',
    'product.js',
    'petstore1.webmanifest',
    'images/yarn.png',
    'images/icon-store-512.png'
]

self.addEventListener('install', (e)=>{
    console.log("[Service worker] Install");
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            console.log("[Service Worker] Caching all the files");
            return cache.addAll(cacheFiles)
        })
    )
})

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(
            function(r){
                console.log('[Service Worker] Fetching resource: ' + e.request.url);

                return r;
            }
        )
    )
})