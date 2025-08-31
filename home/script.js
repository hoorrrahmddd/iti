
let counter = 0; 
const slides = document.querySelectorAll(".container-property");
const counterDisplay = document.getElementById("counter");

const groupSize = 3; 
const totalGroups = Math.ceil(slides.length / groupSize);

function updateSlider() {
  if (counter >= totalGroups) {
    counter = 0;
  }
  if (counter < 0) {
    counter = totalGroups - 1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });


  counterDisplay.textContent = `${counter + 1}/${totalGroups}`;
}

document.querySelector(".next-btn").addEventListener("click", () => {
  counter++;
  updateSlider();
});

document.querySelector(".pre-btn").addEventListener("click", () => {
  counter--;
  updateSlider();
});


updateSlider();

