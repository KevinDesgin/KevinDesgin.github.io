function checkWeather() {
  const myTempo = document.querySelector("#myTemp");
  const body = document.querySelector("body");
  const outer = document.querySelector(".outer");
}
console.log(myTemp);

let temp = myTemp.value;
console.log("The tempreature is", temp);
if (temp < 10) {
  console.log("cold");
  body.style.backgroundColor = "gray";
  outer.style.backgroundColor = "black";
} else if (temp >= 10 && temp < 20) {
  console.log("warm");
  body.style.backgroundColor = "lime";
  outer.style.backgroundColor = "lime";
} else if (temp >= 20 && temp < 35) {
  console.log("hot");
  body.style.backgroundColor = "orange";
  outer.style.backgroundColor = "orange";
} else {
  console.log("VERY HOT");
  body.style.backgroundColor = "red";
  outer.style.backgroundColor = "red";
}
