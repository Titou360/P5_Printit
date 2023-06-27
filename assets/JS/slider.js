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







const imageElement = document.querySelector(".banner-img");
const taglineElement = document.querySelector("p");
let currentIndex = 0;

const leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    const currentSlide = slides[currentIndex];
    /*imageElement.src = "assets/images/slideshow/" + currentSlide.image;
    taglineElement.innerHTML = currentSlide.tagLine;*/
    setCurrentSlide(currentIndex);
});

const rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    const currentSlide = slides[currentIndex];
    /*imageElement.src = "assets/images/slideshow/" + currentSlide.image;
    /*taglineElement.innerHTML = currentSlide.tagLine;*/
    setCurrentSlide(currentIndex);
});

/// J'ajoute les bullet points sur la partie basse du Slider (1 point par image)
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
	/**** Pour rendre cliquable les dots ****/
	/*dot.addEventListener('click', () => {
		setCurrentSlide(index);
	});*/
	dotsContainer.appendChild(dot);
	dots.push(dot);
});



	// Je crée la fonction qui me permet que le "bullet-point" prenne ou non le CSS
function setCurrentSlide(currentIndex) {
	const currentSlide = slides[currentIndex];
	imageElement.src = "assets/images/slideshow/" + currentSlide.image;
	taglineElement.innerHTML = currentSlide.tagLine;
	const dots = document.querySelectorAll('.dot');

	dots.forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i===currentIndex)
	});
}

	// Appeler setCurrentSlide() avec l'index initial
setCurrentSlide(0);



