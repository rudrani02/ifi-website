document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu-list");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }

    // Carousel Background Effect
    let index = 0;
    const slides = document.querySelectorAll(".carousel img");

    function changeSlide(newIndex) {
        slides.forEach((slide) => slide.classList.remove("active"));
        index = (newIndex + slides.length) % slides.length; // Prevent negative index
        slides[index].classList.add("active");
    }

    function nextSlide() {
        changeSlide(index + 1);
    }

    function prevSlide() {
        changeSlide(index - 1);
    }

    // Auto slide every 3 seconds
    let interval = setInterval(nextSlide, 3000);

    // Button Event Listeners
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    if (nextButton && prevButton) {
        nextButton.addEventListener("click", function () {
            nextSlide();
            clearInterval(interval); // Stop auto-sliding after manual click
        });

        prevButton.addEventListener("click", function () {
            prevSlide();
            clearInterval(interval); // Stop auto-sliding after manual click
        });
    }

    if (slides.length > 0) {
        slides[0].classList.add("active"); // Ensure the first slide is visible
    } else {
        console.error("No slides found!");
    }
});
