




//sec_2 슬라이드 이미지
// var slides = document.querySelector('.slides'),
//     slide = document.querySelectorAll('.slides li'),
//     currentIdx = 0,
//     slideCount = slide.length,
//     prevBtn = document.querySelector('.prev'),
//     slideWidth = 217,
//     slideMargin = 19,
//     nextBtn = document.querySelector('.next');

// slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

// function moveSlide(num) {
//     slides.style.left = -num * 236 + 'px';
//     currentIdx = num;
// }
// nextBtn.addEventListener('click', function () {
//     if (currentIdx < slideCount - 6) {
//         moveSlide(currentIdx + 1);
//         console.log(currentIdx);
//     } else {
//         moveSlide(0);
//     }

// });
// prevtBtn.addEventListener('click', function () {
//     if (currentIdx > 0) {
//         moveSlide(currentIdx - 1);
//     } else {
//         moveSlide(slideCount - 6);
//     }
// });

document.addEventListener(`DOMContentLoaded`, function () { 

    $('.main_menu li, .icon_box li').mouseenter(function () {
        $('.sub_menu_box').stop().slideDown();
    });

    $('.sub_menu_box').mouseleave(function(){
        $(this).stop().slideUp();
    });


    //sec_2 슬라이드 이미지
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    //상단이동버튼
    const topBtn = document.querySelector(`.top_btn`);

    window.addEventListener(`scroll`, function () { 
        const scrollTop = window.scrollY;

        if (scrollTop >= 600) {
            topBtn.classList.add(`scroll`)
        } else {
            topBtn.classList.remove(`scroll`)
        }
    });

    topBtn.addEventListener(`click`, () => { 
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        });
    });
});

