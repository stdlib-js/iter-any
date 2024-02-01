// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e){var i;if(!r(e))throw new TypeError(t("invalid argument. Must provide an iterator. Value: `%s`.",e));for(;!(i=e.next()).done;)if(i.value)return!0;return!1}export{e as default};
//# sourceMappingURL=index.mjs.map
