var slides = document.querySelectorAll('.slider-row .row-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'row-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'row-item observe';
}

var burger = document.querySelector('.mob-button');
var cross = document.querySelector('.cross-button');
var menu = document.querySelector('.inside-part-mob');

burger.addEventListener ('click', function(event) {
  event.preventDefault;
  menu.classList.add('inside-part-mob-open');
  burger.classList.add('mob-button-close');
  cross.classList.remove('cross-button');
  cross.classList.add('cross-button-open');
    cross.addEventListener ('click', function(event) {
      event.preventDefault;
      menu.classList.remove('inside-part-mob-open');
      burger.classList.remove('mob-button-close');
      cross.classList.remove('cross-button-open');
      cross.classList.add('cross-button');
    });
});
