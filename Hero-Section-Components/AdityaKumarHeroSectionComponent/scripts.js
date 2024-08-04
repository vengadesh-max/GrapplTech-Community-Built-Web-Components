const heroSection = document.querySelector('.hero-section');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('modal');

// Example: Change background based on time
const hour = new Date().getHours();
if (hour < 6 || hour > 18) {
    heroSection.classList.add('night');
}

// Example: Parallax Effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Modal functionality
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
