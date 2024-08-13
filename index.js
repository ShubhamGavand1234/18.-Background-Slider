const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const body = document.body;
const slides = document.querySelectorAll(".slide");

let activeSLide = 0;

rightBtn.addEventListener("click", () => {
  activeSLide++;

  if (activeSLide > slides.length - 1) {
    activeSLide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSLide--;

  if (activeSLide < 0) {
    activeSLide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSLide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSLide].classList.add("active");
}
