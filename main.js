const crsr = document.querySelector("#cursor")
const Blur = document.querySelector("#cursor-blur")
 document.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+30 +"px";
   crsr.style.top = dets.y +"px";
   Blur.style.left = dets.x-200 +"px";
   Blur.style.top = dets.y -200 +"px";
});

 var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
elem.addEventListener("mouseleave",function(){
  crsr.style.scale = 1
  crsr.style.border = "0px solid #95c11e"
  crsr.style.backgroundColor = "#95c11e"
})
})

gsap.to("#nav", {
  backgroundColor:"#000",
  duration:0.5,
  height:"110px",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
  
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger :{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
        

    
    }

})


gsap.from("#about-us img,#about-us-in",{

  y:90,
  opacity:0,
  duration:1,
  scrollTrigger:{
trigger:"#about-us",
scroller:"body",
start:"top 60%",
end:"top 65%",
scrub:3

  }
})

gsap.from(".card",{

  scale:0.8,
  opacity:0,
  duration:1,
  scrollTrigger:{
trigger:".card",
scroller:"body",
start:"top 70%",
end:"top 65%",
scrub:3

  }
})



gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
})

gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
})