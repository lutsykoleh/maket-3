document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click",function(){
        document.querySelector("header").classList.toggle("open")
    })
})

$(document).ready(function(){
    $('.slider__items').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        Infinity: true,
        fade:true,
        slidesToScroll: 1,
        slidesToShow: 1,
    })
});

