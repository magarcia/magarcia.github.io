webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reading-time */ "./node_modules/reading-time/index.js");
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark */ "./node_modules/remark/index.js");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! remark-react */ "./node_modules/remark-react/index.js");
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var remark_react_lowlight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! remark-react-lowlight */ "./node_modules/remark-react-lowlight/lib/index.js");
/* harmony import */ var remark_react_lowlight__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(remark_react_lowlight__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hast_util_sanitize_lib_github_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hast-util-sanitize/lib/github.json */ "./node_modules/hast-util-sanitize/lib/github.json");
var hast_util_sanitize_lib_github_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! hast-util-sanitize/lib/github.json */ "./node_modules/hast-util-sanitize/lib/github.json", 1);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_MetaInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MetaInfo */ "./components/MetaInfo.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Content */ "./components/Content.js");
/* harmony import */ var _components_SocialShare__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SocialShare */ "./components/SocialShare.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Image */ "./components/Image.js");
/* harmony import */ var _post_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post.module.css */ "./pages/post.module.css");
/* harmony import */ var _post_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_post_module_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _highlightjs_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./highlightjs.css */ "./pages/highlightjs.css");
/* harmony import */ var _highlightjs_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_highlightjs_css__WEBPACK_IMPORTED_MODULE_18__);

var _jsxFileName = "/Users/magarcia/Dev/blog/pages/post.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



















var schema = Object.assign({}, hast_util_sanitize_lib_github_json__WEBPACK_IMPORTED_MODULE_10__, {
  attributes: Object.assign({}, hast_util_sanitize_lib_github_json__WEBPACK_IMPORTED_MODULE_10__.attributes, {
    code: [].concat(_toConsumableArray(hast_util_sanitize_lib_github_json__WEBPACK_IMPORTED_MODULE_10__.attributes.code || []), ['className'])
  })
});

var Post =
/*#__PURE__*/
function (_Component) {
  _inherits(Post, _Component);

  function Post() {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, _getPrototypeOf(Post).apply(this, arguments));
  }

  _createClass(Post, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          title = _this$props.title,
          year = _this$props.year,
          month = _this$props.month,
          day = _this$props.day,
          readingTime = _this$props.readingTime,
          slug = _this$props.slug;
      var url = "https://magarcia.github.io/".concat(year, "/").concat(month, "/").concat(day, "/").concat(slug);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: _post_module_css__WEBPACK_IMPORTED_MODULE_17___default.a.article,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: _post_module_css__WEBPACK_IMPORTED_MODULE_17___default.a.contentTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MetaInfo__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({
        year: year,
        month: month,
        day: day,
        readingTime: readingTime
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, remark__WEBPACK_IMPORTED_MODULE_7___default()().use(remark_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        sanitize: schema,
        remarkReactComponents: {
          code: remark_react_lowlight__WEBPACK_IMPORTED_MODULE_9___default()({
            ts: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_11___default.a,
            js: highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_12___default.a
          }),
          img: _components_Image__WEBPACK_IMPORTED_MODULE_16__["default"],
          p: function p(_ref) {
            var children = _ref.children;

            if (children[0] === '!(') {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
                src: children[1].props.href,
                title: children[1].props.href,
                frameBorder: "0",
                width: "700",
                height: "394",
                allowFullScreen: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                },
                __self: this
              });
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              },
              __self: this
            }, children);
          }
        }
      }).processSync(content).contents)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SocialShare__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: title,
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var _context$query, id, year, month, day, date, post, document;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context$query = context.query, id = _context$query.id, year = _context$query.year, month = _context$query.month, day = _context$query.day;
                date = moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date(year, month - 1, day)).format('YYYY-MM-DD');
                _context.next = 4;
                return __webpack_require__("./_posts lazy recursive ^\\.\\/.*\\.md$")("./".concat(date, "-").concat(id, ".md"));

              case 4:
                post = _context.sent;
                document = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(post.default);
                return _context.abrupt("return", {
                  slug: id,
                  year: parseInt(year, 10),
                  month: parseInt(month, 10),
                  day: parseInt(day, 10),
                  content: document.content,
                  readingTime: reading_time__WEBPACK_IMPORTED_MODULE_5___default()(document.content).text,
                  title: document.data.title
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(Post, "propTypes", {
  year: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  month: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  day: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  readingTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Post));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.61917004fd6db49cfd8d.hot-update.js.map