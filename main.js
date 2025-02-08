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
let quotes = [
    { 
        text: "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family.", 
        author: "Shawn Michael", 
        role: "Founder, Mnc Inc." 
    },
    { 
        text: "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family.", 
        author: "Rashed Ka.", 
        role: "Founder, Mnc Inc." 
    },
    { 
        text: "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family.", 
        author: "Mahfuz Riadh6", 
        role: "Founder, Mnc Inc." 
    }
];
let index = 0;

function swapQuote() {
    index = (index + 1) % quotes.length;
    document.getElementById("quote-text").innerText = quotes[index].text;
    document.getElementById("quote-author").innerText = quotes[index].author;
    document.querySelector(".quote-role").innerText = quotes[index].role;
}

setInterval(swapQuote, 4000);

document.addEventListener('DOMContentLoaded', function() {
    var counters = document.querySelectorAll('.stat');
    var speed = 80; 
  
    function countUp(counter) {
      var target = parseInt(counter.getAttribute('data-target'), 10); 
      function updateCount() {
        var current = parseInt(counter.innerText, 10);
        var increment = target / speed;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target; 
        }
      }
      updateCount();
    }
  
    var observerOptions = {
      threshold: 0.5  
    };
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);
  
    for (var i = 0; i < counters.length; i++) {
      observer.observe(counters[i]);
    }
  });

  $(document).ready(function(){
    $(".partner-slider").owlCarousel({
        loop: true,
        margin: 10, 
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 2, margin: 5 }, 
            600: { items: 3, margin: 8 }, 
            1000: { items: 5, margin: 10 }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(".search-icon");
  const searchBox = document.querySelector(".search-box");

  if (searchIcon && searchBox) {
      searchIcon.addEventListener("click", function (event) {
          event.preventDefault();
          searchBox.classList.toggle("active");
      });

      document.addEventListener("click", function (event) {
          if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
              searchBox.classList.remove("active");
          }
      });
  }
});



$(document).ready(function(){
  $(".partner-slider").owlCarousel({
      loop: true,
      margin: 5, 
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      rtl: true, 
      responsive: {
          0: { items: 2, margin: 3 }, 
          600: { items: 3, margin: 5 }, 
          1000: { items: 5, margin: 5 }
      }
  });
});

