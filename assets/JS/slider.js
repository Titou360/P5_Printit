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


/// Etape 2 : Ajouter des evenListener sur arrow left et right
	// Je crée les constantes pour appeler les objets
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

	//J'appelle la constante flecheGauche pour lui assigner la fonction
leftArrow.addEventListener("click", () => {
	//alert("Flèche gauche"); //Alerte bouton gauce
})
	//J'appelle la constancte flecheDroite pour lui assigner la fonction
leftArrow.addEventListener("click", () => {
	//alert("Flèche droite") // Alerte bouton droit
})


/// Etape 3 : J'ajoute les bullet points sur la partie basse du Slider (1 point par image)
	// Je peux vérifier le nombre de ligne de contenu de mon tableau 
const nombredeSlides = slides.length;
	// console.log("Nombre de ligne dans le tableau :" + nombredeSlides);

	// Je crée la constante pour relier la classe .dots
const dotsContainer = document.querySelector('.dots');
	// Je génére les "bullet points" pour chaque ligne du tableau
	//forEach permet d'éxecuter une fonction donnée sur chaque élément du []
slides.forEach((slide, index) => {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	dot.addEventListener('click', () => {
		setCurrentSlide(index);
	});
	dotsContainer.appendChild(dot);
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












