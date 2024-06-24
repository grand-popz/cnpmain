const slider = document.querySelector(".slider");
const playPauseButton = document.getElementById("playPauseButton");
let isPaused = false;
let animationPaused = false;

playPauseButton.addEventListener("click", () => {
  if (!isPaused) {
    slider.style.animationPlayState = "paused";
    playPauseButton.textContent = "Play";
  } else {
    if (!animationPaused) {
      slider.style.animation = "scroll 40s linear infinite";
    } else {
      slider.style.animation = "scroll-slow 70s linear infinite";
    }
    slider.style.animationPlayState = "running";
    playPauseButton.textContent = "Pause";
  }
  isPaused = !isPaused;
});

slider.addEventListener("mouseover", () => {
  if (!isPaused) {
    slider.style.animationPlayState = "paused";
    animationPaused = true;
  }
});

slider.addEventListener("mouseout", () => {
  if (!isPaused) {
    slider.style.animationPlayState = "running";
    animationPaused = false;
  }
});
