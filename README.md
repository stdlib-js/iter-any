<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterAny

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether at least one [iterated][mdn-iterator-protocol] value is truthy.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
iterAny = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-any@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var iterAny = require( 'path/to/vendor/umd/iter-any/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/iter-any@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
(function () {
    window.iterAny;
})();
})();
</script>
```

#### iterAny( iterator )

Tests whether at least one [iterated][mdn-iterator-protocol] value is truthy.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );

var bool = iterAny( arr );
// returns true
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any iterated values, the function returns `false`.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var bool = iterAny( array2iterator( [] ) );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/iter-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/iter-any@umd/browser.js"></script>
<script type="text/javascript">
(function () {
(function () {

function threshold( r ) {
    return ( r > 0.95 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var riter = randu( opts );

// Create an iterator which applies a threshold to generated numbers:
var miter = iterMap( riter, threshold );

// Determine if any values are "truthy":
var bool = iterAny( miter );
// returns <boolean>

console.log( bool );

})();
})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter/any-by`][@stdlib/iter/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one iterated value passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/iter/every`][@stdlib/iter/every]</span><span class="delimiter">: </span><span class="description">test whether all iterated values are truthy.</span>
-   <span class="package-name">[`@stdlib/iter/for-each`][@stdlib/iter/for-each]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value before returning the iterated value.</span>
-   <span class="package-name">[`@stdlib/iter/none`][@stdlib/iter/none]</span><span class="delimiter">: </span><span class="description">test whether all iterated values are falsy.</span>
-   <span class="package-name">[`@stdlib/iter/some`][@stdlib/iter/some]</span><span class="delimiter">: </span><span class="description">test whether at least `n` iterated values are truthy.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-any.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-any

[test-image]: https://github.com/stdlib-js/iter-any/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-any/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-any/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-any?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-any.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-any/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-any/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-any/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-any/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-any/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-any/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/any-by]: https://github.com/stdlib-js/iter-any-by/tree/umd/tree/umd

[@stdlib/iter/every]: https://github.com/stdlib-js/iter-every/tree/umd/tree/umd

[@stdlib/iter/for-each]: https://github.com/stdlib-js/iter-for-each/tree/umd/tree/umd

[@stdlib/iter/none]: https://github.com/stdlib-js/iter-none/tree/umd/tree/umd

[@stdlib/iter/some]: https://github.com/stdlib-js/iter-some/tree/umd/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
