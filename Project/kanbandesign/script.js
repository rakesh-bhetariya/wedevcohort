const mainContainer = document.getElementById("container");
const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");
const allBoard = document.querySelectorAll(".board");
const allItems = document.querySelectorAll(".items");
const addBoard = document.getElementById("add-new-board");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-btn");
const createBoard = document.getElementById("add-board");

// when i used getElementByClassName so i can not use foreach but when i use query selector so i can use foreach so why this is happen means find the reaon behind the error

function addFlayingClass(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flaying");
  });
  target.addEventListener("dragend", () => {
    target.classList.remove("flaying");
  });
}

function addDragOverEvent(board) {
  board.addEventListener("dragover", () => {
    const flayingElement = document.querySelector(".flaying");
    board.appendChild(flayingElement);
  });
}

addTaskBtn.addEventListener("click", () => {
  const input = prompt("Enter a task");
  if (!input) return;

  const divElemet = document.createElement("div");
  divElemet.classList.add("items");

  const deleeteButton = document.createElement("button");
  deleeteButton.classList.add("delete-btn");
  const icon = document.createElement("i");

  // Add FontAwesome classes to the <i> element
  icon.classList.add("fa", "fa-trash");

  // here how we can add dynamically event while we create a new task 
  deleeteButton.addEventListener("click", deleteTask(this));
  // this how you can add style using js
  icon.style.fontSize = "24px";
  deleeteButton.appendChild(icon);

  const taskCard = document.createElement("input");
  taskCard.classList.add("item");
  // taskCard.innerText = input;
  taskCard.value = input;
  taskCard.setAttribute("draggable", true);

  addFlayingClass(divElemet);
  divElemet.appendChild(taskCard);
  divElemet.appendChild(deleeteButton);
  todoBoard.appendChild(divElemet);
});

allItems.forEach((item) => {
  addFlayingClass(item);
});

allBoard.forEach((board) => {
  addDragOverEvent(board);
});

function editTask(element) {
  let input = element.value;

  if (!input) {
    alert("Please don't leave empty item");
    element.value = "You remove this task";
  }
}

addBoard.addEventListener("click", () => {
  let board = document.createElement("div");
  board.classList.add("board");
});

// ohh man there is many ways to hide & unhide the display none, block, inline then visibility and we can toogle class hidden

closeModal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

addBoard.addEventListener("click", () => {
  modal.style.visibility = "visible";
});

createBoard.addEventListener("click", () => {
  const boardTitle = document.getElementById("board-title");
  const title = boardTitle.value;
  const board = document.createElement("div");
  const heading = document.createElement("h4");
  const deleteBtn = document.createElement("button");
  const icon = document.createElement("i");

  icon.classList.add("fa", "fa-trash");
  icon.style.fontSize = "24px";
  deleteBtn.appendChild(icon);
  deleteBtn.classList.add("remove-board");
  if (!title) return alert("Please Enter Title");
  heading.innerText = title;
  board.classList.add("board");
  board.appendChild(heading);
  board.appendChild(deleteBtn);
  mainContainer.appendChild(board);
  modal.style.visibility = "hidden";
  addDragOverEvent(board);
  deleteBtn.addEventListener("click", (eve) => {
    const cloestBoard = eve.target.closest(".board");
    cloestBoard.remove();
  });
  boardTitle.value = "";
});

/* what is the difference between 2 function main point is i want to found the cloest element but i could not find in the second one 
  deleteBtn.addEventListener("click", (eve) => {
    const cloestBoard = eve.target.closest(".board");
    cloestBoard.remove();
  });

  function deleteTask(element) {
    console.log(element, "<<");
    const task = element.target.closest(".item");
    console.log(task);
  }

  When passing an element directly, element is already the clicked element.
 Using element.target is only needed when using an event object (e.g., inside addEventListener).
*/

function deleteTask(element) {
  console.log(element, "<<");
  // const task = element.closest(".item").querySelector("input");  <= If the <input> is a sibling of the button, you can use .previousElementSibling

  const task = element.previousElementSibling;
  task.remove();
}

/*  this is are the functionality i want to add 
- make transition smooth 
- edit task 
- delete task
- dynamically add boards
- remove boards
- drag - sorting
- task store in local storage so when you referesh everything is there where is before the
- Board head shows count on number of tasks
- Time on every task  

*/
