const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Add event to all buttons
for (i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// add event to paragraph to close the modal
const paragraph = document.querySelector("p");
paragraph.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// add event to close (x) button to close the modal
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// add event to modal to close the modal
modal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  // e.preventDefault();
  if (e.key == "Escape") {
    // closeModal.focus();
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
