/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/analitics.js":
/*!**************************!*\
  !*** ./src/analitics.js ***!
  \**************************/
/***/ (() => {

eval("function createAnalitics(){\r\n    let counter = 0;\r\n\r\n    const listener = () =>{\r\n        counter++;\r\n        console.log(counter);\r\n    }\r\n\r\n    document.addEventListener('click', listener);\r\n}\r\n\r\ncreateAnalitics();\n\n//# sourceURL=webpack://29.03.2021/./src/analitics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/analitics.js"]();
/******/ 	
/******/ })()
;