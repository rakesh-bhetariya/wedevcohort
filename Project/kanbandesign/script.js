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
  board.addEventListener("dragover", () => {
    const flayingElement = document.querySelector(".flaying");
    board.appendChild(flayingElement);
  });
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
  const board = document.createElement("div");
  const title = document.createElement("h4");
  const deleteBtn = document.createElement('button');


  board.classList.add("board");
  board.appendChild(title);
  mainContainer.appendChild(board);
  modal.style.visibility = "hidden";
});

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
