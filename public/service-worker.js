const cacheName = 'v1';
const cacheAssets = [
    '/css/style.css',
    '/js/bundle.js',
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
    );
});

//call activate event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated') 
});
