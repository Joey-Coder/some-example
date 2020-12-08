const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");
// 幻灯片数组
const slides = document.querySelectorAll(".slide");

var autoPlay = true;
var forwards = true;
var currentIndex = 0;

nextEl.addEventListener("click", handleNextClicked);
prevEl.addEventListener("click", handlePrevClicked);

function handleNextClicked() {
  let current = slides[currentIndex];
  current.classList.remove("current");
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  slides[currentIndex].classList.add("current");
}

function handlePrevClicked() {
  let current = slides[currentIndex];
  current.classList.remove("current");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  slides[currentIndex].classList.add("current");
}

// 设置自动播放
if (autoPlay) {
  setInterval(forwards ? handleNextClicked : handlePrevClicked, 5000);
}
