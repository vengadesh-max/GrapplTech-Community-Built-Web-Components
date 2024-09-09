const menuButton = document.getElementsByClassName('menu-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
menuButton.addEventListener('click', ()=> {
    navLinks.classList.toggle('active')
})