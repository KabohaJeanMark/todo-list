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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst projectCreateForm = document.getElementById('createProjectForm');\nprojectCreateForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_project__WEBPACK_IMPORTED_MODULE_0__.default)();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.listOfTodos = [];\n  }\n\n  get toDoList() {\n    return this.listOfTodos;\n  }\n}\n\nconst projectList = [];\n\nconst defaultProject = new Project('Default');\nprojectList.push(defaultProject);\n\nconst allprojects = document.getElementById('all-projects');\n\nfunction createProjectCard(project) {\n  const div = document.createElement('div');\n  div.classList.add('m-2', 'p-1');\n  const projectName = document.createElement('span');\n  projectName.textContent = project.name;\n  projectName.addEventListener('click', () => {\n    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(project);\n  });\n  const addProjectTodo = document.createElement('button');\n  addProjectTodo.classList.add('btn', 'btn-success', 'm-1');\n  addProjectTodo.textContent = '+';\n  addProjectTodo.addEventListener('click', () => {\n    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.newTodoForm)(project);\n  });\n\n  div.appendChild(projectName);\n  div.appendChild(addProjectTodo);\n  return div;\n}\n\nfunction displayAllProjects() {\n  if (!projectList.length) {\n    const p2 = document.createElement('p');\n    p2.textContent = 'There are currently no books';\n    allprojects.appendChild(p2);\n  } else {\n    projectList.forEach((project) => {\n      const projectCard = createProjectCard(project);\n      allprojects.appendChild(projectCard);\n    });\n  }\n}\n\nconst createProject = () => {\n  const name = document.getElementById('name').value;\n  const newProject = new Project(name);\n  projectList.push(newProject);\n  allprojects.textContent = '';\n  displayAllProjects();\n  return newProject;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTodoForm\": () => (/* binding */ newTodoForm),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos)\n/* harmony export */ });\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\nconst todoForm = document.getElementById('todo-form');\n\nconst projectTodos = document.getElementById('projectTodos');\n\nfunction createTodoCard(todo) {\n  const div = document.createElement('div');\n  const todoItem = document.createElement('span');\n  todoItem.textContent = todo.title;\n  const todoDetailBtn = document.createElement('button');\n  todoDetailBtn.classList.add('btn', 'btn-success', 'm-1', 'displayer');\n  todoDetailBtn.textContent = 'details';\n  div.appendChild(todoItem);\n  div.appendChild(todoDetailBtn);\n  return div;\n}\n\nfunction displayTodos(project) {\n  projectTodos.textContent = '';\n  project.toDoList.forEach((todo) => {\n    const todoCard = createTodoCard(todo);\n    projectTodos.appendChild(todoCard);\n  });\n}\n\nfunction createToDo(project) {\n  const title = document.getElementById('title').value;\n  const description = document.getElementById('description').value;\n  const dueDate = document.getElementById('dueDate').value;\n  const priority = document.getElementById('priority').value;\n  const addedTodo = new Todo(title, description, dueDate, priority);\n  project.toDoList.push(addedTodo);\n  displayTodos(project);\n}\n\nfunction newTodoForm(project) {\n  const newForm = document.createElement('form');\n  const titleInput = document.createElement('input');\n  titleInput.setAttribute('type', 'text');\n  titleInput.setAttribute('id', 'title');\n  const descriptionInput = document.createElement('input');\n  descriptionInput.setAttribute('type', 'text');\n  descriptionInput.setAttribute('id', 'description');\n  const dueDateInput = document.createElement('input');\n  dueDateInput.setAttribute('type', 'date');\n  dueDateInput.setAttribute('id', 'dueDate');\n  const prioritySelect = document.createElement('select');\n  prioritySelect.setAttribute('id', 'priority');\n  const priorities = [\n    'High',\n    'Medium',\n    'Low',\n  ];\n  const options = priorities.map((priority) => {\n    const value = priority.toLowerCase();\n    return `<option value=\"${value}\">${priority}</option>`;\n  });\n  prioritySelect.innerHTML = options;\n\n  const submitToDo = document.createElement('input');\n  submitToDo.setAttribute('type', 'submit');\n  submitToDo.classList.add('btn', 'btn-success', 'm-1');\n\n  newForm.appendChild(titleInput);\n  newForm.appendChild(descriptionInput);\n  newForm.appendChild(dueDateInput);\n  newForm.appendChild(prioritySelect);\n  newForm.appendChild(submitToDo);\n\n  todoForm.appendChild(newForm);\n\n  newForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    createToDo(project);\n    newForm.style.display = 'none';\n  });\n  return newForm;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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