webpackJsonp([3],{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(71);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(72);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(565);

var _workPageLayout = __webpack_require__(566);

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

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.works-list h3 {\n  font-weight: lighter;\n  text-align: center;\n  font-size: 1.4em;\n}\n\n.works-list img.image-eyecatch {\n  width: 100%;\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n  margin-bottom: 1em;\n}\n\n.works-list a > h3 {\n  color: #525252;\n}\n\n.works-list .work-description {\n  margin-bottom: 1em;\n}\n\n.works-meta {\n  display: table;\n  border-collapse: collapse;\n  margin-bottom: 1em;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n  width: 100%;\n  background-color: white;\n}\n\n.works-meta-row {\n  display: table-row\n}\n\n.works-meta-row:not(:last-child) .works-meta-title {\n  border-bottom: 1px solid white;\n}\n\n.works-meta-row:not(:last-child) .works-meta-body {\n  border-bottom: 1px solid #d0d0d0;\n}\n\n.works-meta-title {\n  display: table-cell;\n  font-weight: bold;\n  padding: 0.4em;\n  background-color: rgb(143, 143, 143);\n  color: white;\n}\n\n.works-meta-body {\n  display: table-cell;\n  padding: 0.4em;\n}\n\n.works-meta-body .glyphicon {\n  margin-left: 0.4rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(564);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(45)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--7-2!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--7-2!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(71);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(72);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(568);

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

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, ".work-detail h3 {\n    font-weight: bold;\n    color: #303010;\n}\n.work-detail img.image-eyecatch, .work-detail img.image-screenshot {\n    width: 100%;\n    border: 8px solid white;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n.work-detail img.image-eyecatch {\n    margin-bottom: 1em;\n}\n.work-detail img.image-screenshot {\n    margin-bottom: 1em;\n}\n.work-detail a > h3 {\n    color: $text-color;\n}\n.work-detail h3 {\n    text-align: center;\n    font-size: 1.4em;\n}\n.work-detail h4 {\n    font-size: 1.0em;\n}\n.work-detail .work-description {\n    margin-bottom: 1em;\n}\n.work-detail .work-description p {\n    margin: 0.4em 0;\n}\n.work-detail .work-description dd {\n    margin: 0.3em 0.0em 0.6em 0.3em;\n    font-weight: normal;\n}\n.work-detail .work-long-description {\n    font-weight: normal;\n}\n.work-detail .work-long-description p {\n    text-indent: 1em;\n    color: rgb(92, 92, 92);\n}\n.work-detail .breadcrumb-chevron {\n    color: rgba(0,0,0,0.2);\n    margin: 0 0.3em;\n}\n.work-detail img.image-appstore {\n    display: block;\n    width: 200px;\n    margin: 1em auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(567);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(45)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./work-page-layout.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./work-page-layout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=3.app.js.map