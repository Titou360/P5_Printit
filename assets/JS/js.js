const slides = [ /*Constance tableau */
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des éléments du slider
const sliderContainer = document.getElementById('banner');
const sliderImage = sliderContainer.querySelectorAll('.banner-img');


// Variables de contrôle du slider
let currentSlide = 0;
const totalSlides = slides.length;

// Fonction pour afficher le slide suivant
function nextSlide() {
  sliderImage[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
  updateDots();
}

// Fonction pour afficher le slide précédent
function previousSlide() {
  sliderImage[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  sliderImage[currentSlide].classList.add('active');
  updateDots();
}

// Fonction pour mettre à jour les points du slider
function updateDots() {
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Gestionnaires d'événements pour les flèches du slider
arrowLeft.addEventListener('click', previousSlide);
console.log("Gauche");
arrowRight.addEventListener('click', nextSlide);
console.log("Droite");

// Création des points du slider
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === currentSlide) {
    dot.classList.add('dot_selected');
  }
  dotsContainer.appendChild(dot);
}
