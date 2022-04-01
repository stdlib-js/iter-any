// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=r,i=t;var s=function(r){var t;if(!e(r))throw new TypeError(i("invalid argument. Must provide an iterator. Value: `%s`.",r));for(;!(t=r.next()).done;)if(t.value)return!0;return!1};export{s as default};
//# sourceMappingURL=index.mjs.map
