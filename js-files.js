function setupCarousel(root) {
  const items = root.querySelectorAll(".carousel-item");
  const prevBtn = root.querySelector(".carousel-control.prev");
  const nextBtn = root.querySelector(".carousel-control.next");
  let autoCycleInterval;

  // check if theres an active items, if not make one
  let index = Array.from(items).findIndex((i) =>
    i.classList.contains("active")
  );
  if (index < 0 && items.length) {
    index = 0;
    items[0].classList.add("active");
  }

  // make the slides receive and remove the active class to be displayed
  const show = (i) => {
    if (!items.length) return;
    // make index wrap cyclically
    const newIndex = (i + items.length) % items.length;
    if (newIndex === index) return;
    items[index]?.classList.remove("active");
    items[newIndex].classList.add("active");
    index = newIndex;
  };

  prevBtn?.addEventListener("click", () => {
    clearInterval(autoCycleInterval);
    show(index - 1);
  });

  nextBtn?.addEventListener("click", () => {
    clearInterval(autoCycleInterval);
    show(index + 1);
  });

  autoCycleInterval = setInterval(() => {
    show(index + 1);
  }, 5000);
}

// translations

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": 'Hi, I\'m <span class="name">Leandro</span>',
    "hero.subtitle":
      "Full-stack developer building awesome things for the web.",

    // About Section
    "about.bio":
      "A passionate software developer focused on building web applications with JavaScript, React, Node.js, and more. I'm a quick learner who collaborates closely with clients to deliver efficient, scalable, and user-friendly solutions. In addition to my web development interest, I hold a degree in Data Science, have hands-on experience working with networks and CCNA certification.",
    "about.techTitle": "Technologies I use",

    // Projects Section
    "projects.1.title": "Weather Website",
    "projects.1.desc": "A simple weather website.",
    "projects.1.more":
      "<br /> This project explores integration with Visual Crossing API to provide weather data to any location up to 15 coming days.<br />This project explores DOM manipulation, API calling with data extracting and display.",

    "projects.2.title": "Online Store",
    "projects.2.desc": "Front-end online store with API integration.",
    "projects.2.more":
      "<br />This project uses reactJS to build the front-end of an online shop. The app is integrated with a mock API to fetch the products.<br />This project apply knowledge on react routes, state management and solves prop-drilling by implementing data providers.",

    "projects.3.title": "Battleship webgame",
    "projects.3.desc": "A battleship game made with vanilla JS.",
    "projects.3.more":
      "<br />This project uses vanilla Javascript to create a battleship game.<br />You can play against computer or other player with shared screen. <br />",

    "projects.4.title": "Alien shooter pygame",
    "projects.4.desc": "An alien shooter made with pygame.",
    "projects.4.more":
      "<br />This project uses pygame to create an alien shooter.<br /> This project was focused on OOP practices and modularity using python. <br />",

    // Contact Section
    "contact.title": "Contact",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "Your email",
    "contact.messagePlaceholder": "Your message",
    "contact.send": "Send Message",
    "contact.note":
      'Prefer email? <a href="mailto:leandro.ps160@gmail.com" class="mail-link">leandro.ps160@gmail.com</a>',
    "contact.linkedin": "Connect on LinkedIn",
    "contact.github": "Connect on Github",
  },
  pt: {
    // Navegação
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Seção Hero
    "hero.title": 'Olá, eu sou <span class="name">Leandro</span>',
    "hero.subtitle":
      "Desenvolvedor full-stack criando coisas incríveis para a web.",

    // Seção Sobre
    "about.bio":
      "Um desenvolvedor de software apaixonado por criar aplicações web com JavaScript, React, Node.js e outras tecnologias. Sou um aprendiz rápido e colaboro de perto com clientes para entregar soluções eficientes, escaláveis e fáceis de usar. Além do meu interesse em desenvolvimento web, possuo graduação em Ciência de Dados, experiência prática em redes e certificação CCNA.",
    "about.techTitle": "Tecnologias que eu uso",

    // Seção de Projetos
    "projects.1.title": "Site de Clima",
    "projects.1.desc": "Um site de clima simples.",
    "projects.1.more":
      "<br /> Este projeto explora a integração com a API Visual Crossing para fornecer dados meteorológicos para qualquer localidade em até 15 dias futuros.<br />Este projeto explora a manipulação do DOM, chamadas de API com extração e exibição de dados.",

    "projects.2.title": "Loja Online",
    "projects.2.desc": "Loja online front-end com integração de API.",
    "projects.2.more":
      "<br />Este projeto usa ReactJS para construir o front-end de uma loja online. O aplicativo é integrado com uma API mock para buscar os produtos.<br />Este projeto aplica conhecimentos em rotas do React, gerenciamento de estado e resolve o prop-drilling implementando provedores de dados.",

    "projects.3.title": "Jogo Web Batalha Naval",
    "projects.3.desc": "Um jogo de batalha naval feito com JS vanilla.",
    "projects.3.more":
      "<br />Este projeto usa Javascript vanilla para criar um jogo de batalha naval.<br />Você pode jogar contra o computador ou outro jogador em tela compartilhada. <br />",

    "projects.4.title": "Jogo de Tiro Alienígena com Pygame",
    "projects.4.desc": "Um jogo de tiro alienígena feito com Pygame.",
    "projects.4.more":
      "<br />Este projeto usa Pygame para criar um jogo de tiro alienígena.<br /> Este projeto foi focado em práticas de POO e modularidade usando Python. <br />",

    // Seção de Contato
    "contact.title": "Contato",
    "contact.namePlaceholder": "Seu nome",
    "contact.emailPlaceholder": "Seu e-mail",
    "contact.messagePlaceholder": "Sua mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.note":
      'Prefere e-mail? <a href="mailto:leandro.ps160@gmail.com" class="mail-link">leandro.ps160@gmail.com</a>',
    "contact.linkedin": "Conecte-se no LinkedIn",
    "contact.github": "Conecte-se no Github",
  },
};

let currentLanguage = "en";

// Conditionally translate read button
function readMoreButtonTranslate(btn) {
  const description = btn.previousElementSibling;
  const moreText = description.querySelector(".more-text");
  if (
    currentLanguage === "en" &&
    (moreText.style.display === "none" || moreText.style.display === "")
  ) {
    btn.textContent = "Read more";
  } else if (currentLanguage === "en" && moreText.style.display === "inline") {
    btn.textContent = "Read less";
  } else if (currentLanguage === "pt" && moreText.style.display === "inline") {
    btn.textContent = "Ler menos";
  } else {
    btn.textContent = "Ler mais";
  }
}

const setLanguage = (lang) => {
  currentLanguage = lang; // Update the current language state.
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  readMoreBtns.forEach(readMoreButtonTranslate);

  // Find all elements that have a 'data-i18n' attribute.
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[lang]?.[key];

    if (translation) {
      const hasNestedI18n = element.querySelector("[data-i18n]");

      if (hasNestedI18n) {
        // check if the element has nested elements with i18n tags, if yes replace only text with translation (using nodeType 3)
        const childNodes = element.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
          const node = childNodes[i];
          if (node.nodeType === 3 && node.textContent.trim().length > 0) {
            node.textContent = translation;
            break;
          }
        }
      } else {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translation;
        } else {
          element.innerHTML = translation;
        }
      }
    }
  });
};

// SETUP

document.addEventListener("DOMContentLoaded", () => {
  // APPLY CAROUSEL FUNCTION
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(setupCarousel);

  // TRANSLATIONS
  const flagUS = document.querySelector(".flag-us");
  const flagBR = document.querySelector(".flag-br");
  const readMoreBtns = document.querySelectorAll(".read-more-btn");

  if (flagUS) {
    flagUS.addEventListener("click", () => setLanguage("en"));
  }
  if (flagBR) {
    flagBR.addEventListener("click", () => setLanguage("pt"));
  }

  // READ MORE BUTTON
  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const description = btn.previousElementSibling;
      const moreText = description.querySelector(".more-text");

      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMoreButtonTranslate(btn);
      } else {
        moreText.style.display = "none";
        readMoreButtonTranslate(btn);
      }
    });
  });

  setLanguage("pt");
});
