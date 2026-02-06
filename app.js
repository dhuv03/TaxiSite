// Form input focus/blur handlers for contact form
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    if (parent) {
      parent.classList.add("focus");
    }
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (parent && this.value === "") {
      parent.classList.remove("focus");
    }
  }

  // Add event listeners to all inputs
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
});
