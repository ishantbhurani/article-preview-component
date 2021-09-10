const shareBtn = document.querySelector("#share-btn");
const overlay = document.querySelector(".share-overlay");

shareBtn.onclick = (e) => {
  shareBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  shareBtn.blur();
};
