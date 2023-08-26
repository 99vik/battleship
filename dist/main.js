(()=>{var e={28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),s=n.n(r),i=n(645),o=n.n(i)()(s());o.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh1 {\n    text-align: center;\n    margin-top: 1rem;\n}\n\nmain {\n    margin-top: 2rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\nmain > div {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    border-left: 1px solid rgb(0, 0, 255);\n    border-top: 1px solid rgb(0, 0, 255);\n    background-color: whitesmoke;\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    margin: 1rem;\n}\n\n.board.dimmed {\n    opacity: 0.25;\n    pointer-events: none;\n}\n\n.ship-placement {\n    grid-template-columns: repeat(5, 40px);\n    column-gap: 2rem;\n    height: 400px;\n    border: none;\n    background-color: white;\n}\n\n.field.ship-drag-valid {\n    background-color: rgb(143, 143, 255);\n}\n\n.field.ship-drag-invalid {\n    background-color: rgb(255, 151, 151);\n}\n\n.ship-placement.horizontal {\n    transform: rotate(-90deg);\n}\n\n.field {\n    border-right: 1px solid rgb(0, 0, 255);\n    border-bottom: 1px solid rgb(0, 0, 255);\n    background-color: whitesmoke;\n    height: 40px;\n}\n\n.field:hover {\n    cursor: pointer;\n}\n\n.field.ship {\n    background-color: blue;\n}\n\n.field.ship.hit {\n    background-color: red;\n}\n\n.field.miss {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(213, 213, 213);\n}\n\n.field.miss img {\n    height: 16px;\n}\n\n.field:not(.field.ship):hover {\n    background-color: rgb(234, 234, 234);\n}\n\n.popup-modal {\n    z-index: 3;\n    height: 30%;\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2rem;\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 10px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform-origin: center;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n    opacity: 0%;\n    text-align: center;\n    transition: transform .3s ease-in-out, opacity .4s ease;\n    transform: translate(-50%, -100%);\n}\n\n.popup-modal.show {\n    transform: translate(-50%, -50%);\n    opacity: 100%;\n    pointer-events: all;\n}\n\n.popup-modal button {\n    color: white;\n    font-size: 1rem;\n    border: none;\n    padding: 1rem 1rem;\n    background-color: rgb(97, 150, 255);\n    border-radius: 0.8rem;\n}\n\n.popup-modal button:hover {\n    background-color: rgb(71, 131, 250);\n    cursor: pointer;\n}\n\n.popup-modal p {\n    font-size: 2rem;\n}\n\nmain.noclick {\n    pointer-events: none;\n}\n\nbutton.rotate-btn {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    padding: 0.5rem 2rem;\n    border: none;\n    border-radius: 0.8rem;\n    background-color: rgb(112, 200, 255);\n    transform: translateX(-50%);\n    font-size: 1rem;\n    font-weight: bold;\n    color: white;\n    letter-spacing: 1px;\n}\n\nbutton.rotate-btn:hover {\n    cursor: pointer;\n    transition: 0.2s;\n    background-color: rgb(74, 135, 173);\n}\n\n\n",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var h=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=s(p,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=r(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var a=n(i[o]);t[a].references--}for(var l=r(e,s),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},698:(e,t,n)=>{"use strict";function r(e,t,n){if(t<1||t>10||n<1||n>10)return!1;const r=e[[t,n]];return"miss"!==r&&null!=r}function s(e,t,n,i){return r(t,n,i)?(e.push([`${n},${i}`]),s(e,t,n,i-1)):e}function i(e,t,n,s){return r(t,n,s)?(e.push([`${n},${s}`]),i(e,t,n,s+1)):e}function o(e,t,n,s){return r(t,n,s)?(e.push([`${n},${s}`]),o(e,t,n-1,s)):e}function a(e,t,n,s){return r(t,n,s)?(e.push([`${n},${s}`]),a(e,t,n+1,s)):e}function l(e,t){const n=e[0].split(",")[0],r=e[0].split(",")[1];let l=[];return l.push(e),l=s(l,t,n,Number(r)-1),l=i(l,t,n,Number(r)+1),l=o(l,t,Number(n)-1,r),l=a(l,t,Number(n)+1,r),l}function c(e,t){const n=l(e,t);let r=[];return n.forEach((e=>{r.push(function(e){const t=Number(e[0].split(",")[0]),n=Number(e[0].split(",")[1]);return[[t+1,n],[t,n+1],[t+1,n+1],[t-1,n],[t,n-1],[t-1,n-1],[t-1,n+1],[t+1,n-1]]}(e))})),r=function(e){return e.filter((e=>e[0]>=1&&e[0]<=10&&e[1]>=1&&e[1]<=10))}(r.flat()),r=function(e){const t=[];return e.forEach((e=>{t.some((t=>t[0]===e[0]&&t[1]===e[1]))||t.push(e)})),t}(r),r=function(e,t){const n=e.map((e=>[Number(e[0].split(",")[0]),Number(e[0].split(",")[1])]));return t.filter((e=>!n.some((t=>t[0]===e[0]&&t[1]===e[1]))))}(n,r),r}n.r(t),n.d(t,{default:()=>c})},417:(e,t,n)=>{const{default:r}=n(712),{default:s}=n(413),{default:i}=n(512),o=n(507),a=n(23),l=n(643);e.exports=class{constructor(){this.player=new o,this.bot=new a,this.playerBoard=document.querySelector("#player"),this.playerBoard.classList.toggle("dimmed"),this.botBoard=document.querySelector("#bot")}startGame(){this.playerPlaceShips()}playerPlaceShips(){s(this.player,this.playerBoard,this.botBoard,this)}generateBoards(){this.playerBoard.classList.add("dimmed"),this.bot.placeShips(),r(this.player,this.playerBoard,this),r(this.bot,this.botBoard,this)}playerTurn(e){if(this.bot.board.recieveAttack([e],this.botBoard),this.bot.board.allShipsSunk())return this.winSequence("You"),void this.playerBoard.classList.remove("dimmed");this.botMove(),this.dimCurrentPlayerFields()}botMove(){setTimeout((()=>{const e=this.bot.takeShot(this.player.board.fields).split(","),t=10*(Number(e[0])-1)+Number(e[1]);let n;const r=this.playerBoard.children.item(t-1);if(this.player.board.fields[e]instanceof l&&(n=this.player.board.fields[e]),i(r,this.player.board.fields[e]),this.player.board.recieveAttack([`${e[0]},${e[1]}`],this.playerBoard),"miss"===this.player.board.fields[e]?this.bot.misses.push(e):(this.bot.hits.push(e),n.isSunk()&&(this.bot.hits=[])),this.player.board.allShipsSunk())return this.winSequence("Computer"),void this.botBoard.classList.remove("dimmed");this.dimCurrentPlayerFields()}),1)}restartPlayers(){this.player=new o,this.bot=new a}dimCurrentPlayerFields(){this.playerBoard.classList.toggle("dimmed"),this.botBoard.classList.toggle("dimmed")}switchPlayer(){this.currentPlayer===this.player?(this.currentPlayer=this.bot,this.opponent=this.player):(this.currentPlayer=this.player,this.opponent=this.bot)}winSequence(e){const t=document.querySelector("main");t.classList.toggle("noclick");const n=document.querySelector(".popup-modal");n.classList.toggle("show"),n.children[0].textContent=`${e} won.`,n.children[1].addEventListener("click",(()=>{t.classList.remove("noclick"),n.classList.remove("show"),this.playerBoard.classList.add("dimmed"),this.restartPlayers(),this.startGame()}))}}},498:(e,t,n)=>{const{default:r}=n(698),{default:s}=n(512),i=n(643);e.exports=class{constructor(){this.fields=this.generateFields()}generateFields(){const e={};for(let t=1;t<=10;t+=1)for(let n=1;n<=10;n+=1)e[[t,n]]=null;return e}placeShip(e,t,n){const r=[];r.push(e);for(let s=1;s<t.length;s+=1)"v"===n?r.push([e[0]+s,e[1]]):r.push([e[0],e[1]+s]);r.some((e=>void 0===this.fields[e]))||r.forEach((e=>{this.fields[e]=t}))}recieveAttack(e,t){const n=this.fields[[e]];return n instanceof i?(this.fields[[e]].hit(),this.fields[[e]].isSunk()&&r(e,this.fields).forEach((e=>{const n=10*(e[0]-1)+e[1];s(t.children.item(n-1),e),this.fields[[`${e[0]},${e[1]}`]]="miss"})),this.fields[[e]]="hit","hit"):null===n?(this.fields[[e]]="miss","miss"):null}allShipsSunk(){return!Object.values(this.fields).some((e=>e instanceof i))}}},712:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(512),s=n(23),i=n.n(s);const o=n(643);function a(e,t,n){t.innerHTML="",Object.keys(e.board.fields).forEach((s=>{const a=e.board.fields[s],l=document.createElement("div");l.classList.add("field"),a instanceof o&&l.classList.add("ship"),e instanceof i()&&l.addEventListener("click",(()=>{(null===n.bot.board.fields[s]||n.bot.board.fields[s]instanceof o)&&(n.playerTurn(s),(0,r.default)(l,a))})),t.appendChild(l)}))}},413:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(643),s=n.n(r);let i=null,o="v",a=[];function l(e){const t=document.createElement("div");for(let n=0;n<e;n+=1){const e=document.createElement("div");e.classList.add("field"),e.classList.add("ship"),t.appendChild(e)}return t.setAttribute("draggable","true"),t.addEventListener("dragstart",(t=>{i=[e,o,t.target]})),t}function c(e){return e.filter((e=>e[0]>=1&&e[0]<=10&&e[1]>=1&&e[1]<=10))}function d(e,t,n){const r=[],s=Number(e.split(",")[0]),i=Number(e.split(",")[1]);if("h"===t)for(let e=i;e<i+n;e+=1)r.push([s,e]);else for(let e=s;e<s+n;e+=1)r.push([e,i]);return r}function u(e,t,n,r){console.log(r.player),console.log(r.bot),a=[],function(e){const t=document.createElement("button");t.innerHTML="Rotate",t.classList.add("rotate-btn"),t.addEventListener("click",(()=>{"v"===o?(e.classList.toggle("horizontal"),o="h"):(o="v",e.classList.toggle("horizontal"))})),e.parentNode.appendChild(t)}(n);const u=n;u.innerHTML="";const h=t,p=e.board;h.innerHTML="",h.classList.remove("dimmed"),Object.keys(e.board.fields).forEach((e=>{const t=document.createElement("div");t.classList.add("field"),t.addEventListener("dragover",(t=>{t.preventDefault();const n=i[0],r=i[1];let s=d(e,r,n);!function(e,t,n){const r=[],s=Number(e.split(",")[0]),i=Number(e.split(",")[1]);if("h"===t)for(let e=i;e<i+n;e+=1)r.push([s,e]);else for(let e=s;e<s+n;e+=1)r.push([e,i]);return!r.some((e=>e[0]<1||e[0]>10||e[1]<1||e[1]>10))&&!r.some((e=>a.some((t=>e[0]===t[0]&&e[1]===t[1]))))}(e,r,n)?(s=c(s),s.forEach((e=>{const t=10*(e[0]-1)+e[1];document.querySelector("#player").children.item(t-1).classList.add("ship-drag-invalid")}))):s.forEach((e=>{const t=10*(e[0]-1)+e[1];document.querySelector("#player").children.item(t-1).classList.add("ship-drag-valid")}))})),t.addEventListener("dragleave",(t=>{t.preventDefault();const n=i[0],r=i[1];let s=d(e,r,n);s=c(s),s.forEach((e=>{const t=10*(e[0]-1)+e[1],n=document.querySelector("#player").children.item(t-1);n.classList.remove("ship-drag-invalid"),n.classList.remove("ship-drag-valid")}))})),t.addEventListener("drop",(t=>{t.preventDefault();const o=i[1],l=i[0],u=i[2];let h=d(e,o,l);h=c(h),h.forEach((e=>{const t=10*(e[0]-1)+e[1],n=document.querySelector("#player").children.item(t-1);n.classList.remove("ship-drag-invalid"),n.classList.remove("ship-drag-valid")})),function(e,t,n){const r=[],s=Number(e.split(",")[0]),i=Number(e.split(",")[1]);if("h"===t)for(let e=i;e<i+n;e+=1)r.push([s,e]);else for(let e=s;e<s+n;e+=1)r.push([e,i]);if(r.some((e=>e[0]<1||e[0]>10||e[1]<1||e[1]>10)))return!1;if(r.some((e=>a.some((t=>e[0]===t[0]&&e[1]===t[1])))))return!1;r.forEach((e=>{a.push(e);const t=10*(e[0]-1)+e[1];document.querySelector("#player").children.item(t-1).classList.add("ship")}));const o=function(e){let t=[];return e.forEach((e=>{t.push(function(e){const t=e[0],n=e[1];return[[t+1,n],[t,n+1],[t+1,n+1],[t-1,n],[t,n-1],[t-1,n-1],[t-1,n+1],[t+1,n-1]]}(e))})),t=c(t.flat()),t=function(e){const t=[];return e.forEach((e=>{t.some((t=>t[0]===e[0]&&t[1]===e[1]))||t.push(e)})),t}(t),t=function(e,t){return t.filter((t=>!e.some((e=>e[0]===t[0]&&e[1]===t[1]))))}(e,t),t}(r);return o.forEach((e=>{a.push(e)})),!0}(e,o,l)&&(u.remove(),function(e,t,n,r){const i=Number(e.split(",")[0]),o=Number(e.split(",")[1]);t.placeShip([i,o],new(s())(n),r)}(e,p,l,o),function(e,t,n){if(0===e.children.length){document.querySelectorAll(".rotate-btn").forEach((e=>{e.remove()}));const t=e;t.parentNode.children[0].textContent="Computer",t.classList.remove("ship-placement"),n.generateBoards()}}(n,0,r))})),h.appendChild(t)})),u.parentNode.children[0].textContent="Place you ships",u.classList.add("ship-placement"),function(e){e.appendChild(l(2)),e.appendChild(l(3)),e.appendChild(l(3)),e.appendChild(l(4)),e.appendChild(l(5))}(u)}},512:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});const r=n.p+"e5b6315ac05dc8529b76.svg",s=n(643);function i(e,t){if(null!==e&&0===e.children.length)if(t instanceof s)e.classList.add("hit");else{e.classList.add("miss");const t=new Image;t.src=r,e.appendChild(t)}}},507:(e,t,n)=>{const r=n(498);e.exports=class{constructor(){this.board=new r}}},23:(e,t,n)=>{const r=n(507),s=n(643);e.exports=class extends r{constructor(){super(),this.misses=[],this.hits=[]}removeShipFields(e,t){return t.filter((t=>!e.some((e=>e[0]===t[0]&&e[1]===t[1]))))}removeReduntantFields(e){const t=[];return e.forEach((e=>{t.some((t=>t[0]===e[0]&&t[1]===e[1]))||t.push(e)})),t}addAdjecentFields(e){const t=e[0],n=e[1];return[[t+1,n],[t,n+1],[t+1,n+1],[t-1,n],[t,n-1],[t-1,n-1],[t-1,n+1],[t+1,n-1]]}removeOuterFields(e){return e.filter((e=>e[0]>=1&&e[0]<=10&&e[1]>=1&&e[1]<=10))}getAdjecentFields(e){let t=[];return e.forEach((e=>{t.push(this.addAdjecentFields(e))})),t=this.removeOuterFields(t.flat()),t=this.removeReduntantFields(t),t=this.removeShipFields(e,t),t}shipPlacementValid(e,t,n){const r=[],s=Number(e[0]),i=Number(e[1]);if("h"===t)for(let e=i;e<i+n;e+=1)r.push([s,e]);else for(let e=s;e<s+n;e+=1)r.push([e,i]);return!r.some((e=>e[0]<1||e[0]>10||e[1]<1||e[1]>10))&&(!r.some((e=>this.takenFields.some((t=>e[0]===t[0]&&e[1]===t[1]))))&&(r.forEach((e=>{this.takenFields.push(e)})),this.getAdjecentFields(r).forEach((e=>{this.takenFields.push(e)})),!0))}generateRandomShipPlacement(e){const t=[Math.floor(10*Math.random())+1,Math.floor(10*Math.random())+1],n=["v","h"],r=n[Math.floor(Math.random()*n.length)];return this.shipPlacementValid(t,r,e)?this.board.placeShip(t,new s(e),r):this.generateRandomShipPlacement(e)}placeShips(){this.takenFields=[],[5,4,3,3,2].forEach((e=>{this.generateRandomShipPlacement(e)}))}takeShot(e){const t=Object.keys(this.board.fields);let n=t[Math.floor(Math.random()*t.length)];return this.hits.length>0&&(n=this.shootAdjecent(e)),"miss"===e[n]||"hit"===e[n]?this.takeShot(e):n}shootAdjecent(e){let t;if(1===this.hits.length){const n=this.hits[0],r=Number(n[0]),s=Number(n[1]);"miss"!==e[`${r+1},${s}`]&&"hit"!==e[`${r+1},${s}`]&&r+1<=10&&(t=`${r+1},${s}`),"miss"!==e[`${r-1},${s}`]&&"hit"!==e[`${r-1},${s}`]&&r-1>=1&&(t=`${r-1},${s}`),"miss"!==e[`${r},${s+1}`]&&"hit"!==e[`${r},${s+1}`]&&s+1<=10&&(t=`${r},${s+1}`),"miss"!==e[`${r},${s-1}`]&&"hit"!==e[`${r},${s-1}`]&&s-1>=1&&(t=`${r},${s-1}`)}else{const e=this.hits.map((e=>[Number(e[0]),Number(e[1])])).sort(((e,t)=>e[0]-t[0])),n=this.hits.map((e=>[Number(e[0]),Number(e[1])])).sort(((e,t)=>e[1]-t[1])),r=this.hits[0],s=this.hits[this.hits.length-1],i=Number(r[0]),o=Number(r[1]);let a;a=o===Number(s[1])?[[`${Math.max(e[0][0],e[e.length-1][0])+1},${o}`],[`${Math.min(e[0][0],e[e.length-1][0])-1},${o}`]]:[[`${i},${Math.max(n[0][1],n[n.length-1][1])+1}`],[`${i},${Math.min(n[0][1],n[n.length-1][1])-1}`]],t=a[Math.floor(Math.random()*a.length)][0]}const n=t.split(",");return n[0]<1||n[0]>10||n[1]<1||n[1]>10?this.shootAdjecent(e):t}}},643:e=>{e.exports=class{constructor(e){this.length=e,this.hits=0}hit(){this.hits+=1}isSunk(){return this.hits>=this.length}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),s=n.n(r),i=n(569),o=n.n(i),a=n(565),l=n.n(a),c=n(216),d=n.n(c),u=n(589),h=n.n(u),p=n(28),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=o().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,(new(n(417))).startGame()})()})();