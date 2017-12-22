"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","6c1a055405e4272a778363de76e535dc"],["./static/css/main.f0f6d0a2.css","f51ac893661e9046ba1468a447751adb"],["./static/js/main.e9c2a0ce.js","eec344b9d96bfeb511ddd127967d0fd7"],["./static/media/360-degrees.960a6394.svg","960a6394202c0e55ac8ea5aac54aa159"],["./static/media/3d-printer.edf7289f.svg","edf7289f7616b19ccd45e1c510b52dbb"],["./static/media/burger-icon.98b5df0c.svg","98b5df0c3b55d76b5bcbdd8b5ead1ef4"],["./static/media/close-btn.cef1de1e.svg","cef1de1e2b4a97319051fa33e50153bf"],["./static/media/help.be485172.svg","be4851728daa3ead6cae71d8695231a9"],["./static/media/left-arrow.d66e2195.svg","d66e2195e317c721e8ca1baa985f3f96"],["./static/media/mouse-move.f324d1fd.svg","f324d1fd3963b30ce7c39c99444c7fe6"],["./static/media/mouse-wheel.87c4e417.svg","87c4e417278faee8a9c7a369b9e26ae3"],["./static/media/move-gesture.17a006cd.svg","17a006cd3af620e1e29c877d2220c02f"],["./static/media/start.a7e8d7c6.svg","a7e8d7c62c492faaeba056b06dbe7d1c"],["./static/media/video-player.fb93bbe8.svg","fb93bbe8cd75b4984a4e1830d42929bf"],["./static/media/zoom-gesture.f4218cd7.svg","f4218cd7fcebc3e30adbdd89fbc2b14b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="./index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});