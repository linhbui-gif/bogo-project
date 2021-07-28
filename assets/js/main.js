class OwlCarousel {
    constructor(carouseId) {
        this.carouseId = carouseId;
        this.loop = false;
        this.autoplay = false;
        this.autoplayTimeout = 4000;
        this.autoplayHoverPause = true;
        this.smartSpeed = 300;
        this.dots = false;
        this.nav = false;
        this.center = false;
        this.margin = 30;
        this.responsive = { 0: { items: 3 } };
    }
    init() {
        const carousel = $(this.carouseId).owlCarousel({
            responsive: this.responsive,
            loop: this.loop,
            autoplay: this.autoplay,
            autoplayTimeout: this.autoplayTimeout,
            autoplayHoverPause: this.autoplayHoverPause,
            smartSpeed: this.smartSpeed,
            dots: this.dots,
            nav: this.nav,
            center: this.center,
            margin: this.margin,

        });
    }
}

$("#target").click(function() {
    alert("Handler for .click() called.");
});

class Slick {
    constructor(slickId) {
        this.slickId = slickId;
        this.infinite = true;
        this.adaptiveHeight = false;
        this.Accessibility = false;
        this.dots = true;
        this.fade = false;
        this.focusOnSelect = false;
        this.pauseOnFocus = false;
        this.Swipe = false;
        this.touchMove = false;
        this.centerMode = false,
            this.vertical = false;
        this.arrows = true;
        this.mobileFirst = true;
        this.variableWidth = false;
        this.initialSlide = 0;
        this.rows = 1;
        this.slidesToShow = 1;
        this.slidesToScroll = 1;
        this.slidesPerRow = 1;
        this.slidesToScroll = 1;
        this.Speed = 300;
        this.autoplay = true,
            this.autoplaySpeed = 2000;
        this.appendDots = "";
        this.centerPadding = '50px';
        this.easing = "'linner'( or swing,_default )";
        this.cssEase = 'linear';
        this.prevArrow = '<button type="button" class="slick-prev"></button>'
        this.nextArrow = '<button type="button" class="slick-next"></button>',
            this.responsive = [
                { breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 1 } },
                { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 1 } }
            ];

    }
    init(inputObject) {
        for (const property in inputObject) {
            this[property] = inputObject[property];
        }
    }



    run() {
        const slick = $(this.slickId).slick({
            slickId: this.slickId,
            infinite: this.infinite,
            adaptiveHeight: this.adaptiveHeight,
            arrows: this.arrows,
            Accessibility: this.Accessibility,
            dots: this.dots,
            vertical: this.vertical,
            fade: this.fade,
            focusOnSelect: this.focusOnSelect,
            mobileFirst: this.mobileFirst,
            pauseOnFocus: this.pauseOnFocus,
            variableWidth: this.variableWidth,
            Swipe: this.Swipe,
            touchMove: this.touchMove,
            slidesToShow: this.slidesToShow,
            slidesToScroll: this.slidesToScroll,
            slidesToScroll: this.slidesToScroll,
            initialSlide: this.initialSlide,
            rows: this.rows,
            slidesPerRow: this.slidesPerRow,
            Speed: this.Speed,
            autoplaySpeed: this.autoplaySpeed,
            appendDots: this.appendDots,
            centerPadding: this.centerPadding,
            easing: this.easing,
            cssEase: this.cssEase,
            centerMode: this.centerMode,
            nextArrow: this.nextArrow,
            prevArrow: this.prevArrow,
            responsive: this.responsive,

        });
    }
}

/*-------------------------------------
    start slider setup 
-------------------------------------*/

const sliderSlick = new Slick("#slider-home");
sliderSlick.init({
    dots: true,
    fade: true,
    appendDots: '#dots-control-full-slider',
    dotsClass: 'dots',
    autoplay: true,
    autoplaySpeed: 8000,
    autoHeight: false,
    adaptiveHeight: true,
    mobileFirst: false,
    touch: false,
    cssEase: 'linear',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev fa fa-arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next fa fa-arrow-right"></button>',
});
sliderSlick.run();

/*-------------------------------------
    Slider animation full screen
-------------------------------------*/

$('#slider-home').on('afterChange', function(event, slick, currentSlide) {

    $('.slick-active .heading-title-big').removeClass('opacity-none');
    $('.slick-active .heading-title-big').addClass('animated fadeInDown');
    //
    $('.slick-active .description').removeClass('opacity-none');
    $('.slick-active .description').addClass('animated slideInUp');
    //
    $('.slick-active .desc-slide').removeClass('opacity-none');
    $('.slick-active .desc-slide').addClass('animated fadeInUp');
});

$('#slider-home').on('beforeChange', function(event, slick, currentSlide) {
    $('.slick-active .heading-title-big').addClass('opacity-none');
    $('.slick-active .heading-title-big').removeClass('animated fadeInDown');
    //
    $('.slick-active .description').addClass('opacity-none');
    $('.slick-active .description').removeClass('animated slideInUp');
    //
    $('.slick-active .desc-slide').addClass('opacity-none');
    $('.slick-active .desc-slide').removeClass('animated fadeInUp');
});


/*-------------------------------------
    end slider setup 
-------------------------------------*/

// mobile menu
// Carousel


// let loadProcessBar = {
//     init:  function(id) {
//         this.run(id);
//     },
//     run: function(id) {
//         window.onscroll = function() {
//             let progressBlock = document.querySelector(id);
//             if (progressBlock) {
//                 let scrollTop = document.documentElement.scrollTop;
//                 let offsetHeight = progressBlock.offsetHeight;
//                 let offsetTop = progressBlock.offsetTop ;
//                 let screenHeight = window.innerHeight;         
//                 if (scrollTop > (offsetTop - screenHeight)) {
//                     let progressBars = progressBlock.querySelectorAll('.row__progress');
//                     for (let idx1 = 0; idx1 < progressBars.length; idx1++) {
//                         let progressBar = progressBars[idx1];
//                         let progressWidth = progressBar.style.width;
//                         let percent = progressBar.dataset.percent;
//                         if (progressWidth != percent) {
//                             let width = 30;
//                             percent = parseInt(percent);
//                             let processInterval = setInterval(frame, 1);
//                             function frame() {
//                                 if (width >= percent) {
//                                     clearInterval(processInterval);
//                                 } else {
//                                     width++;
//                                     progressBar.style.width = width + "%";
//                                     progressBar.innerHTML = width  + "%";
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }

//         }
//     }
// }
// loadProcessBar.run('#skillProgressBar');
// let serviceCarousel = new OwlCarousel('#serviceList');
// serviceCarousel.loop = false;
// serviceCarousel.center = false;
// serviceCarousel.dots = true;
// serviceCarousel.autoplay = false;
// serviceCarousel.responsive = {0: {items: 1}, 450: {items: 2}, 768: {items: 3}, 992: {items: 4 }};
// serviceCarousel.init()


// Home Creative Carousel

let creativeCarousel = new OwlCarousel('#carousel-store');
creativeCarousel.dots = false;
creativeCarousel.autoplay = true;
creativeCarousel.center = false;
creativeCarousel.nav = false;
creativeCarousel.responsive = { 0: { items: 3 }, 768: { items: 6 }, 1200: { items: 7.5 } };
creativeCarousel.navigationText = ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    creativeCarousel.init();

// Home Customer Carousel

let customerCarousel = new OwlCarousel('#offer__box');
customerCarousel.nav = false;
customerCarousel.dots = false;
creativeCarousel.autoplay = true;
customerCarousel.center = false;
customerCarousel.responsive = { 0: { items: 2 }, 768: { items: 2 }, 1024: { items: 4 }, 1200: { items: 5 } };
customerCarousel.init();


// Modal Header Pop-up Iframe
$(".vpop").on('click', function(e) {
    e.preventDefault();
    $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();

    var srchref = '',
        autoplay = '',
        id = $(this).data('id');
    if ($(this).data('type') == 'vimeo') var srchref = "//player.vimeo.com/video/";
    else if ($(this).data('type') == 'youtube') var srchref = "https://www.youtube.com/embed/";

    if ($(this).data('autoplay') == true) autoplay = '?autoplay=1';

    $("#video-popup-iframe").attr('src', srchref + id + autoplay);

    $("#video-popup-iframe").on('load', function() {
        $("#video-popup-container").show();
    });
});

$("#video-popup-close, #video-popup-overlay").on('click', function(e) {
    $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
    $("#video-popup-iframe").attr('src', '');
});

// All Modal
// var modalOpen = {
//     init: function(modalId, objectId) {
//         this.run(modalId, objectId);
//     },
//     run: function(modalId, objectId) {
//         let objectTarget = document.querySelector(objectId);
//         let modalTarget = document.querySelector(modalId);

//         objectTarget.addEventListener('click', function() {
//             modalTarget.classList.toggle('active');
//         })
//     }
// }

// let mouseOverlay = {
//     init: function(id) {
//         this.run(id);
//     },
//     run: function(id) {
//         $(id).on('mousemove', function(event) {
//             let bodyWidth = $('body').width();
//             let bodyHeight = $('body').height();
//             let mouseX = event.pageX;
//             let mouseY = event.pageY;
//             $('.mouseoverlay').each(function() {
//                 let divW = $(this).width();
//                 let divH = $(this).height();
//                 let element = $(this);
//                 let positionTop = element.offset().top;
//                 let positionLeft = element.offset().left;
//                 let positionBottom = positionTop + divH;
//                 let positionRight = positionLeft + divW;
//                 console.log(positionTop)
//                 if (mouseX < positionRight && mouseX > positionLeft && mouseY > positionTop && mouseY < positionBottom) {
//                     return null;
//                 }

//                 if (mouseY > 0 && mouseY < positionTop) {
//                     element.removeClass('right bottom top left');
//                     element.addClass('top');
//                 }
//                 if (mouseY > positionTop + divH && mouseY < bodyHeight) {
//                     element.removeClass('right bottom top left');
//                     element.addClass('bottom');
//                 }
//                 if ((mouseY > positionTop && mouseY < positionBottom) && (mouseX < bodyWidth && mouseX > positionRight)) {

//                     element.removeClass('right bottom top left');
//                     element.addClass('right');
//                 }
//                 if ((mouseY > positionTop && mouseY < positionBottom) && (mouseX > 0 && mouseX < positionLeft)) {
//                     element.removeClass('right bottom top left');
//                     element.addClass('left');
//                 }
//             })
//         });
//     }
// }
// mouseOverlay.init('.somework');
/**========== Menu dropdown =========== */
$('.nav-list .nav-item-main').click(function() {
    $('.overlay').addClass('show');
    $('.nav-menu .nav-list .nav-item-main .item-sub').addClass('show');
})
$('.nav-list .nav-item-main .nav-item-sub .sub_dropdown-lv2').removeClass('show')
$('.nav-list .nav-item-main .nav-item-sub').click(function() {

    $(this).find('.sub_dropdown-lv2').toggleClass('show');
})

$('.overlay').click(function() {
    $(this).removeClass('show');
    $('.nav-menu .nav-list .nav-item-main .item-sub').removeClass('show');
})

$('.toggler-menu-wrapper').click(function() {
    $('#mobile-menu').toggleClass('show')
    $('.overlay').toggleClass('shows')
})
$('.close-nav').click(function() {
    $('#mobile-menu').removeClass('show')
    $('.overlay').removeClass('shows')
})


$("#mobile-menu .item").on("click", function(event) {
    event.preventDefault();
    $(this).next('.submenu').toggleClass('active')
});