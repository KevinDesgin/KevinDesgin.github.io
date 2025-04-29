const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const soundBtn = document.querySelector("#sound-btn");
const soundImg = document.querySelector("#sound-img");
const loopBtn = document.querySelector("#loop-btn");
const loopImg = document.querySelector("#loop-img");
const fastFowardBtn = document.querySelector("#ff-btn");
const fastFowardImg = document.querySelector("#ff-img");
const rewindBtn = document.querySelector("#rw-btn");
const rewindImg = document.querySelector("#rw-img");
video.removeAttribute("controls");

video.addEventListener("timeupdate", updateProgressBar);

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "png/icons8-pause-64.png";
  } else {
    video.pause();
    playPauseImg.src = "png/play.png";
  }
}

function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Add other functionalities here

function toggleSound() {
  if (video.muted) {
    video.muted = false;
    soundImg.src = "png/icons8-audio-64.png";
  } else {
    video.muted = true;
    soundImg.src = "png/icons8-mute-64.png";
  }
}

function toggleLoop() {
  if (video.loop) {
    video.loop = false;
  } else {
    video.loop = true;
  }
}

function toggleFF() {
  video.currentTime += 15;
}

function toggleRW() {
  video.currentTime -= 15;
}

const subBtn = document.querySelector("#sub-btn");
const subImg = document.querySelector("#sub-img");

subBtn.addEventListener("click", handleClick);

function handleClick() {
  subImg.classList.toggle((subImg.src = "png/icons8-unsubscribe-48.png"));
}
