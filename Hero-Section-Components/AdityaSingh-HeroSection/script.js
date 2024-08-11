

document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const targetId = link.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

   
    const navMenuToggle = document.querySelector('.nav-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (navMenuToggle) {
        navMenuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', (event) => {
            event.preventDefault();
            
            alert('You clicked the "Learn More" button!');
            
        });
    }

  
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        const hour = new Date().getHours();
        const greeting = hour < 12 ? 'Good Morning' :
                         hour < 18 ? 'Good Afternoon' : 'Good Evening';

        const headline = document.querySelector('.headline');
        if (headline) {
            headline.textContent = `${greeting}, Discover Innovation at Its Best`;
        }
    }
});
