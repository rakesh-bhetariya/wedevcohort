const addTaskBtn = document.getElementById("add-task-btn");

const todoBoard = document.getElementById("todo-board");

const allBoard = document.querySelectorAll(".board");

const allItems = document.querySelectorAll(".item");

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

  const taskCard = document.createElement("p");
  taskCard.classList.add("item");
  taskCard.innerText = input;
  taskCard.setAttribute("draggable", true);

  addFlayingClass(taskCard);

  todoBoard.appendChild(taskCard);
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

