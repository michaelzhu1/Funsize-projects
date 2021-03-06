let countdown;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  displayTimeLeft(seconds);
  const then = now + seconds * 1000;
  displayEndTime(then);
  countdown = setInterval(() => {
    const timeLeft = Math.round((then - Date.now()) / 1000);
    if (timeLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  // Change the title of page to the timer itself
  document.title = display;
}

function displayEndTime(end) {
  const time = new Date(end);
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hours = time.getHours();

  endTimeDisplay.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds}`;
}

const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');


const buttons = document.querySelectorAll('[data-time]');
buttons.forEach(button => button.addEventListener('click', startTimer));

function startTimer() {
  return timer(this.dataset.time);
}

document.customForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  timer(this.minutes.value * 60);
  this.reset();
}
