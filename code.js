let addButton = document.querySelector(".addButton");
let mainContainer = document.querySelector(".mainContainer");
let addItemForm = document.querySelector(".addItemForm");
let modalOverlay = document.querySelector(".modal-overlay");
let closeButton = document.querySelector(".closeButton");
let submitButton = document.querySelector(".modalSubmitButton");

addButton.addEventListener("click", function () {
  modalOverlay.style.display = "grid"; // Show the modal overlay
});

closeButton.addEventListener("click", () => {
  modalOverlay.style.display = "none"; // Hide the modal overlay
});

submitButton.addEventListener("click", function (e) {
  event.preventDefault(); // prevent the form from submitting

  const input = document.querySelector(".modalInputArea");
  const taskName = input.value.trim(); // trim the whitespace from the input value

  if (taskName) {
    // check if the input has a value
    const newDiv = document.createElement("div");
    newDiv.classList.add("toDoTask");

    // create task name
    const taskNameSpan = document.createElement("span");
    taskNameSpan.textContent = taskName;

    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "X";

    // add event listener to delete button
    deleteButton.addEventListener("click", function () {
      newDiv.remove();
    });

    // add task name and delete button to task container
    newDiv.appendChild(taskNameSpan);
    newDiv.appendChild(deleteButton);

    mainContainer.appendChild(newDiv);

    input.value = ""; // clear the input field
  }
  modalOverlay.style.display = "none";
});
