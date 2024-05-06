// Tableur contenant les slides

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Première diapositive affichée par défaut sur le site
let currentSlideIndex = 0;

//////// Flèches //////////

// Sélectionne l'élément HTML spécifique aux flèches
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");

// Ajout des écouteurs d'événement
// Clique flèche gauche = Activation diapositive précédente
arrowLeft.addEventListener("click", previousSlide);

// Clique flèche droite = Activation diapositive suivante
arrowRight.addEventListener("click", nextSlide);

//////// Bullet points

// Sélectionne l'élément HTML spécifique aux bullet points
const dots = document.querySelector(".dots");

// Ajout d'une boucle qui parcourt chaque élément de la liste des slides
slides.forEach((_, index) => {
  // A chaque itération, un nouveau point
  const dot = document.createElement("div");
  // Si condition vraie, point actif
  if (currentSlideIndex === index) {
    dot.className = "dot dot_selected";
    // Si condition fausse, pas de sélection
  } else {
    dot.className = "dot";
  }

  dots.appendChild(dot);
});

//////// Slide au clic

// Mise à jour de la diapositive
function updateSlide() {
  // Mise à jour de l'image
  const bannerImg = document.querySelector(".banner-img");
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;

  // Mise à jour du texte
  const bannerText = document.querySelector("#banner p");
  bannerText.innerHTML = slides[currentSlideIndex].tagLine;

  // Mise à jour du point actif
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("dot_selected");
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    }
  });
}

//////// Défilement infini

// Gestion du clic sur la flèche droite
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateCarousel();
}

// Gestion du clic sur la flèche gauche

function previousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Mise à jour de l'affichage du carrousel
function updateCarousel() {
  // Mise à jour image
  const bannerImg = document.querySelector(".banner-img");
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;

  // Mise à jour texte
  const bannerText = document.querySelector("#banner p");
  bannerText.innerHTML = slides[currentSlideIndex].tagLine;

  // Supprimer la classe 'dot_selected' de tous les points
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  // Ajouter la classe 'dot_selected' au point correspondant à la diapositive actuelle
  dots[currentSlideIndex].classList.add("dot_selected");
}
