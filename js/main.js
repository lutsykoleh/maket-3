// Код для бургер-меню
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    });
});

// Код для слайдера "slick"
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

// Код для валідації форми
function validateForm() {
    // Отримуємо посилання на імпути для імені, номера телефону і адреси електронної пошти
    var nameInput = document.querySelector('.feedback__form-name');
    var telInput = document.querySelector('.feedback__form-tel');
    var emailInput = document.querySelector('.feedback__form-email');

    // Перевірка, чи ім'я не порожнє
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        nameInput.setAttribute('placeholder', 'Поле обов\'язкове для заповнення');
    } else {
        nameInput.classList.remove('error');
        nameInput.removeAttribute('placeholder');
    }

    // Перевірка, чи номер телефону не порожній
    if (telInput.value.trim() === '') {
        telInput.classList.add('error');
        telInput.setAttribute('placeholder', 'Поле обов\'язкове для заповнення');
    } else {
        telInput.classList.remove('error');
        telInput.removeAttribute('placeholder');
    }

    // Перевірка, чи адреса електронної пошти не порожня
    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error');
        emailInput.setAttribute('placeholder', 'Поле обов\'язкове для заповнення');
    } else {
        emailInput.classList.remove('error');
        emailInput.removeAttribute('placeholder');
    }

    // Перевірка, чи всі поля валідні перед виконанням подальших дій (наприклад, закриття форми)
    if (!nameInput.classList.contains('error') && !telInput.classList.contains('error') && !emailInput.classList.contains('error')) {
        closeFeedbackForm(); // Виконати дії при успішній валідації (наприклад, закриття форми)
    }
}

// Функція для відкриття вікна "feedback"
function openFeedbackForm() {
    var feedbackElement = document.getElementById('feedback');
    feedbackElement.style.opacity = '1';
    feedbackElement.style.visibility = 'visible';
}

// Функція для закриття вікна "feedback"
function closeFeedbackForm() {
    var feedbackElement = document.getElementById('feedback');
    feedbackElement.style.opacity = '0';
    feedbackElement.style.visibility = 'hidden';
}


document.getElementById('open_feedback').addEventListener('click', openFeedbackForm);


document.querySelector('.feedback__close-btn').addEventListener('click', closeFeedbackForm);
