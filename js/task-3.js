"use strict";

const userName = document.querySelector("#name-input");

const userNameOut = document.querySelector("#name-output");

userName.addEventListener("input", nameOutput);

function nameOutput(event) {
  const userNameAdd = event.target.value.trim();

  userNameOut.textContent = userNameAdd === "" ? "Anonymous" : userNameAdd;
}
