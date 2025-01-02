

const images = document.querySelectorAll('.gallery img');
let currentIndex1 = 0;

function showNextImage() {
    const currentImage = images[currentIndex1];
    currentIndex = (currentIndex1 + 1) % images.length;
    const nextImage = images[currentIndex1];

    currentImage.classList.remove('active');
    nextImage.classList.add('active');
}

setInterval(showNextImage, 2500);


const thumbnails1 = document.querySelector('.thumbnails');
const mainImages = document.querySelectorAll('.gallery img');

function scrollThumbnails(direction) {
    const scrollAmount = 150; // Quantité de défilement en pixels
    thumbnails1.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function setMainImage(index) {
    mainImages.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

const images2 = document.querySelectorAll('.gallery img');
const modal = document.getElementById('fullscreenModal');
const fullscreenImage = document.getElementById('fullscreenImage');
let currentIndex = 0;

// Ouvrir la modale en plein écran
function openFullscreen(index) {
currentIndex = index;
fullscreenImage.src = images2[currentIndex].src;
modal.style.display = 'flex';
}

// Fermer la modale en plein écran
function closeFullscreen() {
modal.style.display = 'none';
fullscreenImage.src = '';
}

// Changer d'image dans le mode plein écran
function changeFullscreenImage(direction) {
currentIndex = (currentIndex + direction + images2.length) % images2.length;
fullscreenImage.src = images2[currentIndex].src;
}

// Fermer la modale si on clique à l'extérieur de l'image
modal.addEventListener('click', (event) => {
if (event.target === modal) {
closeFullscreen();
}
});

// Ajouter un événement clic sur chaque image pour activer le mode plein écran
images2.forEach((img, index) => {
img.addEventListener('click', () => openFullscreen(index));
});

