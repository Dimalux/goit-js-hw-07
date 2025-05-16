"use strict";

const itemAdd = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${itemAdd.length}`);

itemAdd.forEach((categorie) => {
  const categorieName = categorie.querySelector("h2").textContent;

  console.log(`Category: ${categorieName}`);
  const result = categorie.querySelectorAll("ul li").length;
  console.log(`Elements: ${result}`);
  return;
});
