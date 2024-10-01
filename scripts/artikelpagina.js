
/************************/
/* HAMBURGERMENU NAAR KRUIS */
/************************/

var deButton = document.querySelector("nav button");

deButton.onclick = toggleMenu;

function toggleMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");

  var isExpanded = deButton.getAttribute("aria-expanded") === "true";
  deButton.setAttribute("aria-expanded", !isExpanded);
}

/************************/
/* KEYBOARD SHORTCUT */
/************************/

// De JavaScript-code luistert naar de keydown-gebeurtenis. Dit detecteert wanneer een toets op het toetsenbord wordt ingedrukt
// Wanneer de Esc-toets wordt ingedrukt (event.key === 'Escape'), wordt de scrollIntoView-functie aangeroepen op het #bottom-element. Dit zorgt ervoor dat de pagina naar het einde scroll
// Bron: ChatGPT

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      window.scrollTo({
          top: document.body.scrollHeight, // Naar het einde van de pagina
          behavior: 'smooth' // Smooth scroll effect
      });
  }
});