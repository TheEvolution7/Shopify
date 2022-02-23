/*-----------------------------------------------------------------------------------

    Theme Name: Yumy
    Theme URI: http://
    Description: Restaurant & Food HTML Template
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function () {

    "use strict";


    /* ===============================  Navbar Menu  =============================== */

    var wind = $(window);

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });

    $('.navbar .search .icon').on('click', function () {
        $(".navbar .search .search-form").fadeIn();
    });

    $('.navbar .search .search-form .close').on('click', function () {
        $(".navbar .search .search-form").fadeOut();
    });

    $('.navbar .cart .icon').on('click', function () {
        $(".navbar .cart .cart-side").fadeIn();
    });

    $('.navbar .cart .cart-side .clos').on('click', function () {
        $(".navbar .cart .cart-side").fadeOut();
    });


    function noScroll() {
        window.scrollTo(0, 0);
    }

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });


    /* ===============================  Swiper slider  =============================== */


    var slidScrn = new Swiper('.slid-scrn .swiper-container', {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        effect: "fade",

        pagination: {
            el: '.slid-scrn .swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.slid-scrn .swiper-button-next',
            prevEl: '.slid-scrn .swiper-button-prev'
        },
    });


    /* ===============================  Var Background image  =============================== */

    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /* ===============================  slick Carousel  =============================== */

    $('.testimonials.creative .slic-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.testimonials .prev',
        nextArrow: '.testimonials .next',
        dots: true,
        autoplay: true
    });

    $('.testimonials.classic .slic-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.testimonials .prev',
        nextArrow: '.testimonials .next',
        dots: true,
        autoplay: true,
    });

    $('.feat-prod .prod-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.feat-prod .prev',
        nextArrow: '.feat-prod .next',
        dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.main-shop .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.main-shop .slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        verticalSwiping: true,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {

        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {

        //         }
        //     },
        //     {
        //         breakpoint: 580,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 380,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    });


    /* ===============================  parallaxie  =============================== */

    $('.parallaxie').parallaxie({
        speed: 0.5,
        size: "cover"
    });


    $(function () {
        $("#datepicker").datepicker();
    });

    $(function () {
        $("#tabs").tabs({
            collapsible: false
        });
    });

});


$(document).ready(function () {
    $('select:not(.ignore)').niceSelect();
    FastClick.attach(document.body);
});


/* ===============================  Wow Animation  =============================== */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();


// === window When Loading === //

$(window).on("load", function () {


    /* ===============================  SPLITTING TEXT  =============================== */

    Splitting();


    /* ===============================  thumparallax  =============================== */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 1,
        scale: 1.1
    });

    var imageDown = document.getElementsByClassName('thumparallax-down');
    new simpleParallax(imageDown, {
        orientation: 'down',
        delay: 1,
        scale: 1.1
    });


    /* ===============================  isotope Masonery  =============================== */

    $('.gallery').isotope({
        itemSelector: '.items',
        masonry: {
            // use element for option
            columnWidth: '.width2'
        }
    });

    var $gallery = $('.gallery').isotope();

    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* ===============================  contact validator  =============================== */

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


/* ===============================  Preloader page  =============================== */

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

// Pace.on('done', function () {
//     $('#preloader').addClass("isdone");
//     $('.loading-text').addClass("isdone");
// });

$(document).ready(function () {
    // setTimeout(() => {
    //     $('#preloader svg').fadeOut(600)
    // }, 2500);
    // setTimeout(() => {
    //     $('#preloader').addClass("isdone");
    // }, 500);
    if (  $('body').hasClass('home-page')) {
        setTimeout(() => {
            $('#preloader svg').fadeOut(600)
        }, 2500);
        setTimeout(() => {
            $('#preloader').addClass("isdone");
        }, 1800);
    }
    else {
        setTimeout(() => {
            $('#preloader').addClass("isdone");
        }, 0);
    }
})

var controller = new ScrollMagic.Controller();
	$('.js-text-parallax .fx-wrap').each(function (index, el) {
		var id = 'text-parallax-' + index;
		var $this = $(this);
		$this.attr('id', id);

		var offset = parseInt($this.attr('data-x'), 10) || 200;

		var tween = TweenMax.to('#' + id + ' .fx-target', 2, {
			x: offset
		});

		new ScrollMagic.Scene({
			triggerElement: '#' + id, triggerHook: 1,
			duration: window.innerHeight * 2
		}).setTween(tween)
		// .addIndicators()
		.addTo(controller);
	});


$(window).scroll(function() {
    var theta = $(window).scrollTop();
    $('.rotate-img').css({ transform: 'rotate(' + theta*0.5 + 'deg)' });
    // $('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
    
    $('.drag-ani').css({ transform: 'translateX(' + theta*0.5 + 'px)' });
});
/* ===============================  Scroll back to top  =============================== */

$(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })


});





/* ===============================  Mouse effect  =============================== */

function mousecursor() {
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
};

$(function () {
    mousecursor();
});

/* ===============================  fixed-slider  =============================== */

$(function () {

    "use strict";

    var slidHeight = $(".fixed-slider").outerHeight();

    $(".main-content").css({
        marginTop: slidHeight
    });

});

$(window).scroll(function () {

    /* ===============================  fade slideshow  =============================== */

    var scrolled = $(this).scrollTop();
    $('.fixed-slider .caption , .fixed-slider .capt .parlx').css({
        'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 600
    });

});


/* ===============================  filter range  =============================== */

$(function () {

    var lowerSlider = document.querySelector('#lower');
    var upperSlider = document.querySelector('#upper');

    document.querySelector('#two').value = upperSlider.value;
    document.querySelector('#one').value = lowerSlider.value;

    var lowerVal = parseInt(lowerSlider.value);
    var upperVal = parseInt(upperSlider.value);

    upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
            if (lowerVal == lowerSlider.min) {
                upperSlider.value = 4;
            }
        }
        document.querySelector('#two').value = this.value
    };

    lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
        }
        document.querySelector('#one').value = this.value
    };

})
