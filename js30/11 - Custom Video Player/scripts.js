// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skips = player.querySelectorAll('[data-skip]');
const fullScreenButton = player.querySelector('.full-screen');

// Build our functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ?  '►' : '❚ ❚';
  playButton.textContent = icon;
}

function updateSkip() {
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeChange() {
  // console.dir(this);
  if (this.name === "playbackRate") {
    video['playbackRate'] = this.value;
  } else {
    video['volume'] = this.value;
  }
}

function handleProgressUpdate() {
  const percent = video.currentTime / video.duration * 100;
  // console.log(progressBar.style);
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e.offsetX);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
    console.log('moz');
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
    console.log('web');
  }
}
// Hook up the event listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skips.forEach(skip =>
  skip.addEventListener('click', updateSkip)
);

ranges.forEach(range =>
  range.addEventListener('change', handleRangeChange)
);

video.addEventListener('timeupdate', handleProgressUpdate);

let mousedown;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () =>{ mousedown = true;
});
progress.addEventListener('mouseup', () => {
  mousedown = false;
});

fullScreenButton.addEventListener('click', handleFullScreen);
