const topHeading = document.querySelector("h1");
// console.log(topHeading);
// console.log(topHeading.textContent);
topHeading.style.color = "purple";

const allPara = document.querySelectorAll("p");
// console.log(allPara);
// console.log(allPara. textContent);
for (let i = 0; i < allPara.length; i++) {
  //   console.log(allPara[i].textContent);
  allPara[i].style.border = "1px solid yellow";
  allPara[i].style.backgroundColor = "beige";
}

const myFirstSub = document.querySelector("#First");
// console.log(myFirstSub);
// console.log(myFirstSub.textContent);

//

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", handleClick);

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function handleClick() {
  console.log("Hey did you just click me??");
  myCat.classList.toggle("round");
}

function addMe() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}
