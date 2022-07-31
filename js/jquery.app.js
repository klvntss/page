/*  Theme Name: Coryi - Responsive Landing page template
    Author: Kelvin Tan
    Version: 1.0.0
    Created: April 2018
    File Description:Main JS file of the template
*/
;(function($) {

    'use strict';
 
   

    /*---------------------------------------------------
                   Navbar Toggler Close
    ---------------------------------------------------- */

    function initNavbarToggler() {
        $('.navbar-nav li a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

    }
   
    /*---------------------------------------------------
                   Collapse
    ---------------------------------------------------- */
    function initCollapse() {
    $('.collapse.show').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
              .on('show.bs.collapse', function (a) {
                  $(a.target).prev('.panel-heading').addClass('active');
              })
              .on('hide.bs.collapse', function (a) {
                  $(a.target).prev('.panel-heading').removeClass('active');
              });
    }
    /*---------------------------------------------------
                   slidersInitKenBurn
    ---------------------------------------------------- */
function slidersInitKenBurn() {
			$(".fullscreen_slider").revolution({
				sliderType: $(".fullscreen_slider").attr('data-type') ? $(".fullscreen_slider").data('type') : "standart",
				sliderLayout:"fullscreen",
				delay:6000,
				fullScreenOffsetContainer: $(".rev_slider").attr('data-offset') ? $(".rev_slider").data('offset') : '',
				navigation: {
					arrows:{
						style: 'white-arrows',
						enable: $(".fullscreen_slider").attr('data-arrows') ? $(".fullscreen_slider").data('arrows') : true,
						hide_onleave:false,
					},

					bullets:{
						enable: $(".fullscreen_slider").attr('data-arrows') ? $(".fullscreen_slider").data('bullets') : false,
						style:"side-bullets",
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						hide_under:0,
						hide_over:9999,
						direction:"vertical",
						space:0,
						tmp:'<span class="nav-bullet"></span>',        
						h_align:"right",
						v_align:"center",
						h_offset:30,
						v_offset:0
					}	
				},
				forceFullWidth:"off",
				fullWidth:"off",
				disableProgressBar:"on",
				gridwidth: 1200,
				gridheight: 960,
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,25,47,48,49,50,51,55],					
				},
			});

			$(".fullwidth_slider").revolution({
				sliderType: $(".fullwidth_slider").attr('data-type') ? $(".fullwidth_slider").data('type') : "standart",
				sliderLayout:"fullwidth",
				delay:9000,
				navigation: {
					arrows:{
						style: 'white-arrows',
						enable: $(".fullwidth_slider").attr('data-arrows') ? $(".fullwidth_slider").data('arrows') : true,
						hide_onmobile:true,
					}				
				},			
				gridwidth: $(".fullwidth_slider").attr('data-width') ? $(".fullwidth_slider").data('width') : 1920,
				gridheight: $(".fullwidth_slider").attr('data-height') ? $(".fullwidth_slider").data('height') : 860,
				disableProgressBar:"on",
			});

			var i = $(".slick-carousel");

            i.each(function() {
                var e = $(this),
                    a = e.find(".carousel-items");
                a.slick({
                    focusOnSelect: !0,
                    speed: e.hasAttr("data-speed") ? e.data("speed") : 600,
                    slidesToShow: e.hasAttr("data-items-desktop") ? e.data("items-desktop") : 4,
                    arrows: e.hasAttr("data-arrows") ? e.data("arrows") : !0,
                    appendArrows: e, 
                    dots: e.hasAttr("data-dots") ? e.data("dots") : !0,
                    infinite: e.hasAttr("data-infinite") ? e.data("infinite") : !1,
                    slidesToScroll: e.hasAttr("data-items-to-slide") ? e.data("items-to-slide") : 1,
                    initialSlide: e.hasAttr("data-start") ? e.data("start") : 0,
                    asNavFor: e.hasAttr("data-as-nav-for") ? e.data("as-nav-for") : "",
                    centerMode: e.hasAttr("data-center-mode") ? e.data("center-mode") : "",
                    fade: e.hasAttr("data-fade") ? e.data("fade") : false,
                    easing: e.hasAttr("data-easing") ? e.data("easing") : "linear",
                    responsive: [
                        {
                            breakpoint: e.hasAttr("data-breakpoint") ? e.data("breakpoint") : 992,
                            settings: {
						        slidesToShow: 2,
						        slidesToScroll: 2,
						    }
                        },

                        {
                            breakpoint: e.hasAttr("data-breakpoint") ? e.data("breakpoint") : 600,
                            settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						    }
                        }
                    ]
                })
            })
		}


    /*---------------------------------------------------
                    Index Slider 
    ----------------------------------------------------*/
    function initSlider() {
        $('.silder-carousel').owlCarousel({
            loop: true,
            navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            //animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,

            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
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
    /*---------------------------------------------------
                    clients Slider
    ----------------------------------------------------*/
    function initClientSlider() {
        $("#clients-slider").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000, //Set AutoPlay to 1 seconds
            nav: false,
            margin: 10,
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                960: {
                    items: 8
                },
                1200: {
                    items: 10
                }
            }
        });
    }
	
	  /*---------------------------------------------------
            Portfolio Filter
    ----------------------------------------------------*/

    function initPortfolio() {
        var Container = $('.container');
        Container.imagesLoaded(function() {
            var portfolio = $('.portfolio-menu');
            portfolio.on('click', 'button', function() {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.portfolio-items').isotope({
                itemSelector: '.grid-item'
            });

        });
    }
	
    /*---------------------------------------------------
                    Contact form 
    ----------------------------------------------------*/
    function initContactForm() {

        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function(response) {
                    console.log('success');
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#name').val('');
                    $('#email').val('');
                    $('#subject').val('');
                    $('#message').val('');
                })
                .fail(function(data) {

                    console.log('error');
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });

        });

    }
	
	
    function initMagnificPopup() {
		
    /* ==============================================
     Magnific pop-up
     =============================================== */

    // portfolio-pop up

    $('.popup-img').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true
        }

        //image: {
        //	verticalFit: true
        //}
    });

    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


	$('.popup-content-modal').magnificPopup({
		type: 'ajax',
		modal: true,
		//type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
		
	});


	$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
			$('main').html();
		
		});
		
    
    $('.popup-content').magnificPopup({

		type: 'ajax',
		modal: false,
		//type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',


		preloader: false,
		
		midClick: true,

		mainClass: 'my-mfp-slide-bottom'

		
        });
        
	}

    /*---------------------------------------------------
                Testimonial Carousel
    ----------------------------------------------------*/
    function initTestimonial() {
        $('.testi-carousel').owlCarousel({
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
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

   


   
    

    function initLoading() {

	InitWaypointAnimations();
	
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
			
        } else {
            $('.navbar').removeClass('active');
        }
    });

		
//  $('.fade-in-right').css('opacity', 0);
// 		$('.fade-in-right').waypoint(function() {
// 			$('.fade-in-right').addClass('fadeInRight');
// 		}, { offset: '70%' });
		
// 		$('.fade-in-left').css('opacity', 0);
// 		$('.fade-in-left').waypoint(function() {
// 			$('.fade-in-left').addClass('fadeInLeft');
// 		}, { offset: '70%' });
		
// 		$('.fade-in-up').css('opacity', 0);
// 		$('.fade-in-up').waypoint(function() {
// 			$('.fade-in-up').addClass('fadeInUp');
// 		}, { offset: '70%' });
		
// 		$('.fade-in-up').css('opacity', 0);
// 		$('.fade-in-up').waypoint(function() {
// 			$('.fade-in-up').addClass('fadeInUp');
// 		}, { offset: '70%' });
		
//         $('#dismiss, .overlay').on('click', function () {
           
//            $('#sidebar').removeClass('active');
//            $('.overlay').fadeOut();
//         });

//         $('.sidebarCollapse').on('click', function () {
//             console.log("test");
//             $('#sidebar').addClass('active');
//             $('.overlay').fadeIn();
//             $('.collapse.in').toggleClass('in');
//             $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//         });
        
   

        $('.btn-load').on('click', function() {
            var $this = $(this);
            var loadingText = '<i class="fa fa-circle-o-notch fa-spin text-custom"></i> sending...';
            if ($(this).html() !== loadingText) {
                $this.data('original-text', $(this).html());
                $this.html(loadingText);
            }
            setTimeout(function() {
                $this.html($this.data('original-text'));
            }, 2000);
        });

    }
    /*---------------------------------------------------
                   Scroll 
    ---------------------------------------------------- */

    function initSmoothLink() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }


	

    /*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/

    function initPreloader() {
         $(window).on('load', function() {
            $('.site-preloader').slideDown(1100);
         });

	setTimeout(function(){
		$('body').addClass('loaded');
		
		}, 3000);
    }

    function init() {

        initNavbarToggler();
        initClientSlider();
        initContactForm();
        initTestimonial()
        initPreloader();
        initSlider();  
        initLoading();
		initMagnificPopup();
        initSmoothLink();
        initCollapse();
		initPortfolio();
	
    }

		
    
    init();

})(jQuery)