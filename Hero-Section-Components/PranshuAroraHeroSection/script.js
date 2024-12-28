document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Hero section animation on load
    window.addEventListener("scroll", () => {
      const hero = document.querySelector('.hero-section');
      const scrollPosition = window.scrollY;
      
      // Parallax effect
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  
    // Scroll-to-top button (Optional feature)
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.classList.add("scroll-to-top");
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopButton);
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  