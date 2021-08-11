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

const projectList = [];

const defaultProject = new Project('Default');
projectList.push(defaultProject);

const allprojects = document.getElementById('all-projects');

const createProjectCard = (project) => {
  const div = document.createElement('div');
  div.classList.add('m-2', 'p-1');
  const projectName = document.createElement('span');
  projectName.textContent = project.name;
  projectName.addEventListener('click', () => {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.displayTododsFunction)(project);
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
  if (!projectList.length) {
    const p2 = document.createElement('p');
    p2.textContent = 'There are currently no books';
    allprojects.appendChild(p2);
  } else {
    projectList.forEach((project) => {
      const projectCard = createProjectCard(project);
      allprojects.appendChild(projectCard);
    });
  }
};

const createProject = () => {
  const name = document.getElementById('name').value;
  const newProject = new Project(name);
  projectList.push(newProject);
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
/* harmony export */   "displayTododsFunction": () => (/* binding */ displayTododsFunction)
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
    const todoIndex = project.toDoList.indexOf(todo);
    project.toDoList.splice(todoIndex, 1);
    todoDetail.textContent = '';
    console.log(project.toDoList);
    displayTodos(project);
  };

  const updateTodoBtn = document.createElement('button');
  updateTodoBtn.classList.add('btn', 'btn-warning', 'm-1');
  updateTodoBtn.textContent = 'Update';

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
  project.toDoList.forEach((todo) => {
    const todoCard = createTodoCard(todo, project);
    console.log(`${createTodoCard} create to do card logged out`);
    projectTodos.appendChild(todoCard);
  });
};

const createToDo = (project) => {
  const title = document.getElementById('title').value;
  console.log(title);
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;
  const addedTodo = new Todo(title, description, dueDate, priority);
  console.log(addedTodo);
  project.toDoList.push(addedTodo);
  console.log(project.toDoList);
  displayTodos(project);
};

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

const displayTododsFunction = displayTodos;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFxQjtBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFXO0FBQ2YsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7OztBQzdENUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSxJQUFJLFNBQVM7QUFDaEQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUU4Qzs7Ozs7OztVQ2xKOUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBYTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmV3VG9kb0Zvcm0sIGRpc3BsYXlUb2RvZHNGdW5jdGlvbiB9IGZyb20gJy4vdG9kbyc7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RPZlRvZG9zID0gW107XG4gIH1cblxuICBnZXQgdG9Eb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdE9mVG9kb3M7XG4gIH1cbn1cblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xucHJvamVjdExpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IGFsbHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1wcm9qZWN0cycpO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Q2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnbS0yJywgJ3AtMScpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlUb2RvZHNGdW5jdGlvbihwcm9qZWN0KTtcbiAgfSk7XG4gIGNvbnN0IGFkZFByb2plY3RUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3RUb2RvLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tc3VjY2VzcycsICdtLTEnKTtcbiAgYWRkUHJvamVjdFRvZG8udGV4dENvbnRlbnQgPSAnKyc7XG4gIGFkZFByb2plY3RUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1RvZG9Gb3JtKHByb2plY3QpO1xuICB9KTtcblxuICBkaXYuYXBwZW5kKHByb2plY3ROYW1lLCBhZGRQcm9qZWN0VG9kbyk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBkaXNwbGF5QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gIGlmICghcHJvamVjdExpc3QubGVuZ3RoKSB7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSAnVGhlcmUgYXJlIGN1cnJlbnRseSBubyBib29rcyc7XG4gICAgYWxscHJvamVjdHMuYXBwZW5kQ2hpbGQocDIpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCk7XG4gICAgICBhbGxwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gIGFsbHByb2plY3RzLnRleHRDb250ZW50ID0gJyc7XG4gIGRpc3BsYXlBbGxQcm9qZWN0cygpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7IiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmxldCBkaXNwbGF5VG9kb3M7XG5cbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xuXG5jb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRvZG9zJyk7XG5cbmNvbnN0IHRvZG9EZXRhaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXRhaWwnKTtcblxuY29uc3QgZGlzcGxheVRvZG9EZXRhaWxzID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgdG9kb0RldGFpbC50ZXh0Q29udGVudCA9ICcnO1xuXG4gIGNvbnN0IHRvZG9EZXRhaWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EZXRhaWxDYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAncC0yJywgJ20tMScpO1xuXG4gIGNvbnN0IGRldGFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgZGV0YWlsVGl0bGUuY2xhc3NOYW1lID0gJ2NhcmQtdGl0bGUnO1xuICBkZXRhaWxUaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgY29uc3QgZGV0YWlsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRldGFpbERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xuICBkZXRhaWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gIGNvbnN0IGRldGFpbER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRldGFpbER1ZURhdGUuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XG4gIGRldGFpbER1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gIGNvbnN0IGRldGFpbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXRhaWxQcmlvcml0eS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcbiAgZGV0YWlsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX1gO1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kbywgcHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRvZG9JbmRleCA9IHByb2plY3QudG9Eb0xpc3QuaW5kZXhPZih0b2RvKTtcbiAgICBwcm9qZWN0LnRvRG9MaXN0LnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgIHRvZG9EZXRhaWwudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvRG9MaXN0KTtcbiAgICBkaXNwbGF5VG9kb3MocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB1cGRhdGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4td2FybmluZycsICdtLTEnKTtcbiAgdXBkYXRlVG9kb0J0bi50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLWRhbmdlcicsICdtLTEnKTtcbiAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRvZG8odG9kbywgcHJvamVjdCk7XG4gIH0pO1xuXG4gIHRvZG9EZXRhaWxDYXJkLmFwcGVuZChkZXRhaWxUaXRsZSwgZGV0YWlsRGVzY3JpcHRpb24sIGRldGFpbER1ZURhdGUsIGRldGFpbFByaW9yaXR5KTtcbiAgdG9kb0RldGFpbENhcmQuYXBwZW5kKHVwZGF0ZVRvZG9CdG4sIGRlbGV0ZVRvZG9CdG4pO1xuICB0b2RvRGV0YWlsLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxDYXJkKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9DYXJkID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2RvSXRlbS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gIGNvbnN0IHRvZG9EZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9kb0RldGFpbEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXN1Y2Nlc3MnLCAnbS0xJywgJ2Rpc3BsYXllcicpO1xuICB0b2RvRGV0YWlsQnRuLnRleHRDb250ZW50ID0gJ2RldGFpbHMnO1xuICB0b2RvRGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlUb2RvRGV0YWlscyh0b2RvLCBwcm9qZWN0KTtcbiAgfSk7XG4gIGRpdi5hcHBlbmQodG9kb0l0ZW0sIHRvZG9EZXRhaWxCdG4pO1xuICByZXR1cm4gZGl2O1xufTtcblxuZGlzcGxheVRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgcHJvamVjdFRvZG9zLnRleHRDb250ZW50ID0gJyc7XG4gIHByb2plY3QudG9Eb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gY3JlYXRlVG9kb0NhcmQodG9kbywgcHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coYCR7Y3JlYXRlVG9kb0NhcmR9IGNyZWF0ZSB0byBkbyBjYXJkIGxvZ2dlZCBvdXRgKTtcbiAgICBwcm9qZWN0VG9kb3MuYXBwZW5kQ2hpbGQodG9kb0NhcmQpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvRG8gPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICBjb25zdCBhZGRlZFRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgY29uc29sZS5sb2coYWRkZWRUb2RvKTtcbiAgcHJvamVjdC50b0RvTGlzdC5wdXNoKGFkZGVkVG9kbyk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QudG9Eb0xpc3QpO1xuICBkaXNwbGF5VG9kb3MocHJvamVjdCk7XG59O1xuXG5jb25zdCBuZXdUb2RvRm9ybSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgdGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBkZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBkdWVEYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBwcmlvcml0eVNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcbiAgICAnSGlnaCcsXG4gICAgJ01lZGl1bScsXG4gICAgJ0xvdycsXG4gIF07XG4gIGNvbnN0IG9wdGlvbnMgPSBwcmlvcml0aWVzLm1hcCgocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIj4ke3ByaW9yaXR5fTwvb3B0aW9uPmA7XG4gIH0pO1xuICBwcmlvcml0eVNlbGVjdC5pbm5lckhUTUwgPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN1Ym1pdFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWJtaXRUb0RvLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0VG9Eby5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLXN1Y2Nlc3MnLCAnbS0xJyk7XG5cbiAgbmV3Rm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eVNlbGVjdCwgc3VibWl0VG9Ebyk7XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG5cbiAgbmV3Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVUb0RvKHByb2plY3QpO1xuICAgIG5ld0Zvcm0ucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gdG9kb0Zvcm07XG59O1xuXG5jb25zdCBkaXNwbGF5VG9kb2RzRnVuY3Rpb24gPSBkaXNwbGF5VG9kb3M7XG5cbmV4cG9ydCB7IG5ld1RvZG9Gb3JtLCBkaXNwbGF5VG9kb2RzRnVuY3Rpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdENyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdEZvcm0nKTtcbnByb2plY3RDcmVhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlUHJvamVjdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=