
console.clear();

gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
 });
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to(".box2", {
    scrollTrigger : {
        trigger : ".section2" ,
        scroller: ".smooth-scroll",
        start : " top top",
        scrub : true, 
        pin : true 
    },
    left :"30%",
   top : "-30%",
   skewX: 13,
   scale: 1.3, 
    
  });

  ////Img

 var textanimation = document.querySelectorAll(".textAnim") ;
 gsap.to(textanimation,{
     repeat: -1 ,
     x : -5000,
     ease : "linear" ,
     duration : 12,
    
 })
 var textanimation1 = document.querySelectorAll(".textAnim1") ;
 gsap.to(textanimation1,{
     repeat: -1 ,
     x: -5000,
     ease : "linear" ,
     duration : 7 ,
       
 })
////loop text



var imgOpacity = $(".elems");
imgOpacity.on("mousemove" , function(dest){
   this.children[1].style.opacity = 1 ;
   
})
imgOpacity.on("mouseout" , function(dest){
    this.children[1].style.opacity = 0 ;
   
 })


    var img1 = $(".elems") ;
 img1.on("mousemove" , function(dest){
      this.children[1].style.transform = `translate(${dest.screenX*.4}px)` ;
 })

 //mousemove

     var val =    document.querySelector(".home").getBoundingClientRect().left;
     var photos = document.querySelectorAll(".photu") ;

     document.querySelector(".first").addEventListener("scroll",   function ()  {
     var varvalue =  document.querySelector(".home").getBoundingClientRect().left*.5 ;
     var weneed = val - varvalue;
   

     val =varvalue
     photos.forEach(element => {
      
       
        element.style.transform =  `skew(${weneed*.6}deg)` ;
        if(val==0){
        element.style.transform =  `skew(${weneed*0}deg)` ;
        }  
        setTimeout(() => {
            if(weneed >= 0){
                element.style.transform =  `skew(${weneed*0}deg)` ;
                    }
            
        }, 15);            
    });
 });
////thread effect in front page


$(document).ready(function(){
    $(".texta1").textillate({
       in:{
           effect:"bounceInDown"
       }
    });
})

$(document).ready(function(){
    $(".texta1").textillate({
       in:{
           effect:"bounceInLeft",
           delayScale: .5,
          
           
       }
    });
})











 

 

