/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/article.js":
/*!************************!*\
  !*** ./src/article.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Article)\n/* harmony export */ });\nclass Article{\r\n    constructor(title, text){\r\n        this._title = title;\r\n        this._text = text;\r\n        this._date = new Date();\r\n    }\r\n\r\n    get title(){\r\n        return this._title;\r\n    }\r\n\r\n    get text(){\r\n        return this._text;\r\n    }\r\n\r\n    get date(){\r\n        return this._date;\r\n    }\r\n}\n\n//# sourceURL=webpack://29.03.2021/./src/article.js?");

/***/ }),

/***/ "./src/articleComponent.js":
/*!*********************************!*\
  !*** ./src/articleComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleComponent)\n/* harmony export */ });\nclass ArticleComponent{\r\n    constructor(article){\r\n        this._article = article;\r\n    }\r\n\r\n    createDomElement(){\r\n        let header = document.createElement(\"h2\");\r\n        header.innerHTML = this._article.title;\r\n\r\n        let content = document.createElement(\"p\");\r\n        content.innerHTML = this._article.text;\r\n\r\n        let date = document.createElement(\"time\");\r\n        date.innerHTML = this._article.date.toDateString();\r\n\r\n        let article = document.createElement(\"article\");\r\n        article.appendChild(header);\r\n        article.appendChild(content);\r\n        article.appendChild(date);\r\n\r\n        return article;\r\n    }\r\n}\n\n//# sourceURL=webpack://29.03.2021/./src/articleComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ \"./src/article.js\");\n/* harmony import */ var _articleComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleComponent */ \"./src/articleComponent.js\");\n// const Article = require('./article');\r\n// const ArticleComponent = require('./articleComponent');\r\n\r\n\r\n\r\n\r\nlet title = \"Webpack\";\r\nlet text = 'Webpack is a static module bundler for modern JavaScript applications Webpack is a static module bundler for modern JavaScript applications';\r\n\r\nlet article = new _article__WEBPACK_IMPORTED_MODULE_0__.default(title, text);\r\nlet articleComponent = new _articleComponent__WEBPACK_IMPORTED_MODULE_1__.default(article);\r\n\r\nlet container = document.getElementById(\"container\");\r\ncontainer.appendChild(articleComponent.createDomElement());\r\n\r\n\n\n//# sourceURL=webpack://29.03.2021/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;