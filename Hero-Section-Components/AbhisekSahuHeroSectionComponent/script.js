document.addEventListener("DOMContentLoaded", function() {
    // Animate the headline and subheadline on page load
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('fade-in');

    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(ctaButton.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
