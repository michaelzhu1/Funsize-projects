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
  {ctx.drawImage(video, 0, 0, width, height);
   let pixels = ctx.getImageData(0, 0, width, height);
   pixels = rgbSplit(pixels);
   // pixels = redEffect(pixels);
   ctx.putImageData(pixels, 0, 0);
  }  , 1);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200;//RED
    pixels.data[i + 1] = pixels.data[i + 1] - 150; //GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //BLUE
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 550] = pixels.data[i + 0];
    pixels.data[i + 500] = pixels.data[i + 1];
    pixels.data[i + 550] = pixels.data[i + 2];
  }
  return pixels;
}
function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  // Take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', "Michael-selfie");
  link.innerHTML = `<img src=${data}>`;
  strip.insertBefore(link, strip.firstChild);
}
getVideo();

video.addEventListener('canplay', paintToCanvas);
