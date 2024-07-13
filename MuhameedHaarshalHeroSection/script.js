document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function changeBackground() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const backgroundImage = section.getAttribute('data-background');
                document.body.style.backgroundImage = `url('${backgroundImage}')`;
            }
        });
    }

    // Initial call to set the correct background image based on initial scroll position
    changeBackground();

    // Listen for scroll events to update the background image
    document.addEventListener('scroll', changeBackground);
});
