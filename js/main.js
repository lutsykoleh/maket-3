// Code for the burger menu
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("menu").classList.toggle("open");
    });
});

// Code for the slider "slick"
$(document).ready(function() {
    $('.slider__items').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: 'linear',
        swipeToSlide: true
    });
});

// Function for opening the "feedback" window
function openFeedbackForm() {
    var feedbackElement = document.getElementById('feedback');
    feedbackElement.style.opacity = '1';
    feedbackElement.style.visibility = 'visible';
}

// Function for closing the "feedback" window
function closeFeedbackForm() {
    var feedbackElement = document.getElementById('feedback');
    feedbackElement.style.opacity = '0';
    feedbackElement.style.visibility = 'hidden';
}


document.getElementById('open_feedback').addEventListener('click', openFeedbackForm);


document.querySelector('.feedback__close-btn').addEventListener('click', closeFeedbackForm);
