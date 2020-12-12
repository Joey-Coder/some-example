var uploadButton = document.querySelector(".upload-button");
var progressBar = document.querySelector(".upload-button .progress-bar");

let width = uploadButton.getBoundingClientRect().width;

let uploadTime = 3000;

uploadButton.addEventListener("click", () => {
  uploadButton.classList.remove("uploaded");
  uploadButton.classList.add("uploading");

  setTimeout(() => {
    uploadButton.classList.replace("uploading", "uploaded");
  }, uploadTime);

  let start = null;
  function grow(timestamp) {
    if (!start) start = timestamp;
    // progress 一开始为0
    let progress = timestamp - start;
    // console.log(progress);
    progressBar.style.width = `${Math.min(
      width * (progress / uploadTime),
      width
    )}px`;
    if (progress < uploadTime) {
      window.requestAnimationFrame(grow);
    }
  }
  // requestAnimationFrame开启一个动画子进程
  window.requestAnimationFrame(grow);
});
