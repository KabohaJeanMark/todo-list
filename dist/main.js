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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconsole.log('Hello todo app');\n\nconst projectCreateForm = document.getElementById('createProjectForm');\nprojectCreateForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_project__WEBPACK_IMPORTED_MODULE_0__.default)();\n});\n\nconst todoForm = document.getElementById('createTodoForm');\ntodoForm.style.display = 'none';\n\nconst defaultTodoBtn = document.getElementById('defaultTodo');\ndefaultTodoBtn.addEventListener('click', () => {\n  todoForm.style.display = 'block';\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.listOfTodos = [];\n  }\n\n  get toDoList() {\n    return this.listOfTodos;\n  }\n}\n\nconst projectList = [];\n\nconst defaultProject = new Project('Default');\nconsole.log(defaultProject);\nprojectList.push(defaultProject);\n\nconst allprojects = document.getElementById('all-projects');\n\nfunction createProjectCard(project) {\n  const div = document.createElement('div');\n  div.classList.add('m-2', 'p-1');\n  const projectName = document.createElement('span');\n  projectName.textContent = project.name;\n  const addProjectTodo = document.createElement('button');\n  addProjectTodo.classList.add('btn', 'btn-success', 'm-1');\n  addProjectTodo.textContent = '+';\n  // addProjectTodo.addEventListener('click', () => {\n  //   addToDo(project);\n  // });\n  div.appendChild(projectName);\n  div.appendChild(addProjectTodo);\n  return div;\n}\n\nfunction displayAllProjects() {\n  if (!projectList.length) {\n    const p2 = document.createElement('p');\n    p2.textContent = 'There are currently no books';\n    allprojects.appendChild(p2);\n  } else {\n    projectList.forEach((project) => {\n      const projectCard = createProjectCard(project);\n      allprojects.appendChild(projectCard);\n    });\n  }\n}\n\nconst createProject = () => {\n  const name = document.getElementById('name').value;\n  const newProject = new Project(name);\n  console.log(newProject);\n  projectList.push(newProject);\n  console.log(projectList);\n  allprojects.textContent = '';\n  displayAllProjects();\n  return newProject;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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