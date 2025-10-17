const translations = {
  pt: {
    menu_home: "Início",
    menu_sobre: "Sobre",
    menu_valor: "Proposta de Valor",
    menu_contato: "Contato",
    hero_text: "Tecnologia & Inovação para Cidades Inteligentes",
  },
  es: {
    menu_home: "Inicio",
    menu_sobre: "Acerca de",
    menu_valor: "Propuesta de Valor",
    menu_contato: "Contacto",
    hero_text: "Tecnología e Innovación para Ciudades Inteligentes",
  },
  en: {
    menu_home: "Home",
    menu_sobre: "About",
    menu_valor: "Value Proposition",
    menu_contato: "Contact",
    hero_text: "Technology & Innovation for Smart Cities",
  },
  zh: {
    menu_home: "首页",
    menu_sobre: "关于我们",
    menu_valor: "价值主张",
    menu_contato: "联系我们",
    hero_text: "智慧城市的科技与创新",
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
