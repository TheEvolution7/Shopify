;(function($){
    "use strict";

    $(document).ready(function(){

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/  
        // $(document).on('click','.navbar-area .navbar-nav li.menu-item-has-children>a',function(e){
        //     e.preventDefault();
        // })
        var navOne = $('.nav-style-01-wrap'),
            navOneHeight = navOne.outerHeight();
        navOne.css('height', navOneHeight+'px');
        $('.navbar-area .navbar-nav li.menu-item-has-children').each(function(){
            $(this).append( "<i class='fa fa-angle-down'></i>" );
        })
        
        /*------------------------------------
            Product Details Slider
        ------------------------------------*/
        var productDetailSlider = $('.product-details-large-img-slider');
        var pThumbanilSlider = $('.product-details-small-img-slider');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0px',
                arrows: false,
                fade: true,
                asNavFor: '.product-details-small-img-slider'
              });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.product-details-large-img-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                centerPadding: '0px',
                vertical: true,
                arrows:false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-down"></i></div>',
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                        vertical:false
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                        vertical:false
                      }
                    },
                    {
                      breakpoint: 300,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        vertical:false
                      }
                    }
                  ]
              });
        }

         /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });

         /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

         /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });

                
        /* --------------------------------------------------
            Gallery 
        ---------------------------------------------------- */
        var $galleryFilterArea = $('.gallery-filter-area'),
            $galleryFilterMenu = $('.gallery-filter-menu');
        /*Filter*/
        $galleryFilterMenu.on( 'click', 'button, a', function() {
            var $this = $(this),
                $filterValue = $this.attr('data-filter');
            $galleryFilterMenu.find('button, a').removeClass('active');
            $this.addClass('active');
            $galleryFilterArea.isotope({ filter: $filterValue });
        });
        /*Grid*/
        $galleryFilterArea.each(function(){
            var $this = $(this),
                $galleryFilterItem = '.bloom-gallery-item';
            $this.imagesLoaded( function() {
                $this.isotope({
                    itemSelector: $galleryFilterItem,
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.gallery-sizer',
                    }
                });
            });
        });
        

        /*-----------------------------------
           Testimonial one carousel ***
        -----------------------------------*/
        var $testimonialOneCarousel = $('.testimonial-carousel-one');
        if ($testimonialOneCarousel.length > 0) {
            $testimonialOneCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: true,
                animateOut: 'zoomOut',
                animateIn: 'zoomIn',
                nav: true,
                navText:['<svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M263.926,265.995H224.26l12.272,8.678" transform="translate(-222.688 -265.495)" fill="none" stroke="#72706a" stroke-width="1"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.587)" fill="none" stroke="#72706a" stroke-width="1"/></svg>'],
                smartSpeed: 2000,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }

        /*---------------------------
           Team One carousel ***
        ---------------------------*/
        var $teamOneCarousel = $('.team-carousel-one');
        if ($teamOneCarousel.length > 0) {
            $teamOneCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                animateOut: 'zoomOut',
                animateIn: 'zoomIn',
                margin: 30,
                items: 3,
                dots: true,
                nav: true,
                navText:['<svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M263.926,265.995H224.26l12.272,8.678" transform="translate(-222.688 -265.495)" fill="none" stroke="#72706a" stroke-width="1"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.587)" fill="none" stroke="#72706a" stroke-width="1"/></svg>'],
                smartSpeed: 2000,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    },
                    1400: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }

        /*---------------------------
           Product carousel ***
        ---------------------------*/
        var $productCarousel = $('.product-carousel-one');
        if ($productCarousel.length > 0) {
            $productCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 16,
                dots: true,
                items: 4,
                nav: true,
                navText:['<svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M263.926,265.995H224.26l12.272,8.678" transform="translate(-222.688 -265.495)" fill="none" stroke="#72706a" stroke-width="1"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.587)" fill="none" stroke="#72706a" stroke-width="1"/></svg>'],
                smartSpeed: 2000,
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1920: {
                        items: 4
                    }
                }
            });
        }

        /*------------------------------------    
        latest-blog-slider ***
        --------------------------------------*/
        $('.latest-blog-slider-for-images').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.latest-blog-slider-nav-content',
            dots: true,
            arrows: false,
            infinite: true,
            focusOnSelect: true,
            prevArrow: '<a class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="41.239" height="9.586"><path data-name="Path 13896" d="M41.239.5H1.573l12.272 8.678" fill="none" stroke="#fff"/></svg></a>',
            nextArrow: '<a class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.586)" fill="none" stroke="#fff" stroke-width="1"/></svg></a>',
            rtl: true,
            // speed: 500,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                  }
                }
              ]
        });
 
        $('.latest-blog-slider-nav-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: '<a class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.587)" fill="none" stroke="#72706a" stroke-width="1"/></svg></a>',
            nextArrow: '<a class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M263.926,265.995H224.26l12.272,8.678" transform="translate(-222.688 -265.495)" fill="none" stroke="#72706a" stroke-width="1"/></svg></a>',
            draggable: false,
            fade: true,
            asNavFor: '.latest-blog-slider-for-images',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                  }
                }
              ]
        });


        /*----------------------
            Slider active
        -----------------------*/
        $('.slider-one-active').slick({
            dots: true,
            autoplay: false,
            infinite: true,
            autoplaySpeed: 10000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.587)" fill="none" stroke="#72706a" stroke-width="1"/></svg></a>',
            nextArrow: '<a class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M263.926,265.995H224.26l12.272,8.678" transform="translate(-222.688 -265.495)" fill="none" stroke="#72706a" stroke-width="1"/></svg></a>',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        }).on('afterChange', function(){
            new WOW().init();
        });

        /*----------------------
            Slider Two active
        -----------------------*/
        $('.slider-two-active').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.slider-two-pagination .count').text('0'+i);
            $('.slider-two-pagination .total').text('0' + slick.slideCount);

            
            // $('.slider-three-pagination-2 .count').text('0'+i);
            // $('.slider-three-pagination-2 .total').text('/0' + slick.slideCount);
            new WOW().init();
        }).slick({
            dots: true,
            appendDots: '.slider-two-pagination',
            infinite: true,
            autoplay: false,
            autoplaySpeed: 10000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // prevArrow: '<a class="slick-prev">&rharu;</a>',
            // nextArrow: '<a class="slick-next">&rhard;</a>',
            prevArrow: '<a class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.586)" fill="none" stroke="#fff" stroke-width="1"/></svg></a>',
            nextArrow: '<a class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="41.239" height="9.586"><path data-name="Path 13896" d="M41.239.5H1.573l12.272 8.678" fill="none" stroke="#fff"/></svg></a>',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
            ]
        });

        
        /*----------------------
            Slider Three active
        -----------------------*/
        $('.slider-three-active').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.slider-two-pagination .count').text('0'+i);
            $('.slider-two-pagination .total').text('0' + slick.slideCount);

            $('.slider-three-pagination-2 .count').text('0'+i);
            $('.slider-three-pagination-2 .total').text('/0' + slick.slideCount);
            new WOW().init();
        }).slick({
            dots: true,
            arrows: false,
            appendDots: '.slider-two-pagination',
            infinite: true,
            autoplay: false,
            autoplaySpeed: 10000,
            speed: 500,
            asNavFor: '.slider-3-image-slide-active',
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.587)" fill="none" stroke="#72706a" stroke-width="1"/></svg></a>',
            nextArrow: '<a class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M263.926,265.995H224.26l12.272,8.678" transform="translate(-222.688 -265.495)" fill="none" stroke="#72706a" stroke-width="1"/></svg></a>',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
                }
              }
            ]
        });

        $('.slider-3-image-slide-active').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            centerMode: false,
            centerPadding: '0px',
            asNavFor: '.slider-three-active',
            dots: false,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '<a class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="41.238" height="9.586" viewBox="0 0 41.238 9.586"><path d="M224.26,274.672h39.665l-12.272-8.678" transform="translate(-224.26 -265.586)" fill="none" stroke="#fff" stroke-width="1"/></svg></a>',
            nextArrow: '<a class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="41.239" height="9.586"><path data-name="Path 13896" d="M41.239.5H1.573l12.272 8.678" fill="none" stroke="#fff"/></svg></a>'
        });


          /*----------------------
            Slider Four active
        -----------------------*/
        $('.slider-four-active').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.slider-two-pagination .count').text('0'+i);
            $('.slider-two-pagination .total').text('0' + slick.slideCount);

            // $('.slider-three-pagination-2 .count').text('0'+i);
            // $('.slider-three-pagination-2 .total').text('/0' + slick.slideCount);
            new WOW().init();
        }).slick({
            dots: true,
            arrows: true,
            appendDots: '.slider-two-pagination',
            infinite: true,
            autoplay: false,
            autoplaySpeed: 10000,
            speed: 500,
            // asNavFor: '.slider-3-image-slide-active',
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><img src="assets/arrow-right-misti.svg" alt="Arrow Icon"></a>',
            nextArrow: '<a class="slick-next"><img src="assets/arrow-left-misti.svg" alt="Arrow Icon"></a>',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
            ]
        });
        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','#search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });


         /*-------------------------
            Video player activation
        -------------------------*/
        $('.video-play-bloom').rVideoPlayer({
            autoplay: false
            });

        /*----------------------
            Light Case
        -----------------------*/
        $('a[data-rel^=lightcase]').lightcase({
            transition: 'scrollHorizontal',
            swipe: true,
            maxWidth: 1170,
            maxHeight: 600,
            slideshow: true
        });

        
        /*----------------------------
            Header Mini Cart
        ------------------------------ */
        function sidebarNav() {
            var navbarTrigger = $('.header-navbar-active, .add-to-cart'),
                endTrigger = $('.mini-cart-close'),
                container = $('.mini-cart-wrapper');
          
            navbarTrigger.on('click', function(e) {
                e.preventDefault();
                container.addClass('inside');
                bodyOvrelay.addClass('active');
            });
            
            endTrigger.on('click', function(e) {
                container.removeClass('inside');
                bodyOvrelay.removeClass('active');
            });
            
            $('.body-overlay').on('click', function() {
                container.removeClass('inside');
                bodyOvrelay.removeClass('active');
            });
          };
          sidebarNav();


        /*----------------------------
            Quantity plus minus
        ------------------------------ */
          $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
          $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
          $(".qtybutton").on("click", function() {
              var $button = $(this);
              var oldValue = $button.parent().find("input").val();
              if ($button.text() == "+") {
                  var newVal = parseFloat(oldValue) + 1;
              } 
              else {
                  // Don't allow decrementing below zero
                  if (oldValue > 1) {
                      var newVal = parseFloat(oldValue) - 1;
                  } 
                  else {
                      newVal = 1;
                  }
              }
              $button.parent().find("input").val(newVal);
          });

          
        /* ---------------------------------------------------------
            datepicker
        --------------------------------------------------------- */
        $('.bloom-calender .input-group.date').datepicker();


        /* ---------------------------------------------------------
            Price Slider
        --------------------------------------------------------- */
        $( "#slider-range" ).slider({
            range: true,
            min: 50,
            max: 2000,
            values: [ 50, 999 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) ); 

        /* ---------------------------------------------------------
            Current Year Copyright area
        --------------------------------------------------------- */
        $(".current-year").text((new Date).getFullYear())


    });


    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {
        
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }

       /*--------------------------
        sticky menu activation
       -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }

        lastScrollTop = st;
       
    });
           

    $(window).on('load',function(){

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

        /*---------------------
            Nice Select ***
        ----------------------*/
        $('.nice-select').niceSelect();

        /*---------------------
            Instafeed ***
        ----------------------*/
        $('.instafeed').each(function() {
            var $this = $(this),
                $id = $this.find('ul').attr('id'),
                $limit = $this.data('limit'),
                $resolution = $this.data('resolution');
            if($this.length) {
                var feed = new Instafeed({
                    get: 'user',
                    userId: 6835364575,
                    accessToken: '6835364575.1677ed0.532646f6c3f14bff9647346935389059',
                    target: $id,
                    resolution: $resolution,
                    limit: $limit,
                    template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
                });
                feed.run();
            }
        });

        /**-----------------------------
         *  Popup
         * ---------------------------*/

                 
        var bodyOvrelay =  $('#body-overlay');
        var popup_item = $('.popup-item');
        
        $(".floating-icon-info").on("click", function() {
            $(".info-popup").toggleClass("active");
            $(".location-popup").removeClass("active");
            $(".message-popup").removeClass("active");
        });
        $(".info-popup-content_close").on("click", function() {
            popup_item.removeClass('active');
            bodyOvrelay.removeClass('active');
            $(this)
                .parent()
                .parent()
                .removeClass("active");
        });


        $(".floating-icon-message").on("click", function() {
            $(".message-popup").toggleClass("active");
            $(".info-popup").removeClass("active");
            $(".location-popup").removeClass("active");
        });
        $(".message-popup-content_close").on("click", function() {
            popup_item.removeClass('active');
            bodyOvrelay.removeClass('active');
            $(this)
                .parent()
                .parent()
                .removeClass("active");
        });


        $(".floating-icon-location").on("click", function() { 
            $(".location-popup").toggleClass("active");
            $(".message-popup").removeClass("active");
            $(".info-popup").removeClass("active");
        });
        $(".location-popup-content_close").on("click", function() {
            popup_item.removeClass('active');
            bodyOvrelay.removeClass('active');
            $(this)
                .parent()
                .parent()
                .removeClass("active");
        });


        $(".floating-icon .floating-icon__is").on("click", function() {
            bodyOvrelay.addClass('active');
        });
        $('.body-overlay').on('click', function() {
            popup_item.removeClass('active');
            bodyOvrelay.removeClass('active');
        });


        var lastScrollTop = "";
        var floatingIcon = $("#service_info_item");
        $(window).on("scroll", function() {
            /*---------------------------------------
            sticky menu activation && Sticky Icon Bar
            -----------------------------------------*/
            var st = $(this).scrollTop();
            var mainMenuTop = $(".navbar-area");
            if ($(window).scrollTop() > 1000) {
                if (st > lastScrollTop) {
                    // hide sticky menu on scrolldown
                    mainMenuTop.removeClass("nav-fixed");
                } else {
                    // active sticky menu on scrollup
                    mainMenuTop.addClass("nav-fixed");
                }
            } else {
                mainMenuTop.removeClass("nav-fixed ");
            }
          
          	if ($(window).scrollTop() > $(window).height()) {
               $('.floating-icon').addClass("active")
            } else {
              $('.floating-icon').removeClass("active")
            }
    
    
            if ($(window).width() < 992) {
                if (st > lastScrollTop) {
                    // hide sticky menu on scrolldown
                    showFloatingIcon();
                } else {
                    // active sticky menu on scrollup
                    hideFloatingIcon();
                }
            }
            lastScrollTop = st;
            
            var ScrollTop = $('.back-to-top');
            if ($(window).scrollTop() > 1000) {
                ScrollTop.fadeIn(1000);
            } else {
                ScrollTop.fadeOut(1000);
            }
        });
    
        $(window).on("resize", function(e) {
            e.preventDefault();
            //floatingIcon
            if ($(window).width() < 768) {
                hideFloatingIcon();
            } else {
                showFloatingIcon();
            }
        });
    
        function hideFloatingIcon() {
            //floatingIcon
            floatingIcon.hide();
        }
    
        function showFloatingIcon() {
            //floatingIcon
            floatingIcon.show();
        }



    });


})(jQuery);
