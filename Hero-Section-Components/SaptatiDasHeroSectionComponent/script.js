// Create a new GSAP timeline with default animation duration of 0.5 seconds
var t1 = gsap.timeline({ defaults: { duration: 0.5 } });
var imageContainer = document.querySelector(".image"); // Select the image container

// Define the sequence of animations for the page load
t1.from(".header", { y: "-100vh", ease: "circ.out" }) // Animate the header from above the viewport
  .to(".header__logo", {
    y: "0",
    opacity: 1,
    ease: "circ.out",
  }) // Animate the logo to its final position with opacity
  .to(
    ".header__nav",
    {
      y: "0",
      opacity: 1,
      ease: "circ.out",
      stagger: ".2",
    },
    "-=0.4"
  ) // Animate the navigation items with a stagger effect
  .from(
    ".hero-animation",
    {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "power4.out",
    },
    "-=0.5"
  ) // Animate the hero section content
  .from(".hero-section__subscribe", {
    opacity: 0,
    y: 20,
    ease: "power4.out",
  }) // Animate the subscribe section
  .from(imageContainer, {
    duration: 1.5,
    height: 0,
    skewY: 7,
    ease: "power4.out",
  }); // Animate the image container height and skew effect

// Select the menu toggle button and overlay
var menuToggle = document.querySelector(".header__nav__menu");
var overlay = document.querySelector(".overlay");

// Function to show the overlay and hide the menu toggle button
function showOverlay() {
  overlay.classList.add("show");
  menuToggle.classList.add("hide");
}

// Function to hide the overlay and show the menu toggle button
function hideOverlay() {
  overlay.classList.remove("show");
  menuToggle.classList.remove("hide");
}

// Add event listeners for mouseover and mouseleave events
menuToggle.addEventListener("mouseover", showOverlay);
overlay.addEventListener("mouseleave", hideOverlay);

// Function to handle subscription action
function subscribe() {
  alert('You have successfully subscribed!');
}
