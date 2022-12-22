"use strict";

const footer = document.querySelector("footer");

if (document.URL.includes("products.html")) {
  footer.classList.add("none");
  console.log("hi");
}
