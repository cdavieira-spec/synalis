// Script para mudar imagens do banner dinamicamente
const imagens = [
  "https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046_1280.jpg?auto=format&fit=crop&w=1920&q=80",
  "https://cdn.pixabay.com/photo/2019/05/07/00/07/eye-4184700_1280.jpg?auto=format&fit=crop&w=1920&q=80",
  "https://cdn.pixabay.com/photo/2019/02/11/02/05/smart-home-3988583_1280.jpg?auto=format&fit=crop&w=1920&q=80",
  "https://cdn.pixabay.com/photo/2015/08/05/10/23/traffic-light-876056_1280.jpg?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1674027444636-ce7379d51252?auto=format&fit=crop&w=1920&q=80",
  "https://cdn.pixabay.com/photo/2015/08/05/10/24/traffic-light-876061_1280.jpg?auto=format&fit=crop&w=1920&q=80",
  "https://cdn.pixabay.com/photo/2012/10/14/20/29/chicago-61213_1280.jpg?auto=format&fit=crop&w=1920&q=80"
];

let index = 0;
setInterval(() => {
  const hero = document.querySelector(".hero");
  hero.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}, 6000);
