Shery.mouseFollower()
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hoc",{
    videos:["//cdn.cuberto.com/cb/showreel/1.mp4","https://cdn.cuberto.com/cb/projects/qvino/cover.mp4","https://cdn.cuberto.com/cb/projects/cisco/cover.mp4"]
})
gsap.to(".leftelm",{
    scrollTrigger:{
        trigger:"#featured",
        pin:true,
        start: "top top",
        end:"bottom bottom ",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1
})
let ss= document.querySelectorAll(".leftelm")
Shery.imageEffect("#images", {
    style: 3,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
      ss.forEach(function (ss,index) {
        ScrollTrigger.create({
            trigger:ss,
            start:"top top",
            scrub: 1,
            onUpdate:function (prog) {
              //  console.log(prog)
                setScroll(prog.progress+index)
            }

        })
      })
    }
  });

