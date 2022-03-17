const menu = document.querySelector(".menu");
const target = document.querySelectorAll(".target");

menu.addEventListener("click", () => {
  target.forEach((item) => {
    item.classList.toggle("active");
  });
});

const wrappers = document.querySelectorAll(".wrapper");

wrappers.forEach((item) => {
  item.addEventListener("click", () => {
    target.forEach((item) => {
      item.classList.remove("active");
    });
  });
});

const videos = document.querySelectorAll(".video");
videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
