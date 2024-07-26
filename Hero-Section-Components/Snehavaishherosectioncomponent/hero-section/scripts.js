document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    
    // Initial slide
    showSlide(currentSlide);
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const shopNowButton = document.getElementById('shopNowButton');
    const shopModal = document.getElementById('shopModal');
    const closeButton = document.getElementById('closeButton');
  
    // Open the modal
    shopNowButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      shopModal.style.display = 'block';
    });
  
    // Close the modal
    closeButton.addEventListener('click', () => {
      shopModal.style.display = 'none';
    });
  
    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
      if (event.target === shopModal) {
        shopModal.style.display = 'none';
      }
    });
  });
  