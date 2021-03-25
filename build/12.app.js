webpackJsonp([12],{

/***/ 571:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__art_scss__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__art_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__art_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_floated_section__ = __webpack_require__(592);






(function () {
  var enterModule = __webpack_require__(14).enterModule;

  enterModule && enterModule(module);
})();





var ArtPage = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ArtPage, _Component);

  function ArtPage() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ArtPage);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ArtPage.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ArtPage)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ArtPage, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'art-list' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__components_floated_section__["a" /* default */],
          { delay: 300 },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'a',
              { href: 'https://500px.com/craftzdog' },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', {
                src: '/photos.jpg',
                className: 'image-eyecatch',
                alt: 'my photos'
              }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'h3',
                null,
                'Photography',
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'glyphicon glyphicon-new-window' })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__components_floated_section__["a" /* default */],
          { delay: 500 },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'a',
              { href: 'http://illust.odoruinu.net/' },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', {
                src: '/cover.jpg',
                className: 'image-eyecatch',
                alt: 'my illustrations'
              }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'h3',
                null,
                'Illustrations',
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'glyphicon glyphicon-new-window' })
              )
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

  return ArtPage;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

ArtPage.title = 'Art';
var _default = ArtPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(14).default;

  var leaveModule = __webpack_require__(14).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ArtPage, 'ArtPage', '/Users/dehsin/Desktop/dehsin.info/pages/art.js');
  reactHotLoader.register(_default, 'default', '/Users/dehsin/Desktop/dehsin.info/pages/art.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)(module)))

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "\n.float-transition-appear {\n  opacity: 0.01;\n  -webkit-transform: translateY(20px);\n      -ms-transform: translateY(20px);\n       -o-transform: translateY(20px);\n          transform: translateY(20px);\n}\n\n.float-transition-appear.float-transition-appear-active {\n  opacity: 1;\n  -webkit-transition: opacity 700ms ease-out, -webkit-transform 700ms ease-out;\n  transition: opacity 700ms ease-out, -webkit-transform 700ms ease-out;\n  -o-transition: opacity 700ms ease-out, -o-transform 700ms ease-out;\n  transition: opacity 700ms ease-out, transform 700ms ease-out;\n  transition: opacity 700ms ease-out, transform 700ms ease-out, -webkit-transform 700ms ease-out, -o-transform 700ms ease-out;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n       -o-transform: translateY(0);\n          transform: translateY(0);\n}\n", ""]);

// exports


/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__floated_section_scss__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__floated_section_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__floated_section_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group__);








(function () {
  var enterModule = __webpack_require__(14).enterModule;

  enterModule && enterModule(module);
})();

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */






var FloatedSection = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(FloatedSection, _Component);

  function FloatedSection() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, FloatedSection);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FloatedSection.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(FloatedSection)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(FloatedSection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          delay = _props.delay,
          children = _props.children,
          props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['delay', 'children']);

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group___default.a,
        {
          transitionName: 'float-transition',
          transitionAppear: true,
          transitionAppearTimeout: 700 + delay,
          transitionEnter: false,
          transitionLeave: false
        },
        [__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'section',
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            key: 'floated-section',
            className: 'floated-section',
            style: { transitionDelay: delay + 'ms' }
          }, props),
          children
        )]
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

  return FloatedSection;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

FloatedSection.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node.isRequired,
  delay: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number
};
FloatedSection.defaultProps = {
  delay: 300
};
var _default = FloatedSection;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(14).default;

  var leaveModule = __webpack_require__(14).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FloatedSection, 'FloatedSection', '/Users/dehsin/Desktop/dehsin.info/components/floated-section.js');
  reactHotLoader.register(_default, 'default', '/Users/dehsin/Desktop/dehsin.info/components/floated-section.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)(module)))

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
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
		module.hot.accept(591, function() {
			var newContent = __webpack_require__(591);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.art-list h3 {\n\n    font-weight: lighter;\n\n    text-align: center;\n\n    font-size: 1.4em;\n}\n\n.art-list img.image-eyecatch {\n\n    width: 100%;\n\n    border: 8px solid white;\n\n    border-radius: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n    margin-bottom: 1em;\n}\n\n.art-list i.glyphicon {\n\n    margin-left: 0.4em;\n\n    font-size: 70%;\n}\n\n.art-list a > h3 {\n\n    color: #525252;\n\n    margin-bottom: 3rem;\n}\n\n.art-list .work-description {\n\n    margin-bottom: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(596);
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
		module.hot.accept(596, function() {
			var newContent = __webpack_require__(596);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=12.app.js.map