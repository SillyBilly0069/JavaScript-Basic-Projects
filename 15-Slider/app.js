const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevtBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

prevtBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  if (counter > 0) {
    prevtBtn.style.display = "block";
  } else {
    prevtBtn.style.display = "none";
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevtBtn.style.display = "none";
