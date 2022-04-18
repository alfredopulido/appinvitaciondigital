module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/demo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/demo.js":
/*!***********************!*\
  !*** ./pages/demo.js ***!
  \***********************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jorgepulido/Documents/proyectos/web/appinvitaciondigital/appinvitaciondigital/pages/demo.js\";\n// ./pages/demo\n\n\n\nconst Demo = () => {\n  const AuthUser = Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__[\"useAuthUser\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Your email is \", AuthUser.email ? AuthUser.email : 'unknown', \".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n}; // Note that this is a higher-order function.\n\n\nconst getServerSideProps = Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__[\"withAuthUserTokenSSR\"])({\n  whenUnauthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__[\"AuthAction\"].REDIRECT_TO_LOGIN\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__[\"withAuthUser\"])()(Demo));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZW1vLmpzPzkwYzMiXSwibmFtZXMiOlsiRGVtbyIsIkF1dGhVc2VyIiwidXNlQXV0aFVzZXIiLCJlbWFpbCIsImdldFNlcnZlclNpZGVQcm9wcyIsIndpdGhBdXRoVXNlclRva2VuU1NSIiwid2hlblVuYXV0aGVkIiwiQXV0aEFjdGlvbiIsIlJFRElSRUNUX1RPX0xPR0lOIiwid2l0aEF1dGhVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9BLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFFBQU1DLFFBQVEsR0FBR0Msc0VBQVcsRUFBNUI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsbUNBQWtCRCxRQUFRLENBQUNFLEtBQVQsR0FBaUJGLFFBQVEsQ0FBQ0UsS0FBMUIsR0FBa0MsU0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FQRCxDLENBU0E7OztBQUNPLE1BQU1DLGtCQUFrQixHQUFHQywrRUFBb0IsQ0FBQztBQUNyREMsY0FBWSxFQUFFQyw2REFBVSxDQUFDQztBQUQ0QixDQUFELENBQXBCLEVBQTNCO0FBSVFDLHNJQUFZLEdBQUdULElBQUgsQ0FBM0IiLCJmaWxlIjoiLi9wYWdlcy9kZW1vLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLi9wYWdlcy9kZW1vXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBBdXRoQWN0aW9uLFxuICB1c2VBdXRoVXNlcixcbiAgd2l0aEF1dGhVc2VyLFxuICB3aXRoQXV0aFVzZXJUb2tlblNTUixcbn0gZnJvbSAnbmV4dC1maXJlYmFzZS1hdXRoJ1xuXG5jb25zdCBEZW1vID0gKCkgPT4ge1xuICBjb25zdCBBdXRoVXNlciA9IHVzZUF1dGhVc2VyKClcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+WW91ciBlbWFpbCBpcyB7QXV0aFVzZXIuZW1haWwgPyBBdXRoVXNlci5lbWFpbCA6ICd1bmtub3duJ30uPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIE5vdGUgdGhhdCB0aGlzIGlzIGEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uLlxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhBdXRoVXNlclRva2VuU1NSKHtcbiAgd2hlblVuYXV0aGVkOiBBdXRoQWN0aW9uLlJFRElSRUNUX1RPX0xPR0lOXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoVXNlcigpKERlbW8pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/demo.js\n");

/***/ }),

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-firebase-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWZpcmViYXNlLWF1dGhcIj9jMjVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtZmlyZWJhc2UtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZmlyZWJhc2UtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-firebase-auth\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });