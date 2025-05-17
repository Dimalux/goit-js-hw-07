"use strict";

const body = document.querySelector("body");
const widget = document.querySelector(".widget");
const button = document.querySelector(".change-color");
const textColor = document.querySelector(".widget .color");

button.addEventListener("click", newColorAdd);

function newColorAdd() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  textColor.textContent = newColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}