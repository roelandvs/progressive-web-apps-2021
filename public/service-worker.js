const cacheName = 'v2';
const cacheAssets = [
    '/css/style.css',
    '/js/bundle.min.js',
    '/offline'
];


//call install event
self.addEventListener('install', e => {
    // console.log('Service Worker: Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                // console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

//call activate event to clean up old cache
self.addEventListener('activate', e => {
    // console.log('Service Worker: Activated');

    //remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        // console.log('Service Worker: Clearing Ol Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

//call fetch event for offline pages
self.addEventListener('fetch', event => {

    // e.respondWith(
    //     fetch(e.request)
    //         .then(res => {
    //             //make clone of response
    //             const resClone = res.clone();
    //             //open cache
    //             caches
    //                 .open(cacheName)
    //                 .then(cache => {
    //                     //add response to cache
    //                     cache.put(e.request, resClone);
    //                 });
                
    //             return res;
    //         })
    //         .catch(err => caches.match(e.request)
    //             .then(res => res))
    // )

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

                }).catch((err) => {
                    return caches.open(cacheName).then(cache => cache.match('/offline'))
                })
        })

    )
    // if (isCoreGetRequest(e.request)) {
    //     console.log('core request');
    //     e.respondWith(
    //         caches
    //             .open(cacheAssets)
    //             .then(cache => {
    //                 cache.match(e.request.url)
    //             }))
    // } else {
    //     console.log('geen core request');

    //     e.respondWith(
    //         fetch(e.request)
    //             .then(res => {
    //                 //make clone of response
    //                 const resClone = res.clone();
    //                 //open cache
    //                 caches
    //                     //cache assets
    //                     .open(cacheName)
    //                     .then(cache => {
    //                         //add response to cache
    //                         cache.put(e.request, resClone);
    //                     });
                    
    //                 return res;
    //             })

    //             .catch((err) => {
    //                 console.log(err)
    //                 return caches
    //                     .open(cacheName)
    //                     .then(cache => cache.match('/offline'))
    //             })
    //     )


        // if (isCoreGetRequest(e.request)) {
        //     console.log('core request');
        //     caches.match(e.request)
        //         .then(res => res)
        // } else {
        //     console.log('no');
        //     e.respondWith(
        //         fetch(e.request)
        //             .then(res => {
        //                 //make clone of response
        //                 const resClone = res.clone();
        //                 //open cache
        //                 caches
        //                     .open(cacheName)
        //                     .then(cache => {
        //                         //add response to cache
        //                         cache.put(e.request, resClone);
        //                     });
                        
        //                 return res;
        //             })
        //             .catch(err => caches.match(e.request)
        //                 .then(res => res))
        //     )
        // }
});

function isCoreGetRequest(request) {
    return (
        request.method === "GET" && cacheAssets.includes(getPathName(request.url))
    );
};

function getPathName(requestUrl) {
    const url = new URL(requestUrl);
    return url.pathname;
};

