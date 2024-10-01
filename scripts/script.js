// JavaScript Document
console.log("hi");

function createCaroCarrousel(carrouselID) {
  let carrousel = document.querySelector("#" + carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
  let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");

  /****************/
  /* DE BOLLETJES */
  /****************/

  // de bolletjes activeren
  function iniBolletjes() {
    for (bolletje of bolletjes) {
      // elk bolletje laten luisteren naar kliks
      bolletje.addEventListener("click", function (e) {
        // als er geklikt wordt

        // de default-actie (de link volgen) niet uitvoeren
        // anders verplaatst de hele carrousel naar boven in het scherm
        e.preventDefault();

        // het nieuwe element opzoeken
        let newElement = carrousel.querySelector(this.hash);

        // de linker offset van het nieuwe element bepalen
        let newElementOffset = newElement.offsetLeft;

        // de carousel naar de berekende positie scrollen
        carrouselElementsContainer.scrollTo({
          left: newElementOffset,
        });

        // nieuwe element current element maken
        updateCurrentElement(newElement);

        // de bolletjes updaten
        updateBolletjes(newElement);
      });
    }
  }

  /*****************/
  /* START POSITIE */
  /*****************/

  // het eerste element en bolletje actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
    // eerste bolletje current maken
    bolletjes[0].classList.add("current");
    // aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }

  /*********************/
  /* ALGEMENE FUNCTIES */
  /*********************/

  ////////////////////////////
  // update current element //
  function updateCurrentElement(newElement) {
    // het huidige current element opzoeken
    let currentElement = carrousel.querySelector(":scope > ul > .current");
    // de class current verwijderen
    currentElement.classList.remove("current");

    // aan nieuwe element de class current toevoegen
    newElement.classList.add("current");
  }

  //////////////////////
  // update bolletjes //
  function updateBolletjes(newElement) {
    // het huidige current bolletje opzoeken
    let currentBolletje = carrousel.querySelector(":scope > nav .current");
    // de class current verwijderen
    currentBolletje.classList.remove("current");

    // het nieuwe bolletje opzoeken
    let newBolletje = carrousel.querySelector(
      "a[href='#" + newElement.id + "']"
    );
    // de class current toevoegen
    newBolletje.classList.add("current");
  }

  // de bolletjes activeren
  iniBolletjes();
  // de carrousel bij het begin starten
  iniStartPosition();
}

/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function () {
  // hier de id gebruiken van de section in de html
  createCaroCarrousel("justBolletjes");
  //je kunt hier ook meerdere carrousellen activeren
})();

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

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    window.scrollTo({
      top: document.body.scrollHeight, // Naar het einde van de pagina
      behavior: "smooth", // Smooth scroll effect
    });
  }
});
