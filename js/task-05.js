let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  if (nameInput.value === "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerText = nameInput.value;
  }
});
