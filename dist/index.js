/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/modool/dist/modool.js":
/*!********************************************!*\
  !*** ./node_modules/modool/dist/modool.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){\"use strict\";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:\"undefined\"!=typeof Symbol&&e[Symbol.iterator]||e[\"@@iterator\"];if(null==n)return;var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if(\"string\"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);\"Object\"===n&&e.constructor&&(n=e.constructor.name);if(\"Map\"===n||\"Set\"===n)return Array.from(e);if(\"Arguments\"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,\"Modool\",(function(){return l})),n.d(t,\"ModoolLoader\",(function(){return u}));var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.name=t,this.is_initialized=!1,this.element=null,this.elements={},this._events=this.events(),document.addEventListener(\"DOMContentLoaded\",(function(){n.setElement(),n.initialize()}))}var t,n,o;return t=e,o=[{key:\"getGlobalElement\",value:function(e){var t=document.querySelectorAll('[data-global-el=\"'.concat(e,'\"]'));return t.length>1?Array.from(t):t[0]}}],(n=[{key:\"init\",value:function(){}},{key:\"events\",value:function(){return{}}},{key:\"destroy\",value:function(){this.destroyEvents()}},{key:\"initialize\",value:function(){this.element?(this.setElements(),this.setupEvents(),this.init(),this.is_initialized=!0):this.is_initialized=!1}},{key:\"setElement\",value:function(){this.element=document.querySelector('[data-modool=\"'.concat(this.name,'\"]'))}},{key:\"setElements\",value:function(){var e=this;this.element.querySelectorAll(\"[data-modool-el]\").forEach((function(t){var n=t.dataset.modoolEl,r=e.element.querySelectorAll(\"[data-modool-el='\"+n+\"']\");r.length>1?e.elements[n]=Array.from(r):e.elements[n]=r[0]}))}},{key:\"setupEvents\",value:function(){var e=this;Object.keys(this._events).forEach((function(t){var n=e._events[t],o=r(t.split(\" \"),2),i=o[0],l=o[1];if(l)if(\"window\"===l)window.addEventListener(i,n);else{var a=e.elements[l];Array.isArray(a)?a.forEach((function(e){e.addEventListener(i,n)})):a.addEventListener(i,n)}}))}},{key:\"destroyEvents\",value:function(){var e=this;Object.keys(this._events).forEach((function(t){var n=e._events[t],o=r(t.split(\" \"),2),i=o[0],l=o[1];if(l)if(\"window\"===l)window.removeEventListener(i,n);else{var a=e.elements[l];Array.isArray(a)?a.forEach((function(e){e.removeEventListener(i,n)})):a.removeEventListener(i,n)}}))}},{key:\"check\",value:function(){this.setElement(),this.is_initialized?null===this.element&&(this.is_initialized=!1,this.destroy()):this.initialize()}},{key:\"reload\",value:function(){this.destroyEvents(),this.setElements(),this.setupEvents()}}])&&i(t.prototype,n),o&&i(t,o),Object.defineProperty(t,\"prototype\",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e)}var t,n,r;return t=e,r=[{key:\"load\",value:function(e){window.__modool_modules={};try{e.keys().forEach((function(t){var n=t.split(\"./\")[1].split(\".\")[0];window.__modool_modules[n]=new(e(t).default)(n)}))}catch(e){console.error(\"Could not load file\",e)}}},{key:\"checkModules\",value:function(){Object.keys(window.__modool_modules).forEach((function(e){window.__modool_modules[e].check()}))}},{key:\"getModule\",value:function(e){return window.__modool_modules[e]}}],(n=null)&&a(t.prototype,n),r&&a(t,r),Object.defineProperty(t,\"prototype\",{writable:!1}),e}();t.default=l}]);\n\n//# sourceURL=webpack:///./node_modules/modool/dist/modool.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var modool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modool */ \"./node_modules/modool/dist/modool.js\");\n/* harmony import */ var modool__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(modool__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar modool_context = __webpack_require__(\"./src/modules sync \\\\.js$\");\n\nmodool__WEBPACK_IMPORTED_MODULE_0__[\"ModoolLoader\"].load(modool_context);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules sync \\.js$":
/*!*********************************************!*\
  !*** ./src/modules sync nonrecursive \.js$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./my_module.js\": \"./src/modules/my_module.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/modules sync \\\\.js$\";\n\n//# sourceURL=webpack:///./src/modules_sync_nonrecursive_\\.js$?");

/***/ }),

/***/ "./src/modules/my_module.js":
/*!**********************************!*\
  !*** ./src/modules/my_module.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return YourModule; });\n/* harmony import */ var modool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modool */ \"./node_modules/modool/dist/modool.js\");\n/* harmony import */ var modool__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(modool__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar YourModule = /*#__PURE__*/function (_Modool) {\n  _inherits(YourModule, _Modool);\n\n  var _super = _createSuper(YourModule);\n\n  function YourModule() {\n    _classCallCheck(this, YourModule);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(YourModule, [{\n    key: \"init\",\n    value: function init() {\n      this.click_count = parseInt(this.elements.click_count.innerText);\n    }\n  }, {\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      return {\n        'click button': function clickButton(event) {\n          _this.incrementClickCount();\n\n          _this.elements.click_count.animate([{\n            transform: 'scale(1.5)'\n          }], {\n            duration: 250,\n            iterations: 1\n          });\n        }\n      };\n    }\n  }, {\n    key: \"incrementClickCount\",\n    value: function incrementClickCount() {\n      this.click_count++;\n      this.elements.click_count.innerText = this.click_count;\n    }\n  }]);\n\n  return YourModule;\n}(modool__WEBPACK_IMPORTED_MODULE_0__[\"Modool\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/my_module.js?");

/***/ })

/******/ });