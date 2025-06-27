const gallery = document.querySelector(".gallery");
const slides = document.querySelectorAll(".gallery div");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

let currentIndex = 0;

function updateActiveSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function scrollToIndex(index) {
  const offset = slides[index].offsetLeft;
  gallery.scrollTo({
    left: offset,
    behavior: "smooth",
  });
  updateActiveSlide(index);
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    scrollToIndex(currentIndex);
  }
});

backBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToIndex(currentIndex);
  }
});

// Awal load
scrollToIndex(currentIndex);
