(()=>{var e={28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),s=n.n(r),i=n(645),o=n.n(i)()(s());o.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh1 {\n    text-align: center;\n    margin-top: 1rem;\n}\n\nmain {\n    margin-top: 2rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\nmain > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    border-left: 1px solid rgb(0, 0, 255);\n    border-top: 1px solid rgb(0, 0, 255);\n    background-color: whitesmoke;\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    margin: 1rem;\n}\n\n.field {\n    border-right: 1px solid rgb(0, 0, 255);\n    border-bottom: 1px solid rgb(0, 0, 255);\n    background-color: whitesmoke;\n    height: 40px;\n}\n\n.field.ship {\n    background-color: blue;\n}\n\n.field.ship.hit {\n    background-color: red;\n}\n\n.field.miss {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(213, 213, 213);\n}\n\n.field.miss img {\n    height: 16px;\n}\n\n\n\n",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=s(f,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=r(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var a=n(i[o]);t[a].references--}for(var c=r(e,s),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},417:(e,t,n)=>{const r=n(507),s=n(23);e.exports=class{constructor(){this.player=new r,this.bot=new s,this.currentPlayer=this.player}gameLoop(){for(;!this.gameOver;)this.playerTurn(this.currentPlayer)}playerTurn(e){console.log(e)}switchPlayer(){this.currentPlayer===this.player?this.currentPlayer=this.bot:this.currentPlayer=this.player}gameOver(){return!1}}},498:(e,t,n)=>{const r=n(643);e.exports=class{constructor(){this.fields=this.generateFields(),this.placeShip([2,2],new r(3),"h"),this.placeShip([5,5],new r(2),"v")}generateFields(){const e={};for(let t=1;t<=10;t+=1)for(let n=1;n<=10;n+=1)e[[t,n]]=null;return e}placeShip(e,t,n){const r=[];r.push(e);for(let s=1;s<t.length;s+=1)"v"===n?r.push([e[0]+s,e[1]]):r.push([e[0],e[1]+s]);r.some((e=>void 0===this.fields[e]))||r.forEach((e=>{this.fields[e]=t}))}recieveAttack(e){console.log(e);const t=this.fields[[e]];return t instanceof r?(this.fields[[e]].hit(),this.fields[[e]]="hit","hit"):null===t?(this.fields[[e]]="miss","miss"):null}allShipsSunk(){return!Object.values(this.fields).some((e=>e instanceof r))}}},507:(e,t,n)=>{const r=n(498);e.exports=class{constructor(){this.board=new r}}},23:(e,t,n)=>{const r=n(507);e.exports=class extends r{constructor(){super(),this.misses=[],this.hits=[]}takeShot(){}}},643:e=>{e.exports=class{constructor(e){this.length=e,this.hits=0}hit(){this.hits+=1}isSunk(){return this.hits>=this.length}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),s=n.n(r),i=n(569),o=n.n(i),a=n(565),c=n.n(a),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(28),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=u(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=n.p+"e5b6315ac05dc8529b76.svg",g=n(643);function v(e,t){Object.keys(e.board.fields).forEach((n=>{const r=e.board.fields[n],s=document.createElement("div");s.classList.add("field"),r instanceof g&&s.classList.add("ship"),s.addEventListener("click",(()=>{if(e.board.recieveAttack([n]),r instanceof g)s.classList.add("hit");else{s.classList.add("miss");const e=new Image;e.src=m,s.appendChild(e)}console.log(e)})),t.appendChild(s)}))}const y=n(417),b=document.querySelector("#player"),x=document.querySelector("#bot"),w=new y;v(w.player,b),v(w.bot,x)})()})();