const dots = document.querySelectorAll('.dots li');
const slides = document.querySelectorAll('.list .item');

const effects = [
    "fade", "slide-left", "slide-right", "slide-up", "slide-down",
    "zoom-in", "zoom-out", "rotate", "flip-horizontal", "flip-vertical"
];

let currentIndex = 0;
let slideInterval;


function getRandomEffect() {
    return effects[Math.floor(Math.random() * effects.length)];
}


function changeSlide(index) {
    let effect = getRandomEffect();

    slides.forEach((slide, i) => {
        slide.classList.remove("active", ...effects);
        dots[i].classList.remove("active");
    });

    slides[index].classList.add(effect, "active");
    dots[index].classList.add("active");
}


changeSlide(currentIndex);


function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    }, 5000);
}

startAutoSlide();


dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        clearInterval(slideInterval);
        currentIndex = index;
        changeSlide(currentIndex);
        startAutoSlide();
    });
});
