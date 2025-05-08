const myInput = document.querySelector("#my-input");
const myButton = document.querySelector("#my-button");
const myDuck = document.querySelector("#my-duck");

myButton.addEventListener("click", moveInput);

let clicked = false;

function moveInput() {
  if (!clicked) {
    myInput.style.translate = "-30px";
    clicked = true;
  } else {
    myInput.style.translate = "0px";
    clicked = false;
  }
}
