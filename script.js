var close = document.getElementById("close");
var offerbar= document.getElementById("offerbar")

close.addEventListener("click",function() {
    offerbar.style.display="none"
    
})

var sidenav=document.getElementById("sidenav");
var menuicon=document.getElementById("menuicon");
var closenav=document.getElementById("closenav");

menuicon.addEventListener("click",function(){

    sidenav.style.left=0

})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

var image = document.querySelector(".slide__img img");
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");

var images = [
    "./images/slider.jpg",
    "./images/slider2.jpg",
    "./images/slider3.jpg"
];

var currentIndex = 0;

next.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    image.src = images[currentIndex];
});

previous.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    image.src = images[currentIndex];
});