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
	var currentIndex =0;
  
	var arrowLeftImg = document.createElement('img');
		arrowLeftImg.classList.add('arrow', 'arrow_left');
		arrowLeftImg.src = './assets/images/arrow_left.png';

		arrowLeftImg.addEventListener('click', function() {
			currentIndex = (currentIndex - 1 + slides.length) % slides.length;
			// Autres actions à effectuer lors du clic sur l'image arrowLeftImg...
			updateBanner();
		  });

	var bannerImg = document.createElement('img');
		bannerImg.className = 'banner-img';
		bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;

	var bannerTagline = document.createElement('p');
		bannerTagline.textcontent = slides[currentIndex].tagLine;
		bannerTagline.innerHTML = slides[currentIndex].tagLine;

	var arrowRightImg = document.createElement('img');
		arrowRightImg.classList.add('arrow', 'arrow_right');
		arrowRightImg.src = './assets/images/arrow_right.png';

		// Ajout de l'événement click à arrowRightImg
		arrowRightImg.addEventListener('click', function() {
			currentIndex = (currentIndex + 1) % slides.length;
			// Autres actions à effectuer lors du clic sur l'image arrowLeftImg...
			updateBanner();
			});


	var dotsImg = document.createElement('div');
		dotsImg.className = 'dots';

	var dotSpan = document.createElement('span');
		dotSpan.classList.add('dot');


	function updateBanner () {
		bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;
		
		if (bannerTagline) {
			bannerDiv.removeChild(bannerTagline);
		}

		bannerTagline = document.createElement('p');
		bannerTagline.innerHTML = slides[currentIndex].tagLine;

		bannerDiv.appendChild(bannerTagline);

	}

  
	// Ajout des éléments à la div "banner"
	bannerDiv.appendChild(arrowLeftImg);
	bannerDiv.appendChild(bannerImg);
	bannerDiv.appendChild(bannerTagline);
	bannerDiv.appendChild(arrowRightImg);
	bannerDiv.appendChild(dotsImg)

	dotsImg.appendChild(dotSpan);
  });

// Functions for slideshow
