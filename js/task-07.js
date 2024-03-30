let textSize = document.getElementById("font-size-control");
let textResult = document.getElementById("text");

textSize.addEventListener("input", function () {
  textResult.style.fontSize = textSize.value + "px";
});
