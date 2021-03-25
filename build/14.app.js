webpackJsonp([14],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_scss__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);






(function () {
  var enterModule = __webpack_require__(14).enterModule;

  enterModule && enterModule(module);
})();

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */



// import { Grid, Col, Row } from 'react-bootstrap';

var IndexPage = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(IndexPage, _Component);

  function IndexPage() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, IndexPage);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (IndexPage.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(IndexPage)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(IndexPage, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: 'top-page' },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', {
            className: 'top-image',
            src: '/cover2.jpg',
            width: '100%',
            alt: 'cover image'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: 'top-page--footer' },
          'The source code of this website is available\xA0',
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
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
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return IndexPage;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(14).default;

  var leaveModule = __webpack_require__(14).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPage, 'IndexPage', '/Users/dehsin/Desktop/dehsin.info/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/dehsin/Desktop/dehsin.info/pages/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)(module)))

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.top-page img.top-image {\n\n    border: 8px solid white;\n\n    border-radius: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n.top-page .top-page--footer {\n\n    margin-top: 1em;\n\n    text-align: center;\n}\n\n@media (min-width: 768px) {\n\n    .top-page img.top-image {\n\n        border-width: 16px;\n    }\n  }\n", ""]);

// exports


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(600);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(47)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(600, function() {
			var newContent = __webpack_require__(600);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=14.app.js.map