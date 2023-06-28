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

// Create the banner with JS 
document.addEventListener('DOMContentLoaded', function() {
	let bannerDiv = document.querySelector('#banner');
	let currentIndex =0;
	
  
	let arrowLeftImg = document.createElement('img');
		arrowLeftImg.classList.add('arrow', 'arrow_left');
		arrowLeftImg.src = './assets/images/arrow_left.png';

		arrowLeftImg.addEventListener('click', function() {
			currentIndex = (currentIndex - 1 + slides.length) % slides.length;
			updateBanner();
		  });


	let bannerImg = document.createElement('img');
		bannerImg.className = 'banner-img';
		bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;


	let bannerTagline = document.createElement('p');
		bannerTagline.innerHTML = slides[currentIndex].tagLine;


	let arrowRightImg = document.createElement('img');
		arrowRightImg.classList.add('arrow', 'arrow_right');
		arrowRightImg.src = './assets/images/arrow_right.png';

		arrowRightImg.addEventListener('click', function() {
			currentIndex = (currentIndex + 1) % slides.length;
			updateBanner();
			});


	let dotsImg = document.createElement('div');
		dotsImg.className = 'dots';


	function updateBanner () {
		bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;

		if (bannerTagline) {
			bannerDiv.removeChild(bannerTagline);
		}

		bannerTagline = document.createElement('p');
		bannerTagline.innerHTML = slides[currentIndex].tagLine;

		bannerDiv.appendChild(bannerTagline);


		dots.forEach((dot, index) => {
			dot.classList.toggle('dot_selected', index === currentIndex);
		  });

	}

	// Add the elements to the banner
	bannerDiv.appendChild(arrowLeftImg);
	bannerDiv.appendChild(bannerImg);
	bannerDiv.appendChild(bannerTagline);
	bannerDiv.appendChild(arrowRightImg);
	bannerDiv.appendChild(dotsImg);

	
	// Add the dots to the banner
	let dots = [];
  		slides.forEach((_slide, index) => {
    let dot = document.createElement('span');
    	dot.classList.add('dot');
    	dot.addEventListener('click', function() {
      		currentIndex = index;
      		updateBanner();
    	});
    	
		dotsImg.appendChild(dot);
    	dots.push(dot);
  	});

  updateBanner();
  });

