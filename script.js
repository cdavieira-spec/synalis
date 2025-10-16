// Imagens seguras e otimizadas do Unsplash (tema: cidades inteligentes)
const imagens = [
  "https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046_1280.jpg?auto=format&fit=crop&w=1920&q=80", // palma da mão
  "https://cdn.pixabay.com/photo/2019/05/07/00/07/eye-4184700_1280.jpg?auto=format&fit=crop&w=1920&q=80", // olhos cidade
  "https://cdn.pixabay.com/photo/2019/02/11/02/05/smart-home-3988583_1280.jpg?auto=format&fit=crop&w=1920&q=80", // cidade conectada
  "https://cdn.pixabay.com/photo/2015/08/05/10/23/traffic-light-876056_1280.jpg?auto=format&fit=crop&w=1920&q=80", // programadores
  "https://images.unsplash.com/photo-1674027444636-ce7379d51252?auto=format&fit=crop&w=1920&q=80", // semáforo inteligente
  "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?auto=format&fit=crop&w=1920&q=80"  // parada de ônibus moderna
];

// Pré-carrega as imagens
imagens.forEach(src => {
  const img = new Image();
  img.src = src;
});

let index = 0;
const hero = document.querySelector(".hero");

// Transição suave entre as imagens
function trocarImagem() {
  hero.style.transition = "background-image 1.5s ease-in-out";
  hero.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}

trocarImagem(); // define a primeira
setInterval(trocarImagem, 9000);








