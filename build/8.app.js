webpackJsonp([8],{

/***/ 555:
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

var _workPageLayout = __webpack_require__(566);

var _workPageLayout2 = _interopRequireDefault(_workPageLayout);

__webpack_require__(565);

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
//# sourceMappingURL=8.app.js.map