const navLinks = document.querySelectorAll('nav a');
const headerHeight = document.querySelector('header').offsetHeight;

function activateNavLink(sectionId) {
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
    });
}

document.addEventListener('scroll', () => {
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 10; // Compense la hauteur
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    activateNavLink(currentSection);
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const scrollPosition = targetSection.offsetTop - headerHeight + 20; // Ajuste avec un décalage
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});
let lastScrollY = window.scrollY; // Sauvegarde la position initiale du scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Si on descend, on cache la navbar
        header.classList.add('hidden');
    } else {
        // Si on remonte, on affiche la navbar
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; // Met à jour la position du scroll
});

function setupGallery(galleryElement) {
    const images = galleryElement.querySelectorAll('.image-container img');
    const description = galleryElement.querySelector('.image-description');
    const leftArrow = galleryElement.querySelector('.nav-left');
    const rightArrow = galleryElement.querySelector('.nav-right');
    let currentIndex = 0;

    // Fonction pour mettre à jour l'image et la description
    function updateImage() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
        description.textContent = images[currentIndex].getAttribute('data-description');
    }

    // Fonction pour passer à l'image suivante
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    // Fonction pour revenir à l'image précédente
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    // Ajout des événements de clic
    leftArrow.addEventListener('click', prevImage);
    rightArrow.addEventListener('click', nextImage);

    // Initialisation pour afficher la première description
    updateImage();
}

// Appliquer le script à chaque galerie
document.querySelectorAll('.gallery').forEach(setupGallery);
