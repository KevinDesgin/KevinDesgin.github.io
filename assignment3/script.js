// Within this game code will consist of me using the canvas element to run the game. Canvas allows me to
// draw in elements and will allow me to animate each individual elements without the need to use css animation.
// Currently I have a play button that would on the top of the page that would run the game.

const playBtn = document.querySelector("#play");
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const cursor = document.querySelector(".cursor");

// The code below is to adjust the size of the canvas based on the size of an individual's monitor. This way,
// the game canvas will always max out the width and length of individual's resolution.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Within this section are the properties of the water rising. This consisted of the color of water and as
// well as the rate at which the water will rise from the bottom of the screen to the top.
const startColor = "white";
const endColor = "blue";
let fillHeight = 0;
const totalHeight = canvas.height;
const animationSpeed = 0.3;

// Here is the code that will draw the proportion of the falling blocks. Originnally I was going to code an
// endless maze but soon too realise that it was going to be more complicated. So I redecided to just have
// multiple blocks falling at random intervals. I also decided that I wanted the width of these rectangles
// to be as long as the canvas sized as it can adjust itself according to the size of the resolution.

// After further reasearches, I opted how to create two spearate retangle that will fall simulatneous.
// This way allows me to create a gap for the players to move around instead of being blocked by a wall.
const rect1 = {
  x: 50,
  y: 0,
  width: -100,
  height: 50,
  speed: 1,
};
const rect2 = {
  x: 200,
  y: 0,
  width: 1000,
  height: 60,
  speed: 1,
};

// Play Function
function clickPlay() {
  // The code down below is a tracking system that move the green square to move wherever the mouse cusor is located.
  // This would allow me to desgin the way the musor cursor looks and as well as how the object following the mouse will
  // interact with the canvas.
  document.addEventListener("mousemove", (event) => {
    const { width, height } = cursor.getBoundingClientRect();
    cursor.style.left = `${event.clientX - width / 2}px`;
    cursor.style.top = `${event.clientY - height / 2}px`;
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fillHeight += animationSpeed;

  ctx.fillStyle = endColor;
  ctx.fillRect(0, canvas.height - fillHeight, canvas.width, fillHeight);

  rect1.y += rect1.speed;
  rect2.y += rect2.speed;

  if (rect1.y > canvas.height) {
    rect1.y = -rect1.height;
  }
  if (rect2.y > canvas.height) {
    rect2.y = -rect2.height;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
  ctx.fillStyle = "black";
  ctx.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);

  if (fillHeight < totalHeight) {
    requestAnimationFrame(clickPlay);
  }
}

// Relection

// There were a few minor set back to how to I wanted to animated the game. Originnally I thought of using css
// for animation. However I was unable to link the javascript code to also affect the css animation. Which lead
// to using the alternative method of using the canvas function to draw, animate and interact all in javascript.

//  Another

// If I was able to expand on this further on, I would love to incorporate a code that would create a simple small
// maze as a way to expand the area of which the player are able to move around in. However that would require me
// to learn the different maze tracing algorithm and generation.

// Another thing that I would like to expand on is whether I can to expand the height limits of the canvas as this
// would allow me to create an infinite maze that would consistently go up. this might require me to learn how to
// implement a hidden scroll that have some sort of interaction with the canvas.

// Furthormore more, I would like to expand on other function to be implemented such as a ui menu that would offer
// different gamemode selection and a setting ui that would allow users to ajust the game audio and video.
