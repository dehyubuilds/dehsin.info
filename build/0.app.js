webpackJsonp([0],{

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_scss__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__contact_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_send_email__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_loader__ = __webpack_require__(601);










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
  __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default()(ContactPage, _Component);

  function ContactPage(props) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, ContactPage);

    var _this = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ContactPage.__proto__ || __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default()(ContactPage)).call(this, props));

    _this.state = {
      loading: false,
      emailSent: false,
      error: null,
      data: {
        email: '',
        name: '',
        company: '',
        url: '',
        subject: '',
        body: ''
      }
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(ContactPage, [{
    key: 'renderLoader',
    value: function renderLoader() {
      if (this.state.loading) {
        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          'div',
          { className: 'overlay' },
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_loader__["a" /* default */], null)
        );
      }
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        'form',
        { onSubmit: this.handleSubmit.bind(this) },
        this.renderError(),
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["c" /* FormGroup */],
          null,
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["d" /* ControlLabel */],
            null,
            'Your E-mail Address *'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["e" /* FormControl */], {
            type: 'email',
            name: 'email',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.email,
            required: true
          })
        ),
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["c" /* FormGroup */],
          null,
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["d" /* ControlLabel */],
            null,
            'Your full name *'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["e" /* FormControl */], {
            type: 'text',
            name: 'name',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.name,
            required: true
          })
        ),
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["c" /* FormGroup */],
          null,
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["d" /* ControlLabel */],
            null,
            'Your company name'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["e" /* FormControl */], {
            type: 'text',
            name: 'company',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.company
          })
        ),
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["c" /* FormGroup */],
          null,
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["d" /* ControlLabel */],
            null,
            'URL (ex. homepage)'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["e" /* FormControl */], {
            type: 'text',
            name: 'url',
            maxLength: 100,
            placeholder: 'https://',
            onChange: this.handleChange.bind(this),
            value: this.state.data.url
          })
        ),
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["c" /* FormGroup */],
          null,
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["d" /* ControlLabel */],
            null,
            'Subject *'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["e" /* FormControl */], {
            type: 'text',
            name: 'subject',
            maxLength: 100,
            required: true,
            onChange: this.handleChange.bind(this),
            value: this.state.data.subject
          })
        ),
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["c" /* FormGroup */],
          null,
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["d" /* ControlLabel */],
            null,
            'Message *'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["e" /* FormControl */], {
            componentClass: 'textarea',
            rows: 8,
            maxLength: 800,
            name: 'body',
            placeholder: 'Hello Takuya..',
            required: true,
            onChange: this.handleChange.bind(this),
            value: this.state.data.body
          })
        ),
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          'div',
          { className: 'right aligned' },
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["f" /* Button */],
            { type: 'submit', bsStyle: 'primary' },
            'Submit'
          )
        ),
        this.renderLoader()
      );
    }
  }, {
    key: 'renderEmailSent',
    value: function renderEmailSent() {
      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        'div',
        { className: 'email-sent-section' },
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["g" /* Alert */],
          { bsStyle: 'info' },
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            'strong',
            null,
            'Your message has been sent!'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            'p',
            null,
            'Thank you for your contact. I will respond to your email as soon as possible.'
          )
        )
      );
    }
  }, {
    key: 'renderError',
    value: function renderError() {
      var e = this.state.error;

      if (e) {
        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_bootstrap__["g" /* Alert */],
          { bsStyle: 'danger' },
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            'strong',
            null,
            'Sorry, failed to send an email'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            'p',
            null,
            e.message
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        'div',
        { className: 'contact-page' },
        __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          'div',
          { className: 'content-container' },
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            'h2',
            null,
            'Contact me'
          ),
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            'p',
            null,
            'Hi! That\'s great you are trying to reach out to me. I\'m available for freelance work, I want to hear about your projects. Please fill below forms and submit.'
          ),
          this.state.emailSent ? this.renderEmailSent() : this.renderForm()
        )
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var data = this.state.data;

      this.setState({
        data: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, data, __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, e.target.name, e.target.value))
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.sendEmail();
    }
  }, {
    key: 'sendEmail',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var data, subject, body;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({ loading: true });
                _context.prev = 1;
                data = this.state.data;
                subject = '[Craftzdog Contact Form] ' + data.subject;
                body = '\nName: ' + data.name + '\nFrom: ' + data.email + '\nCompany: ' + data.company + '\nURL: ' + data.url + '\n\n' + data.body + '\n      ';
                _context.next = 7;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_send_email__["a" /* default */])(subject, body);

              case 7:
                this.setState({ loading: false, emailSent: true });
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);

                console.error('Failed to send email:', _context.t0);
                this.setState({ loading: false, emailSent: false, error: _context.t0 });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function sendEmail() {
        return _ref.apply(this, arguments);
      }

      return sendEmail;
    }()
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ContactPage;
}(__WEBPACK_IMPORTED_MODULE_10_react__["Component"]);

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

  reactHotLoader.register(ContactPage, 'ContactPage', '/Users/dehsin/Desktop/dehsin.info/pages/contact.js');
  reactHotLoader.register(_default, 'default', '/Users/dehsin/Desktop/dehsin.info/pages/contact.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)(module)))

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, ".loader {\n    border: 8px solid #f3f3f3; /* Light grey */\n    border-top: 8px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 48px;\n    height: 48px;\n    -webkit-animation: spin 1s linear infinite;\n         -o-animation: spin 1s linear infinite;\n            animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@-o-keyframes spin {\n    0% { -o-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -o-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, ".contact-page .content-container {\n    background: white;\n    -webkit-box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n            box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    padding: 1em;\n    margin: 1em 0;\n}\n.contact-page form {\n    position: relative;\n}\n.contact-page .overlay {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.6);\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.contact-page .email-sent-section {\n    margin-top: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 601:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_scss__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__loader_scss__);






(function () {
  var enterModule = __webpack_require__(14).enterModule;

  enterModule && enterModule(module);
})();

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */




var Loader = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Loader, _Component);

  function Loader() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Loader);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Loader.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Loader)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Loader, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', { className: 'loader' });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Loader;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

var _default = Loader;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(14).default;

  var leaveModule = __webpack_require__(14).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, 'Loader', '/Users/dehsin/Desktop/dehsin.info/components/loader.js');
  reactHotLoader.register(_default, 'default', '/Users/dehsin/Desktop/dehsin.info/components/loader.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)(module)))

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(259);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(594);
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
		module.hot.accept(594, function() {
			var newContent = __webpack_require__(594);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(598);
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
		module.hot.accept(598, function() {
			var newContent = __webpack_require__(598);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sendEmail;
function sendEmail(subject, body) {
  return fetch(
    'https://qen9yylar9.execute-api.us-west-1.amazonaws.com/production/submit',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject, body })
    }
  )
}


/***/ })

});
//# sourceMappingURL=0.app.js.map