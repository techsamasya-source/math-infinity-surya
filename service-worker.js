const CACHE="table-practice-v17";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-512-maskable.png","./owner-photo.jpg","./privacy.html","./terms.html","./contact.html"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil((async()=>{const k=await caches.keys();await Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)));await self.clients.claim()})()));
self.addEventListener("fetch",e=>{if(e.request.method==="GET")e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)))});
