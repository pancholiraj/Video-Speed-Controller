const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function (e) {
  const y = e.pageY - this.offsetTop;
  const percentage = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percentage * 100) + "%";
  const playbackRate = percentage * (max - min) + min;
  bar.textContent = playbackRate.toFixed(2) + "x";
  bar.style.height = height;
  video.playbackRate = playbackRate;
});
