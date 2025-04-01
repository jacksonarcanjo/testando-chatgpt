// script.js

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carrosselContainer = document.querySelector(".carrossel-container");
    let index = 0;

    nextButton.addEventListener("click", function () {
        if (index < 2) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = 2;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * 300;
        carrosselContainer.style.transform = `translateX(${offset}px)`;
    }
});

function showDetails(anime) {
    alert("Você clicou no " + anime);
}
