const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
        console.log('Enter')
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
        console.log('Leave')
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
    });
}
function menuAnimation() {

    var menu = document.querySelector("#bar-icon")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

gsap.from('#left',{
    delay:5.7,
    y:40,
    opacity:0,
    duration:0.8,
})
gsap.from('#right',{
    y:40,
    opacity:0,
    duration:0.8,
    delay:5.7
})

gsap.from('.animate-nav',{
    y:40,
    opacity:0,
    delay:5,
    duration:0.7,
})
gsap.from('#bar-icon',{
    y:40,
    opacity:0,
    delay:5,
    duration:0.7,
})

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()