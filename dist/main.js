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

function localStorageOnLoad() {
  displayAllProjects();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXdUb2RvRm9ybSwgZGlzcGxheVRvZG9zRnVuY3Rpb24gfSBmcm9tICcuL3RvZG8nO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5saXN0T2ZUb2RvcyA9IFtdO1xuICB9XG5cbiAgZ2V0IHRvRG9MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RPZlRvZG9zO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcblxuZnVuY3Rpb24gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICBsZXQgcHJvamVjdHM7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gIGlmIChsb2NhbFN0b3JhZ2VQcm9qZWN0cyA9PT0gbnVsbCkge1xuICAgIHByb2plY3RzID0gW107XG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UocHJvamVjdHMpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VQcm9qZWN0cyk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmNvbnN0IGFsbHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1wcm9qZWN0cycpO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnbS0yJywgJ3AtMScpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlUb2Rvc0Z1bmN0aW9uKHByb2plY3QpO1xuICB9KTtcbiAgY29uc3QgYWRkUHJvamVjdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkUHJvamVjdFRvZG8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1zdWNjZXNzJywgJ20tMScpO1xuICBhZGRQcm9qZWN0VG9kby50ZXh0Q29udGVudCA9ICcrJztcbiAgYWRkUHJvamVjdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3VG9kb0Zvcm0ocHJvamVjdCk7XG4gIH0pO1xuXG4gIGRpdi5hcHBlbmQocHJvamVjdE5hbWUsIGFkZFByb2plY3RUb2RvKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGRpc3BsYXlBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KTtcbiAgICBhbGxwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgLy8gY3JlYXRlIGZ1bmN0aW9uIHRvIGFkZCBuZXdQcm9qZWN0IHRvIGxvY2FsIHN0b3JhZ2VcbiAgYWRkUHJvamVjdFRvTG9jYWxTdG9yYWdlKG5ld1Byb2plY3QpO1xuICAvLyBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICBhbGxwcm9qZWN0cy50ZXh0Q29udGVudCA9ICcnO1xuICBkaXNwbGF5QWxsUHJvamVjdHMoKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59O1xuXG5mdW5jdGlvbiBsb2NhbFN0b3JhZ2VPbkxvYWQoKSB7XG4gIGRpc3BsYXlBbGxQcm9qZWN0cygpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9jYWxTdG9yYWdlT25Mb2FkKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsiLCJjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxubGV0IGRpc3BsYXlUb2RvcztcblxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJyk7XG5cbmNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VG9kb3MnKTtcblxuY29uc3QgdG9kb0RldGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRldGFpbCcpO1xuXG5sZXQgdXBkYXRlVG9kbztcblxuY29uc3QgdXBkYXRlVG9kb0Zvcm0gPSAodG9kbywgcHJvamVjdCkgPT4ge1xuICBjb25zdCB1cGRhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdG9kby50aXRsZSk7XG4gIHRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0b2RvLmRlc2NyaXB0aW9uKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0b2RvLmR1ZURhdGUpO1xuICBkdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXG4gICAgJ0hpZ2gnLFxuICAgICdNZWRpdW0nLFxuICAgICdMb3cnLFxuICBdO1xuICBjb25zdCBvcHRpb25zID0gcHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCI+JHtwcmlvcml0eX08L29wdGlvbj5gO1xuICB9KTtcbiAgcHJpb3JpdHlTZWxlY3QuaW5uZXJIVE1MID0gb3B0aW9ucztcblxuICBjb25zdCBzdWJtaXRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0VG9Eby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdFRvRG8uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1zdWNjZXNzJywgJ20tMScpO1xuXG4gIHVwZGF0ZUZvcm0uYXBwZW5kKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlTZWxlY3QsIHN1Ym1pdFRvRG8pO1xuXG4gIHRvZG9EZXRhaWwuYXBwZW5kQ2hpbGQodXBkYXRlRm9ybSk7XG5cbiAgdXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB1cGRhdGVUb2RvKHRvZG8sIHByb2plY3QpO1xuICAgIHVwZGF0ZUZvcm0ucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gdG9kb0RldGFpbDtcbn07XG5cbmNvbnN0IGRpc3BsYXlUb2RvRGV0YWlscyA9ICh0b2RvLCBwcm9qZWN0KSA9PiB7XG4gIHRvZG9EZXRhaWwudGV4dENvbnRlbnQgPSAnJztcblxuICBjb25zdCB0b2RvRGV0YWlsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRGV0YWlsQ2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ3AtMicsICdtLTEnKTtcblxuICBjb25zdCBkZXRhaWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGRldGFpbFRpdGxlLmNsYXNzTmFtZSA9ICdjYXJkLXRpdGxlJztcbiAgZGV0YWlsVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gIGNvbnN0IGRldGFpbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcbiAgZGV0YWlsRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICBjb25zdCBkZXRhaWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxEdWVEYXRlLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xuICBkZXRhaWxEdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICBjb25zdCBkZXRhaWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsUHJpb3JpdHkuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XG4gIGRldGFpbFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHl9YDtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvSW5kZXggPSBwcm9qZWN0Lmxpc3RPZlRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgcHJvamVjdC5saXN0T2ZUb2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgICB0b2RvRGV0YWlsLnRleHRDb250ZW50ID0gJyc7XG4gICAgZGlzcGxheVRvZG9zKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdXBkYXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXdhcm5pbmcnLCAnbS0xJyk7XG4gIHVwZGF0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcbiAgdXBkYXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1cGRhdGVUb2RvRm9ybSh0b2RvLCBwcm9qZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tZGFuZ2VyJywgJ20tMScpO1xuICBkZWxldGVUb2RvQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVsZXRlVG9kbyh0b2RvLCBwcm9qZWN0KTtcbiAgfSk7XG5cbiAgdG9kb0RldGFpbENhcmQuYXBwZW5kKGRldGFpbFRpdGxlLCBkZXRhaWxEZXNjcmlwdGlvbiwgZGV0YWlsRHVlRGF0ZSwgZGV0YWlsUHJpb3JpdHkpO1xuICB0b2RvRGV0YWlsQ2FyZC5hcHBlbmQodXBkYXRlVG9kb0J0biwgZGVsZXRlVG9kb0J0bik7XG4gIHRvZG9EZXRhaWwuYXBwZW5kQ2hpbGQodG9kb0RldGFpbENhcmQpO1xufTtcblxudXBkYXRlVG9kbyA9ICh0b2RvLCBwcm9qZWN0KSA9PiB7XG4gIHRvZG8udGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICB0b2RvLmR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICB0b2RvLnByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvLCBwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9DYXJkID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2RvSXRlbS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gIGNvbnN0IHRvZG9EZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9kb0RldGFpbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXN1Y2Nlc3MnLCAnbS0xJywgJ2Rpc3BsYXllcicpO1xuICB0b2RvRGV0YWlsQnRuLnRleHRDb250ZW50ID0gJ2RldGFpbHMnO1xuICB0b2RvRGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvLCBwcm9qZWN0KTtcbiAgfSk7XG4gIGRpdi5hcHBlbmQodG9kb0l0ZW0sIHRvZG9EZXRhaWxCdG4pO1xuICByZXR1cm4gZGl2O1xufTtcblxuZGlzcGxheVRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgcHJvamVjdFRvZG9zLnRleHRDb250ZW50ID0gJyc7XG4gIHByb2plY3QubGlzdE9mVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gY3JlYXRlVG9kb0NhcmQodG9kbywgcHJvamVjdCk7XG4gICAgcHJvamVjdFRvZG9zLmFwcGVuZENoaWxkKHRvZG9DYXJkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVUb0RvID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gIGNvbnN0IGFkZGVkVG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0Lmxpc3RPZlRvZG9zKTtcbiAgcHJvamVjdC5saXN0T2ZUb2Rvcy5wdXNoKGFkZGVkVG9kbyk7XG4gIGRpc3BsYXlUb2Rvcyhwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlUb2Rvc0Z1bmN0aW9uID0gZGlzcGxheVRvZG9zO1xuXG5jb25zdCBuZXdUb2RvRm9ybSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgdGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBkZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBkdWVEYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBwcmlvcml0eVNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcbiAgICAnSGlnaCcsXG4gICAgJ01lZGl1bScsXG4gICAgJ0xvdycsXG4gIF07XG4gIGNvbnN0IG9wdGlvbnMgPSBwcmlvcml0aWVzLm1hcCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIj4ke3ByaW9yaXR5fTwvb3B0aW9uPmA7XG4gIH0pO1xuICBwcmlvcml0eVNlbGVjdC5pbm5lckhUTUwgPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN1Ym1pdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWJtaXRUb0RvLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0VG9Eby5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXN1Y2Nlc3MnLCAnbS0xJyk7XG5cbiAgbmV3Rm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eVNlbGVjdCwgc3VibWl0VG9Ebyk7XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG5cbiAgbmV3Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVUb0RvKHByb2plY3QpO1xuICAgIG5ld0Zvcm0ucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gdG9kb0Zvcm07XG59O1xuXG5leHBvcnQgeyBuZXdUb2RvRm9ybSwgZGlzcGxheVRvZG9zRnVuY3Rpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdENyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdEZvcm0nKTtcbnByb2plY3RDcmVhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlUHJvamVjdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=