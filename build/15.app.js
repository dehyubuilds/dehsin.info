webpackJsonp([15],{

/***/ 574:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__followme_scss__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__followme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__followme_scss__);
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




var ContactPage = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ContactPage, _Component);

  function ContactPage() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ContactPage);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ContactPage.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ContactPage)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ContactPage, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: 'content' },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'h2',
          null,
          'Takuya Matsuyama'
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('i', { className: 'fab fa-youtube' }),
            '\xA0 Channel :\xA0',
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'a',
              { href: 'https://www.youtube.com/c/devaslife' },
              'devaslife'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('i', { className: 'fab fa-twitter' }),
            '\xA0 English :\xA0',
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'a',
              { href: 'https://twitter.com/inkdrop_app' },
              '@inkdrop_app'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('i', { className: 'fab fa-twitter' }),
            '\xA0 Japanese :\xA0',
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'a',
              { href: 'https://twitter.com/craftzdog' },
              '@craftzdog'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('i', { className: 'fab fa-instagram' }),
            '\xA0:\xA0',
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'a',
              { href: 'https://www.instagram.com/craftzdog' },
              '@craftzdog'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('i', { className: 'fab fa-github' }),
            '\xA0:\xA0',
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'a',
              { href: 'https://github.com/craftzdog' },
              '@craftzdog'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('i', { className: 'fas fa-home' }),
            '\xA0:\xA0',
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'a',
              { href: 'https://www.craftz.dog/' },
              'craftz.dog'
            )
          )
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

  return ContactPage;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

ContactPage.title = 'Contact to Takuya';
ContactPage.image = '/me.jpg';
ContactPage.description = 'Contact form';
var _default = ContactPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(14).default;

  var leaveModule = __webpack_require__(14).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPage, 'ContactPage', '/Users/dehsin/Desktop/dehsin.info/pages/followme.js');
  reactHotLoader.register(_default, 'default', '/Users/dehsin/Desktop/dehsin.info/pages/followme.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)(module)))

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, ".page-followme .header-left-side {\n    display: none;\n}\n.page-followme .page-container {\n    position: static;\n    font-size: large;\n    font-weight: 300;\n}\n.page-followme .page-container .content {\n    width: 100%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.page-followme .page-container .content h2 {\n    font-size: .8em;\n    font-weight: bold;\n    margin-bottom: 2rem;\n}\n.page-followme .page-container .content ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n}\n.page-followme .page-container .content li {\n    margin-bottom: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(599);
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
		module.hot.accept(599, function() {
			var newContent = __webpack_require__(599);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=15.app.js.map