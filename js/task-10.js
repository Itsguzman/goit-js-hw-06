function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.getElementById("boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  for (let c = 0; c < amount.value; c++) {
    let box = document.createElement("div");
    let size = 30 + 10 * c;
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + "px";
    box.style.height = size + "px";
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const boxesCount = document.getElementById("boxesCount");
  destroyBoxes();
  createBoxes(boxesCount);
});

destroyButton.addEventListener("click", destroyBoxes);
