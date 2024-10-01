
/************************/
/* HAMBURGERMENU NAAR KRUIS */
/************************/

// 1
var deButton = document.querySelector("nav button");

// 2
deButton.onclick = toggleMenu;

// 3
function toggleMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");

  // 4
  var isExpanded = deButton.getAttribute("aria-expanded") === "true";
  deButton.setAttribute("aria-expanded", !isExpanded);
}

/************************/
/* KEYBOARD SHORTCUT */
/************************/

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      window.scrollTo({
          top: document.body.scrollHeight, // Naar het einde van de pagina
          behavior: 'smooth' // Smooth scroll effect
      });
  }
});