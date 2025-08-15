document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(setupCarousel);
});

function setupCarousel(root) {
  const items = root.querySelectorAll(".carousel-item");
  const prevBtn = root.querySelector(".carousel-control.prev");
  const nextBtn = root.querySelector(".carousel-control.next");
  let autoCycleInterval;

  let index = Array.from(items).findIndex((i) =>
    i.classList.contains("active")
  );
  if (index < 0 && items.length) {
    index = 0;
    items[0].classList.add("active");
  }

  const show = (i) => {
    if (!items.length) return;
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

// read more button
const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const description = btn.previousElementSibling;
    const moreText = description.querySelector(".more-text");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    }
  });
});

// translations

// This object holds all the translations for English and Portuguese.
const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": 'Hi I\'m <span class="name">Leandro</span>',
    "hero.subtitle":
      "Full-stack developer building awesome things for the web.",

    // About Section
    "about.bio":
      "A passionate software developer interested in building web applications with JavaScript, React, Node.js, and more. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.",
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

    readMore: "Read More",

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
      "Um desenvolvedor de software apaixonado e interessado em construir aplicações web com JavaScript, React, Node.js e mais. Eu aprendo rápido e colaboro de perto com clientes para criar soluções eficientes, escaláveis e amigáveis ao usuário que resolvem problemas do mundo real.",
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

    readMore: "Leia Mais",

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

/**
 * This function sets the language of the page, preserving nested HTML elements.
 * @param {string} lang - The language to set ('en' or 'pt').
 */
const setLanguage = (lang) => {
  // Find all elements that have a 'data-i18n' attribute.
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[lang]?.[key];

    if (translation) {
      // Check if the current element contains any nested elements that also need translation.
      const hasNestedI18n = element.querySelector("[data-i18n]");

      if (hasNestedI18n) {
        // If it's a container, only translate the text part.
        // We find the first child node that is a text node and contains actual text.
        const childNodes = element.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
          const node = childNodes[i];
          // Node.TEXT_NODE === 3. We also check to make sure it's not just whitespace.
          if (node.nodeType === 3 && node.textContent.trim().length > 0) {
            node.textContent = translation;
            break; // Stop after translating the first relevant text node.
          }
        }
      } else {
        // If it's a "leaf" element with no nested translations, we can safely set its content.
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translation;
        } else {
          // Use innerHTML because some translations contain HTML tags (e.g., <span>, <a>).
          element.innerHTML = translation;
        }
      }
    }
  });
};

// --- Event Listeners ---

// Wait for the DOM to be fully loaded before adding event listeners.
document.addEventListener("DOMContentLoaded", () => {
  const flagUS = document.querySelector(".flag-us");
  const flagBR = document.querySelector(".flag-br");

  if (flagUS) {
    flagUS.addEventListener("click", () => setLanguage("en"));
  }

  if (flagBR) {
    flagBR.addEventListener("click", () => setLanguage("pt"));
  }

  // Set a default language when the page loads.
  // You can change 'en' to 'pt' if you want Portuguese to be the default.
  setLanguage("en");
});
