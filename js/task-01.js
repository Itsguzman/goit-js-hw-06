let categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  console.log(`Category: ${category.firstElementChild.innerHTML}`);
  console.log(
    `Elements: ${category.firstElementChild.nextElementSibling.children.length}`
  );
}
