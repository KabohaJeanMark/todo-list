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

const defaultProject = new Project('Default');

const getProjectsFromLocalStorage = () => {
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
};

const addProjectToLocalStorage = (newProject) => {
  const projects = getProjectsFromLocalStorage();
  projects.push(newProject);

  localStorage.setItem('projects', JSON.stringify(projects));
};

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
  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    allprojects.appendChild(projectCard);
  });
};

const createProject = () => {
  const name = document.getElementById('name').value;
  const newProject = new Project(name);
  addProjectToLocalStorage(newProject);
  allprojects.textContent = '';
  displayAllProjects();
  return newProject;
};

const localStorageOnLoad = () => {
  displayAllProjects();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5ld1RvZG9Gb3JtLCBkaXNwbGF5VG9kb3NGdW5jdGlvbiB9IGZyb20gJy4vdG9kbyc7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RPZlRvZG9zID0gW107XG4gIH1cblxuICBnZXQgdG9Eb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdE9mVG9kb3M7XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xuXG5jb25zdCBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGxldCBwcm9qZWN0cztcbiAgY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgaWYgKGxvY2FsU3RvcmFnZVByb2plY3RzID09PSBudWxsKSB7XG4gICAgcHJvamVjdHMgPSBbXTtcbiAgICBwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShwcm9qZWN0cyk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVByb2plY3RzKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdHM7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UgPSAobmV3UHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59O1xuXG5jb25zdCBhbGxwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtcHJvamVjdHMnKTtcblxuY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ20tMicsICdwLTEnKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5VG9kb3NGdW5jdGlvbihwcm9qZWN0KTtcbiAgfSk7XG4gIGNvbnN0IGFkZFByb2plY3RUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3RUb2RvLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tc3VjY2VzcycsICdtLTEnKTtcbiAgYWRkUHJvamVjdFRvZG8udGV4dENvbnRlbnQgPSAnKyc7XG4gIGFkZFByb2plY3RUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1RvZG9Gb3JtKHByb2plY3QpO1xuICB9KTtcblxuICBkaXYuYXBwZW5kKHByb2plY3ROYW1lLCBhZGRQcm9qZWN0VG9kbyk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBkaXNwbGF5QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpO1xuICAgIGFsbHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICBhZGRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdCk7XG4gIGFsbHByb2plY3RzLnRleHRDb250ZW50ID0gJyc7XG4gIGRpc3BsYXlBbGxQcm9qZWN0cygpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn07XG5cbmNvbnN0IGxvY2FsU3RvcmFnZU9uTG9hZCA9ICgpID0+IHtcbiAgZGlzcGxheUFsbFByb2plY3RzKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9jYWxTdG9yYWdlT25Mb2FkKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsiLCJjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxubGV0IGRpc3BsYXlUb2RvcztcblxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJyk7XG5cbmNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VG9kb3MnKTtcblxuY29uc3QgdG9kb0RldGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRldGFpbCcpO1xuXG5sZXQgdXBkYXRlVG9kbztcblxuY29uc3QgdXBkYXRlVG9kb0Zvcm0gPSAodG9kbywgcHJvamVjdCkgPT4ge1xuICBjb25zdCB1cGRhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdG9kby50aXRsZSk7XG4gIHRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0b2RvLmRlc2NyaXB0aW9uKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0b2RvLmR1ZURhdGUpO1xuICBkdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXG4gICAgJ0hpZ2gnLFxuICAgICdNZWRpdW0nLFxuICAgICdMb3cnLFxuICBdO1xuICBjb25zdCBvcHRpb25zID0gcHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCI+JHtwcmlvcml0eX08L29wdGlvbj5gO1xuICB9KTtcbiAgcHJpb3JpdHlTZWxlY3QuaW5uZXJIVE1MID0gb3B0aW9ucztcblxuICBjb25zdCBzdWJtaXRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0VG9Eby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdFRvRG8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1zdWNjZXNzJywgJ20tMScpO1xuXG4gIHVwZGF0ZUZvcm0uYXBwZW5kKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlTZWxlY3QsIHN1Ym1pdFRvRG8pO1xuXG4gIHRvZG9EZXRhaWwuYXBwZW5kQ2hpbGQodXBkYXRlRm9ybSk7XG5cbiAgdXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB1cGRhdGVUb2RvKHRvZG8sIHByb2plY3QpO1xuICAgIHVwZGF0ZUZvcm0ucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gdG9kb0RldGFpbDtcbn07XG5cbmNvbnN0IGRpc3BsYXlUb2RvRGV0YWlscyA9ICh0b2RvLCBwcm9qZWN0KSA9PiB7XG4gIHRvZG9EZXRhaWwudGV4dENvbnRlbnQgPSAnJztcblxuICBjb25zdCB0b2RvRGV0YWlsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRGV0YWlsQ2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ3AtMicsICdtLTEnKTtcblxuICBjb25zdCBkZXRhaWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGRldGFpbFRpdGxlLmNsYXNzTmFtZSA9ICdjYXJkLXRpdGxlJztcbiAgZGV0YWlsVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gIGNvbnN0IGRldGFpbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcbiAgZGV0YWlsRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICBjb25zdCBkZXRhaWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxEdWVEYXRlLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xuICBkZXRhaWxEdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICBjb25zdCBkZXRhaWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsUHJpb3JpdHkuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XG4gIGRldGFpbFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHl9YDtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvSW5kZXggPSBwcm9qZWN0Lmxpc3RPZlRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgcHJvamVjdC5saXN0T2ZUb2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICB0b2RvRGV0YWlsLnRleHRDb250ZW50ID0gJyc7XG4gICAgZGlzcGxheVRvZG9zKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdXBkYXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXdhcm5pbmcnLCAnbS0xJyk7XG4gIHVwZGF0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcbiAgdXBkYXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1cGRhdGVUb2RvRm9ybSh0b2RvLCBwcm9qZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tZGFuZ2VyJywgJ20tMScpO1xuICBkZWxldGVUb2RvQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVsZXRlVG9kbyh0b2RvLCBwcm9qZWN0KTtcbiAgfSk7XG5cbiAgdG9kb0RldGFpbENhcmQuYXBwZW5kKGRldGFpbFRpdGxlLCBkZXRhaWxEZXNjcmlwdGlvbiwgZGV0YWlsRHVlRGF0ZSwgZGV0YWlsUHJpb3JpdHkpO1xuICB0b2RvRGV0YWlsQ2FyZC5hcHBlbmQodXBkYXRlVG9kb0J0biwgZGVsZXRlVG9kb0J0bik7XG4gIHRvZG9EZXRhaWwuYXBwZW5kQ2hpbGQodG9kb0RldGFpbENhcmQpO1xufTtcblxudXBkYXRlVG9kbyA9ICh0b2RvLCBwcm9qZWN0KSA9PiB7XG4gIHRvZG8udGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICB0b2RvLmR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICB0b2RvLnByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvLCBwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9DYXJkID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2RvSXRlbS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gIGNvbnN0IHRvZG9EZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9kb0RldGFpbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXN1Y2Nlc3MnLCAnbS0xJywgJ2Rpc3BsYXllcicpO1xuICB0b2RvRGV0YWlsQnRuLnRleHRDb250ZW50ID0gJ2RldGFpbHMnO1xuICB0b2RvRGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvLCBwcm9qZWN0KTtcbiAgfSk7XG4gIGRpdi5hcHBlbmQodG9kb0l0ZW0sIHRvZG9EZXRhaWxCdG4pO1xuICByZXR1cm4gZGl2O1xufTtcblxuZGlzcGxheVRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgcHJvamVjdFRvZG9zLnRleHRDb250ZW50ID0gJyc7XG4gIHByb2plY3QubGlzdE9mVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gY3JlYXRlVG9kb0NhcmQodG9kbywgcHJvamVjdCk7XG4gICAgcHJvamVjdFRvZG9zLmFwcGVuZENoaWxkKHRvZG9DYXJkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVUb0RvID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gIGNvbnN0IGFkZGVkVG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICBwcm9qZWN0Lmxpc3RPZlRvZG9zLnB1c2goYWRkZWRUb2RvKTtcbiAgZGlzcGxheVRvZG9zKHByb2plY3QpO1xufTtcblxuY29uc3QgZGlzcGxheVRvZG9zRnVuY3Rpb24gPSBkaXNwbGF5VG9kb3M7XG5cbmNvbnN0IG5ld1RvZG9Gb3JtID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciB0aXRsZScpO1xuICB0aXRsZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGR1ZURhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5U2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICBjb25zdCBwcmlvcml0aWVzID0gW1xuICAgICdIaWdoJyxcbiAgICAnTWVkaXVtJyxcbiAgICAnTG93JyxcbiAgXTtcbiAgY29uc3Qgb3B0aW9ucyA9IHByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7cHJpb3JpdHl9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHByaW9yaXR5U2VsZWN0LmlubmVySFRNTCA9IG9wdGlvbnM7XG5cbiAgY29uc3Qgc3VibWl0VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHN1Ym1pdFRvRG8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRUb0RvLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tc3VjY2VzcycsICdtLTEnKTtcblxuICBuZXdGb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5U2VsZWN0LCBzdWJtaXRUb0RvKTtcblxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChuZXdGb3JtKTtcblxuICBuZXdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVRvRG8ocHJvamVjdCk7XG4gICAgbmV3Rm9ybS5yZW1vdmUoKTtcbiAgfSk7XG4gIHJldHVybiB0b2RvRm9ybTtcbn07XG5cbmV4cG9ydCB7IG5ld1RvZG9Gb3JtLCBkaXNwbGF5VG9kb3NGdW5jdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBwcm9qZWN0Q3JlYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQcm9qZWN0Rm9ybScpO1xucHJvamVjdENyZWF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVQcm9qZWN0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==