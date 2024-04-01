const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let result = document.getElementById("value");
let counterValue = 0;

decrement.addEventListener("click", function () {
  counterValue--;
  result.innerText = counterValue;
});

increment.addEventListener("click", function () {
  counterValue++;
  result.innerText = counterValue;
});
