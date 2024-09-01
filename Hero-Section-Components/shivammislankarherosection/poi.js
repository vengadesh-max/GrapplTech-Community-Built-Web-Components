gsap.to("#nav",{
    
    backgroundColor:"white",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
       
            trigger:"#nav",
            scroller:"body",
            start:"top -10%",
            end:"top -11%",
            scrub:1

        }
    }
)
gsap.to("#main",{
    backgroundColor:"white",
    scrollTrigger:{
       
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -50%",
        scrub:2

    }
})