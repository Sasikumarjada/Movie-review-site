const carousel = document.querySelector('.carousel');
let currentAngle = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateCarousel() {
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
    
    slides.forEach((slide, index) => {
        const angle = (360 / totalSlides) * index + currentAngle;
        slide.style.opacity = Math.cos(angle * Math.PI / 180);
        slide.style.transform = `rotateY(${angle}deg) translateZ(250px) scale(${Math.cos(angle * Math.PI / 180) * 0.5 + 0.5})`;
    });
}

function nextSlide() {
    currentAngle -= 360 / totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentAngle += 360 / totalSlides;
    updateCarousel();
}

// Auto-rotate every 5 seconds
setInterval(nextSlide, 5000);

// Initial setup
updateCarousel();
