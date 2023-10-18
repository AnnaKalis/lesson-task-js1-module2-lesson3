// Question 1

const btn = document.querySelector(".btn");
function myFunction() {
  console.log("I'm a button");
}

btn.addEventListener("click", myFunction);

// Question 2

const button = document.querySelectorAll("button");
const countContainer = document.querySelector(".count");
const input = document.querySelector("input");

function countFunction() {
  countContainer.innerHTML = (input.value.trim().length);
}

button[1].addEventListener("click", countFunction);


