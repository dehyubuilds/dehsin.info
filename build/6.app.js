webpackJsonp([6],{

/***/ 558:
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

__webpack_require__(565);

var _workPageLayout = __webpack_require__(566);

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
//# sourceMappingURL=6.app.js.map