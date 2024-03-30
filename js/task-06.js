let validationInput = document.getElementById("validation-input");
let validLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", function () {
  validationInput.className = "";
  if (validLength <= validationInput.value.length) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});
