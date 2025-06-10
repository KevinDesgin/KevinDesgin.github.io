const playBtn = document.querySelector("#play");
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const cursor = document.querySelector(".cursor");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjustment of speed
const startColor = "white";
const endColor = "blue";
let fillHeight = 0;
const totalHeight = canvas.height;
const animationSpeed = 0.3;

let rectX = 0;
let rectY = 0;
const rectWidth = canvas.width;
const rectHeight = 30;
const fallSpeed = 0.5;

// Play Function
function clickPlay() {
  document.addEventListener("mousemove", (event) => {
    const { width, height } = cursor.getBoundingClientRect();
    cursor.style.left = `${event.clientX - width / 2}px`;
    cursor.style.top = `${event.clientY - height / 2}px`;
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fillHeight += animationSpeed;

  ctx.fillStyle = endColor;
  ctx.fillRect(0, canvas.height - fillHeight, canvas.width, fillHeight);

  ctx.fillStyle = "black";
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

  rectY += fallSpeed;

  if (fillHeight < totalHeight) {
    requestAnimationFrame(clickPlay);
  }
}
