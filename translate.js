const translations = {
  pt: {
    menu_home: "Início",
    menu_sobre: "Sobre",
    menu_valor: "Proposta de Valor",
    menu_contato: "Contato",
    hero_text: "Inteligência que Move, Conecta e Ilumina as Cidades do Amanhã.",
  },
  es: {
    menu_home: "Inicio",
    menu_sobre: "Acerca de",
    menu_valor: "Propuesta de Valor",
    menu_contato: "Contacto",
    hero_text: "Inteligencia que mueve, conecta e ilumina las ciudades del mañana.",
  },
  en: {
    menu_home: "Home",
    menu_sobre: "About",
    menu_valor: "Value Proposition",
    menu_contato: "Contact",
    hero_text: "Intelligence that Moves, Connects, and Illuminates the Cities of Tomorrow.",
  },
  zh: {
    menu_home: "首页",
    menu_sobre: "关于我们",
    menu_valor: "价值主张",
    menu_contato: "联系我们",
    hero_text: "启迪未来城市的智慧力量。",
  },
};

// Detecta idioma do navegador
let userLang = navigator.language.slice(0, 2);
if (!translations[userLang]) userLang = "pt";
setLanguage(userLang);

// Troca manual de idioma
document.querySelectorAll(".lang-select img").forEach(img => {
  img.addEventListener("click", () => {
    const lang = img.dataset.lang;
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    el.textContent = translations[lang][key] || el.textContent;
  });

  const heroText = document.querySelector(".hero p");
  if (heroText) heroText.textContent = translations[lang].hero_text;
}
