webpackJsonp([6],{

/***/ 580:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_work_page_layout__ = __webpack_require__(589);






(function () {
  var enterModule = __webpack_require__(14).enterModule;

  enterModule && enterModule(module);
})();

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */






var WorkPage = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WorkPage, _Component);

  function WorkPage() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WorkPage);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WorkPage.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WorkPage)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WorkPage, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__components_work_page_layout__["a" /* default */],
        {
          title: WorkPage.title,
          eyecatch: '/works/menkiki_eyecatch.png'
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Row */],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Col */],
            { sm: 6 },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', {
                src: '/works/menkiki_01.png',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Col */],
            { sm: 6 },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', {
                src: '/works/menkiki_02.png',
                className: 'image-screenshot',
                alt: 'image screenshot'
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h3',
          null,
          '\u9EBA\u5229\u304D (Ramelier) (2015)'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'work-description' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            '\u3089\u30FC\u3081\u3093\u5199\u771F\u306B\u57FA\u3065\u3044\u3066\u304A\u5E97\u3092\u63D0\u793A\u3059\u308B\u3001\u3089\u30FC\u3081\u3093\u5C4B\u63A8\u85A6\u30A2\u30D7\u30EA'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            'The app which can show ramen shops based on picture of ramens you want to eat'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'a',
              {
                className: 'link-appstore',
                href: 'https://itunes.apple.com/app/\u9EBA\u5229\u304D/id1035645520?mt=8'
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', {
                src: '/works/appstore.png',
                className: 'image-appstore',
                alt: 'appstore'
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'work-long-description' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            null,
            'Ramelier suggests ramen(Chinese noodle) shops based on a photo of ramen you want to eat. You don\'t need to know Japanese keywords to search shops, just choose a picture of it and the app will find appropriate shops for you. It supports 900+ famous ramen shops in Japan!'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            null,
            'So you can check a shop info as soon as you found a good ramen shop in a food magazine.'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            null,
            'Let\'s go out and eat delicious ramen!'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'ul',
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'li',
                null,
                'Ramen shop recommendation based on photo'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'li',
                null,
                'Show shops near your current location'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'li',
                null,
                'Open in Tabelog/Foursquare'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'h4',
            null,
            '\u5199\u771F\u3067\u300C\u3053\u3093\u306A\u611F\u3058\uFF01\u300D\u304C\u4F1D\u3048\u3089\u308C\u308B\u65B0\u3057\u3044\u63A2\u3057\u65B9'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            null,
            '\u98DF\u3079\u3066\u304A\u3044\u3057\u304B\u3063\u305F\u3089\u30FC\u3081\u3093\u3001\u3042\u308A\u307E\u3059\u3088\u306D\u3002 \u305D\u306E\u5199\u771F\u3092\u30A2\u30D7\u30EA\u306B\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3059\u308B\u3068\u3001\u30A2\u30D7\u30EA\u304C\u4F3C\u305F\u96F0\u56F2\u6C17\u306E\u3089\u30FC\u3081\u3093\u3092\u51FA\u3059\u30E9\u30FC\u30E1\u30F3\u5C4B\u3092\u63A2\u3057\u307E\u3059\u3002'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'h4',
            null,
            '\u958B\u767A\u306B\u306F30\u4E07\u679A\u306E\u3089\u30FC\u3081\u3093\u753B\u50CF\u3092\u4F7F\u7528'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            null,
            '\u958B\u767A\u306B\u306F\u3001\u6700\u8FD1\u4F55\u304B\u3068\u8A71\u984C\u306E\u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u3068\u3044\u3046\u6A5F\u68B0\u5B66\u7FD2\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u4E00\u3064\u3092\u4F7F\u7528\u3057\u307E\u3057\u305F\u3002 \u63A8\u85A6\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u305F\u3081\u306B\u300130\u4E07\u679A\u306E\u3089\u30FC\u3081\u3093\u753B\u50CF\u3092\u96C6\u3081\u3066\u5B66\u7FD2\u3055\u305B\u307E\u3057\u305F\u3002 \u3064\u307E\u308A\u3001\u3053\u306E\u30A2\u30D7\u30EA\u306F\u300C\u3089\u30FC\u3081\u3093\u3068\u306F\u4F55\u304B\u300D\u3092\u7406\u89E3\u3057\u3066\u3044\u308B\u306E\u3067\u3059\uFF01\uFF08\u3069\u30FC\u3093\uFF09'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
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
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return WorkPage;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

WorkPage.title = '麺利き';
WorkPage.image = '/works/menkiki_eyecatch.png';
WorkPage.description = 'The app which can show ramen shops based on a photo of ramen you want to eat';
var _default = WorkPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(14).default;

  var leaveModule = __webpack_require__(14).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WorkPage, 'WorkPage', '/Users/dehsin/Desktop/dehsin.info/pages/works/menkiki.js');
  reactHotLoader.register(_default, 'default', '/Users/dehsin/Desktop/dehsin.info/pages/works/menkiki.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)(module)))

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.works-list h3 {\n  font-weight: lighter;\n  text-align: center;\n  font-size: 1.4em;\n}\n\n.works-list img.image-eyecatch {\n  width: 100%;\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n  margin-bottom: 1em;\n}\n\n.works-list a > h3 {\n  color: #525252;\n}\n\n.works-list .work-description {\n  margin-bottom: 1em;\n}\n\n.works-meta {\n  display: table;\n  border-collapse: collapse;\n  margin-bottom: 1em;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n  width: 100%;\n  background-color: white;\n}\n\n.works-meta-row {\n  display: table-row\n}\n\n.works-meta-row:not(:last-child) .works-meta-title {\n  border-bottom: 1px solid white;\n}\n\n.works-meta-row:not(:last-child) .works-meta-body {\n  border-bottom: 1px solid #d0d0d0;\n}\n\n.works-meta-title {\n  display: table-cell;\n  font-weight: bold;\n  padding: 0.4em;\n  background-color: rgb(143, 143, 143);\n  color: white;\n}\n\n.works-meta-body {\n  display: table-cell;\n  padding: 0.4em;\n}\n\n.works-meta-body .glyphicon {\n  margin-left: 0.4rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, ".work-detail h3 {\n    font-weight: bold;\n    color: #303010;\n}\n.work-detail img.image-eyecatch, .work-detail img.image-screenshot {\n    width: 100%;\n    border: 8px solid white;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n.work-detail img.image-eyecatch {\n    margin-bottom: 1em;\n}\n.work-detail img.image-screenshot {\n    margin-bottom: 1em;\n}\n.work-detail a > h3 {\n    color: $text-color;\n}\n.work-detail h3 {\n    text-align: center;\n    font-size: 1.4em;\n}\n.work-detail h4 {\n    font-size: 1.0em;\n}\n.work-detail .work-description {\n    margin-bottom: 1em;\n}\n.work-detail .work-description p {\n    margin: 0.4em 0;\n}\n.work-detail .work-description dd {\n    margin: 0.3em 0.0em 0.6em 0.3em;\n    font-weight: normal;\n}\n.work-detail .work-long-description {\n    font-weight: normal;\n}\n.work-detail .work-long-description p {\n    text-indent: 1em;\n    color: rgb(92, 92, 92);\n}\n.work-detail .breadcrumb-chevron {\n    color: rgba(0,0,0,0.2);\n    margin: 0 0.3em;\n}\n.work-detail img.image-appstore {\n    display: block;\n    width: 200px;\n    margin: 1em auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(586);
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
		module.hot.accept(586, function() {
			var newContent = __webpack_require__(586);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_page_layout_scss__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_page_layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__work_page_layout_scss__);






(function () {
  var enterModule = __webpack_require__(14).enterModule;

  enterModule && enterModule(module);
})();

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */





var WorkPageLayout = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WorkPageLayout, _Component);

  function WorkPageLayout() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WorkPageLayout);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WorkPageLayout.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WorkPageLayout)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WorkPageLayout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'work-detail' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', {
            src: this.props.eyecatch,
            className: 'image-eyecatch',
            alt: 'cover image'
          })
        ),
        this.props.children
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

  return WorkPageLayout;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

WorkPageLayout.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  eyecatch: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node.isRequired
};
var _default = WorkPageLayout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(14).default;

  var leaveModule = __webpack_require__(14).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WorkPageLayout, 'WorkPageLayout', '/Users/dehsin/Desktop/dehsin.info/components/work-page-layout.js');
  reactHotLoader.register(_default, 'default', '/Users/dehsin/Desktop/dehsin.info/components/work-page-layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)(module)))

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(587);
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
		module.hot.accept(587, function() {
			var newContent = __webpack_require__(587);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=6.app.js.map