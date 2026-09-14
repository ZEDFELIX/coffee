document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('#menu-btn');
    var navbar = document.querySelector('.navbar');
    var mainImage = document.querySelector('.main-home-image');

    if (menu && navbar) {
        menu.addEventListener('click', function () {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });

        menu.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                menu.classList.toggle('fa-times');
                navbar.classList.toggle('active');
            }
        });
    }

    window.addEventListener('scroll', function () {
        if (menu && navbar) {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    });

    document.querySelectorAll('.image-slider img').forEach(function (images) {
        images.addEventListener('click', function () {
            var src = images.getAttribute('src');
            if (mainImage && src) {
                mainImage.src = src;
            }
        });
    });

    if (typeof Swiper !== 'undefined') {
        new Swiper('.review-slider', {
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                }
            },
        });
    }
});
