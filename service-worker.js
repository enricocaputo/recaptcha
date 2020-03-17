---
layout: compress
---
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),
workbox?console.log("Workbox is loaded"):console.log("Error! Workbox didn't load"),
workbox.precaching.precacheAndRoute([ {
    url: "img/enrico.jpg", revision: "a9d08c140d9dee9a186aa1b27fd934ea"
}

, {
    url: "img/potasiepe-logo-557x500.png", revision: "692719a18cad70e5a36f7d3541972b9c"
}

, {
    url: "img/servizi/disinfestazione-zanzare-udine-gorizia.jpg", revision: "49a309b089276d32f1cee4407ed1f014"
}

, {
    url: "img/servizi/giardiniere-a-domicilio-udine.jpg", revision: "81b62d5176e1374d5171fdc65dd789b0"
}

, {
    url: "img/servizi/impianto-irrigazione-interrata-udine.jpg", revision: "7ed98435feee042da2978e1b8eb19010"
}

, {
    url: "img/servizi/posa-di-recinzioni-udine.jpg", revision: "a8d16f7199832b7fcbd9cce6a21b8674"
}

, {
    url: "img/servizi/potatura-siepe-udine-gorizia.jpg", revision: "6a5d14603e54fab760ffc58e04e455a4"
}

, {
    url: "img/servizi/progettazione-giardini-Udine-Gorizia.jpg", revision: "0f237f3a6a07eae1733d005661ca76ba"
}

, {
    url: "img/servizi/recinzione-rete-pali-legno.jpg", revision: "72c113fa6390dc116fe1a01b1795e5a1"
}

, {
    url: "img/servizi/servizio-disinfestazione-insetti.jpg", revision: "2d8047391bb4cce7f08622ac54b02e56"
}

, {
    url: "img/servizi/servizio-giardiniere-a-domicilio.png", revision: "344e7b557b95e803fdf2d67922f3d1bf"
}

, {
    url: "img/servizi/servizio-irrigazione-giardino.jpg", revision: "0bb400617da9988b817b1c75decce926"
}

, {
    url: "img/servizi/servizio-manutenzione-verde-condominiale.jpg", revision: "d1cb9f8763e93b1c50d7386bc4e16727"
}

, {
    url: "img/servizi/servizio-pittura-arredi-esterni.jpg", revision: "46aa6fbe2af582d983f14254b06d88e1"
}

, {
    url: "img/servizi/servizio-potatura-siepe.png", revision: "75c05d92ca9461cf856f5164b80f08ae"
}

, {
    url: "img/servizi/servizio-progettazione-giardini.jpg", revision: "5b60ac4aada9e74380ec4bc744bd3fbf"
}

, {
    url: "img/servizi/servizio-riparazione-tagliaerba.jpg", revision: "74bb9e7d8554f7177e3f080f385fd251"
}

, {
    url: "img/servizi/verde-commerciale-industriale-potasiepe.jpg", revision: "52331c5222f62fa28d73586a9c5325b5"
}

, {
    url: "img/slides/slide1.jpg", revision: "b60180be4e1da5bdfcc5b970ee0410a6"
}

, {
    url: "img/slides/slide2.jpg", revision: "cb43b87e9e8f8dfc48be44c82c837757"
}

, {
    url: "img/slides/slide3.jpg", revision: "6ebc07a17ac67e9ec08305603f01103e"
}

, {
    url: "img/slides/slide4.jpg", revision: "e5ac348461ca60d73f9bc5a49bb44367"
}

, {
    url: "img/slides/slide5.jpg", revision: "b8f00c36606cdea1a1dc1f3b23e61bdd"
}

, {
    url: "img/slides/verde-commerciale/slide1.jpg", revision: "032ad2829ed70dd6e7bff6e3b4d57212"
}

, {
    url: "img/slides/verde-commerciale/slide2.jpg", revision: "c511678a73101196074ea8297543935f"
}

, {
    url: "img/slides/verde-commerciale/slide3.jpg", revision: "43eed8c6648c317461a614a057b04a1e"
}

, {
    url: "img/slides/verde-commerciale/slide4.jpg", revision: "2411d47b8c3c381f68c5bfb379d4a470"
}

, {
    url: "img/slides/verde-commerciale/slide5.jpg", revision: "cbbbb74640ef2a9faea4d62811b12e75"
}

, {
    url: "img/vivaio-potasiepe-alberi-piante.jpg", revision: "c1eba87eb33b6452e59afffa03cd15ee"
}

]),
workbox.routing.registerRoute(
  new RegExp(".*"),
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 2
})
),
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName:"images",
    plugins:[
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 604800
    })
  ]
})
),
workbox.routing.registerRoute(
  /\.(?:js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName:"js",
    plugins:[
      new workbox.expiration.Plugin({
        maxEntries: 5,
        maxAgeSeconds: 604800
    })
  ]
})
);
