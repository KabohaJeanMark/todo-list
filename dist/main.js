/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project {
  constructor(name) {
    this.name = name;
    this.listOfTodos = [];
  }

  get toDoList() {
    return this.listOfTodos;
  }
}

// const projectList = JSON.parse(localStorage.getItem('projects')) || [];

const defaultProject = new Project('Default');

function getProjectsFromLocalStorage() {
  let projects;
  const localStorageProjects = localStorage.getItem('projects');
  if (localStorageProjects === null) {
    projects = [];
    projects.push(defaultProject);
    localStorage.setItem('projects', JSON.stringify(projects));
    projects = JSON.parse(projects);
  } else {
    projects = JSON.parse(localStorageProjects);
  }
  return projects;
}

function addProjectToLocalStorage(newProject) {
  const projects = getProjectsFromLocalStorage();
  projects.push(newProject);

  localStorage.setItem('projects', JSON.stringify(projects));
}

const allprojects = document.getElementById('all-projects');

const createProjectCard = (project) => {
  const div = document.createElement('div');
  div.classList.add('m-2', 'p-1');
  const projectName = document.createElement('span');
  projectName.textContent = project.name;
  projectName.addEventListener('click', () => {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.displayTodosFunction)(project);
  });
  const addProjectTodo = document.createElement('button');
  addProjectTodo.classList.add('btn', 'btn-success', 'm-1');
  addProjectTodo.textContent = '+';
  addProjectTodo.addEventListener('click', () => {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.newTodoForm)(project);
  });

  div.append(projectName, addProjectTodo);
  return div;
};

const displayAllProjects = () => {
  const projects = getProjectsFromLocalStorage();
  console.log(projects);
  projects.forEach((project) => {
    console.log(project);
    const projectCard = createProjectCard(project);
    allprojects.appendChild(projectCard);
  });
};

const createProject = () => {
  const name = document.getElementById('name').value;
  const newProject = new Project(name);
  // create function to add newProject to local storage
  addProjectToLocalStorage(newProject);
  // projectList.push(newProject);
  allprojects.textContent = '';
  displayAllProjects();
  return newProject;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTodoForm": () => (/* binding */ newTodoForm),
/* harmony export */   "displayTodosFunction": () => (/* binding */ displayTodosFunction)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

let displayTodos;

const todoForm = document.getElementById('todo-form');

const projectTodos = document.getElementById('projectTodos');

const todoDetail = document.getElementById('todo-detail');

let updateTodo;

const updateTodoForm = (todo, project) => {
  const updateForm = document.createElement('form');
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('placeholder', todo.title);
  titleInput.className = 'form-control';
  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('id', 'description');
  descriptionInput.setAttribute('placeholder', todo.description);
  descriptionInput.className = 'form-control';
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  dueDateInput.setAttribute('placeholder', todo.dueDate);
  dueDateInput.className = 'form-control';
  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('id', 'priority');
  prioritySelect.className = 'form-control';
  const priorities = [
    'High',
    'Medium',
    'Low',
  ];
  const options = priorities.map((priority) => {
    const value = priority.toLowerCase();
    return `<option value="${value}">${priority}</option>`;
  });
  prioritySelect.innerHTML = options;

  const submitToDo = document.createElement('input');
  submitToDo.setAttribute('type', 'submit');
  submitToDo.classList.add('btn', 'btn-success', 'm-1');

  updateForm.append(titleInput, descriptionInput, dueDateInput, prioritySelect, submitToDo);

  todoDetail.appendChild(updateForm);

  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    updateTodo(todo, project);
    updateForm.remove();
  });
  return todoDetail;
};

const displayTodoDetails = (todo, project) => {
  todoDetail.textContent = '';

  const todoDetailCard = document.createElement('div');
  todoDetailCard.classList.add('card', 'p-2', 'm-1');

  const detailTitle = document.createElement('h4');
  detailTitle.className = 'card-title';
  detailTitle.textContent = todo.title;

  const detailDescription = document.createElement('p');
  detailDescription.className = 'card-text';
  detailDescription.textContent = todo.description;
  const detailDueDate = document.createElement('p');
  detailDueDate.className = 'card-text';
  detailDueDate.textContent = todo.dueDate;
  const detailPriority = document.createElement('p');
  detailPriority.className = 'card-text';
  detailPriority.textContent = `Priority: ${todo.priority}`;

  const deleteTodo = (todo, project) => {
    const todoIndex = project.listOfTodos.indexOf(todo);
    project.listOfTodos.splice(todoIndex, 1);
    todoDetail.textContent = '';
    displayTodos(project);
  };

  const updateTodoBtn = document.createElement('button');
  updateTodoBtn.classList.add('btn', 'btn-warning', 'm-1');
  updateTodoBtn.textContent = 'Update';
  updateTodoBtn.addEventListener('click', () => {
    updateTodoForm(todo, project);
  });

  const deleteTodoBtn = document.createElement('button');
  deleteTodoBtn.classList.add('btn', 'btn-danger', 'm-1');
  deleteTodoBtn.textContent = 'Delete';
  deleteTodoBtn.addEventListener('click', () => {
    deleteTodo(todo, project);
  });

  todoDetailCard.append(detailTitle, detailDescription, detailDueDate, detailPriority);
  todoDetailCard.append(updateTodoBtn, deleteTodoBtn);
  todoDetail.appendChild(todoDetailCard);
};

updateTodo = (todo, project) => {
  todo.title = document.getElementById('title').value;
  todo.description = document.getElementById('description').value;
  todo.dueDate = document.getElementById('dueDate').value;
  todo.priority = document.getElementById('priority').value;
  displayTodoDetails(todo, project);
};

const createTodoCard = (todo, project) => {
  const div = document.createElement('div');
  const todoItem = document.createElement('span');
  todoItem.textContent = todo.title;
  const todoDetailBtn = document.createElement('button');
  todoDetailBtn.classList.add('btn', 'btn-success', 'm-1', 'displayer');
  todoDetailBtn.textContent = 'details';
  todoDetailBtn.addEventListener('click', () => {
    displayTodoDetails(todo, project);
  });
  div.append(todoItem, todoDetailBtn);
  return div;
};

displayTodos = (project) => {
  projectTodos.textContent = '';
  project.listOfTodos.forEach((todo) => {
    const todoCard = createTodoCard(todo, project);
    projectTodos.appendChild(todoCard);
  });
};

const createToDo = (project) => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;
  const addedTodo = new Todo(title, description, dueDate, priority);
  console.log(project.listOfTodos);
  project.listOfTodos.push(addedTodo);
  displayTodos(project);
};

const displayTodosFunction = displayTodos;

const newTodoForm = (project) => {
  const newForm = document.createElement('form');
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('placeholder', 'Enter title');
  titleInput.className = 'form-control';
  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('id', 'description');
  descriptionInput.setAttribute('placeholder', 'Enter description');
  descriptionInput.className = 'form-control';
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  dueDateInput.setAttribute('placeholder', 'Enter dueDate');
  dueDateInput.className = 'form-control';
  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('id', 'priority');
  prioritySelect.className = 'form-control';
  const priorities = [
    'High',
    'Medium',
    'Low',
  ];
  const options = priorities.map((priority) => {
    const value = priority.toLowerCase();
    return `<option value="${value}">${priority}</option>`;
  });
  prioritySelect.innerHTML = options;

  const submitToDo = document.createElement('input');
  submitToDo.setAttribute('type', 'submit');
  submitToDo.classList.add('btn', 'btn-success', 'm-1');

  newForm.append(titleInput, descriptionInput, dueDateInput, prioritySelect, submitToDo);

  todoForm.appendChild(newForm);

  newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createToDo(project);
    newForm.remove();
  });
  return todoForm;
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const projectCreateForm = document.getElementById('createProjectForm');
projectCreateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  (0,_project__WEBPACK_IMPORTED_MODULE_0__.default)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFvQjtBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFXO0FBQ2YsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDaEY1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNLElBQUksU0FBUztBQUNoRCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWM7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU0sSUFBSSxTQUFTO0FBQ2hELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFNkM7Ozs7Ozs7VUMxTTdDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQWE7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5ld1RvZG9Gb3JtLCBkaXNwbGF5VG9kb3NGdW5jdGlvbiB9IGZyb20gJy4vdG9kbyc7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RPZlRvZG9zID0gW107XG4gIH1cblxuICBnZXQgdG9Eb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdE9mVG9kb3M7XG4gIH1cbn1cblxuLy8gY29uc3QgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIGxldCBwcm9qZWN0cztcbiAgY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgaWYgKGxvY2FsU3RvcmFnZVByb2plY3RzID09PSBudWxsKSB7XG4gICAgcHJvamVjdHMgPSBbXTtcbiAgICBwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShwcm9qZWN0cyk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVByb2plY3RzKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xvY2FsU3RvcmFnZShuZXdQcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuY29uc3QgYWxscHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXByb2plY3RzJyk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RDYXJkID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtLTInLCAncC0xJyk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheVRvZG9zRnVuY3Rpb24ocHJvamVjdCk7XG4gIH0pO1xuICBjb25zdCBhZGRQcm9qZWN0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0VG9kby5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXN1Y2Nlc3MnLCAnbS0xJyk7XG4gIGFkZFByb2plY3RUb2RvLnRleHRDb250ZW50ID0gJysnO1xuICBhZGRQcm9qZWN0VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdUb2RvRm9ybShwcm9qZWN0KTtcbiAgfSk7XG5cbiAgZGl2LmFwcGVuZChwcm9qZWN0TmFtZSwgYWRkUHJvamVjdFRvZG8pO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgZGlzcGxheUFsbFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpO1xuICAgIGFsbHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAvLyBjcmVhdGUgZnVuY3Rpb24gdG8gYWRkIG5ld1Byb2plY3QgdG8gbG9jYWwgc3RvcmFnZVxuICBhZGRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdCk7XG4gIC8vIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gIGFsbHByb2plY3RzLnRleHRDb250ZW50ID0gJyc7XG4gIGRpc3BsYXlBbGxQcm9qZWN0cygpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7IiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmxldCBkaXNwbGF5VG9kb3M7XG5cbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xuXG5jb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRvZG9zJyk7XG5cbmNvbnN0IHRvZG9EZXRhaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXRhaWwnKTtcblxubGV0IHVwZGF0ZVRvZG87XG5cbmNvbnN0IHVwZGF0ZVRvZG9Gb3JtID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgY29uc3QgdXBkYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRvZG8udGl0bGUpO1xuICB0aXRsZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdG9kby5kZXNjcmlwdGlvbik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdG9kby5kdWVEYXRlKTtcbiAgZHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5U2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICBjb25zdCBwcmlvcml0aWVzID0gW1xuICAgICdIaWdoJyxcbiAgICAnTWVkaXVtJyxcbiAgICAnTG93JyxcbiAgXTtcbiAgY29uc3Qgb3B0aW9ucyA9IHByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHByaW9yaXR5U2VsZWN0LmlubmVySFRNTCA9IG9wdGlvbnM7XG5cbiAgY29uc3Qgc3VibWl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHN1Ym1pdFRvRG8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRUb0RvLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tc3VjY2VzcycsICdtLTEnKTtcblxuICB1cGRhdGVGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5U2VsZWN0LCBzdWJtaXRUb0RvKTtcblxuICB0b2RvRGV0YWlsLmFwcGVuZENoaWxkKHVwZGF0ZUZvcm0pO1xuXG4gIHVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlVG9kbyh0b2RvLCBwcm9qZWN0KTtcbiAgICB1cGRhdGVGb3JtLnJlbW92ZSgpO1xuICB9KTtcbiAgcmV0dXJuIHRvZG9EZXRhaWw7XG59O1xuXG5jb25zdCBkaXNwbGF5VG9kb0RldGFpbHMgPSAodG9kbywgcHJvamVjdCkgPT4ge1xuICB0b2RvRGV0YWlsLnRleHRDb250ZW50ID0gJyc7XG5cbiAgY29uc3QgdG9kb0RldGFpbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0RldGFpbENhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcsICdwLTInLCAnbS0xJyk7XG5cbiAgY29uc3QgZGV0YWlsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBkZXRhaWxUaXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XG4gIGRldGFpbFRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICBjb25zdCBkZXRhaWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XG4gIGRldGFpbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgY29uc3QgZGV0YWlsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsRHVlRGF0ZS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcbiAgZGV0YWlsRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgY29uc3QgZGV0YWlsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRldGFpbFByaW9yaXR5LmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xuICBkZXRhaWxQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fWA7XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvLCBwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdG9kb0luZGV4ID0gcHJvamVjdC5saXN0T2ZUb2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgIHByb2plY3QubGlzdE9mVG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgdG9kb0RldGFpbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHVwZGF0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi13YXJuaW5nJywgJ20tMScpO1xuICB1cGRhdGVUb2RvQnRuLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG4gIHVwZGF0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlVG9kb0Zvcm0odG9kbywgcHJvamVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWRhbmdlcicsICdtLTEnKTtcbiAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRvZG8odG9kbywgcHJvamVjdCk7XG4gIH0pO1xuXG4gIHRvZG9EZXRhaWxDYXJkLmFwcGVuZChkZXRhaWxUaXRsZSwgZGV0YWlsRGVzY3JpcHRpb24sIGRldGFpbER1ZURhdGUsIGRldGFpbFByaW9yaXR5KTtcbiAgdG9kb0RldGFpbENhcmQuYXBwZW5kKHVwZGF0ZVRvZG9CdG4sIGRlbGV0ZVRvZG9CdG4pO1xuICB0b2RvRGV0YWlsLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxDYXJkKTtcbn07XG5cbnVwZGF0ZVRvZG8gPSAodG9kbywgcHJvamVjdCkgPT4ge1xuICB0b2RvLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gIHRvZG8uZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgdG9kby5kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgdG9kby5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICBkaXNwbGF5VG9kb0RldGFpbHModG9kbywgcHJvamVjdCk7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvQ2FyZCA9ICh0b2RvLCBwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdG9kb0l0ZW0udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICBjb25zdCB0b2RvRGV0YWlsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZG9EZXRhaWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1zdWNjZXNzJywgJ20tMScsICdkaXNwbGF5ZXInKTtcbiAgdG9kb0RldGFpbEJ0bi50ZXh0Q29udGVudCA9ICdkZXRhaWxzJztcbiAgdG9kb0RldGFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5VG9kb0RldGFpbHModG9kbywgcHJvamVjdCk7XG4gIH0pO1xuICBkaXYuYXBwZW5kKHRvZG9JdGVtLCB0b2RvRGV0YWlsQnRuKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmRpc3BsYXlUb2RvcyA9IChwcm9qZWN0KSA9PiB7XG4gIHByb2plY3RUb2Rvcy50ZXh0Q29udGVudCA9ICcnO1xuICBwcm9qZWN0Lmxpc3RPZlRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvQ2FyZCA9IGNyZWF0ZVRvZG9DYXJkKHRvZG8sIHByb2plY3QpO1xuICAgIHByb2plY3RUb2Rvcy5hcHBlbmRDaGlsZCh0b2RvQ2FyZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVG9EbyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICBjb25zdCBhZGRlZFRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgY29uc29sZS5sb2cocHJvamVjdC5saXN0T2ZUb2Rvcyk7XG4gIHByb2plY3QubGlzdE9mVG9kb3MucHVzaChhZGRlZFRvZG8pO1xuICBkaXNwbGF5VG9kb3MocHJvamVjdCk7XG59O1xuXG5jb25zdCBkaXNwbGF5VG9kb3NGdW5jdGlvbiA9IGRpc3BsYXlUb2RvcztcblxuY29uc3QgbmV3VG9kb0Zvcm0gPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHRpdGxlJyk7XG4gIHRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgZHVlRGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXG4gICAgJ0hpZ2gnLFxuICAgICdNZWRpdW0nLFxuICAgICdMb3cnLFxuICBdO1xuICBjb25zdCBvcHRpb25zID0gcHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCI+JHtwcmlvcml0eX08L29wdGlvbj5gO1xuICB9KTtcbiAgcHJpb3JpdHlTZWxlY3QuaW5uZXJIVE1MID0gb3B0aW9ucztcblxuICBjb25zdCBzdWJtaXRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0VG9Eby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdFRvRG8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1zdWNjZXNzJywgJ20tMScpO1xuXG4gIG5ld0Zvcm0uYXBwZW5kKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlTZWxlY3QsIHN1Ym1pdFRvRG8pO1xuXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKG5ld0Zvcm0pO1xuXG4gIG5ld0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlVG9Ebyhwcm9qZWN0KTtcbiAgICBuZXdGb3JtLnJlbW92ZSgpO1xuICB9KTtcbiAgcmV0dXJuIHRvZG9Gb3JtO1xufTtcblxuZXhwb3J0IHsgbmV3VG9kb0Zvcm0sIGRpc3BsYXlUb2Rvc0Z1bmN0aW9uIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IHByb2plY3RDcmVhdGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVByb2plY3RGb3JtJyk7XG5wcm9qZWN0Q3JlYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVByb2plY3QoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9