// Script simples para mudar imagens do banner dinamicamente
const imagens = [
  "https://images.unsplash.com/photo-1486308510493-aa64833634ef?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
];

let index = 0;
setInterval(() => {
  const hero = document.querySelector(".hero");
  hero.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}, 6000);
