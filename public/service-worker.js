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

// //call fetch event for offline pages
// self.addEventListener('fetch', e => {
//     console.log('Service Worker: Fetching')
    
//     e.respondWith(
//         fetch(e.request)
//             .catch(() => caches.match(e.request))
//     )
// });

//call fetch event for offline pages
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching')
    
    e.respondWith(
        fetch(e.request)
            .then(res => {
                //make clone of response
                const resClone = res.clone();
                //open cache
                caches
                    .open(cacheName)
                    .then(cache => {
                        //add response to cache
                        cache.put(e.request, resClone);
                    });
                
                return res;
            })
            .catch(err => caches.match(e.request)
                .then(res => res))
    )
});

