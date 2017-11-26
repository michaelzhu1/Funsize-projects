const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(localMediaStream => {
    console.log(localMediaStream);
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  }).catch(err =>
  console.error('Access Denied', err));
}


function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.height = height;
  canvas.width = width;
  setInterval(() =>
  {ctx.drawImage(video, 0, 0, width, height);}
  , 1);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  // Take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  strip.innerHTML = `<img src=${data}>`;
  
}
getVideo();

video.addEventListener('canplay', paintToCanvas);
