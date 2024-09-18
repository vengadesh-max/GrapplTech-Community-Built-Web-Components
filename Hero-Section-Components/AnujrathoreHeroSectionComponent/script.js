const scrollArea = document.querySelector('.scroll-items-wrapper');
scrollArea.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    scrollArea.scrollLeft += evt.deltaY;
})

const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu')
menu.addEventListener('click',()=>{
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
})