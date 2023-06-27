const slides = [
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

/* Create the banner with JS */
document.addEventListener('DOMContentLoaded', function() {
	var bannerDiv = document.querySelector('#banner');
  
	// Création de l'élément image pour la flèche gauche
	var arrowLeftImg = document.createElement('img');
	arrowLeftImg.classList.add('arrow', 'arrow_left');
	arrowLeftImg.src = './assets/images/arrow_left.png';
  
	// Création de l'élément image pour la bannière
	var bannerImg = document.createElement('img');
	bannerImg.className = 'banner-img';
	bannerImg.src = './assets/images/slideshow/slide1.jpg';

  
	// Création de l'élément image pour la flèche droite
	var arrowRightImg = document.createElement('img');
	arrowRightImg.classList.add('arrow', 'arrow_right');
	arrowRightImg.src = './assets/images/arrow_right.png';

	// Création de l'élément image les dots
	var dotsImg = document.createElement('div');
	dotsImg.className = 'dots';

	var dotSpan = document.createElement('span');
	dotSpan.classList.add('dot');

  
	// Ajout des éléments à la div "banner"
	bannerDiv.appendChild(arrowLeftImg);
	bannerDiv.appendChild(bannerImg);
	bannerDiv.appendChild(arrowRightImg);
	bannerDiv.appendChild(dotsImg)

	dotsImg.appendChild(dotSpan);
  });
  