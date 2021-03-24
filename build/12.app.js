webpackJsonp([12],{

/***/ 549:
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

__webpack_require__(583);

var _floatedSection = __webpack_require__(569);

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

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(5);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

__webpack_require__(571);

var _reactAddonsCssTransitionGroup = __webpack_require__(245);

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

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "\n.float-transition-appear {\n  opacity: 0.01;\n  -webkit-transform: translateY(20px);\n      -ms-transform: translateY(20px);\n       -o-transform: translateY(20px);\n          transform: translateY(20px);\n}\n\n.float-transition-appear.float-transition-appear-active {\n  opacity: 1;\n  -webkit-transition: opacity 700ms ease-out, -webkit-transform 700ms ease-out;\n  transition: opacity 700ms ease-out, -webkit-transform 700ms ease-out;\n  -o-transition: opacity 700ms ease-out, -o-transform 700ms ease-out;\n  transition: opacity 700ms ease-out, transform 700ms ease-out;\n  transition: opacity 700ms ease-out, transform 700ms ease-out, -webkit-transform 700ms ease-out, -o-transform 700ms ease-out;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n       -o-transform: translateY(0);\n          transform: translateY(0);\n}\n", ""]);

// exports


/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(570);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./floated-section.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./floated-section.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.art-list h3 {\n\n    font-weight: lighter;\n\n    text-align: center;\n\n    font-size: 1.4em;\n}\n\n.art-list img.image-eyecatch {\n\n    width: 100%;\n\n    border: 8px solid white;\n\n    border-radius: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n    margin-bottom: 1em;\n}\n\n.art-list i.glyphicon {\n\n    margin-left: 0.4em;\n\n    font-size: 70%;\n}\n\n.art-list a > h3 {\n\n    color: #525252;\n\n    margin-bottom: 3rem;\n}\n\n.art-list .work-description {\n\n    margin-bottom: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(576);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./art.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./art.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=12.app.js.map