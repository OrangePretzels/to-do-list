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

submitButton.addEventListener("click", function () {
  event.preventDefault(); // prevent the form from submitting

  const input = document.querySelector(".modalInputArea");
  const taskName = input.value.trim(); // trim the whitespace from the input value

  if (taskName) {
    // check if the input has a value
    const newDiv = document.createElement("div");
    newDiv.textContent = taskName;
    mainContainer.appendChild(newDiv);

    input.value = ""; // clear the input field
  }
  modalOverlay.style.display = "none";
});
