
document.addEventListener('DOMContentLoaded', function() {
    // Code here will run after the DOM is fully loaded
    const signInButton = document.querySelector('.sign-in');
    const formPopup = document.querySelector(".form-popup");
    const closePopupBtn = formPopup.querySelector(".cls-btn");
    const textBox = document.querySelector('.text-box');
    const navMenu = document.querySelector('.button-nav');
    
const signUpLink = formPopup.querySelectorAll(".bottom-link a");

  signInButton.addEventListener('click', function() {
    document.body.classList.toggle('show-popup');
    });

signInButton.addEventListener('click', () => {
    formPopup.style.display = 'block'; // Show the form
    textBox.classList.add('hidden'); // Hide the heading
});

closePopupBtn.addEventListener('click', () => {
    formPopup.style.display = 'none'; // Hide the form
    document.body.classList.toggle('show-popup');
    textBox.classList.remove('hidden'); // Show the heading
});

signUpLink.forEach(Link =>{
    Link.addEventListener("click", (e)=>{
        e.preventDefault();
        formPopup.classList[Link.id === "signup-link" ? "add" : "remove"] ("show-signup");
    });
});

navMenu.addEventListener('click', ()=>{
 document.body.classList.toggle("nav-open");
})



});