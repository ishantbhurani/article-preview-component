const shareBtn = document.querySelector("#share-btn");
const overlay = document.querySelector(".share-overlay");
const overlayShareBtn = document.querySelector("#overlay-share-btn");

shareBtn.onclick = (e) => {
  shareBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  shareBtn.blur();
};

overlayShareBtn.onclick = (e) => {
  shareBtn.classList.remove("active");
  overlay.classList.remove("active");
  shareBtn.blur();
};
