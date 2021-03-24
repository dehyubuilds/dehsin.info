webpackJsonp([1],{

/***/ 563:
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

var _reactBootstrap = __webpack_require__(244);

var _workPageLayout = __webpack_require__(566);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

__webpack_require__(565);

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
//# sourceMappingURL=1.app.js.map