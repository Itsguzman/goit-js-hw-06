const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let ul = document.getElementById("ingredients");

document.getElementById("ingredientsHeader").innerText = "List of Ingredient ";
for (const ingredient of ingredients) {
  let li = document.createElement("li");
  li.innerText = ingredient;
  ul.append(li);
}
