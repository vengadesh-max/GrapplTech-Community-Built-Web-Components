// Add event listener to hero-cta button
document.querySelector('.hero-cta').addEventListener('click', () => {
    // Add animation to hero section
    document.querySelector('.hero').classList.add('animate');
    // Remove animation after 2 seconds
    setTimeout(() => {
      document.querySelector('.hero').classList.remove('animate');
    }, 2000);
  });