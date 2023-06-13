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

	// Je crée les constantes pour appeler les objets
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const imageElement = document.querySelector(".banner-img");
const taglineElement = document.querySelector("p");
let currentIndex = 0;

	//J'appelle la constante flecheGauche pour lui assigner la fonction (étape 2)
leftArrow.addEventListener("click", () => {
	console.log("Flèche gauche");//Alerte bouton gauche /!\ à effacer avant mise en ligne
	currentIndex = (currentIndex -1 + slides.length) % slides.length;
	const currentSlide = slides[currentIndex];
	imageElement.src = "assets/images/slideshow/" + currentSlide.image;
	taglineElement.innerHTML = currentSlide.tagLine;

});
		//J'appelle la constancte flecheDroite pour lui assigner la fonction (étape 2)
rightArrow.addEventListener("click", () => {
	console.log("Flèche droite"); // Alerte bouton droit /!\ à effacer avant mise en ligne
	currentIndex = (currentIndex + 1) % slides.length;
	const currentSlide = slides[currentIndex];
	imageElement.src = "assets/images/slideshow/" + currentSlide.image;
	taglineElement.innerHTML = currentSlide.tagLine;

});



/// Etape 3 : J'ajoute les bullet points sur la partie basse du Slider (1 point par image)
	// Je peux vérifier le nombre de ligne de contenu dans mon tableau 
console.log("Nombre de lignes dans le tableau :" + slides.length); // /!\ à effacer avant mise en ligne

	// Je crée la constante pour relier la classe .dots
const dotsContainer = document.querySelector('.dots');
const dots = [];
	// Je génére les "bullet points" pour chaque ligne du tableau
	//forEach permet d'éxecuter une fonction donnée sur chaque élément du tableau slides []
slides.forEach((_slide, index) => {
const dot = document.createElement('span');
	dot.classList.add('dot');
	dot.addEventListener('click', () => {
		setCurrentSlide(index);
	});
	dotsContainer.appendChild(dot);
	dots.push(dot);
});

	// Je gére la sélection du "bullet-point" en cours et lui attribue le position 0
let currentDotIndex = 0;

	// Je crée la fonction qui me permet que le "bullet-point" prenne ou non le CSS
function setCurrentSlide(index) {
	const dots = document.querySelectorAll('.dot');
	dots[currentDotIndex].classList.remove('dot_selected');
	dots[index].classList.add('dot_selected');

	currentDotIndex = index;
}



