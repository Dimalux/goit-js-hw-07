"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const elementsEmail = elements.email.value;
  const elementsPassword = elements.password.value;

  if (elementsEmail === "" || elementsPassword === "") {
    return alert("All form fields must be filled in");
  }

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  console.log(info);

  event.target.reset();
}
