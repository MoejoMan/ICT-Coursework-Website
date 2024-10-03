let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('show'); 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add('show'); 
  setTimeout(showSlides, 10000);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});
