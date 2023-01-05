/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
class project {
    constructor(name) {
        this.name = this.name;
        this.todoList = new Set();
    }
    getName(){return this.name}
    setName(name){this.name = name}
    addTodo(todo) {
        this.todoList.add(todo);
    }
    removeTodo(todo) {
        this.todoList.delete(todo);
    }
}


/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
class todo {
    constructor(name) {
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}



/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoToProject": () => (/* binding */ addTodoToProject),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "findTodo": () => (/* binding */ findTodo),
/* harmony export */   "rmTodo": () => (/* binding */ rmTodo)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ "./src/Projects.js");



function createProject(name) {
    let pr = new _Projects__WEBPACK_IMPORTED_MODULE_1__.project(name);
    return pr;
}

function createTodo(name) {
    let td = new _Todo__WEBPACK_IMPORTED_MODULE_0__.todo(name);
    return td;
}

function addTodoToProject(pr, td) {
    pr.addTodo(td);
}

function rmTodo(pr, td) {
    pr.removeTodo(td);
}

function findTodo(pr, tdn) {
    for (var it = pr.todoList.values(), val= null; val=it.next().value; ) {
        if (val.getName() == tdn) {
            return val;
        }
    }
}


/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectbutton": () => (/* binding */ addProjectbutton),
/* harmony export */   "drawTodos": () => (/* binding */ drawTodos),
/* harmony export */   "setupPage": () => (/* binding */ setupPage)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.js */ "./src/TodoList.js");



function setupPage() {
    const addTodoBtn = document.getElementById("add-todo");
    const TaskPopup = document.getElementById("add-task-popup");
    // click on addTodo button -> show input
    addTodoBtn.addEventListener('click', () => {
        TaskPopup.classList.add("active");
    })
    // click on cancel -> hide input
    document.getElementById("button-cancel-task-popup").addEventListener('click', () => {
        TaskPopup.classList.remove("active");
    })

    // add project button event listener
    const addPrBtn = document.getElementById("project-add");
    const projectAddPopup = document.getElementById("add-project-popup");
    addPrBtn.addEventListener('click', () => {
        projectAddPopup.classList.add("active");
    })
    // cancel -> close input
    document.getElementById("button-cancel-project-popup").addEventListener('click', () => {
        projectAddPopup.classList.remove("active");
    })

};

function addProjectbutton(name) {
    const projects = document.getElementsByClassName("projects")[0];
    const elem = document.createElement('button');
    const code = name.replace(/\s/g, "-"); //regex g stands for global find all " ".
    elem.id = code;
    elem.classList.add(code);
    elem.innerHTML = name;
    projects.appendChild(elem);
    return elem;
    
}

function drawTodos(title, project) {
    const element = document.getElementById("todos");
    element.innerHTML = "";
    const h3 = document.createElement('h3');
    h3.innerHTML = title;
    element.appendChild(h3);
    for (var it = project.todoList.values(), val= null; val=it.next().value; ) {
        const div = document.createElement('div');
        div.innerText = val.getName();
        element.appendChild(div);
        const xbtn = document.createElement('button');
        xbtn.innerText = 'x';
        div.appendChild(xbtn);
        xbtn.addEventListener('click', () => {
            (0,_TodoList_js__WEBPACK_IMPORTED_MODULE_1__.rmTodo)(project, (0,_TodoList_js__WEBPACK_IMPORTED_MODULE_1__.findTodo)(project, xbtn.parentNode.innerText.replace(/\nx/, "")))
            drawTodos(title, project);
        })
    } 
}





/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "saveProjects": () => (/* binding */ saveProjects)
/* harmony export */ });
// add project
function saveProjects(projectsList) {
    localStorage.clear();
    let myJson = JSON.stringify(projectsList);
    localStorage.setItem("projects", myJson);
}

function getProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}




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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");
/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.js */ "./src/TodoList.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



// adds event listeners to all important buttons on loadup. Like
// + on todo list add, Today button add project etc.
(0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.setupPage)();

let currentKey = "Today";
let projectsList = {};
if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getProjects)() == null) {
     projectsList= {
        "Today": (new _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.createProject("Today")), 
        "This Week": ((0,_TodoList_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("This Week")), 
        "This Month": ((0,_TodoList_js__WEBPACK_IMPORTED_MODULE_1__.createProject)("This Month")),
    };
}
else projectsList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getProjects)();
const projectButtons = document.getElementsByClassName("projects")[0].childNodes;
for (const key in projectsList) {
    const button = (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.addProjectbutton)(key);
    button.addEventListener('click', () => {
        currentKey = (key);
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.drawTodos)(currentKey, projectsList[currentKey]);
    })
}
// add event listeners to project buttons
// const projectButtons = document.getElementsByClassName("projects")[0].childNodes;
// for (let i = 0; i<projectButtons.length; i++) {
//     projectButtons[i].addEventListener('click', () => {
//         currentKey = (projectButtons[i].innerHTML);
//         drawTodos(currentKey, projectsList[currentKey]);
//     })
// }

document.getElementById("button-add-project-popup").addEventListener('click', () => {
    const ProjInput = document.getElementById('input-add-project-popup');
    let PrName = ProjInput.value;
    ProjInput.value = null;
    if (!(PrName in projectsList)) {
        projectsList[PrName] = (0,_TodoList_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(PrName);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projectsList);
    }
    const button = (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.addProjectbutton)(PrName);
    button.addEventListener('click', () => {
        currentKey = (button.innerHTML);
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.drawTodos)(currentKey, projectsList[currentKey]);
    })
    document.getElementById("add-project-popup").classList.remove("active");
})

// click on Add -> get from input and hide input
let value = '';
document.getElementById("button-add-task-popup").addEventListener('click', () => {
    const TaskInput = document.getElementById('input-add-task-popup');
    value = TaskInput.value;
    (0,_TodoList_js__WEBPACK_IMPORTED_MODULE_1__.addTodoToProject)(projectsList[currentKey], (0,_TodoList_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(value));
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projectsList);
    (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.drawTodos)(currentKey, projectsList[currentKey]);
    TaskInput.value = null;
    const TaskPopup = document.getElementById("add-task-popup");
    TaskPopup.classList.remove("active");
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g4QjtBQUNPO0FBQ3JDO0FBQ0E7QUFDQSxpQkFBaUIsOENBQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHFCQUFxQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0QztBQUN0QjtBQUMyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QscUJBQXFCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBTSxVQUFVLHNEQUFRO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNnRDtBQUNoRDs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDOzs7Ozs7O1VDWGxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nRTtBQUNpQjtBQUM1QjtBQUNyRDtBQUNBO0FBQ0EsaURBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFXO0FBQ2Y7QUFDQSxzQkFBc0IsdURBQWE7QUFDbkMsc0JBQXNCLDJEQUFhO0FBQ25DLHVCQUF1QiwyREFBYTtBQUNwQztBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXO0FBQy9CO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQWdCO0FBQ25DO0FBQ0E7QUFDQSxRQUFRLGlEQUFTO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyREFBYTtBQUM1QyxRQUFRLHlEQUFZO0FBQ3BCO0FBQ0EsbUJBQW1CLHdEQUFnQjtBQUNuQztBQUNBO0FBQ0EsUUFBUSxpREFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBZ0IsMkJBQTJCLHdEQUFVO0FBQ3pELElBQUkseURBQVk7QUFDaEIsSUFBSSxpREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIHByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0ID0gbmV3IFNldCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0TmFtZSgpe3JldHVybiB0aGlzLm5hbWV9XHJcbiAgICBzZXROYW1lKG5hbWUpe3RoaXMubmFtZSA9IG5hbWV9XHJcbiAgICBhZGRUb2RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0LmFkZCh0b2RvKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVRvZG8odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QuZGVsZXRlKHRvZG8pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7cHJvamVjdH07IiwiY2xhc3MgdG9kbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7dG9kb30iLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vVG9kb1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdHNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xyXG4gICAgbGV0IHByID0gbmV3IHByb2plY3QobmFtZSk7XHJcbiAgICByZXR1cm4gcHI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG8obmFtZSkge1xyXG4gICAgbGV0IHRkID0gbmV3IHRvZG8obmFtZSk7XHJcbiAgICByZXR1cm4gdGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QocHIsIHRkKSB7XHJcbiAgICBwci5hZGRUb2RvKHRkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm1Ub2RvKHByLCB0ZCkge1xyXG4gICAgcHIucmVtb3ZlVG9kbyh0ZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRUb2RvKHByLCB0ZG4pIHtcclxuICAgIGZvciAodmFyIGl0ID0gcHIudG9kb0xpc3QudmFsdWVzKCksIHZhbD0gbnVsbDsgdmFsPWl0Lm5leHQoKS52YWx1ZTsgKSB7XHJcbiAgICAgICAgaWYgKHZhbC5nZXROYW1lKCkgPT0gdGRuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7Y3JlYXRlUHJvamVjdCwgY3JlYXRlVG9kbyxhZGRUb2RvVG9Qcm9qZWN0LHJtVG9kbywgZmluZFRvZG99OyIsImltcG9ydCB7IHNhdmVQcm9qZWN0cyB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCAnLi9Ub2RvTGlzdC5qcydcclxuaW1wb3J0IHsgZmluZFRvZG8sIHJtVG9kbyB9IGZyb20gJy4vVG9kb0xpc3QuanMnO1xyXG5mdW5jdGlvbiBzZXR1cFBhZ2UoKSB7XHJcbiAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kb1wiKTtcclxuICAgIGNvbnN0IFRhc2tQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stcG9wdXBcIik7XHJcbiAgICAvLyBjbGljayBvbiBhZGRUb2RvIGJ1dHRvbiAtPiBzaG93IGlucHV0XHJcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIFRhc2tQb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSlcclxuICAgIC8vIGNsaWNrIG9uIGNhbmNlbCAtPiBoaWRlIGlucHV0XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtdGFzay1wb3B1cFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBUYXNrUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gYWRkIHByb2plY3QgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXHJcbiAgICBjb25zdCBhZGRQckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1hZGRcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0QWRkUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LXBvcHVwXCIpO1xyXG4gICAgYWRkUHJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdEFkZFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9KVxyXG4gICAgLy8gY2FuY2VsIC0+IGNsb3NlIGlucHV0XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtcHJvamVjdC1wb3B1cFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0QWRkUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH0pXHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdGJ1dHRvbihuYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0c1wiKVswXTtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGNvZGUgPSBuYW1lLnJlcGxhY2UoL1xccy9nLCBcIi1cIik7IC8vcmVnZXggZyBzdGFuZHMgZm9yIGdsb2JhbCBmaW5kIGFsbCBcIiBcIi5cclxuICAgIGVsZW0uaWQgPSBjb2RlO1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNvZGUpO1xyXG4gICAgZWxlbS5pbm5lckhUTUwgPSBuYW1lO1xyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3VG9kb3ModGl0bGUsIHByb2plY3QpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMuaW5uZXJIVE1MID0gdGl0bGU7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGgzKTtcclxuICAgIGZvciAodmFyIGl0ID0gcHJvamVjdC50b2RvTGlzdC52YWx1ZXMoKSwgdmFsPSBudWxsOyB2YWw9aXQubmV4dCgpLnZhbHVlOyApIHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuaW5uZXJUZXh0ID0gdmFsLmdldE5hbWUoKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgY29uc3QgeGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHhidG4uaW5uZXJUZXh0ID0gJ3gnO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh4YnRuKTtcclxuICAgICAgICB4YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBybVRvZG8ocHJvamVjdCwgZmluZFRvZG8ocHJvamVjdCwgeGJ0bi5wYXJlbnROb2RlLmlubmVyVGV4dC5yZXBsYWNlKC9cXG54LywgXCJcIikpKVxyXG4gICAgICAgICAgICBkcmF3VG9kb3ModGl0bGUsIHByb2plY3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IFxyXG59XHJcblxyXG5leHBvcnQge3NldHVwUGFnZSwgYWRkUHJvamVjdGJ1dHRvbiwgZHJhd1RvZG9zfTtcclxuXHJcbiIsIi8vIGFkZCBwcm9qZWN0XHJcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0cyhwcm9qZWN0c0xpc3QpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbGV0IG15SnNvbiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIG15SnNvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2F2ZVByb2plY3RzLCBnZXRQcm9qZWN0c31cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZXR1cFBhZ2UsIGFkZFByb2plY3RidXR0b24sIGRyYXdUb2RvcyB9IGZyb20gJy4vVUkuanMnXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRvZG8sYWRkVG9kb1RvUHJvamVjdCxybVRvZG8gfSBmcm9tICcuL1RvZG9MaXN0LmpzJ1xyXG5pbXBvcnQge2dldFByb2plY3RzLCBzYXZlUHJvamVjdHN9ZnJvbSAnLi9zdG9yYWdlLmpzJ1xyXG4vLyBhZGRzIGV2ZW50IGxpc3RlbmVycyB0byBhbGwgaW1wb3J0YW50IGJ1dHRvbnMgb24gbG9hZHVwLiBMaWtlXHJcbi8vICsgb24gdG9kbyBsaXN0IGFkZCwgVG9kYXkgYnV0dG9uIGFkZCBwcm9qZWN0IGV0Yy5cclxuc2V0dXBQYWdlKCk7XHJcblxyXG5sZXQgY3VycmVudEtleSA9IFwiVG9kYXlcIjtcclxubGV0IHByb2plY3RzTGlzdCA9IHt9O1xyXG5pZiAoZ2V0UHJvamVjdHMoKSA9PSBudWxsKSB7XHJcbiAgICAgcHJvamVjdHNMaXN0PSB7XHJcbiAgICAgICAgXCJUb2RheVwiOiAobmV3IGNyZWF0ZVByb2plY3QoXCJUb2RheVwiKSksIFxyXG4gICAgICAgIFwiVGhpcyBXZWVrXCI6IChjcmVhdGVQcm9qZWN0KFwiVGhpcyBXZWVrXCIpKSwgXHJcbiAgICAgICAgXCJUaGlzIE1vbnRoXCI6IChjcmVhdGVQcm9qZWN0KFwiVGhpcyBNb250aFwiKSksXHJcbiAgICB9O1xyXG59XHJcbmVsc2UgcHJvamVjdHNMaXN0ID0gZ2V0UHJvamVjdHMoKTtcclxuY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdHNcIilbMF0uY2hpbGROb2RlcztcclxuZm9yIChjb25zdCBrZXkgaW4gcHJvamVjdHNMaXN0KSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBhZGRQcm9qZWN0YnV0dG9uKGtleSk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudEtleSA9IChrZXkpO1xyXG4gICAgICAgIGRyYXdUb2RvcyhjdXJyZW50S2V5LCBwcm9qZWN0c0xpc3RbY3VycmVudEtleV0pO1xyXG4gICAgfSlcclxufVxyXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHByb2plY3QgYnV0dG9uc1xyXG4vLyBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0c1wiKVswXS5jaGlsZE5vZGVzO1xyXG4vLyBmb3IgKGxldCBpID0gMDsgaTxwcm9qZWN0QnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgcHJvamVjdEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgICAgICAgY3VycmVudEtleSA9IChwcm9qZWN0QnV0dG9uc1tpXS5pbm5lckhUTUwpO1xyXG4vLyAgICAgICAgIGRyYXdUb2RvcyhjdXJyZW50S2V5LCBwcm9qZWN0c0xpc3RbY3VycmVudEtleV0pO1xyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkLXByb2plY3QtcG9wdXBcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBQcm9qSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtYWRkLXByb2plY3QtcG9wdXAnKTtcclxuICAgIGxldCBQck5hbWUgPSBQcm9qSW5wdXQudmFsdWU7XHJcbiAgICBQcm9qSW5wdXQudmFsdWUgPSBudWxsO1xyXG4gICAgaWYgKCEoUHJOYW1lIGluIHByb2plY3RzTGlzdCkpIHtcclxuICAgICAgICBwcm9qZWN0c0xpc3RbUHJOYW1lXSA9IGNyZWF0ZVByb2plY3QoUHJOYW1lKTtcclxuICAgICAgICBzYXZlUHJvamVjdHMocHJvamVjdHNMaXN0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGFkZFByb2plY3RidXR0b24oUHJOYW1lKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjdXJyZW50S2V5ID0gKGJ1dHRvbi5pbm5lckhUTUwpO1xyXG4gICAgICAgIGRyYXdUb2RvcyhjdXJyZW50S2V5LCBwcm9qZWN0c0xpc3RbY3VycmVudEtleV0pO1xyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtcG9wdXBcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufSlcclxuXHJcbi8vIGNsaWNrIG9uIEFkZCAtPiBnZXQgZnJvbSBpbnB1dCBhbmQgaGlkZSBpbnB1dFxyXG5sZXQgdmFsdWUgPSAnJztcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkLXRhc2stcG9wdXBcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBUYXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtYWRkLXRhc2stcG9wdXAnKTtcclxuICAgIHZhbHVlID0gVGFza0lucHV0LnZhbHVlO1xyXG4gICAgYWRkVG9kb1RvUHJvamVjdChwcm9qZWN0c0xpc3RbY3VycmVudEtleV0sIGNyZWF0ZVRvZG8odmFsdWUpKTtcclxuICAgIHNhdmVQcm9qZWN0cyhwcm9qZWN0c0xpc3QpO1xyXG4gICAgZHJhd1RvZG9zKGN1cnJlbnRLZXksIHByb2plY3RzTGlzdFtjdXJyZW50S2V5XSk7XHJcbiAgICBUYXNrSW5wdXQudmFsdWUgPSBudWxsO1xyXG4gICAgY29uc3QgVGFza1BvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1wb3B1cFwiKTtcclxuICAgIFRhc2tQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==