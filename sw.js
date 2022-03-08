/**Instala este service workker en el navegador */
const VERSION = "v1"
self.addEventListener('install', event => {
    /**
     * aqui creo la cache y espero a que se complete, es decir, espera a que la promesa se complete
     */
    event.waitUntil(precache());
})
/**Ahora para llamar en la cache:*/
self.addEventListener('fetch', event => {
    const request = event.request;
    //solo nos interesa usar la cache con el get porque los demas metodos 
    /**tienen iinformacion que no debe ser almacenada ahi porque no se
     * usa
     */
    /*
    if(request.method !== 'GET'){
        return
    }
    event.respondWith(cachedResponse(request));
    */
    request.method === "GET" ? event.respondWith(cachedResponse(request)) : true

    /**Aqui actualizamos el cache para que no se quede con versiones viejas*/
    event.waitUntil(updateCache(request));

});



async function precache(){
    /**Esto nos da una instancia de un cache  y pues
     * adentro va el nombre de la version que le definimos se le pone await y async
     * porque esto lo que retorna es una promesa
     */
    const cache = await caches.open(VERSION);
    return cache.addAll([  
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',])
}
async function cachedResponse (request) {
    const cache = await caches.open(VERSION);
    /**A   Arriba hago una instancia de la cahce y abajo lo que hago
     * es hacerle un request que normalmente haria en internet normal al cache para ver si este
     * lo tiene almacenado
    */
    const response = await cache.match(request);
    /**Y aqui hace el fecth que es el que me trae toda informacion en caso
     * de que la informacion no este en el cache
     */
    /**y el || lo que hace es que si lo primero es falso o undefined retorna lo de la derecha */
    return response || fetch(request);
    /**El problema de usar cache asi por mas es que si actualizamos el index
     * pero ya hay uno en cache seguira tomando el de cache y no hhara las actualizaciones
     * nuevas para eevitar esto hacemos un metodo que busque y actualice la cache 
     */
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return response.status === 200 ? cache.put(request, response) : true;
    
}