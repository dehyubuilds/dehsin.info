webpackJsonp([15],{

/***/ 552:
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

__webpack_require__(586);

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

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, ".page-followme .header-left-side {\n    display: none;\n}\n.page-followme .page-container {\n    position: static;\n    font-size: large;\n    font-weight: 300;\n}\n.page-followme .page-container .content {\n    width: 100%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.page-followme .page-container .content h2 {\n    font-size: .8em;\n    font-weight: bold;\n    margin-bottom: 2rem;\n}\n.page-followme .page-container .content ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n}\n.page-followme .page-container .content li {\n    margin-bottom: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(579);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./followme.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./followme.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=15.app.js.map