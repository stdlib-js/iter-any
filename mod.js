// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+x(i):x(i)+e}var S=String.fromCharCode,_=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,o,c,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,_(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,_(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!_(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=_(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=A.exec(e);i;)(r=e.slice(n,A.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=A.lastIndex,i=A.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function C(e){var r,t;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var R,O=Object.prototype,Z=O.toString,L=O.__defineGetter__,P=O.__defineSetter__,W=O.__lookupGetter__,B=O.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(e,r)||B.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};var G=R;function M(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=X()?function(e){var r,t,i,n,a;if(null==e)return z.call(e);t=e[H],a=H,r=null!=(n=e)&&q.call(n,a);try{e[H]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[H]=t:delete e[H],i}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var Y=X();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return N(e)||ee(e)}function te(){return new Function("return this;")()}M(re,"isPrimitive",N),M(re,"isObject",ee);var ie="object"==typeof self?self:null,ne="object"==typeof window?window:null,ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},oe="object"==typeof ae?ae:null,ce="object"==typeof globalThis?globalThis:null;var se=function(e){if(arguments.length){if(!N(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(ce)return ce;if(ie)return ie;if(ne)return ne;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),le=se.document&&se.document.childNodes,pe=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;M(ue,"REGEXP",fe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function de(e){return null!==e&&"object"==typeof e}function he(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=fe.exec(i.toString()))return r[1]}return de(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}M(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(de));var we="function"==typeof e||"object"==typeof pe||"function"==typeof le?function(e){return he(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?he(e).toLowerCase():r};function be(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&function(e){return"function"===we(e)}(e.next)}function ye(e){return"number"==typeof e}function ve(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function me(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ve(n):ve(n)+e,i&&(e="-"+e)),e}var Ee=String.prototype.toLowerCase,xe=String.prototype.toUpperCase;function ke(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ye(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=me(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=me(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===xe.call(e.specifier)?xe.call(t):Ee.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Se(e){return"string"==typeof e}var _e=Math.abs,je=String.prototype.toLowerCase,Ve=String.prototype.toUpperCase,Te=String.prototype.replace,Ae=/e\+(\d)$/,$e=/e-(\d)$/,Fe=/^(\d+)$/,Ie=/^(\d+)e/,Ce=/\.0$/,Re=/\.0*e/,Oe=/(\..*[^0])0*e/;function Ze(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ye(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":_e(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Te.call(t,Oe,"$1e"),t=Te.call(t,Re,"e"),t=Te.call(t,Ce,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Te.call(t,Ae,"e+0$1"),t=Te.call(t,$e,"e-0$1"),e.alternate&&(t=Te.call(t,Fe,"$1."),t=Te.call(t,Ie,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ve.call(e.specifier)?Ve.call(t):je.call(t)}function Le(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Pe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Le(i):Le(i)+e}var We=String.fromCharCode,Be=isNaN,Ge=Array.isArray;function Me(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ne(e){var r,t,i,n,a,o,c,s,l;if(!Ge(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Se(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Me(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Be(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Be(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ke(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Be(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Be(a)?String(i.arg):We(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ze(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=me(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Pe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ue=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ze(e){var r,t,i,n;for(t=[],n=0,i=Ue.exec(e);i;)(r=e.slice(n,Ue.lastIndex-i[0].length)).length&&t.push(r),t.push(Xe(i)),n=Ue.lastIndex,i=Ue.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function qe(e){return"string"==typeof e}function De(e){var r,t,i;if(!qe(e))throw new TypeError(De("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ze(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ne.apply(null,t)}function He(e){var r;if(!be(e))throw new TypeError(De("invalid argument. Must provide an iterator. Value: `%s`.",e));for(;!(r=e.next()).done;)if(r.value)return!0;return!1}export{He as default};
//# sourceMappingURL=mod.js.map
