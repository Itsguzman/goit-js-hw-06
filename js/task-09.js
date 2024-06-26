function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", () => {
  let colorValue = getRandomHexColor();
  document.querySelector(".color").innerText = colorValue;
  document.body.style.backgroundColor = colorValue;
});
