let mobileMenuIcon = document.querySelector("#menu-container")
let closeMenu = document.querySelector("#close-menu")
let homeMobileLink = document.querySelector("#home-mobile-link")
let workMobileLink = document.querySelector("#work-mobile-link")
let aboutMobileLink = document.querySelector("#about-mobile-link")
let contactMobileLink = document.querySelector("#contact-mobile-link")
let workMenu = document.getElementById("work-menu")
let carousel = document.querySelector(".carousel")
let workTitle = document.getElementById("work-title")
let musicLink = document.getElementById("music-link")
let musicSection = document.getElementById("music-section")


mobileMenuIcon.addEventListener("click", function(){
    document.querySelector("#mobile-container").style.display = "block"
})

closeMenu.addEventListener("click", function(){
    document.querySelector("#mobile-container").style.display = "none"
})

homeMobileLink.addEventListener("click", function(){
    landingSection.style.display = "block"
    contactSection.style.display = "none"
    aboutSection.style.display = "none"
    workSection.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    document.querySelector("#mobile-container").style.display = "none"
})

workMobileLink.addEventListener("click", function(){
    landingSection.style.display = "none"
    contactSection.style.display = "none"
    aboutSection.style.display = "none"
    workSection.style.display = "block"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    carousel.style.display = "none"
    workMenu.style.display = "block"
    document.querySelector("#mobile-container").style.display = "none"
    workTitle.innerText = "Work"
    musicSection.style.display = "none"
})

aboutMobileLink.addEventListener("click", function(){
    landingSection.style.display = "none"
    contactSection.style.display = "none"
    aboutSection.style.display = "block"
    workSection.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    document.querySelector("#mobile-container").style.display = "none"
})

contactMobileLink.addEventListener("click", function(){
    landingSection.style.display = "none"
    contactSection.style.display = "block"
    aboutSection.style.display = "none"
    workSection.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    document.querySelector("#mobile-container").style.display = "none"
})




const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.querySelector("#arrow-right").addEventListener('click', moveToNextSlide);
document.querySelector("#arrow-left").addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
  hideAllSlides();
       if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
       hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");    
}



let homeButton = document.querySelector("#home-button")
let workButton = document.querySelector("#work-button")
let aboutButton = document.querySelector("#about-button")
let contactButton = document.querySelector("#contact-button")
let landingSection = document.querySelector("#landing-section")
let workSection = document.querySelector("#work-section")
let aboutSection = document.querySelector("#about-section")
let contactSection = document.querySelector("#contact-section")
let arrowLeft = document.querySelector("#arrow-left")
let arrowRight = document.querySelector("#arrow-right")
let logo = document.querySelector("#logo-container")



homeButton.addEventListener("click", function(){
    workSection.style.display = "none"
    landingSection.style.display = "block"
    aboutSection.style.display = "none"
    contactSection.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    document.querySelector("#mobile-container").style.display = "none"

})

workButton.addEventListener("click", function(){
    workSection.style.display = "block"
    workMenu.style.display = "block"
    landingSection.style.display = "none"
    aboutSection.style.display = "none"
    contactSection.style.display = "none"
    carousel.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    document.querySelector("#mobile-container").style.display = "none"
    workTitle.innerText = "Work"
    musicSection.style.display = "none"
})

aboutButton.addEventListener("click", function(){
    aboutSection.style.display = "block"
    workSection.style.display = "none"
    landingSection.style.display = "none"
    contactSection.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    document.querySelector("#mobile-container").style.display = "none"
})

contactButton.addEventListener("click", function(){
    console.log("Contact button clicked");
    contactSection.style.display = "block"
    aboutSection.style.display = "none"
    workSection.style.display = "none"
    landingSection.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    document.querySelector("#mobile-container").style.display = "none"
})

logo.addEventListener("click", function(){
    landingSection.style.display = "block"
    contactSection.style.display = "none"
    aboutSection.style.display = "none"
    workSection.style.display = "none"
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none"
    document.querySelector("#mobile-container").style.display = "none"
})

window.onload = function(){
    arrowLeft.style.display = "none"
    arrowRight.style.display = "none" 
}

let webAppLink = document.getElementById("web-app-link")


webAppLink.addEventListener("click", function(){
    workMenu.style.display = "none"
    carousel.style.display = "block"
    arrowLeft.style.display = "block"
    arrowRight.style.display = "block"
    workTitle.innerText = "Websites/Apps"
})



//musicLink.addEventListener("click", function(){
    musicSection.style.display = "block"
    workMenu.style.display = "none"
    workTitle.innerText = "Music"
//})