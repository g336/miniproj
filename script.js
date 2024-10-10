$(document).ready(function() {
    // Handle form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message!');
        $(this).trigger('reset'); // Reset the form fields
    });
});

$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.gallery-slide');
    const totalSlides = slides.length;

    // Show the first slide
    slides.eq(currentIndex).addClass('active');

    $('#next').click(function() {
        const nextIndex = (currentIndex + 1) % totalSlides;

        slides.eq(currentIndex).removeClass('active').addClass('prev'); // Hide current slide and add prev class
        slides.eq(nextIndex).addClass('active next'); // Show next slide with next class

        setTimeout(() => {
            slides.eq(currentIndex).removeClass('prev'); // Remove prev class after transition
            slides.eq(nextIndex).removeClass('next'); // Remove next class after transition
        }, 500); // Match timeout to the duration of the CSS transition

        currentIndex = nextIndex; // Update current index
    });

    $('#prev').click(function() {
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;

        slides.eq(currentIndex).removeClass('active').addClass('next'); // Hide current slide and add next class
        slides.eq(prevIndex).addClass('active prev'); // Show previous slide with prev class

        setTimeout(() => {
            slides.eq(currentIndex).removeClass('next'); // Remove next class after transition
            slides.eq(prevIndex).removeClass('prev'); // Remove prev class after transition
        }, 500); // Match timeout to the duration of the CSS transition

        currentIndex = prevIndex; // Update current index
    });
});
