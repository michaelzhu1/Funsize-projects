// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skips = player.querySelectorAll('[data-skip]');


// Build our functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


// Hook up the event listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
