// Imagens seguras e otimizadas do Unsplash (tema: cidades inteligentes)
const imagens = [
  "https://images.unsplash.com/photo-1620820175338-e7828d458caa?auto=format&fit=crop&w=1920&q=80", // vias rápidas
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80", // vias rápidas
  "https://images.pexels.com/photos/985700/pexels-photo-985700.jpeg?auto=format&fit=crop&w=1920&q=80", // cidade conectada
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80", // programadores
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
setInterval(trocarImagem, 7000);




