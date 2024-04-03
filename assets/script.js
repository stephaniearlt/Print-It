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

//////// Flèches

// Ajout Event Listeners
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");

arrowLeft.addEventListener("click", function () {
  console.log("Clic sur la flèche gauche");
  previousSlide(); // Appel de la fonction pour afficher la diapositive précédente
  // Pour changer l'image vers la gauche du carrousel
});

arrowRight.addEventListener("click", function () {
  console.log("Clic sur la flèche droite");
  nextSlide(); // Appel de la fonction pour afficher la diapositive suivante
  // Pour changer l'image vers la droite du carrousel
});

//////// Bullet points

// Sélection bullet points
const dots = document.querySelectorAll(".dot");

// Ajout Event Listener à chaque bullet point
dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    console.log("Clic sur le bullet point " + (index + 1));
    // Mise à jour index diapositive
    currentSlideIndex = index;
    // Mise à jour image et texte
    const bannerImg = document.querySelector(".banner-img");
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
    const bannerText = document.querySelector("#banner p");
    bannerText.innerHTML = slides[currentSlideIndex].tagLine;

    // Supprimer la classe 'dot_selected' de tous les points
    dots.forEach((dot) => {
      dot.classList.remove("dot_selected");
    });

    // Ajouter la classe 'dot_selected' au point cliqué
    this.classList.add("dot_selected");
  });
});

//////// Slide au clic

// Index de la diapositive actuelle
let currentSlideIndex = 0;

// Pour afficher la diapositive suivante
function nextSlide() {
  // Mise à jour index diapositive
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  // Mise à jour image, texte, point actif 

  // Mise à jour image
  const bannerImg = document.querySelector(".banner-img");
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;

  // Mise à jour texte
  const bannerText = document.querySelector("#banner p");
  bannerText.innerHTML = slides[currentSlideIndex].tagLine;

  // Mise à jour point actif
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("dot_selected");
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    }
  });
}

// Pour afficher la diapositive précédente
function previousSlide() {
  // Mise à jour index diapositive
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  // Mise à jour image
  const bannerImg = document.querySelector(".banner-img");
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;

  // Mise à jour texte
  const bannerText = document.querySelector("#banner p");
  bannerText.innerHTML = slides[currentSlideIndex].tagLine;

  // Mise à jour point actif
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("dot_selected");
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    }
  });
}