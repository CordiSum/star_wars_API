!function(e){var o={};function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)i.d(e,o,function(t){return n[t]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=0)}([function(t,n,e){"use strict";e.r(n);e(1);var o=document.querySelector(".btn_peoples"),i=document.querySelector(".btn_films"),r=document.querySelector(".btn_starships");function c(t){fetch(0<arguments.length&&void 0!==t?t:"https://swapi.co/api/people/",{headers:{"Content-Type":"application/json",Origin:"http://localhost:3000/",Referer:"http://localhost:3000/"}}).then(function(t){return t.json()}).then(function(t){return function(t){if(0<t.results.length){var e=document.querySelector("#people");t.results.map(function(t){var n='\n      <div>\n        <a href="'.concat(t.url,'" class="people_link" target="_blank">').concat(t.name,"</a>\n      </div>");e.insertAdjacentHTML("beforeend",n)})}null!==t.next&&c(t.next)}(t)})}function a(t){fetch(t,{headers:{"Content-Type":"application/json",Origin:"http://localhost:3000/",Referer:"http://localhost:3000/"}}).then(function(t){return t.json()}).then(function(t){return function(t){console.log(t);var n=document.querySelector(".people-info"),e="\n      <div>\n        <div>name: ".concat(t.name," </div> \n        <div>height: ").concat(t.height,"</div>\n        <div>world: ").concat(t.homeworld,'</div>\n        <div class="films">Films: ').concat(t.films,"</div>\n      </div>");n.innerHTML=e}(t)})}function l(t){fetch(0<arguments.length&&void 0!==t?t:"https://swapi.co/api/films/",{headers:{"Content-Type":"application/json",Origin:"http://localhost:3000/",Referer:"http://localhost:3000/"}}).then(function(t){return t.json()}).then(function(t){return function(t){if(0<t.results.length){var e=document.querySelector("#episode");t.results.map(function(t){var n='\n      <div>\n        <a href="'.concat(t.url,'" class="film_link" target="_blank">').concat(t.title,'</a>\n        <div><span class="description">Description</span>: ').concat(t.opening_crawl,"</div>\n      </div>");e.insertAdjacentHTML("beforeend",n)})}}(t)})}function u(t){fetch(t,{headers:{"Content-Type":"application/json",Origin:"http://localhost:3000/",Referer:"http://localhost:3000/"}}).then(function(t){return t.json()}).then(function(t){return function(t){console.log(t);var n=document.querySelector(".film-info"),e="\n      <div>\n        <div>Title: ".concat(t.title," </div> \n        <div>Description: ").concat(t.opening_crawl,"</div>\n        <div>Characters: ").concat(t.characters,"</div>\n      </div>");n.innerHTML=e}(t)})}function s(t){fetch(0<arguments.length&&void 0!==t?t:"https://swapi.co/api/starships/",{headers:{"Content-Type":"application/json",Origin:"http://localhost:3000/",Referer:"http://localhost:3000/"}}).then(function(t){return t.json()}).then(function(t){return function(t){if(0<t.results.length){var e=document.querySelector("#starship");t.results.map(function(t){var n='\n      <div>\n        <a href="'.concat(t.url,'" class="starship_link" target="_blank">').concat(t.name,"</a>\n      </div>");e.insertAdjacentHTML("beforeend",n)})}null!==t.next&&s(t.next)}(t)})}function d(t){fetch(t,{headers:{"Content-Type":"application/json",Origin:"http://localhost:3000/",Referer:"http://localhost:3000/"}}).then(function(t){return t.json()}).then(function(t){return function(t){console.log(t);var n=document.querySelector(".starship-info"),e="\n      <div>\n        <div>Title: ".concat(t.name," </div> \n        <div>Model: ").concat(t.model,"</div>\n        <div>Films: ").concat(t.films,"</div>\n      </div>");n.innerHTML=e}(t)})}o.addEventListener("click",function(){c()}),document.addEventListener("click",function(t){t.target.matches(".people_link")&&(a(t.target.getAttribute("href")),t.preventDefault())}),i.addEventListener("click",function(){l()}),document.addEventListener("click",function(t){t.target.matches(".film_link")&&(u(t.target.getAttribute("href")),t.preventDefault())}),r.addEventListener("click",function(){s()}),document.addEventListener("click",function(t){t.target.matches(".starship_link")&&(d(t.target.getAttribute("href")),t.preventDefault())})},function(t,n){var e=new Image;e.onload=e.onerror=function(){document.body.classList.add(1==e.height?"webp":"no-webp")},e.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="}]);