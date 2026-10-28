self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  const k=await caches.keys();
  await Promise.all(k.map(x=>caches.delete(x)));
  await self.registration.unregister();
  const cs=await self.clients.matchAll();
  cs.forEach(c=>c.navigate(c.url));
})())});
