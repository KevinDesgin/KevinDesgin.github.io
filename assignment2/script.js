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

// Mute or Unmute Function:
// I have employed a working mute toggle that when clicked would disable the sound of the video. As well as clciking it again would enable the sound back on.
// This is done with the true and false
// This way, the viewer are able to control when sound is played on this media player.
function toggleSound() {
  if (video.muted) {
    video.muted = false;
    soundImg.src = "png/icons8-audio-64.png";
  } else {
    video.muted = true;
    soundImg.src = "png/icons8-mute-64.png";
  }
}

//Loop Function
// I have employed a working loop toggle that when clcicked would enable the ability to repeat the video when the video reaches to the end.
// Giving a way to
function toggleLoop() {
  if (video.loop) {
    video.loop = false;
  } else {
    video.loop = true;
  }
}

//Fast foward 30sec function
function toggleFF() {
  video.currentTime += 15;
}

// Rewind 30sec function
function toggleRW() {
  video.currentTime -= 15;
}

// Subscribe Function
const subBtn = document.querySelector("#sub-btn");
const subImg = document.querySelector("#sub-img");

subBtn.addEventListener("click", handleClick);

function handleClick() {
  subImg.classList.toggle((subImg.src = "png/icons8-unsubscribe-48.png"));
}
