"use strict";

const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");

const barsMenu = bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

const closeMenu = closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
