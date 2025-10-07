// Imagens seguras e otimizadas do Unsplash (tema: cidades inteligentes)
const imagens = [
  "https://images.unsplash.com/photo-1716388242554-0f38ad3750de?auto=format&fit=crop&w=1920&q=80", // vias rápidas
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80", // vias rápidas
  "https://images.unsplash.com/photo-1581091215367-59ab6c61c173?auto=format&fit=crop&w=1920&q=80", // cidade conectada
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80", // programadores
  "https://images.unsplash.com/photo-1614680376408-81e91ffe3d16?auto=format&fit=crop&w=1920&q=80", // semáforo inteligente
  "https://images.unsplash.com/photo-1623071383293-8f3cba0e2c74?auto=format&fit=crop&w=1920&q=80"  // parada de ônibus moderna
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


