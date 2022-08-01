// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).iterAny=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),y&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[_],i=_,t=null!=(o=e)&&v.call(o,i);try{e[_]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[_]=r:delete e[_],n}:function(e){return d.call(e)},g=Boolean.prototype.toString;var j=b();function m(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===w(e)))}function h(e){return y(e)||m(e)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",m);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof O?O:null;var x=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(A)return A;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=x.document&&x.document.childNodes,P=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;p(C,"REGEXP",V);var k=Array.isArray?Array.isArray:function(e){return"[object Array]"===w(e)};function G(e){return null!==e&&"object"==typeof e}function L(e){var t,r,n,o;if(("Object"===(r=w(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return G(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(G,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!k(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(G));var F="function"==typeof e||"object"==typeof P||"function"==typeof B?function(e){return L(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?L(e).toLowerCase():t};function I(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&function(e){return"function"===F(e)}(e.next)}return function(e){var t;if(!I(e))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("0CC49",e));for(;!(t=e.next()).done;)if(t.value)return!0;return!1}}));
//# sourceMappingURL=browser.js.map
