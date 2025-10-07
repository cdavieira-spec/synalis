// Imagens representando cidades conectadas e tecnologia urbana
const imagens = [
  "https://images.unsplash.com/photo-1603575448360-3d04aa4f9b2e?auto=format&fit=crop&w=1600&q=80", // cidade conectada
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1600&q=80", // programadores
  "https://images.unsplash.com/photo-1614680376408-81e91ffe3d16?auto=format&fit=crop&w=1600&q=80", // semáforo inteligente
  "https://images.unsplash.com/photo-1623071383293-8f3cba0e2c74?auto=format&fit=crop&w=1600&q=80", // parada de ônibus moderna
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"  // vias rápidas
];

let index = 0;
setInterval(() => {
  const hero = document.querySelector(".hero");
  hero.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}, 6000);
