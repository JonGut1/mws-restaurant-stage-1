const cacheName = 'reviews-v1';
const images = '.jpg';
const numberOfImages = 10;
const staticCachables = [
        '/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/css/styles.css',
        '/css/responsive.css',
        '/data/restaurants.json',
        '/index.html',
        '/restaurant.html',
];

for (let i = 1; i <= numberOfImages; i++) {
  staticCachables.push('img/' + i + '.jpg');
}

/*
* Inserts data into cache in the install phase of the servive worker
*/
self.addEventListener('install', event => {
	event.waitUntil(
    caches.open(cacheName).then( cache => {
      return cache.addAll(staticCachables);
    })
  );
});

/*
* deletes older cache, if the cache name is eventually updated.
*/
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then( allNames => {
      return Promise.all(
        allNames.filter( name => {
          if (name != cacheName && name.startsWith('reviews-') === true) {
            return name;
          }
        }).map( nameDelete => {
          return caches.delete(nameDelete);
        })
      )
    })
  )
});

/*
* Intercepts fetches.
*/
self.addEventListener('fetch', event => {
  /*
  * checks whether there is current request in the cache
  * if not, then adds it to the cache.
  */
    caches.match(event.request).then( response => {
        //console.log(response, event.request);
        if (response === undefined) {
            caches.open(cacheName).then( cache => {
            cache.add(event.request.url);
          });
        }
    });

    /*
    * responds from the cache if the request is available there,
    * if not, then fetches the request as usual.
    */
  	event.respondWith(
      	caches.match(event.request).then( response => {

          if (response != undefined) {
        		return response;
          } else {
            return fetch(event.request);
          }
      })
    );
});

/*
* Listenes for the skipWaiting message from dbhelper.js
*/
self.addEventListener('message', event => {
  //console.log(event.data);
	  if (event.data.action === 'skipWaiting') {
	     self.skipWaiting();
	  }
});