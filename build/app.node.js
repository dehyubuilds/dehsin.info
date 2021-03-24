module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.works-list h3 {\n  font-weight: lighter;\n  text-align: center;\n  font-size: 1.4em;\n}\n\n.works-list img.image-eyecatch {\n  width: 100%;\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n  margin-bottom: 1em;\n}\n\n.works-list a > h3 {\n  color: #525252;\n}\n\n.works-list .work-description {\n  margin-bottom: 1em;\n}\n\n.works-meta {\n  display: table;\n  border-collapse: collapse;\n  margin-bottom: 1em;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n  width: 100%;\n  background-color: white;\n}\n\n.works-meta-row {\n  display: table-row\n}\n\n.works-meta-row:not(:last-child) .works-meta-title {\n  border-bottom: 1px solid white;\n}\n\n.works-meta-row:not(:last-child) .works-meta-body {\n  border-bottom: 1px solid #d0d0d0;\n}\n\n.works-meta-title {\n  display: table-cell;\n  font-weight: bold;\n  padding: 0.4em;\n  background-color: rgb(143, 143, 143);\n  color: white;\n}\n\n.works-meta-body {\n  display: table-cell;\n  padding: 0.4em;\n}\n\n.works-meta-body .glyphicon {\n  margin-left: 0.4rem;\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkPageLayout = function (_Component) {
  (0, _inherits3.default)(WorkPageLayout, _Component);

  function WorkPageLayout() {
    (0, _classCallCheck3.default)(this, WorkPageLayout);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPageLayout.__proto__ || (0, _getPrototypeOf2.default)(WorkPageLayout)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPageLayout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'work-detail' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: this.props.eyecatch,
            className: 'image-eyecatch',
            alt: 'cover image'
          })
        ),
        this.props.children
      );
    }
  }]);
  return WorkPageLayout;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

WorkPageLayout.propTypes = {
  title: _propTypes2.default.string.isRequired,
  eyecatch: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};
exports.default = WorkPageLayout;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(18);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(45);

var _Location = __webpack_require__(14);

var _Location2 = _interopRequireDefault(_Location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link() {
    (0, _classCallCheck3.default)(this, Link);
    return (0, _possibleConstructorReturn3.default)(this, (Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).apply(this, arguments));
  }

  (0, _createClass3.default)(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);

      return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ href: to }, props, { onClick: Link.handleClick.bind(this) }),
        children
      );
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = {
  to: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  state: _propTypes2.default.object,
  onClick: _propTypes2.default.func
};

Link.handleClick = function (event) {
  var allowTransition = true;
  var clickResult = void 0;

  if (this.props && this.props.onClick) {
    clickResult = this.props.onClick(event);
  }

  if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
    return;
  }

  if (clickResult === false || event.defaultPrevented === true) {
    allowTransition = false;
  }

  event.preventDefault();

  if (allowTransition) {
    var link = event.currentTarget;
    _Location2.default.push(this.props && this.props.to || link.pathname + link.search, this.props && this.props.state || null);
  }
};

exports.default = Link;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(18);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(47);

var _reactAddonsCssTransitionGroup = __webpack_require__(19);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var FloatedSection = function (_Component) {
  (0, _inherits3.default)(FloatedSection, _Component);

  function FloatedSection() {
    (0, _classCallCheck3.default)(this, FloatedSection);
    return (0, _possibleConstructorReturn3.default)(this, (FloatedSection.__proto__ || (0, _getPrototypeOf2.default)(FloatedSection)).apply(this, arguments));
  }

  (0, _createClass3.default)(FloatedSection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          delay = _props.delay,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['delay', 'children']);

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          transitionName: 'float-transition',
          transitionAppear: true,
          transitionAppearTimeout: 700 + delay,
          transitionEnter: false,
          transitionLeave: false
        },
        [_react2.default.createElement(
          'section',
          (0, _extends3.default)({
            key: 'floated-section',
            className: 'floated-section',
            style: { transitionDelay: delay + 'ms' }
          }, props),
          children
        )]
      );
    }
  }]);
  return FloatedSection;
}(_react.Component);

FloatedSection.propTypes = {
  children: _propTypes2.default.node.isRequired,
  delay: _propTypes2.default.number
};
FloatedSection.defaultProps = {
  delay: 300
};
exports.default = FloatedSection;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ExecutionEnvironment = __webpack_require__(17);

var _createBrowserHistory = __webpack_require__(59);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createMemoryHistory = __webpack_require__(60);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var location = (_ExecutionEnvironment.canUseDOM ? _createBrowserHistory2.default : _createMemoryHistory2.default)();

exports.default = location;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(44);

var _Navigation = __webpack_require__(41);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Link = __webpack_require__(11);

var _Link2 = _interopRequireDefault(_Link);

var _reactBootstrap = __webpack_require__(9);

var _reactAddonsCssTransitionGroup = __webpack_require__(19);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);
    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      var pageId = 'page-' + this.props.path.replace(/\/$/, '').replace(/\//g, '-').substr(1);
      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { className: 'Layout ' + pageId },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 3, className: 'header-left-side' },
            _react2.default.createElement(
              _Link2.default,
              { to: '/', title: 'Link to top page' },
              _react2.default.createElement('img', { src: '/dog-icon.png', width: '120px', alt: 'dog icon' })
            ),
            _react2.default.createElement(
              'h1',
              { className: 'title' },
              'CRAFTZDOG'
            ),
            _react2.default.createElement(_Navigation2.default, { path: this.props.path })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 9 },
            _react2.default.createElement(
              _reactAddonsCssTransitionGroup2.default,
              {
                transitionName: 'page-transition',
                transitionEnterTimeout: 900,
                transitionLeaveTimeout: 300
              },
              [_react2.default.createElement(
                'div',
                { key: this.props.path, className: 'page-container' },
                this.props.children
              )]
            )
          )
        )
      );
    }
  }]);
  return Layout;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

Layout.propTypes = {
  children: _propTypes2.default.element.isRequired,
  path: _propTypes2.default.string.isRequired
};

exports.default = Layout;
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(50);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var NotFoundPage = function (_Component) {
  (0, _inherits3.default)(NotFoundPage, _Component);

  function NotFoundPage(props) {
    (0, _classCallCheck3.default)(this, NotFoundPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NotFoundPage.__proto__ || (0, _getPrototypeOf2.default)(NotFoundPage)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(NotFoundPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (typeof window !== 'undefined') {
        var pathname = window.location.pathname;

        if (pathname.startsWith('/blog')) {
          var redirectTo = 'http://blog.odoruinu.net' + pathname;
          window.location.replace(redirectTo);
          this.setState({ redirectTo: redirectTo });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.redirectTo) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Redirecting...'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: this.state.redirectTo },
              this.state.redirectTo
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'not-found-page' },
          _react2.default.createElement('img', {
            src: '/dog_depressed.png',
            className: 'top-image',
            width: '50%',
            alt: 'Dog depressed'
          }),
          _react2.default.createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }
  }]);
  return NotFoundPage;
}(_react.Component);

exports.default = NotFoundPage;
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var ErrorPage = function (_Component) {
  (0, _inherits3.default)(ErrorPage, _Component);

  function ErrorPage() {
    (0, _classCallCheck3.default)(this, ErrorPage);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Error'
        ),
        _react2.default.createElement(
          'pre',
          null,
          this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
        )
      );
    }
  }]);
  return ErrorPage;
}(_react.Component);

ErrorPage.propTypes = {
  error: _propTypes2.default.instanceOf(Error)
};
exports.default = ErrorPage;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(51);

var _reactBootstrap = __webpack_require__(9);

var _floatedSection = __webpack_require__(12);

var _floatedSection2 = _interopRequireDefault(_floatedSection);

var _Link = __webpack_require__(11);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutPage = function (_Component) {
  (0, _inherits3.default)(AboutPage, _Component);

  function AboutPage() {
    (0, _classCallCheck3.default)(this, AboutPage);
    return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(AboutPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'about' },
        _react2.default.createElement(
          'h2',
          null,
          'Takuya Matsuyama'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Digital Craftsman ( Artist / Developer / Designer )'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'map-marker' }),
          ' Osaka, Japan'
        ),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 200 },
          _react2.default.createElement('img', { className: 'me', src: '/me2.jpg', width: '100%', alt: 'Me' }),
          _react2.default.createElement(
            'div',
            { className: 'right aligned caption' },
            'at',
            ' ',
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.meetup.com/React-Native-London/',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              'React Native London'
            )
          )
        ),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 500 },
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Work'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Takuya is a freelance and a full-stack developer based in Osaka with passion for building digital services/stuffs he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera.'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u30C7\u30B8\u30BF\u30EB\u9818\u57DF\u3092\u4E2D\u5FC3\u306B\u3001\u81EA\u8EAB\u306E\u6B32\u3057\u3044\u3068\u601D\u3063\u305F\u30B5\u30FC\u30D3\u30B9\u3092\u5236\u4F5C\u3002 \u4F01\u753B\u304B\u3089\u30C7\u30B6\u30A4\u30F3\u30FB\u958B\u767A\u30FB\u904B\u7528\u307E\u3067\u5168\u3066\u4E00\u4EBA\u3067\u884C\u3046\u3002 iOS\u306A\u3069\u306E\u30B9\u30DE\u30DB\u30A2\u30D7\u30EA\u304B\u3089\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u307E\u3067\u3001\u6280\u8853\u3084\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u9650\u5B9A\u305B\u305A\u5E45\u5E83\u304F\u6D3B\u52D5\u3002 \u305D\u306E\u508D\u3089\u3001\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u3068\u3057\u3066\u69D8\u3005\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u53C2\u52A0\u3002 \u67A0\u306B\u56DA\u308F\u308C\u305A\u30AA\u30FC\u30C0\u30FC\u30E1\u30A4\u30C9\u3067\u67D4\u8EDF\u306B\u30E2\u30CE\u3092\u4F5C\u308B\u300C\u30AF\u30E9\u30D5\u30C8\u30DE\u30F3\u30B7\u30C3\u30D7\u300D\u3092\u5F97\u610F\u3068\u3059\u308B\u3002'
          )
        ),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 400, className: 'bio' },
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Bio'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'em',
              null,
              '1984'
            ),
            'Born in Osaka, Japan.',
            _react2.default.createElement('br', null),
            '\u5927\u962A\u751F\u307E\u308C'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'em',
              null,
              '2010'
            ),
            'Completed the Master\'s Program in the Graduate School of Information Science at Nara Institute of Science and Technology',
            _react2.default.createElement('br', null),
            '\u5948\u826F\u5148\u7AEF\u79D1\u5B66\u6280\u8853\u5927\u5B66\u9662\u5927\u5B66\u60C5\u5831\u79D1\u5B66\u7814\u7A76\u79D1\u4FEE\u58EB\u8AB2\u7A0B\u4FEE\u4E86'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'em',
              null,
              '2010'
            ),
            'Worked at Yahoo! Japan',
            _react2.default.createElement('br', null),
            '\u30E4\u30D5\u30FC\u682A\u5F0F\u4F1A\u793E\u5165\u793E'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'em',
              null,
              '2012 to present'
            ),
            'Works as a freelance',
            _react2.default.createElement('br', null),
            '\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9'
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'span',
              null,
              'I \u2665'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            'Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning'
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Got some works to request to me?'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            'That\'s great! I\'m available for freelance work, I want to hear about your projects. Please submit your message from',
            ' ',
            _react2.default.createElement(
              _Link2.default,
              { to: '/contact' },
              'the contact form'
            ),
            '.'
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Contact me'
            )
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://twitter.com/craftzdog' },
                'Twitter'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/craftzdog' },
                'GitHub'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'mailto:hi@craftz.dog' },
                'E-mail'
              )
            )
          )
        ),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 300 },
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Why craftzdog?'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'It\'s an abbreviation for \'craftsman\' + \'dog\'. My avatar is dog icon for long time since I\'ve started publishing my works on the internet. I love craftsmanship, I\'d be a craftsman. That\'s why I decided to call myself \'craftsdog\' but this username was already taken by someone on Twitter. So I\'m using craftzdog as my internet identity now.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'My old handle name is \'noradaiko\'. I changed it because it\'s hard to remember especially for non-Japanese speakers.'
          )
        )
      );
    }
  }]);
  return AboutPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

AboutPage.title = 'About';
AboutPage.image = '/me2.jpg';
AboutPage.description = 'Takuya is a freelance and a full-stack developer based in Osaka with passion for building digital services/stuffs he wants.';
exports.default = AboutPage;
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

var _floatedSection = __webpack_require__(12);

var _floatedSection2 = _interopRequireDefault(_floatedSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtPage = function (_Component) {
  (0, _inherits3.default)(ArtPage, _Component);

  function ArtPage() {
    (0, _classCallCheck3.default)(this, ArtPage);
    return (0, _possibleConstructorReturn3.default)(this, (ArtPage.__proto__ || (0, _getPrototypeOf2.default)(ArtPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArtPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'art-list' },
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 300 },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://500px.com/craftzdog' },
              _react2.default.createElement('img', {
                src: '/photos.jpg',
                className: 'image-eyecatch',
                alt: 'my photos'
              }),
              _react2.default.createElement(
                'h3',
                null,
                'Photography',
                _react2.default.createElement('i', { className: 'glyphicon glyphicon-new-window' })
              )
            )
          )
        ),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 500 },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://illust.odoruinu.net/' },
              _react2.default.createElement('img', {
                src: '/cover.jpg',
                className: 'image-eyecatch',
                alt: 'my illustrations'
              }),
              _react2.default.createElement(
                'h3',
                null,
                'Illustrations',
                _react2.default.createElement('i', { className: 'glyphicon glyphicon-new-window' })
              )
            )
          )
        )
      );
    }
  }]);
  return ArtPage;
}(_react.Component);

ArtPage.title = 'Art';
exports.default = ArtPage;
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(11);

var _Link2 = _interopRequireDefault(_Link);

var _reactBootstrap = __webpack_require__(9);

__webpack_require__(53);

var _floatedSection = __webpack_require__(12);

var _floatedSection2 = _interopRequireDefault(_floatedSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'blogs-list' },
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 300 },
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                'a',
                { href: 'https://blog.craftz.dog/' },
                _react2.default.createElement('img', {
                  src: '/blogs/mainblog_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  '\u9031\u4F117\u65E5\u3067\u50CD\u304D\u305F\u3044'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u3057\u3064\u3064\u81EA\u4F5C\u30B5\u30FC\u30D3\u30B9\u958B\u767A\u3057\u306A\u304C\u3089\u98DF\u3063\u3066\u3044\u304D\u305F\u3044\u30D6\u30ED\u30B0'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'My main blog in Japanese'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                'a',
                { href: 'https://blog.inkdrop.info/' },
                _react2.default.createElement('img', {
                  src: '/blogs/workaslife_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Dev as Life'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  'I\u2019d like to quit my freelance career with my solo dev product. Here to share my experiences of this journey with you.'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  '\u82F1\u8A9E\u306E\u30E1\u30A4\u30F3\u30D6\u30ED\u30B0'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 400 },
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                'a',
                { href: 'http://craftzdog.hateblo.jp/' },
                _react2.default.createElement('img', {
                  src: '/blogs/subblog_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  '\u4E01\u5BE7\u306B\u624B\u3092\u629C\u304F'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u30E9\u30A4\u30D5\u30ED\u30B0\u7684\u306A'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'My life logs in Japanese'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component);

WorkPage.title = 'Blogs';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(16);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(58);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(13);

var _extends4 = _interopRequireDefault(_extends3);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(54);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(9);

var _sendEmail2 = __webpack_require__(57);

var _sendEmail3 = _interopRequireDefault(_sendEmail2);

var _loader = __webpack_require__(42);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactPage = function (_Component) {
  (0, _inherits3.default)(ContactPage, _Component);

  function ContactPage(props) {
    (0, _classCallCheck3.default)(this, ContactPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContactPage.__proto__ || (0, _getPrototypeOf2.default)(ContactPage)).call(this, props));

    _this.state = {
      loading: false,
      emailSent: false,
      error: null,
      data: {
        email: '',
        name: '',
        company: '',
        url: '',
        subject: '',
        body: ''
      }
    };
    return _this;
  }

  (0, _createClass3.default)(ContactPage, [{
    key: 'renderLoader',
    value: function renderLoader() {
      if (this.state.loading) {
        return _react2.default.createElement(
          'div',
          { className: 'overlay' },
          _react2.default.createElement(_loader2.default, null)
        );
      }
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit.bind(this) },
        this.renderError(),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Your E-mail Address *'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'email',
            name: 'email',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.email,
            required: true
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Your full name *'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            name: 'name',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.name,
            required: true
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Your company name'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            name: 'company',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.company
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'URL (ex. homepage)'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            name: 'url',
            maxLength: 100,
            placeholder: 'https://',
            onChange: this.handleChange.bind(this),
            value: this.state.data.url
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Subject *'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            name: 'subject',
            maxLength: 100,
            required: true,
            onChange: this.handleChange.bind(this),
            value: this.state.data.subject
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Message *'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            componentClass: 'textarea',
            rows: 8,
            maxLength: 800,
            name: 'body',
            placeholder: 'Hello Takuya..',
            required: true,
            onChange: this.handleChange.bind(this),
            value: this.state.data.body
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'right aligned' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { type: 'submit', bsStyle: 'primary' },
            'Submit'
          )
        ),
        this.renderLoader()
      );
    }
  }, {
    key: 'renderEmailSent',
    value: function renderEmailSent() {
      return _react2.default.createElement(
        'div',
        { className: 'email-sent-section' },
        _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'info' },
          _react2.default.createElement(
            'strong',
            null,
            'Your message has been sent!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Thank you for your contact. I will respond to your email as soon as possible.'
          )
        )
      );
    }
  }, {
    key: 'renderError',
    value: function renderError() {
      var e = this.state.error;

      if (e) {
        return _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'danger' },
          _react2.default.createElement(
            'strong',
            null,
            'Sorry, failed to send an email'
          ),
          _react2.default.createElement(
            'p',
            null,
            e.message
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'contact-page' },
        _react2.default.createElement(
          'div',
          { className: 'content-container' },
          _react2.default.createElement(
            'h2',
            null,
            'Contact me'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Hi! That\'s great you are trying to reach out to me. I\'m available for freelance work, I want to hear about your projects. Please fill below forms and submit.'
          ),
          this.state.emailSent ? this.renderEmailSent() : this.renderForm()
        )
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var data = this.state.data;

      this.setState({
        data: (0, _extends4.default)({}, data, (0, _defineProperty3.default)({}, e.target.name, e.target.value))
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.sendEmail();
    }
  }, {
    key: 'sendEmail',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data, subject, body;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({ loading: true });
                _context.prev = 1;
                data = this.state.data;
                subject = '[Craftzdog Contact Form] ' + data.subject;
                body = '\nName: ' + data.name + '\nFrom: ' + data.email + '\nCompany: ' + data.company + '\nURL: ' + data.url + '\n\n' + data.body + '\n      ';
                _context.next = 7;
                return (0, _sendEmail3.default)(subject, body);

              case 7:
                this.setState({ loading: false, emailSent: true });
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);

                console.error('Failed to send email:', _context.t0);
                this.setState({ loading: false, emailSent: false, error: _context.t0 });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function sendEmail() {
        return _ref.apply(this, arguments);
      }

      return sendEmail;
    }()
  }]);
  return ContactPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

ContactPage.title = 'Contact to Takuya';
ContactPage.image = '/me.jpg';
ContactPage.description = 'Contact form';
exports.default = ContactPage;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(55);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var ContactPage = function (_Component) {
  (0, _inherits3.default)(ContactPage, _Component);

  function ContactPage() {
    (0, _classCallCheck3.default)(this, ContactPage);
    return (0, _possibleConstructorReturn3.default)(this, (ContactPage.__proto__ || (0, _getPrototypeOf2.default)(ContactPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContactPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'h2',
          null,
          'Takuya Matsuyama'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('i', { className: 'fab fa-youtube' }),
            '\xA0 Channel :\xA0',
            _react2.default.createElement(
              'a',
              { href: 'https://www.youtube.com/c/devaslife' },
              'devaslife'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('i', { className: 'fab fa-twitter' }),
            '\xA0 English :\xA0',
            _react2.default.createElement(
              'a',
              { href: 'https://twitter.com/inkdrop_app' },
              '@inkdrop_app'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('i', { className: 'fab fa-twitter' }),
            '\xA0 Japanese :\xA0',
            _react2.default.createElement(
              'a',
              { href: 'https://twitter.com/craftzdog' },
              '@craftzdog'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('i', { className: 'fab fa-instagram' }),
            '\xA0:\xA0',
            _react2.default.createElement(
              'a',
              { href: 'https://www.instagram.com/craftzdog' },
              '@craftzdog'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('i', { className: 'fab fa-github' }),
            '\xA0:\xA0',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/craftzdog' },
              '@craftzdog'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('i', { className: 'fas fa-home' }),
            '\xA0:\xA0',
            _react2.default.createElement(
              'a',
              { href: 'https://www.craftz.dog/' },
              'craftz.dog'
            )
          )
        )
      );
    }
  }]);
  return ContactPage;
}(_react.Component);

ContactPage.title = 'Contact to Takuya';
ContactPage.image = '/me.jpg';
ContactPage.description = 'Contact form';
exports.default = ContactPage;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(56);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Grid, Col, Row } from 'react-bootstrap';

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var IndexPage = function (_Component) {
  (0, _inherits3.default)(IndexPage, _Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);
    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'top-page' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            className: 'top-image',
            src: '/cover2.jpg',
            width: '100%',
            alt: 'cover image'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'top-page--footer' },
          'The source code of this website is available\xA0',
          _react2.default.createElement(
            'a',
            {
              href: 'https://github.com/odoruinu/odoruinu.net-pug',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            'here on GitHub'
          ),
          '.'
        )
      );
    }
  }]);
  return IndexPage;
}(_react.Component);

exports.default = IndexPage;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(7);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        { title: 'amembo', eyecatch: '/works/amembo_eyecatch.png' },
        _react2.default.createElement(
          'h3',
          null,
          _react2.default.createElement('img', { src: '/works/amembo_icon.png', alt: 'image screenshot' })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'amembo'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'div',
            null,
            '\u300CMSN Messenger\u300D\u3068\u9023\u4FC2\u3057\u3066\u7279\u5B9A\u30E6\u30FC\u30B6\u30FC\u3068P2P\u30D5\u30A9\u30EB\u30C0\u5171\u6709\u3067\u304D\u308B\u300CAmembo\u300D'
          ),
          _react2.default.createElement(
            'div',
            null,
            'P2P private file sharing tool supporting MSN Messenger'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip' },
                '\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://www23.atwiki.jp/amembo/' },
                '\u4F7F\u3044\u65B9wiki'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u30D0\u30FC\u30B8\u30E7\u30F3: 0.5.15.123'
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u6700\u7D42\u66F4\u65B0\u65E5: 2008/03/23'
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u5BFE\u5FDCOS: Windows 2000/XP'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-long-description' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              '\u30D5\u30A1\u30A4\u30EB\u8EE2\u9001\u304C\u30B5\u30A4\u30BA\u5236\u9650\u7121\u304F\u9AD8\u901F\u306B\u51FA\u6765\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u8907\u6570\u306E\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u9593\u3067\u540C\u6642\u306B\u901A\u4FE1\u304C\u51FA\u6765\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u7C21\u5358\u63A5\u7D9A\u6A5F\u80FD\u306B\u3088\u308A\u3001\u9762\u5012\u306A\u63A5\u7D9A\u4F5C\u696D\u3092\u81EA\u52D5\u3067\u884C\u3044\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u4E00\u3064\u306E\u30DD\u30FC\u30C8\u958B\u653E\u3060\u3051\u3067\u3001\u69D8\u3005\u306A\u901A\u4FE1\u304C\u51FA\u6765\u308B\u5F37\u529B\u306A\u30D7\u30ED\u30C8\u30B3\u30EB\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              'IM\u6A5F\u80FD\u3092\u88C5\u5099\u3057\u3066\u3044\u307E\u3059\u3002\u4F1A\u8A71\u4E2D\u306B\u5199\u771F\u3092\u8868\u793A\u3057\u305F\u308A\u3082\u3067\u304D\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u30D5\u30A1\u30A4\u30EB\u5171\u6709\u6A5F\u80FD\u3067\u3001\u8A2D\u5B9A\u3057\u305F\u516C\u958B\u30D5\u30A9\u30EB\u30C0\u3092\u76F8\u624B\u306B\u898B\u305B\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              'MSN/Windows\u30E1\u30C3\u30BB\u30F3\u30B8\u30E3\u30FC\u304B\u3089\u306E\u62DB\u5F85\u3067\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u753B\u9762\u8EE2\u9001\u6A5F\u80FD\u3067\u3001\u76F8\u624B\u306B\u81EA\u5206\u306E\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u3092\u898B\u305B\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002'
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          '\u63B2\u8F09\u5B9F\u7E3E'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://www.forest.impress.co.jp/article/2006/01/18/amembo.html',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                '\u7A93\u306E\u675C\u30CB\u30E5\u30FC\u30B9'
              )
            )
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

WorkPage.title = 'Amembo';
WorkPage.image = '/works/amembo_eyecatch.png';
WorkPage.description = 'P2P private file sharing tool supporting MSN Messenger';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        {
          title: WorkPage.title,
          eyecatch: '/works/freedbtagger_eyecatch.png'
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: '/works/freedbtagger_01.jpg',
            className: 'image-screenshot',
            alt: 'image screenshot'
          })
        ),
        _react2.default.createElement(
          'h3',
          null,
          _react2.default.createElement('img', { src: '/works/freedbtagger_icon.gif', alt: 'image screenshot' })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'freeDBTagger'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'div',
            null,
            '\u697D\u66F2\u9577\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u30A2\u30EB\u30D0\u30E0\u3092\u7279\u5B9A\u3057\u3066\u697D\u66F2\u60C5\u5831\u3092\u81EA\u52D5\u5165\u529B'
          ),
          _react2.default.createElement(
            'div',
            null,
            'Automatic Audio File Tagger using FreeDB'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    className: 'link-appstore',
                    href: 'http://odoruinu.net.s3.amazonaws.com/software/freedbtagger/fdbt105.zip'
                  },
                  '\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                '\u30D0\u30FC\u30B8\u30E7\u30F3: 1.0.5'
              ),
              _react2.default.createElement(
                'li',
                null,
                '\u6700\u7D42\u66F4\u65B0\u65E5: 2009/02/16'
              ),
              _react2.default.createElement(
                'li',
                null,
                '\u5BFE\u5FDCOS: Windows 2000/XP'
              )
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u30A2\u30EB\u30D0\u30E0\u5185\u697D\u66F2\u306E\u518D\u751F\u6642\u9593\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u3001CDDB\u30B5\u30FC\u30D0\u30FC\u201CfreeDB.org\u201D\u3092\u691C\u7D22\u3057\u3066\u30A2\u30EB\u30D0\u30E0\u3092\u7279\u5B9A\u3001\u697D\u66F2\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u308BID3\u30BF\u30B0\u4E00\u62EC\u7DE8\u96C6\u30BD\u30D5\u30C8\u3002\u672C\u30BD\u30D5\u30C8\u3092\u8D77\u52D5\u3057\u3001\u8AAD\u307F\u8FBC\u3093\u3060\u30A2\u30EB\u30D0\u30E01\u679A\u5206\u306E\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u306E\u66F2\u9806\u3092\u6574\u3048\u3066\uFF3B\u30A2\u30EB\u30D0\u30E0\u691C\u7D22\uFF3D\u3092\u5B9F\u884C\u3059\u308C\u3070\u3001\u3042\u3068\u306F\u672C\u30BD\u30D5\u30C8\u304C\u3001\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u3067\u904B\u55B6\u3055\u308C\u3066\u3044\u308BCDDB\u30B5\u30FC\u30D0\u30FC\u201CfreeDB.org\u201D\u3067\u518D\u751F\u6642\u9593\u306E\u7D44\u307F\u5408\u308F\u305B\u304B\u3089\u30A2\u30EB\u30D0\u30E0\u3092\u7279\u5B9A\u3057\u3066\u3001\u30A2\u30EB\u30D0\u30E0\u540D\u3084\u66F2\u540D\u3001\u30A2\u30FC\u30C1\u30B9\u30C8\u540D\u306A\u3069\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3057\u3066\u304F\u308C\u308B\u3002MP3/WMA/Ogg Vorbis/AAC/Monkey\'s Audio/MPEGplus/FLAC/Twin VQ/WavPack\u30D5\u30A1\u30A4\u30EB\u306E\u697D\u66F2\u60C5\u5831\u3092\u53D6\u5F97\u30FB\u7DE8\u96C6\u3067\u304D\u308B\u307B\u304B\u3001CDA\u30D5\u30A1\u30A4\u30EB\u306E\u697D\u66F2\u60C5\u5831\u3092\u8868\u793A\u53EF\u80FD\u3002MP3\u30D5\u30A1\u30A4\u30EB\u306E\u30BF\u30B0\u306B\u767B\u9332\u3059\u308B\u5834\u5408\u306E\u30BF\u30B0\u5F62\u5F0F\u306F\u3001ID3v1\u30FBID3v2\u306B\u5BFE\u5FDC\u3057\u3066\u304A\u308A\u3001\u8A2D\u5B9A\u753B\u9762\u3067\u9078\u629E\u53EF\u80FD\u3002\u30BF\u30B0\u9805\u76EE\u5185\u306E\u6587\u5B57\u6570\u304C30\u6587\u5B57\u4EE5\u4E0A\u306E\u5834\u5408\u306E\u307F\u3001ID3v2\u306B\u767B\u9332\u3059\u308B\u6A5F\u80FD\u3082\u5099\u3048\u3066\u3044\u308B\u3002'
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          '\u63B2\u8F09\u5B9F\u7E3E'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://www.forest.impress.co.jp/library/software/freedbtagger/',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                '\u7A93\u306E\u675C\u30E9\u30A4\u30D6\u30E9\u30EA'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          '\u30E6\u30FC\u30B6\u3055\u3093\u306E\u58F0'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'dl',
            null,
            _react2.default.createElement(
              'dt',
              null,
              'FLAC\u306B\u3082\u5BFE\u5FDC - \u3088\u30FC\u3059\u3051\u3055\u3093'
            ),
            _react2.default.createElement(
              'dd',
              null,
              '\u97F3\u8CEA\u306B\u3053\u3060\u308F\u3063\u3066FLAC\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001 \u306A\u304B\u306A\u304B\u30BF\u30B0\u3092\u81EA\u52D5\u3067\u4ED8\u3051\u3089\u308C\u308B\u30BD\u30D5\u30C8\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001 \u3053\u308C\u306FCDDB\u304B\u3089\u66F2\u60C5\u5831\u3092DL\u307E\u3067\u3057\u3066\u304F\u308C\u308B\u306E\u3067\u3001 \u3068\u3066\u3082\u304A\u624B\u8EFD\u7C21\u5358\u3067\u3059\u3002'
            ),
            _react2.default.createElement(
              'dt',
              null,
              'CDDB\u5BFE\u5FDC\u306E\u30BF\u30B0\u30A8\u30C7\u30A3\u30BF - noname_24\u3055\u3093'
            ),
            _react2.default.createElement(
              'dd',
              null,
              '\u7D14\u7C8B\u306A\u30BF\u30B0\u6253\u3061\u30BD\u30D5\u30C8\u3068\u3057\u3066\u306E\u80FD\u529B\u306FSuperTagEditor\u306E\u65B9\u304C\u512A\u79C0\u3067\u3059\u304C\u3053\u306E\u30BD\u30D5\u30C8\u306FCDDB\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u306E\u304C\u6700\u5927\u306E\u5229\u70B9\u3067\u3059 CD\u304B\u3089\u3060\u3051\u3067\u306F\u306A\u304Fmp3\u306A\u3069\u5727\u7E2E\u5F8C\u306E\u72B6\u614B\u304B\u3089\u3067\u3082\u53D6\u5F97\u3067\u304D\u308B\u306E\u3067\u3059\u3067\u306B\u4F5C\u6210\u6E08\u307F\u306E\u66F2\u6574\u7406\u304C\u697D\u306B\u306A\u308A\u307E\u3057\u305F'
            ),
            _react2.default.createElement(
              'dt',
              null,
              '\u6614\u306E\u66F2\u306B\u30BF\u30B0\u3092\u5165\u308C\u308B\u306B\u6700\u9069 - \u308B\u308B\u3055\u3093'
            ),
            _react2.default.createElement(
              'dd',
              null,
              '\u6700\u8FD1\u306E\u30EA\u30C3\u30D4\u30F3\u30B0\u30BD\u30D5\u30C8\u3067\u3042\u308C\u3070\u81EA\u52D5\u3067\u66F2\u540D\u3092\u6301\u3063\u3066\u304D\u3066\u304F\u308C\u307E\u3059\u304C\u4EE5\u524D\u30EA\u30C3\u30D4\u30F3\u30B0\u3057\u305F\u307E\u307E\u3067\u30BF\u30B0\u304C\u4ED8\u3044\u3066\u306A\u3044\u66F2\u306B\u30BF\u30B0\u3092\u4ED8\u3051\u308B\u306E\u306B\u306F\u6700\u9069\u3067\u3059\u3002 \u53C2\u7167\u3057\u3066\u3044\u308BCDDB\u306B\u3064\u3044\u3066\u3082\u304B\u306A\u308A\u30DE\u30A4\u30CA\u30FC\u306A\u3082\u306E\u307E\u3067\u66F2\u540D\u3092\u62FE\u3063\u3066\u304F\u308C\u308B\u306E\u3067\u3073\u3063\u304F\u308A\u3057\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'dt',
              null,
              '2 in 1 - \u30DE\u30EB\u3061\u3083\u3093\u3055\u3093'
            ),
            _react2.default.createElement(
              'dd',
              null,
              '\u30BF\u30B0\u7DE8\u96C6\u306F\u3044\u308D\u3044\u308D\u306A\u30BD\u30D5\u30C8\u304C\u51FA\u3066\u3044\u307E\u3059\u304C\u3001DB\u304B\u3089\u60C5\u5831\u3092\u62FE\u3063\u3066\u304F\u308C\u308B\u6A5F\u80FD\u4ED8\u3067\u306F\u3001\u3053\u306E\u30BD\u30D5\u30C8\u304C\u6700\u9AD8\u3067\u3059\u3002 \u64CD\u4F5C\u3082\u7C21\u5358\u3067\u3001\u624B\u653E\u305B\u307E\u305B\u3093\u3002'
            ),
            _react2.default.createElement(
              'dt',
              null,
              '\u4FBF\u5229 - Masaki4\u3055\u3093'
            ),
            _react2.default.createElement(
              'dd',
              null,
              '\u666E\u901ACDDB\u3068\u3044\u3046\u3068CD\u3092\u5165\u308C\u305F\u72B6\u614B\u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u304D\u307E\u3059\u304C\u3001\u3053\u306E\u30BD\u30D5\u30C8\u306FMP3\u306A\u3069\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u306A\u3063\u3066\u3044\u3066\u3082\u4F7F\u3048\u307E\u3059\u3002\uFF08\u3082\u3061\u308D\u3093\u3001CD\u306E\u901A\u308A\u306B\u66F2\u3092\u4E26\u3079\u306A\u3051\u308C\u3070\u3044\u3051\u307E\u305B\u3093\u304C\u30FB\u30FB\u30FB\uFF09 \u305F\u3060\u3001\u307B\u3093\u306E\u3061\u3087\u3063\u3068\u4E0D\u5B89\u5B9A\u3055\u3092\u611F\u3058\u305F\u306E\u3067\uFF14\u3064...'
            )
          ),
          _react2.default.createElement(
            'a',
            {
              href: 'http://www.vector.co.jp/soft/cmt/win95/art/se350576.html',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            'Vector\u3088\u308A'
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

WorkPage.title = 'freeDBTagger';
WorkPage.image = '/works/freedbtagger_eyecatch.png';
WorkPage.description = 'Automatic Audio File Tagger using FreeDB';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(11);

var _Link2 = _interopRequireDefault(_Link);

var _reactBootstrap = __webpack_require__(9);

__webpack_require__(7);

var _floatedSection = __webpack_require__(12);

var _floatedSection2 = _interopRequireDefault(_floatedSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'works-list' },
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 300 },
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                _Link2.default,
                { to: '/works/inkdrop' },
                _react2.default.createElement('img', {
                  src: '/works/inkdrop_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Inkdrop'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  'Markdown\u611B\u597D\u8005\u306E\u305F\u3081\u306E\u30CE\u30FC\u30C8\u30A2\u30D7\u30EA'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'The Notebook App for Markdown Lovers'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                _Link2.default,
                { to: '/works/walknote' },
                _react2.default.createElement('img', {
                  src: '/works/walknote_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  'walknote'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u597D\u307F\u3092\u7406\u89E3\u3057\u3066\u63A8\u85A6\u3059\u308B\u7121\u6599\u3067\u8074\u304D\u653E\u984C\u306A\u97F3\u697D\u30D7\u30EC\u30FC\u30E4\u30FC'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'Free music discovery player for iOS'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 400 },
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                _Link2.default,
                { to: '/works/the-four-painters' },
                _react2.default.createElement('img', {
                  src: '/works/the-four-painters_eyecatch.jpg',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  'the four painters'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u5B9F\u5199\u6620\u50CF\u3092\u4EBA\u5DE5\u77E5\u80FD\u300C\u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u300D\u3067\u30B4\u30C3\u30DB\u3084\u845B\u98FE\u5317\u658E\u3063\u307D\u304F\u5909\u63DB\u3057\u305F\u6620\u50CF\u4F5C\u54C1'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'The four painters: A Video Work Created with Deep Learning'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                _Link2.default,
                { to: '/works/menkiki' },
                _react2.default.createElement('img', {
                  src: '/works/menkiki_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  '\u9EBA\u5229\u304D'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u3089\u30FC\u3081\u3093\u5199\u771F\u306B\u57FA\u3065\u3044\u3066\u304A\u5E97\u3092\u63D0\u793A\u3059\u308B\u3001\u3089\u30FC\u3081\u3093\u5C4B\u63A8\u85A6\u30A2\u30D7\u30EA'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'The app which can show ramen shops based on a photo of ramen you want to eat'
                )
              )
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 500 },
          _react2.default.createElement(
            'h2',
            null,
            'Collaborations'
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                _Link2.default,
                { to: '/works/modetokyo' },
                _react2.default.createElement('img', {
                  src: '/works/modetokyo_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  'mode.tokyo'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u65E5\u672C\u306E\u30E2\u30FC\u30C9\u3092\u4E16\u754C\u306B\u767A\u4FE1\u3059\u308B\u96D1\u8A8C'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'The mode magazine for understanding to personally enjoy Japan'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                _Link2.default,
                { to: '/works/styly' },
                _react2.default.createElement('img', {
                  src: '/works/styly_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  'STYLY'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u30D6\u30E9\u30F3\u30C9\u306E\u305F\u3081\u306EVR\u30C4\u30FC\u30EB'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'VR Creative tools for fashion brand'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _floatedSection2.default,
          { delay: 600 },
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'h2',
            null,
            'Old works'
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                _Link2.default,
                { to: '/works/pichu2' },
                _react2.default.createElement('img', {
                  src: '/works/pichu2_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  'pichu*pichu'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  'iPhone Safari\u7528Twitter\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'Twitter client app for iPhone Safari'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2.default.createElement(
                _Link2.default,
                { to: '/works/freedbtagger' },
                _react2.default.createElement('img', {
                  src: '/works/freedbtagger_eyecatch.png',
                  className: 'image-eyecatch'
                }),
                _react2.default.createElement(
                  'h3',
                  null,
                  'freeDBTagger'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'work-description' },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u697D\u66F2\u9577\u306E\u7D44\u307F\u5408\u308F\u305B\u3067\u30A2\u30EB\u30D0\u30E0\u3092\u7279\u5B9A\u3057\u3066\u697D\u66F2\u60C5\u5831\u3092\u81EA\u52D5\u5165\u529B'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'Automatic Audio File Tagger using FreeDB'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              _Link2.default,
              { to: '/works/amembo' },
              _react2.default.createElement('img', {
                src: '/works/amembo_eyecatch.png',
                className: 'image-eyecatch'
              }),
              _react2.default.createElement(
                'h3',
                null,
                'amembo'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'work-description' },
              _react2.default.createElement(
                'div',
                null,
                '\u300CMSN Messenger\u300D\u3068\u9023\u4FC2\u3057\u3066\u7279\u5B9A\u30E6\u30FC\u30B6\u30FC\u3068P2P\u30D5\u30A9\u30EB\u30C0\u5171\u6709\u3067\u304D\u308B\u300CAmembo\u300D'
              ),
              _react2.default.createElement(
                'div',
                null,
                'P2P private file sharing tool supporting MSN Messenger'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('hr', null),
          '\u968F\u6642\u66F4\u65B0'
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

WorkPage.title = 'Works';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        {
          title: WorkPage.title,
          eyecatch: '/works/inkdrop_eyecatch.png'
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: '/works/inkdrop_02.jpg',
            className: 'image-screenshot',
            alt: 'image screenshot'
          })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Inkdrop (2016-)'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'div',
            null,
            'Markdown\u597D\u304D\u306E\u305F\u3081\u306E\u30CE\u30FC\u30C8\u30A2\u30D7\u30EA'
          ),
          _react2.default.createElement(
            'div',
            null,
            'The Notebook App Made for Markdown Lovers'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'works-meta' },
            _react2.default.createElement(
              'div',
              { className: 'works-meta-row' },
              _react2.default.createElement(
                'div',
                { className: 'works-meta-title' },
                'Website'
              ),
              _react2.default.createElement(
                'div',
                { className: 'works-meta-body' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://inkdrop.app/' },
                  'inkdrop.app',
                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-new-window' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'works-meta-row' },
              _react2.default.createElement(
                'div',
                { className: 'works-meta-title' },
                'Platform'
              ),
              _react2.default.createElement(
                'div',
                { className: 'works-meta-body' },
                'Windows/macOS/Linux/iOS/Android'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-long-description' },
          _react2.default.createElement(
            'div',
            { className: 'works-meta' },
            _react2.default.createElement(
              'div',
              { className: 'works-meta-row' },
              _react2.default.createElement(
                'div',
                { className: 'works-meta-title' },
                'Blogpost'
              ),
              _react2.default.createElement(
                'div',
                { className: 'works-meta-body' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://blog.inkdrop.info/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820' },
                  'How I\u2019ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo',
                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-new-window' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'works-meta-row' },
              _react2.default.createElement(
                'div',
                { className: 'works-meta-title' },
                '\u30D6\u30ED\u30B0\u8A18\u4E8B'
              ),
              _react2.default.createElement(
                'div',
                { className: 'works-meta-body' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://blog.craftz.dog/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-4111ddad9f50' },
                  '\u67085\u30C9\u30EB\u306E\u81EA\u4F5C\u30B5\u30FC\u30D3\u30B9\u3067\u6700\u521D\u306E500\u4EBA\u3092\u96C6\u3081\u308B\u307E\u3067\u306B\u3084\u3063\u305F\u3053\u3068',
                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-new-window' })
                )
              )
            )
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

WorkPage.title = 'Inkdrop';
WorkPage.image = '/works/inkdrop_eyecatch.png';
WorkPage.description = 'The Notebook App Made for Markdown Lovers';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(9);

__webpack_require__(7);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        {
          title: WorkPage.title,
          eyecatch: '/works/menkiki_eyecatch.png'
        },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', {
                src: '/works/menkiki_01.png',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', {
                src: '/works/menkiki_02.png',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          '\u9EBA\u5229\u304D (Ramelier) (2015)'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'div',
            null,
            '\u3089\u30FC\u3081\u3093\u5199\u771F\u306B\u57FA\u3065\u3044\u3066\u304A\u5E97\u3092\u63D0\u793A\u3059\u308B\u3001\u3089\u30FC\u3081\u3093\u5C4B\u63A8\u85A6\u30A2\u30D7\u30EA'
          ),
          _react2.default.createElement(
            'div',
            null,
            'The app which can show ramen shops based on picture of ramens you want to eat'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'link-appstore',
                href: 'https://itunes.apple.com/app/\u9EBA\u5229\u304D/id1035645520?mt=8'
              },
              _react2.default.createElement('img', {
                src: '/works/appstore.png',
                className: 'image-appstore',
                alt: 'appstore'
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-long-description' },
          _react2.default.createElement(
            'p',
            null,
            'Ramelier suggests ramen(Chinese noodle) shops based on a photo of ramen you want to eat. You don\'t need to know Japanese keywords to search shops, just choose a picture of it and the app will find appropriate shops for you. It supports 900+ famous ramen shops in Japan!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'So you can check a shop info as soon as you found a good ramen shop in a food magazine.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Let\'s go out and eat delicious ramen!'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Ramen shop recommendation based on photo'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Show shops near your current location'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Open in Tabelog/Foursquare'
              )
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            '\u5199\u771F\u3067\u300C\u3053\u3093\u306A\u611F\u3058\uFF01\u300D\u304C\u4F1D\u3048\u3089\u308C\u308B\u65B0\u3057\u3044\u63A2\u3057\u65B9'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u98DF\u3079\u3066\u304A\u3044\u3057\u304B\u3063\u305F\u3089\u30FC\u3081\u3093\u3001\u3042\u308A\u307E\u3059\u3088\u306D\u3002 \u305D\u306E\u5199\u771F\u3092\u30A2\u30D7\u30EA\u306B\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3059\u308B\u3068\u3001\u30A2\u30D7\u30EA\u304C\u4F3C\u305F\u96F0\u56F2\u6C17\u306E\u3089\u30FC\u3081\u3093\u3092\u51FA\u3059\u30E9\u30FC\u30E1\u30F3\u5C4B\u3092\u63A2\u3057\u307E\u3059\u3002'
          ),
          _react2.default.createElement(
            'h4',
            null,
            '\u958B\u767A\u306B\u306F30\u4E07\u679A\u306E\u3089\u30FC\u3081\u3093\u753B\u50CF\u3092\u4F7F\u7528'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u958B\u767A\u306B\u306F\u3001\u6700\u8FD1\u4F55\u304B\u3068\u8A71\u984C\u306E\u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u3068\u3044\u3046\u6A5F\u68B0\u5B66\u7FD2\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u4E00\u3064\u3092\u4F7F\u7528\u3057\u307E\u3057\u305F\u3002 \u63A8\u85A6\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u305F\u3081\u306B\u300130\u4E07\u679A\u306E\u3089\u30FC\u3081\u3093\u753B\u50CF\u3092\u96C6\u3081\u3066\u5B66\u7FD2\u3055\u305B\u307E\u3057\u305F\u3002 \u3064\u307E\u308A\u3001\u3053\u306E\u30A2\u30D7\u30EA\u306F\u300C\u3089\u30FC\u3081\u3093\u3068\u306F\u4F55\u304B\u300D\u3092\u7406\u89E3\u3057\u3066\u3044\u308B\u306E\u3067\u3059\uFF01\uFF08\u3069\u30FC\u3093\uFF09'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'http://sssslide.com/speakerdeck.com/noradaiko/caffedeoshou-qing-ben-ge-deipuraninguiosapuri',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            '\u6280\u8853\u7684\u306A\u89E3\u8AAC'
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component);

WorkPage.title = '麺利き';
WorkPage.image = '/works/menkiki_eyecatch.png';
WorkPage.description = 'The app which can show ramen shops based on a photo of ramen you want to eat';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(9);

__webpack_require__(7);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        {
          title: WorkPage.title,
          eyecatch: '/works/modetokyo_eyecatch.png'
        },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              'a',
              { href: '/works/modetokyo_01.png', target: '_blank' },
              _react2.default.createElement('img', {
                src: '/works/modetokyo_01.png',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              'a',
              { href: '/works/modetokyo_02.png', target: '_blank' },
              _react2.default.createElement('img', {
                src: '/works/modetokyo_02.png',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              'a',
              { href: '/works/modetokyo_03.png', target: '_blank' },
              _react2.default.createElement('img', {
                src: '/works/modetokyo_03.jpg',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          'mode.tokyo (2016)'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'div',
            null,
            '\u65E5\u672C\u306E\u30E2\u30FC\u30C9\u3092\u4E16\u754C\u306B\u767A\u4FE1\u3059\u308B\u96D1\u8A8C'
          ),
          _react2.default.createElement(
            'div',
            null,
            'The mode magazine for understanding to personally enjoy Japan'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://www.mode.tokyo/' },
                '\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-long-description' },
          _react2.default.createElement(
            'p',
            null,
            '\u96FB\u5B50\u7248\u3068\u3057\u3066iOS\u30A2\u30D7\u30EA\u3092\u62C5\u5F53\u3002\u65E5\u82F1\u4ECF\u5BFE\u5FDC\u3002 \u304D\u3085\u3093\u304F\u3093\u3084\u30E9\u30D6\u30EA\u30FC\u30B5\u30DE\u30FC\u3061\u3083\u3093\u306A\u3069\u3092\u8A8C\u9762\u3067\u53D6\u308A\u4E0A\u3052\u3066\u3044\u308B\u3002 \u672C\u96D1\u8A8C\u306FISID\u30A4\u30CE\u30E9\u30DC\u69D8\u3068\u89D2\u5DDD\u30A2\u30B9\u30AD\u30FC\u7DCF\u5408\u7814\u7A76\u6240\u69D8\u306E\u5171\u540C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://www.isid.co.jp/news/2015/0930.html' },
                'ISID\u3001\u30E1\u30C7\u30A3\u30A2\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u5916\u56FD\u4EBA\u5BCC\u88D5\u5C64\u306E\u8A2A\u65E5\u884C\u52D5\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3092\u53EF\u8996\u5316\u3059\u308B\u7814\u7A76\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u59CB\u52D5\uFF082015\u5E7409\u670830\u65E5\uFF09\uFF1A\u30D7\u30EC\u30B9\u30EA\u30EA\u30FC\u30B9| ISID'
              )
            )
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component);

WorkPage.title = 'mode.tokyo';
WorkPage.image = '/works/modetokyo_eyecatch.png';
WorkPage.description = 'The mode magazine for understanding to personally enjoy Japan';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(9);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        {
          title: WorkPage.title,
          eyecatch: '/works/pichu2_eyecatch.png'
        },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              'h3',
              null,
              'pichu*pichu'
            ),
            _react2.default.createElement(
              'div',
              { className: 'work-description' },
              _react2.default.createElement(
                'div',
                null,
                'iPhone Safari\u7528Twitter\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8'
              ),
              _react2.default.createElement(
                'div',
                null,
                'Twitter client app for iPhone Safari'
              ),
              _react2.default.createElement(
                'div',
                null,
                '\u5236\u4F5C\u6642\u671F: 2010\u5E74\u9803'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'work-long-description' },
              _react2.default.createElement(
                'p',
                null,
                'Twitter\u9ECE\u660E\u671F\u3001iPhone 3GS\u6642\u4EE3\u306E\u5F53\u6642\u3068\u3057\u3066\u306F\u73CD\u3057\u3044Web\u7248\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3002 \u5927\u5B66\u9662\u3067\u306E\u7814\u7A76\u76EE\u7684\u3067\u5236\u4F5C\u3002 \u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2\u3092\u901A\u3058\u305F\u5229\u7528\u884C\u52D5\u3092\u5206\u6790\u3057\u305F\u3002'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              '\u63B2\u8F09\u5B9F\u7E3E'
            ),
            _react2.default.createElement(
              'div',
              { className: 'work-description' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    {
                      href: 'http://www.donpy.net/standard-entry/app-reiview/4303.html',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    },
                    'Web\u30A2\u30D7\u30EA\u7248twitter\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u300Cpichu*pichu\u300D\u304C\u51C4\u3044\u3002 | \u899A\u9192\u3059\u308B @CDiP'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    {
                      href: 'http://labs.laurahouse.net/articles/iphone/1115.html',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    },
                    'LauraHouse Labs \xBB Blog Archive \xBB \u77E5\u3063\u3066\u304A\u304D\u305F\u3044Web\u30A2\u30D7\u30EA\u7248Twitter\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u6D3B\u7528\u6CD5'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement('img', {
              src: '/works/pichu2_01.png',
              className: 'image-screenshot',
              alt: 'image screenshot'
            })
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component);

WorkPage.title = 'pichu*pichu';
WorkPage.image = '/works/pichu2_eyecatch.png';
WorkPage.description = 'Twitter client app for iPhone Safari';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(7);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        {
          title: WorkPage.title,
          eyecatch: '/works/styly_eyecatch.png'
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: '/works/styly_01.png',
            className: 'image-screenshot',
            alt: 'image screenshot'
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: '/works/styly_02.png',
            className: 'image-screenshot',
            alt: 'image screenshot'
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: '/works/styly_03.png',
            className: 'image-screenshot',
            alt: 'image screenshot'
          })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'STYLY (2017, Psychic VR Lab)'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'div',
            null,
            '\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u30D6\u30E9\u30F3\u30C9\u306E\u305F\u3081\u306EVR\u30C4\u30FC\u30EB'
          ),
          _react2.default.createElement(
            'div',
            null,
            'VR Creative tools for fashion brand'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://suite.styly.cc/' },
                'Website'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-long-description' },
          _react2.default.createElement(
            'p',
            null,
            '\u4E3B\u306B\u30E6\u30FC\u30B6\u8A8D\u8A3C\u30FB\u30A2\u30BB\u30C3\u30C8\u9078\u629E\u306A\u3069\u306EUI\u3068\u3001\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u62C5\u5F53\u3002'
          ),
          _react2.default.createElement(
            'p',
            null,
            'This is a VR tool for building virtual space towards extending fashion brand\'s expression ability of their concept. I developed its web UIs and backend.'
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

WorkPage.title = 'STYLY';
WorkPage.image = '/works/styly_eyecatch.png';
WorkPage.description = 'VR Creative tools for fashion brand';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(7);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        {
          title: WorkPage.title,
          eyecatch: '/works/the-four-painters_eyecatch.jpg'
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('iframe', {
            src: 'https://player.vimeo.com/video/146373709',
            width: '100%',
            height: '400',
            frameBorder: '0',
            allowFullScreen: true
          })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'the four painters (2015)'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'div',
            null,
            '\u5B9F\u5199\u6620\u50CF\u3092\u4EBA\u5DE5\u77E5\u80FD\u300C\u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u300D\u3067\u30B4\u30C3\u30DB\u3084\u845B\u98FE\u5317\u658E\u3063\u307D\u304F\u5909\u63DB\u3057\u305F\u6620\u50CF\u4F5C\u54C1'
          ),
          _react2.default.createElement(
            'div',
            null,
            'The four painters: A Video Work Created with Deep Learning'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                '\u89E3\u8AAC\u8A18\u4E8B'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://blog.odoruinu.net/2015/12/23/the-four-painters-a-video-work-created-with-deep-learning/',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'How it\'s created'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          '\u63B2\u8F09\u5B9F\u7E3E'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://gigazine.net/news/20151224-deep-learning-four-painters/',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                '\u5B9F\u5199\u6620\u50CF\u3092\u4EBA\u5DE5\u77E5\u80FD\u300C\u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u300D\u3067\u30B4\u30C3\u30DB\u3084\u845B\u98FE\u5317\u658E\u3063\u307D\u304F\u5909\u63DB\u3057\u305F\u300Cthe four painters\u300D - Gigazine\u69D8'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'https://news.ycombinator.com/item?id=10782289',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'The Four Painters: A Video Work Created with Deep Learning - Hacker News'
              )
            )
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

WorkPage.title = 'The Four Painters';
WorkPage.image = '/works/the-four-painters_eyecatch.png';
WorkPage.description = 'A Video Work Created with Deep Learning';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(9);

var _workPageLayout = __webpack_require__(8);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var WorkPage = function (_Component) {
  (0, _inherits3.default)(WorkPage, _Component);

  function WorkPage() {
    (0, _classCallCheck3.default)(this, WorkPage);
    return (0, _possibleConstructorReturn3.default)(this, (WorkPage.__proto__ || (0, _getPrototypeOf2.default)(WorkPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _workPageLayout2.default,
        {
          title: WorkPage.title,
          eyecatch: '/works/walknote_eyecatch.png'
        },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', {
                src: '/works/walknote_01.png',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', {
                src: '/works/walknote_02.png',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: '/works/walknote_05.png',
            className: 'image-screenshot',
            alt: 'image screenshot'
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: '/works/walknote_03.png',
            className: 'image-screenshot',
            alt: 'image screenshot'
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', {
            src: '/works/walknote_04.png',
            className: 'image-screenshot',
            alt: 'image screenshot'
          })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'walknote (2011-2016)'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'div',
            null,
            '\u597D\u307F\u3092\u7406\u89E3\u3057\u3066\u63A8\u85A6\u3059\u308B\u7121\u6599\u3067\u8074\u304D\u653E\u984C\u306A\u97F3\u697D\u30D7\u30EC\u30FC\u30E4\u30FC'
          ),
          _react2.default.createElement(
            'div',
            null,
            'Free music discovery player for iOS'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-long-description' },
          _react2.default.createElement(
            'p',
            null,
            '13\u4E07\u4EBA\u8D85\u304C\u4F7F\u3046\u97F3\u697D\u30A2\u30D7\u30EA\u3002 \u3042\u306A\u305F\u306EiPhone\u306B\u5165\u3063\u3066\u3044\u308B\u66F2\u304B\u3089\u597D\u307F\u3092\u7406\u89E3\u3057\u3066\u3001\u65B0\u3057\u3044\u66F2\u3092\u63D0\u793A\u3002 \u307E\u308B\u3067\u30E9\u30B8\u30AA\u306E\u3088\u3046\u306B\u63A8\u85A6\u66F2\u3092\u8074\u3044\u3066\u697D\u3057\u3081\u308B\uFF01'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u203B\u672C\u30B5\u30FC\u30D3\u30B9\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F\u3002 \u8A73\u7D30\u306F',
            _react2.default.createElement(
              'a',
              { href: 'http://blog.odoruinu.net/2016/09/06/farewell-from-walknote/' },
              '\u3053\u3061\u3089'
            ),
            '\u3002'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-long-description' },
          _react2.default.createElement(
            'p',
            null,
            'walknote recommends new music you may like based on your music preferences by recognizing your favorite songs stored in your device. You can listen to recommended music just like a radio!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'This service has been closed. Thank you for over 130,000 registered users!'
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          '\u63B2\u8F09\u5B9F\u7E3E'
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-description' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://renewal49.hateblo.jp/entry/20120710/1341925681',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                '\u5F37\u529B\u3059\u304E\u3066\u7D39\u4ECB\u3057\u305D\u3073\u308C\u3066\u3044\u305F\u97F3\u697D\u597D\u304D\u306E\u305F\u3081\u306E\u795E\u30A2\u30D7\u30EA\u300Ewalknote\u300F - \u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u5F0F\u69D8'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://www.appbank.net/2011/10/15/iphone-application/309349.php',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'walknote: CD\u5C4B\u306E\u8A66\u8074\u6A5F\u304C\u3001\u81EA\u5206\u5411\u3051\u306B\u306A\u3063\u3066\u624B\u5143\u306B\u5230\u7740\u3002\u305D\u3093\u306A\u66F2\u63A2\u3057\u30A2\u30D7\u30EA\u3002\u7121\u6599\u3002 - appbank\u69D8'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                '\u304A\u3059\u3059\u3081\u306E\u97F3\u697D\u3092\u30EC\u30B3\u30E1\u30F3\u30C9\uFF01\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0\u518D\u751F\u3057\u3066\u304F\u308C\u308BiPhone\u30A2\u30D7\u30EA\u300Cwalknote\u300D\u304C\u7D20\u6575\u3002 - \u7537\u5B50\u30CF\u30C3\u30AF\u69D8'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                '\u300CYOU\u3001\u3053\u308C\u8074\u3044\u3061\u3083\u3044\u306A\u3088\u300D\u81EA\u5206\u597D\u307F\u306E\u66F2\u304C\u52DD\u624B\u306B\u96C6\u307E\u308B\u97F3\u697D\u30D7\u30EC\u30FC\u30E4\u30FC\u300Ewalknote\u300F - \u30BF\u30D6\u30ED\u30A4\u30C9\u69D8'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              '\u305D\u306E\u4ED6\u3001\u591A\u6570'
            )
          )
        )
      );
    }
  }]);
  return WorkPage;
}(_react.Component);

WorkPage.title = 'walknote';
WorkPage.image = '/works/walknote_eyecatch.png';
WorkPage.description = 'Free music discovery player for iOS';
exports.default = WorkPage;
module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(46);

var _Link = __webpack_require__(11);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

function NavigationLink(_ref) {
  var to = _ref.to,
      path = _ref.path,
      children = _ref.children;

  var isActive = to === path ? ' active' : '';
  return _react2.default.createElement(
    _Link2.default,
    { className: 'Navigation-link' + isActive, to: to, role: 'menuitem' },
    children
  );
}
NavigationLink.propTypes = {
  to: _propTypes2.default.string.isRequired,
  path: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

function Navigation(props) {
  var path = props.path;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      { className: 'Navigation', role: 'menu' },
      _react2.default.createElement(
        'li',
        { className: 'Navigation-item' },
        _react2.default.createElement(
          NavigationLink,
          { path: path, to: '/about' },
          'About'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'Navigation-item' },
        _react2.default.createElement(
          NavigationLink,
          { path: path, to: '/works/' },
          'Works'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'Navigation-item' },
        _react2.default.createElement(
          NavigationLink,
          { path: path, to: '/blogs' },
          'Blogs'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'Navigation-item' },
        _react2.default.createElement(
          NavigationLink,
          { path: path, to: '/art' },
          'Art'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'Navigation-icon-group' },
      _react2.default.createElement(
        'a',
        {
          className: 'Navigation-link Navigation-icon',
          href: 'https://www.instagram.com/craftzdog/',
          title: 'Instagram'
        },
        _react2.default.createElement('i', { className: 'fab fa-instagram' })
      ),
      _react2.default.createElement(
        'a',
        {
          className: 'Navigation-link Navigation-icon',
          href: 'https://github.com/craftzdog',
          title: 'GitHub'
        },
        _react2.default.createElement('i', { className: 'fab fa-github' })
      ),
      _react2.default.createElement(
        'a',
        {
          className: 'Navigation-link Navigation-icon',
          href: 'https://twitter.com/craftzdog',
          title: 'Twitter'
        },
        _react2.default.createElement('i', { className: 'fab fa-twitter' })
      ),
      _react2.default.createElement(
        'a',
        {
          className: 'Navigation-link Navigation-icon',
          href: 'https://www.youtube.com/c/devaslife',
          title: 'YouTube channel'
        },
        _react2.default.createElement('i', { className: 'fab fa-youtube' })
      )
    )
  );
}
Navigation.propTypes = {
  path: _propTypes2.default.string
};

exports.default = Navigation;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var Loader = function (_Component) {
  (0, _inherits3.default)(Loader, _Component);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'loader' });
    }
  }]);
  return Loader;
}(_react.Component);

exports.default = Loader;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(16);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ExecutionEnvironment = __webpack_require__(17);

var _Location = __webpack_require__(14);

var _Location2 = _interopRequireDefault(_Location);

var _Layout = __webpack_require__(20);

var _Layout2 = _interopRequireDefault(_Layout);

var _reactHotLoader = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var routes = {
  '/404': function _() {
    return __webpack_require__(21);
  }, '/500': function _() {
    return __webpack_require__(22);
  }, '/about': function about() {
    return __webpack_require__(23);
  }, '/art': function art() {
    return __webpack_require__(24);
  }, '/blogs': function blogs() {
    return __webpack_require__(25);
  }, '/contact': function contact() {
    return __webpack_require__(26);
  }, '/followme': function followme() {
    return __webpack_require__(27);
  }, '/': function _() {
    return __webpack_require__(28);
  }, '/works/amembo': function worksAmembo() {
    return __webpack_require__(29);
  }, '/works/freedbtagger': function worksFreedbtagger() {
    return __webpack_require__(30);
  }, '/works/': function works() {
    return __webpack_require__(31);
  }, '/works/inkdrop': function worksInkdrop() {
    return __webpack_require__(32);
  }, '/works/menkiki': function worksMenkiki() {
    return __webpack_require__(33);
  }, '/works/modetokyo': function worksModetokyo() {
    return __webpack_require__(34);
  }, '/works/pichu2': function worksPichu2() {
    return __webpack_require__(35);
  }, '/works/styly': function worksStyly() {
    return __webpack_require__(36);
  }, '/works/the-four-painters': function worksTheFourPainters() {
    return __webpack_require__(37);
  }, '/works/walknote': function worksWalknote() {
    return __webpack_require__(38);
  } // Auto-generated on build. See tools/lib/routes-loader.js

};var route = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(path, callback) {
    var handler, component, rootNode;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            handler = routes[path] || routes['/404'];
            _context.next = 3;
            return handler();

          case 3:
            component = _context.sent;

            if (component.default) {
              component = component.default;
            }
            rootNode =  false ? _react2.default.createElement(
              _Layout2.default,
              { path: path },
              _react2.default.createElement(component)
            ) : _react2.default.createElement(
              _reactHotLoader.AppContainer,
              null,
              _react2.default.createElement(
                _Layout2.default,
                { path: path },
                _react2.default.createElement(component)
              )
            );

            if (false) {
              module.hot.accept();
            }
            _context.next = 9;
            return callback(rootNode, component);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function route(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function render(location, action) {
  var _this = this;

  var container = document.getElementById('app');
  route(location.pathname, function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(component) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _reactDom2.default.render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview', location.pathname);
              });
              if (action === 'PUSH') {
                window.scrollTo(0, 0);
              }

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
}

function run() {
  _Location2.default.listen(render);
  render(_Location2.default.location, _Location2.default.action);
}

if (_ExecutionEnvironment.canUseDOM) {
  // Run the application when both DOM is ready and page content is loaded
  if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    run();
  } else {
    document.addEventListener('DOMContentLoaded', run, false);
  }
}

exports.default = { route: route, routes: routes };
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: rgb(253, 250, 247);\n  color: #525252;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\nbody {\n  padding: 12vmin 0;\n}\n\n.container {\n  max-width: 900px;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n\n.Layout {\n  font-family: Lato, Noto Sans Japanese, sans-serif;\n  color: rgb(143, 143, 143);\n  position: relative;\n}\n\n.Layout h1.title {\n  font-weight: normal;\n  font-size: 1.3em;\n  font-family: Noto Sans Japanese;\n  color: #525252;\n}\n\n.Layout h2 {\n  font-weight: lighter;\n  margin-top: 0;\n}\n\n.Layout p {\n  font-weight: normal;\n}\n\n.Layout .header-left-side {\n  text-align: center;\n}\n\n.Layout .page-container {\n  position: absolute;\n  top: 0;\n  padding-bottom: 3em;\n}\n\n.page-transition-enter {\n  opacity: 0.01;\n  -webkit-transform: translateY(20px);\n      -ms-transform: translateY(20px);\n       -o-transform: translateY(20px);\n          transform: translateY(20px);\n}\n\n.page-transition-enter.page-transition-enter-active {\n  opacity: 1;\n  -webkit-transition: opacity 700ms ease-out, -webkit-transform 700ms ease-out;\n  transition: opacity 700ms ease-out, -webkit-transform 700ms ease-out;\n  -o-transition: opacity 700ms ease-out, -o-transform 700ms ease-out;\n  transition: opacity 700ms ease-out, transform 700ms ease-out;\n  transition: opacity 700ms ease-out, transform 700ms ease-out, -webkit-transform 700ms ease-out, -o-transform 700ms ease-out;\n  -webkit-transition-delay: 200ms;\n       -o-transition-delay: 200ms;\n          transition-delay: 200ms;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n       -o-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.page-transition-leave {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n       -o-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.page-transition-leave.page-transition-leave-active {\n  opacity: 0.01;\n  -webkit-transition: opacity 300ms ease-in, -webkit-transform 300ms ease-in;\n  transition: opacity 300ms ease-in, -webkit-transform 300ms ease-in;\n  -o-transition: opacity 300ms ease-in, -o-transform 300ms ease-in;\n  transition: opacity 300ms ease-in, transform 300ms ease-in;\n  transition: opacity 300ms ease-in, transform 300ms ease-in, -webkit-transform 300ms ease-in, -o-transform 300ms ease-in;\n  -webkit-transform: translateY(20px);\n      -ms-transform: translateY(20px);\n       -o-transform: translateY(20px);\n          transform: translateY(20px);\n}\n\n.right.aligned {\n  text-align: right;\n}\n\n.center.aligned {\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".Navigation-link.active {\n    text-decoration: none;\n    background-color: #21ce99;\n    color: white;\n}\n\n.Navigation-link.Navigation-icon {\n    display: inline-block;\n    font-size: 1.4em;\n    padding-bottom: 0.2em;\n    margin: 0 0.3em 0.3em 0.3em;\n}\n\n.Navigation-link:active, .Navigation-link:focus {\n    text-decoration: none;\n}/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 0 0;\n  padding: 0;\n  padding-top: 0.3em;\n  list-style: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: left;\n  border-top: 1px solid rgba(0,0,0,0.1);\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.Navigation-item {\n  padding: 0.5em 0;\n  font-size: 1.25em;\n  font-weight: normal;\n}\n\n.Navigation-icon-group .Navigation-icon {\n    border-bottom: 3px solid transparent;\n}\n\n.Navigation-link {\n  padding: 0.5em 0.5em;\n  color: rgb(143, 143, 143);\n  text-decoration: none;\n  cursor: pointer\n}\n\n.Navigation-link:hover {\n    text-decoration: none;\n    border-bottom: 3px solid #21ce99;\n    // color: #525252;\n}\n\n@media (min-width: 768px) {\n  .Navigation {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 0.4em;\n    padding: 0;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    text-align: left;\n    border: none;\n    overflow: hidden;\n  }\n  .Navigation-icon-group {\n    text-align: left;\n  }\n  .Navigation-icon-group .Navigation-icon {\n        margin: 0 0 0.3em 0;\n    }\n}\n\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.float-transition-appear {\n  opacity: 0.01;\n  -webkit-transform: translateY(20px);\n      -ms-transform: translateY(20px);\n       -o-transform: translateY(20px);\n          transform: translateY(20px);\n}\n\n.float-transition-appear.float-transition-appear-active {\n  opacity: 1;\n  -webkit-transition: opacity 700ms ease-out, -webkit-transform 700ms ease-out;\n  transition: opacity 700ms ease-out, -webkit-transform 700ms ease-out;\n  -o-transition: opacity 700ms ease-out, -o-transform 700ms ease-out;\n  transition: opacity 700ms ease-out, transform 700ms ease-out;\n  transition: opacity 700ms ease-out, transform 700ms ease-out, -webkit-transform 700ms ease-out, -o-transform 700ms ease-out;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n       -o-transform: translateY(0);\n          transform: translateY(0);\n}\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".loader {\n    border: 8px solid #f3f3f3; /* Light grey */\n    border-top: 8px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 48px;\n    height: 48px;\n    -webkit-animation: spin 1s linear infinite;\n         -o-animation: spin 1s linear infinite;\n            animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@-o-keyframes spin {\n    0% { -o-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -o-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".work-detail h3 {\n    font-weight: bold;\n    color: #303010;\n}\n.work-detail img.image-eyecatch, .work-detail img.image-screenshot {\n    width: 100%;\n    border: 8px solid white;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n.work-detail img.image-eyecatch {\n    margin-bottom: 1em;\n}\n.work-detail img.image-screenshot {\n    margin-bottom: 1em;\n}\n.work-detail a > h3 {\n    color: $text-color;\n}\n.work-detail h3 {\n    text-align: center;\n    font-size: 1.4em;\n}\n.work-detail h4 {\n    font-size: 1.0em;\n}\n.work-detail .work-description {\n    margin-bottom: 1em;\n}\n.work-detail .work-description p {\n    margin: 0.4em 0;\n}\n.work-detail .work-description dd {\n    margin: 0.3em 0.0em 0.6em 0.3em;\n    font-weight: normal;\n}\n.work-detail .work-long-description {\n    font-weight: normal;\n}\n.work-detail .work-long-description p {\n    text-indent: 1em;\n    color: rgb(92, 92, 92);\n}\n.work-detail .breadcrumb-chevron {\n    color: rgba(0,0,0,0.2);\n    margin: 0 0.3em;\n}\n.work-detail img.image-appstore {\n    display: block;\n    width: 200px;\n    margin: 1em auto;\n}\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.top-page img.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n.top-page .top-page--footer {\n  margin-top: 1em;\n  text-align: center;\n}\n\n@media (min-width: 768px) {\n\n  .top-page img.top-image {\n    border-width: 16px;\n  }\n  }\n\n.not-found-page {\n  text-align: center;\n\n}\n\n.not-found-page img.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.top-page img.top-image {\n\n    border: 8px solid white;\n\n    border-radius: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n.top-page .top-page--footer {\n\n    margin-top: 1em;\n\n    text-align: center;\n}\n\n@media (min-width: 768px) {\n\n    .top-page img.top-image {\n\n        border-width: 16px;\n    }\n  }\n\n.about img {\n\n    border: 8px solid white;\n\n    border-radius: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n.about .caption {\n\n    margin: 1rem 0;\n\n    font-style: italic;\n}\n\n.about section {\n\n    margin: 0.8em 0;\n}\n\n.about section em {\n\n    font-weight: bold;\n\n    margin-right: 1em;\n}\n\n.about section strong {\n\n    color: #525252;\n}\n\n.about section p {\n\n    text-indent: 1em;\n}\n\n.about section.bio p {\n\n    padding-left:3.4em;\n\n    text-indent:-3.4em;\n}\n\n.about h3 {\n\n    font-size: 14px;\n\n    color: #525252;\n\n    font-family: sans-serif;\n\n    font-weight: bold;\n}\n\n.about h3 > span {\n\n    display: inline-block;\n\n    padding-bottom: 4px;\n\n    border-bottom: 3px solid #525252;\n}\n", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.art-list h3 {\n\n    font-weight: lighter;\n\n    text-align: center;\n\n    font-size: 1.4em;\n}\n\n.art-list img.image-eyecatch {\n\n    width: 100%;\n\n    border: 8px solid white;\n\n    border-radius: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n    margin-bottom: 1em;\n}\n\n.art-list i.glyphicon {\n\n    margin-left: 0.4em;\n\n    font-size: 70%;\n}\n\n.art-list a > h3 {\n\n    color: #525252;\n\n    margin-bottom: 3rem;\n}\n\n.art-list .work-description {\n\n    margin-bottom: 1em;\n}\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.blogs-list h3 {\n\n    font-weight: lighter;\n\n    text-align: center;\n\n    font-size: 1.4em;\n}\n\n.blogs-list img.image-eyecatch {\n\n    width: 100%;\n\n    border: 8px solid white;\n\n    border-radius: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n    margin-bottom: 1em;\n}\n\n.blogs-list a > h3 {\n\n    color: #525252;\n}\n\n.blogs-list .work-description {\n\n    margin-bottom: 1em;\n}\n", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".contact-page .content-container {\n    background: white;\n    -webkit-box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n            box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    padding: 1em;\n    margin: 1em 0;\n}\n.contact-page form {\n    position: relative;\n}\n.contact-page .overlay {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.6);\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.contact-page .email-sent-section {\n    margin-top: 1rem;\n}\n", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".page-followme .header-left-side {\n    display: none;\n}\n.page-followme .page-container {\n    position: static;\n    font-size: large;\n    font-weight: 300;\n}\n.page-followme .page-container .content {\n    width: 100%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.page-followme .page-container .content h2 {\n    font-size: .8em;\n    font-weight: bold;\n    margin-bottom: 2rem;\n}\n.page-followme .page-container .content ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n}\n.page-followme .page-container .content li {\n    margin-bottom: 2rem;\n}\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.top-page img.top-image {\n\n    border: 8px solid white;\n\n    border-radius: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n.top-page .top-page--footer {\n\n    margin-top: 1em;\n\n    text-align: center;\n}\n\n@media (min-width: 768px) {\n\n    .top-page img.top-image {\n\n        border-width: 16px;\n    }\n  }\n", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = sendEmail;
function sendEmail(subject, body) {
  return fetch(
    'https://qen9yylar9.execute-api.us-west-1.amazonaws.com/production/submit',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject, body })
    }
  )
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ })
/******/ ]);