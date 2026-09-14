/* FOCUSLY SERVICE WORKER */

const CACHE_NAME = "focusly-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./schedule.html",
    "./tasks.html",
    "./attendance.html",
    "./exams.html",
    "./career.html",
    "./study.html",
    "./reminders.html",
    "./profile.html",
    "./nav.js",
    "./manifest.json"
];


/* INSTALL */

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => {

            return cache.addAll(APP_FILES);

        })

    );

    self.skipWaiting();

});


/* ACTIVATE */

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))

            );

        })

    );

    self.clients.claim();

});


/* FETCH */

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
        .then(cachedResponse => {

            if(cachedResponse){

                return cachedResponse;

            }

            return fetch(event.request);

        })

    );

});