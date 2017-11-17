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
  progressBar.style.flexBasis = `${percent}%`;
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
// progressBar.addEventListener('change', handleProgressUpdate);
