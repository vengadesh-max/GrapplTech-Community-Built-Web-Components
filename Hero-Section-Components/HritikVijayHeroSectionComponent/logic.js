// console.log("Sita ram");

const list = document.querySelectorAll(".main-nav-link");
const howSection = document.querySelector(".how-it-work")
const meals = document.querySelector(".meals")
const testimonials = document.querySelector(".testimonials-hover")
const pricing = document.querySelector(".hover-pricing")

let hoverItems = (link, display) => {
  if (link.innerHTML.includes("How it works")) {
    howSection.style.display = display
  } else if (link.innerHTML.includes("Meals")) {
    meals.style.display = display
  } else if (link.innerHTML.includes("Testimonials")) {
    testimonials.style.display = display
  }
  else if (link.innerHTML.includes("Pricing")) {
    pricing.style.display = display
  }
}
list.forEach((link) => {
  link.addEventListener("mouseover", () => {
    hoverItems(link, "block")
  })
  link.addEventListener("mouseleave", () => {
    hoverItems(link, "none")
  })
})