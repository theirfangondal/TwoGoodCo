function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  } //locomotive animation
  

  locomotiveAnimation();

  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }


  if (isMobileDevice()) {
    // Mobile-specific JavaScript code
    console.log("Mobile device detected");
    function navbarAnimation(){
      gsap.to("#nav-part1>img",{
        // transform:"translateY(-100%)",
        transform:"translate(0px, -100%)",
        scrollTrigger:{
          trigger:"#section1",
          scroller:"#main",
          start:"top 0",
          end:"top -5%",
          scrub:true,
        }
        })
        
        gsap.to("#nav-part2>#links",{
          transform:"translateY(-100%)",
          opacity:0,
          scrollTrigger:{
            trigger:"#section1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true,
          }
          })
    
    }
    
    navbarAnimation();
    
    // Write your mobile-specific JavaScript code here
  } else {
    // Desktop-specific JavaScript code
    console.log("Desktop device detected");
    function navbarAnimation(){
      gsap.to("#nav-part1>img",{
        // transform:"translateY(-100%)",
        transform:"translate(0px, -100%)",
        scrollTrigger:{
          trigger:"#section1",
          scroller:"#main",
          start:"top 0",
          end:"top -5%",
          scrub:true,
        }
        })
        
        gsap.to("#nav-part2>#links",{
          transform:"translateY(-100%)",
          opacity:0,
          scrollTrigger:{
            trigger:"#section1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true,
          }
          })
    
    }
    
    navbarAnimation();
    
    // Write your desktop-specific JavaScript code here
  }

function navbarAnimation(){
  gsap.to("#nav-part1>img",{
    // transform:"translateY(-100%)",
    transform:"translate(0px, -100%)",
    scrollTrigger:{
      trigger:"#section1",
      scroller:"#main",
      start:"top 0",
      end:"top -5%",
      scrub:true,
    }
    })
    
    gsap.to("#nav-part2>#links",{
      transform:"translateY(-100%)",
      opacity:0,
      scrollTrigger:{
        trigger:"#section1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
        scrub:true,
      }
      })

}

navbarAnimation();



let menuIcon=document.querySelector("#nav-part2>#nav-icons>.toggler");
let menuBottom=document.querySelector(".menudivbottom");
let nav=document.querySelector("#nav");
let navBar2=document.querySelectorAll("#nav-part2>#links>a");
let logoImg =document.querySelector("#nav-part1>#logotext");
let currentImage = "./media/logo1.png";
let navIcon=document.querySelector("#nav-icons>.toggler")

menuIcon.addEventListener("click",()=>{
  menuBottomToggler();
  menuTopToggler();
})

function menuBottomToggler(){
  if(menuBottom.style.display==="flex"){
    menuBottom.style.display="none"
  }
  else(menuBottom.style.display="flex")
}

function menuTopToggler(){
if(nav.style.backgroundColor=="black"){
  nav.style.backgroundColor="";
}
else{nav.style.backgroundColor="black"};

navBar2.forEach(element=>{
if(element.style.color==="white"){
  element.style.color="black";
}
else{element.style.color="white";}
}
);

if (currentImage === "./media/logo1.png") {
  logoImg.src = "./media/logo5.png";
  currentImage = "./media/logo5.png";
} else {
  logoImg.src = "./media/logo1.png";
  currentImage = "./media/logo1.png";
}


if(navIcon.classList.contains("ri-menu-fill")){
  navIcon.classList.toggle("ri-close-large-fill");
  
}
else {navIcon.classList.toggle("ri-menu-fill")}

document.body.classList.toggle("no-scroll");

}










// Declaration
var videoCon=document.querySelector("#section1>#video-container");
var playBtn=document.querySelector("#section1>#video-container>#play");
var mainHeading=document.querySelectorAll("#mainHeading>h1");
var textArea=document.querySelector("#emaildiv>#textarea1");
var textAreaP=document.querySelector("#emaildivp1");
var prod=document.querySelectorAll(".elemdetails");
var prodDetails=document.querySelectorAll(".elemdetailsmain");


// // Locomotive
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


//loadingAnimation
function loadingAnimation(){
    
    

    gsap.from(mainHeading,{
        opacity:0,
        y:100,
        duration:0.8,
        delay:0.3,
        stagger:0.4,
    })
    
        gsap.from(videoCon,{
            opacity:0,
            scale:0.9,
            delay:0.8,
        })
    
    
    }
    
    loadingAnimation();
    
//video container animation    
function videoConAnimation(){


videoCon.addEventListener("mouseenter",()=>{
gsap.to(playBtn,{
opacity:1,
scale:1,
})
});

videoCon.addEventListener("mouseleave",()=>{
gsap.to(playBtn,{
    opacity:0,
    scal:0,
})
});

videoCon.addEventListener("mousemove",(dets)=>{
gsap.to(playBtn,{
    left:dets.x-50,
    top:dets.y-50,
})
});


}

videoConAnimation();


// document.querySelectorAll(".sec3prod").forEach(function (elem) {
//     elem.addEventListener("mouseenter",function(){
//         gsap.to("#cursor",{
//             transform: "translate(-50%,-50%) scale(1)",
//         });
//     });

//     elem.addEventListener("mouseleave",function(){
//         gsap.to("#cursor",{
//             transform: "translate(-50%,-50%) scale(0)",
//         });
//     });
    
// });


function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });


document.querySelectorAll(".sec3prod").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",

      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
});

}

cursorAnimation();



// TextArea
function textAreap(){
textArea.addEventListener("click",()=>{
  textAreaP.innerText="↵"
});
}

textAreap()

function handleOutsideClick(event) {
  // Check if the clicked element is not the textarea
  if (event.target !== textArea) {
    // Reset the content of the textarea
    textAreaP.innerText = "→"; // You may also reset the associated paragraph if needed
  }
}

document.body.addEventListener("click", handleOutsideClick);



//PRODUCTS HOVER ANIMATION

prod.forEach(function(element, index) {
  element.addEventListener("mouseover", function() {
      prodDetails[index].style.display = "flex";
  });
  element.addEventListener("mouseleave", function() {
      prodDetails[index].style.display = "none";
  });
});


//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
 });
 
 
 let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
 });
 
