// Alterna imagens automaticamente
let current = 0;
const images = document.querySelectorAll('.slider img');
function changeImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}
if (images.length > 0) {
  images[0].classList.add('active');
  setInterval(changeImage, 4000);
}
