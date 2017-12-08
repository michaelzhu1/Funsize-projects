function timer(seconds) {
  const now = Date.now();
  displayTimeLeft(seconds);
  const then = now + seconds * 1000;
  const countdown = setInterval(() => {
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
  console.log(display);
}
