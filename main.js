const dots = document.querySelectorAll('.dots li');
const slides = document.querySelectorAll('.list .item');

// Danh sách hiệu ứng
const effects = [
    "fade", "slide-left", "slide-right", "slide-up", "slide-down",
    "zoom-in", "zoom-out", "rotate", "flip-horizontal", "flip-vertical"
];

let currentIndex = 0;
let slideInterval;

// Chọn hiệu ứng ngẫu nhiên
function getRandomEffect() {
    return effects[Math.floor(Math.random() * effects.length)];
}

// Chuyển đổi ảnh với hiệu ứng ngẫu nhiên
function changeSlide(index) {
    let effect = getRandomEffect();

    slides.forEach((slide, i) => {
        slide.classList.remove("active", ...effects);
        dots[i].classList.remove("active");
    });

    slides[index].classList.add(effect, "active");
    dots[index].classList.add("active");
}

// Khởi động slide đầu tiên
changeSlide(currentIndex);


function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    }, 5000);
}

startAutoSlide();

// Click vào dots để chuyển ảnh
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        clearInterval(slideInterval);
        currentIndex = index;
        changeSlide(currentIndex);
        startAutoSlide();
    });
});
