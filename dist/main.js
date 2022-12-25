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

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => (/* binding */ createCard)\n/* harmony export */ });\nfunction createCard(value) {\n    const div = document.createElement('div');\n    const h3 = document.createElement('h3');\n    h3.innerHTML = value;\n    div.appendChild(h3);\n\n    const button = document.createElement('button');\n    button.innerHTML = ('x');\n    button.id = ('x-todo');\n    div.append(button);\n\n    return div;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/Projects.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\n    constructor(value, project) {\n        this.value = value;\n        this.bucket = project;\n    }\n    set value(value) {\n        this.value = value;\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/Todo.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\n\n\nconst addTodoBtn = document.getElementById(\"add-todo\");\nconst TaskPopup = document.getElementById(\"add-task-popup\");\n\n// click on addTodo button -> show input\naddTodoBtn.addEventListener('click', () => {\n    TaskPopup.classList.add(\"active\");\n})\n\n// click on cancel -> hide input\ndocument.getElementById(\"button-cancel-task-popup\").addEventListener('click', () => {\n    TaskPopup.classList.remove(\"active\");\n})\n\n// click on Add -> get from input and hide input\nlet value = '';\ndocument.getElementById(\"button-add-task-popup\").addEventListener('click', () => {\n    const TaskInput = document.getElementById('input-add-task-popup');\n    value = TaskInput.value;\n    TaskInput.value = null;\n    TaskPopup.classList.remove(\"active\");\n})\n\n// add event listeners to project buttons\nconst projectButtons = document.getElementsByClassName(\"projects\")[0].childNodes;\nfor (let i = 0; i<projectButtons.length; i++) {\n    projectButtons[i].addEventListener('click', () => {\n        console.log(projectButtons[i].innerHTML);\n    })\n}\n\n// add project button event listener\nconst addPrBtn = document.getElementById(\"project-add\");\nconst projectAddPopup = document.getElementById(\"add-project-popup\");\naddPrBtn.addEventListener('click', () => {\n    projectAddPopup.classList.add(\"active\");\n})\n\n// cancel -> close input\ndocument.getElementById(\"button-cancel-project-popup\").addEventListener('click', () => {\n    projectAddPopup.classList.remove(\"active\");\n})\n\ndocument.getElementById(\"button-add-project-popup\").addEventListener('click', () => {\n    const ProjInput = document.getElementById('input-add-project-popup');\n    let value = ProjInput.value;\n    ProjInput.value = null;\n    projectAddPopup.classList.remove(\"active\");\n})\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/UI.js");
/******/ 	
/******/ })()
;