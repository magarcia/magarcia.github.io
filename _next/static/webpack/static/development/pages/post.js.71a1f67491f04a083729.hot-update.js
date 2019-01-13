webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/Image.js":
/*!*****************************!*\
  !*** ./components/Image.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/magarcia/Dev/blog/components/Image.js";



var ctx = __webpack_require__("./static/img sync recursive \\.(png|jpe?g|svg|webp)$");

var Image = function Image(_ref) {
  var originalSrc = _ref.src,
      originalAlt = _ref.alt;
  var imagePath = originalSrc.replace('../static/img/', './');
  var src = ctx(imagePath);
  var alt = originalAlt;
  var webpPath = imagePath.replace(/\.(png|jpe?g|svg)$/, '.webp');
  var webpSrc = ctx.keys().includes(webpPath) ? ctx(webpPath) : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, webpSrc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    type: "image/webp",
    srcSet: webpSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    type: "image/jpeg",
    srcSet: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ })

})
//# sourceMappingURL=post.js.71a1f67491f04a083729.hot-update.js.map