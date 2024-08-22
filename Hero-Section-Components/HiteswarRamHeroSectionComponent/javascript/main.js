const checkbox = document.getElementById('check');
        const toggleButton = document.querySelector('.open-menu');
        toggleButton.addEventListener('click', () => {
            
            checkbox.checked = !checkbox.checked;})

const slider = document.querySelector('.slider');
let index = 0;

function autoSlide() {
    index++;
    if (index >= slider.children.length) {
        index = 0;
    }
    slider.scrollTo({
        left: slider.clientWidth * index,
        behavior: 'smooth'
    });
}

setInterval(autoSlide, 5000); 
