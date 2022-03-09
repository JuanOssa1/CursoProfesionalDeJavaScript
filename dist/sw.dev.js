"use strict";

/**Instala este service workker en el navegador */
var VERSION = "v1";
self.addEventListener('install', function (event) {
  /**
   * aqui creo la cache y espero a que se complete, es decir, espera a que la promesa se complete
   */
  event.waitUntil(precache());
});
/**Ahora para llamar en la cache:*/

self.addEventListener('fetch', function (event) {
  var request = event.request; //solo nos interesa usar la cache con el get porque los demas metodos 

  /**tienen iinformacion que no debe ser almacenada ahi porque no se
   * usa
   */

  /*
  if(request.method !== 'GET'){
      return
  }
  event.respondWith(cachedResponse(request));
  */

  request.method === "GET" ? event.respondWith(cachedResponse(request)) : true;
  /**Aqui actualizamos el cache para que no se quede con versiones viejas*/

  event.waitUntil(updateCache(request));
});

function precache() {
  var cache;
  return regeneratorRuntime.async(function precache$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(caches.open(VERSION));

        case 2:
          cache = _context.sent;
          return _context.abrupt("return", cache.addAll([
            /*
                '/',
            '/index.html',
            '/assets/index.js',
            '/assets/MediaPlayer.js',
            '/assets/plugins/AutoPlay.js',
            '/assets/plugins/AutoPause.js',
            '/assets/index.css',
            '/assets/BigBuckBunny.mp4',
            */
          ]));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function cachedResponse(request) {
  var cache, response;
  return regeneratorRuntime.async(function cachedResponse$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(caches.open(VERSION));

        case 2:
          cache = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(cache.match(request));

        case 5:
          response = _context2.sent;
          return _context2.abrupt("return", response || fetch(request));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function updateCache(request) {
  var cache, response;
  return regeneratorRuntime.async(function updateCache$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(caches.open(VERSION));

        case 2:
          cache = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(fetch(request));

        case 5:
          response = _context3.sent;
          return _context3.abrupt("return", response.status === 200 ? cache.put(request, response) : true);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}