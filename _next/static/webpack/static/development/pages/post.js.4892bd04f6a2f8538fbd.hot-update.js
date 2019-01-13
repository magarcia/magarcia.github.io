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


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var ctx = __webpack_require__("./static/img sync recursive \\.(png|jpe?g|svg|webp)$");

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  var props = {
    src: ctx(src.replace('../static/img/', './')),
    alt: alt
  };
  var webpSrc = ctx(src.replace('.jpg', '.webp'));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    type: "image/webp",
    src: webpSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
};

Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./static/img sync recursive \\.(png|jpe?g|svg)$":
false,

/***/ "./static/img sync recursive \\.(png|jpe?g|svg|webp)$":
/*!*************************************************!*\
  !*** ./static/img sync \.(png|jpe?g|svg|webp)$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./angularbeers-with-misko-hevery.jpg": "./static/img/angularbeers-with-misko-hevery.jpg",
	"./angularbeers-with-misko-hevery.webp": "./static/img/angularbeers-with-misko-hevery.webp",
	"./cities/amsterdam.png": "./static/img/cities/amsterdam.png",
	"./cities/austin.png": "./static/img/cities/austin.png",
	"./cities/barcelona.png": "./static/img/cities/barcelona.png",
	"./cities/berlin.png": "./static/img/cities/berlin.png",
	"./cities/cape-town.png": "./static/img/cities/cape-town.png",
	"./cities/dublin.png": "./static/img/cities/dublin.png",
	"./cities/london.png": "./static/img/cities/london.png",
	"./cities/new-york.png": "./static/img/cities/new-york.png",
	"./cities/paris.png": "./static/img/cities/paris.png",
	"./cities/san-francisco.png": "./static/img/cities/san-francisco.png",
	"./cities/stockholm.png": "./static/img/cities/stockholm.png",
	"./cities/sydney.png": "./static/img/cities/sydney.png",
	"./cities/tokyo.png": "./static/img/cities/tokyo.png",
	"./cities/wellington.png": "./static/img/cities/wellington.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./static/img sync recursive \\.(png|jpe?g|svg|webp)$";

/***/ }),

/***/ "./static/img/angularbeers-with-misko-hevery.webp":
/*!********************************************************!*\
  !*** ./static/img/angularbeers-with-misko-hevery.webp ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/angularbeers-with-misko-hevery-e5361667e0a548f8229c5342b633d853.webp";

/***/ })

})
//# sourceMappingURL=post.js.4892bd04f6a2f8538fbd.hot-update.js.map