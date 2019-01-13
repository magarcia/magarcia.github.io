webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/PWithIframe.js":
/*!***********************************!*\
  !*** ./components/PWithIframe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/magarcia/Dev/blog/components/PWithIframe.js";



var PWithIframe = function PWithIframe(_ref) {
  var children = _ref.children;
  var width = 700;

  if (typeof window === 'undefined') {
    width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  }

  if (children[0] === '!(') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      src: children[1].props.href,
      title: children[1].props.href,
      frameBorder: "0",
      width: width,
      height: Math.round(width / 16 * 9),
      allowFullScreen: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

PWithIframe.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PWithIframe);

/***/ })

})
//# sourceMappingURL=post.js.e83b59cc8998bbe1d143.hot-update.js.map