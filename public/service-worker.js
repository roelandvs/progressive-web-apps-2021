const cacheName = 'v1';
const cacheAssets = [
    '/css/style.css',
    '/js/bundle.min.js',
    '/offline'
];

//call install event
self.addEventListener('install', e => {
    console.log('Service Worker: Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

//call activate event to clean up old cache
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');

    //remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Ol Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

//call fetch event for offline pages
self.addEventListener('fetch', event => {

    event.respondWith(
        caches.open(cacheName).then(cache => {
            return cache.match(event.request)
                .then(response => {

                    if(response) {
                        return response
                    }

                    return fetch(event.request)
                    .then(response => {
                        cache.put(event.request, response.clone())
                        return response
                    })

                })
                .catch((err) => {
                    return caches.match('/offline')
                })
        })
    )
});

