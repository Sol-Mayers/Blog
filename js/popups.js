var openPop = document.querySelector('.ok-button');
var showPop = document.querySelector('.write-popup');
var closePop = document.querySelector('.close-button');

openPop.addEventListener('click', function(event) {
  event.preventDefault;
  showPop.classList.add('write-popup-open');
});

closePop.addEventListener('click', function(event) {
  event.preventDefault;
  showPop.classList.remove('write-popup-open');
});
