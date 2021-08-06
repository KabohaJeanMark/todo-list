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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('Hello todo app');\n\nconst projectList = [];\n\nconst allprojects = document.getElementById('all-projects');\n\nfunction createProjectCard(project) {\n  const div = document.createElement('div');\n  div.classList.add('m-2', 'p-1');\n  const projectName = document.createElement('span');\n  projectName.textContent = project.name;\n  const addProjectTodo = document.createElement('button');\n  addProjectTodo.classList.add('btn', 'btn-success', 'm-1');\n  addProjectTodo.textContent = '+';\n  div.appendChild(projectName);\n  div.appendChild(addProjectTodo);\n  return div;\n}\n\nfunction displayAllProjects() {\n  if (!projectList.length) {\n    const p2 = document.createElement('p');\n    p2.textContent = 'There are currently no books';\n    allprojects.appendChild(p2);\n  } else {\n    projectList.forEach((project) => {\n      const projectCard = createProjectCard(project);\n      allprojects.appendChild(projectCard);\n    });\n  }\n}\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.listOfTodos = [];\n  }\n\n  get toDoList() {\n    return this.listOfTodos;\n  }\n}\n\nconst createProject = () => {\n  const name = document.getElementById('name').value;\n  const newProject = new Project(name);\n  console.log(newProject);\n  projectList.push(newProject);\n  console.log(projectList);\n  allprojects.textContent = '';\n  displayAllProjects();\n  return newProject;\n};\n\nconst projectCreateForm = document.getElementById('createProjectForm');\nprojectCreateForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  createProject();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;