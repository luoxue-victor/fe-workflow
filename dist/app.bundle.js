(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/react/index.js":
/*!**********************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll */ "dll-reference dll"))(6);

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/vue/dist/vue.runtime.esm.js from dll-reference dll ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll */ "dll-reference dll"))(2);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll */ "dll-reference dll"))(0);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treeShaking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeShaking */ "./src/treeShaking.js");
// import TS from './ts/index.ts'
__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./ts/index.ts */ "./src/ts/index.ts")).then(function (res) {
  console.log(res);
  new res.default();
});

__webpack_require__(/*! ./style/index.css */ "./src/style/index.css");

__webpack_require__(/*! ./style/app.css */ "./src/style/app.css");

__webpack_require__(/*! ./style/index.less */ "./src/style/index.less");

__webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");

__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./style/index.postcss */ "./src/style/index.postcss", 7));

__webpack_require__(/*! ./option-chain */ "./src/option-chain.js");

__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

__webpack_require__(/*! react */ "./node_modules/react/index.js");


console.log(Object(_treeShaking__WEBPACK_IMPORTED_MODULE_0__[/* cube */ "a"])(2));
var h2 = document.createElement('h2');
h2.className = 'test';
h2.innerText = 'testaaa';
document.body.append(h2);

/***/ }),

/***/ "./src/option-chain.js":
/*!*****************************!*\
  !*** ./src/option-chain.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var obj = {
  foo: {
    bar: {
      baz: 2
    }
  }
};
console.log(obj && obj.foo && obj.foo.bar && obj.foo.bar.asd); // obj && obj.foo && obj.foo.bar && obj.foo.bar.baz

console.log(obj && obj.foo && obj.foo.err && obj.foo.err.baz); // obj && obj.foo && obj.foo.err && obj.foo.err.baz

/***/ }),

/***/ "./src/style/app.css":
/*!***************************!*\
  !*** ./src/style/app.css ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/index.css":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/treeShaking.js":
/*!****************************!*\
  !*** ./src/treeShaking.js ***!
  \****************************/
/*! exports provided: square, cube */
/*! exports used: cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export square */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cube; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function square(x) {
  console.log('我是一个 square');
  console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default.a);
  return x * x;
}
function cube(x) {
  console.log('我是一个 cube');
  return x * x * x;
}

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luoxue/Desktop/learn/learn_webpack/src/main.js */"./src/main.js");


/***/ }),

/***/ "dll-reference dll":
/*!**********************!*\
  !*** external "dll" ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = dll;

/***/ })

},[[0,"manifest","chunk-vendors"]]]);
//# sourceMappingURL=app.bundle.js.map