/*!

*/

(function() {
	"use strict";
	
	$(document).ready(function() {
		/* Mobile Menu */
		var $mobileMenu = $('.ob-main-menu').clone();
		$mobileMenu.appendTo('#ob-mmenu');

		$('#ob-mmenu > ul').removeClass('ob-main-menu');

		$('#ob-mmenu ul li').each(function() {
			$(this).removeClass('nav-item');
			if ( $(this).hasClass('active') ) {
				$(this).removeClass('active');
			}
        });

		$("#ob-mmenu").mmenu({
			extensions 	: [ "theme-black", "effect-panels-slide-100", "effect-listitems-slide", "effect-menu-slide", "border-offset" ],
			navbars		: [
			{
				content: ['<img src="img/logo-mmenu.png" />'],
				height: 3
			},
			{
				content: [
					'<a href="#"><span class="login-icon icon-wrapper"></span><span class="label">Login</span></a>',
					'<a href="#"><span class="cart-icon icon-wrapper"><span class="items-count">0</span></span><span class="label">Bounties</span></a>'
				]
			},
			]
		});

		var API = $('#ob-mmenu').data('mmenu');
		$("#mmenu-trigger").click(function() {
			API.open();
		});

		/* Not clickable item */
		$('.ob-main-menu li a.not-clickable').on('click tap', function(e) {
			e.preventDefault();
		});

		/* Sub Menu */
		$('.ob-main-menu > li.has-children').each(function() {
            var $this = $(this);
			var $thisLink = $this.find('> .nav-link');
						
			$thisLink.on('mouseenter tap', function(e){
				var $this = $(this);

				if ( e.type == 'tap' ) e.stopPropagation();

				if ( $this.parent('li').length > 0 ) {
					var $thisParent = $this.parent();
				} else {
					var $thisParent = $this;
				}

				$thisParent.addClass('item-hovered');
			});
			
			$this.on('mouseleave', function() {
				$this.removeClass('item-hovered');
			});
        });

		/* Cart Dropdown */
		$('.mini-nav > li.has-dropdown').each(function() {
            var $this = $(this);
			var $thisLink = $this.find('> .mini-cart-toggle');
						
			$thisLink.on('mouseenter tap', function(e){
				var $this = $(this);

				if ( e.type == 'tap' ) e.stopPropagation();

				if ( $this.parent('li').length > 0 ) {
					var $thisParent = $this.parent();
				} else {
					var $thisParent = $this;
				}

				$thisParent.addClass('item-hovered');
			});
			
			$this.on('mouseleave', function() {
				$this.removeClass('item-hovered');
			});
        });
		
		/* Sticky Menu on scroll */
		var fissa = 0;
		$(window).scroll(function(){
			if ( $(window).width() > (992) ) {
				if ( $(window).scrollTop() > (236) ) {
					if( fissa == 0 ){
						fissa=1;
						$('.ob-navbar').addClass('navbar-fixed-top').css({'opacity':0,'top':-46, 'bottom': 'auto'}).animate({'opacity':1,'top':0},300,function(){});
					}
				}

				if ( $(window).scrollTop() < (236) ) {
					if ( fissa==1 ){
						fissa = 0;
						$('.ob-main-menu').animate({'opacity':0,'top':-46},200,function(){
							$('.ob-navbar').removeClass('navbar-fixed-top').css({'top':'auto', 'bottom':0});
							$('.ob-main-menu').animate({'opacity':1,'top':0},300)
						});
					}
				}
			}
		});

		/* Swiper */
		var slideSwiper = new Swiper('#main-slider .swiper-container', {
			slidesPerView: 1,
			nextButton: '.next',
			prevButton: '.prev',
			centeredSlides: true,
			speed: 500,
			autoplay: 2500,
			autoplayDisableOnInteraction: false
		});
		var productSwiper = new Swiper('.products-slider .swiper-container', {
			nextButton: '.product-next-btn',
			prevButton: '.product-prev-btn',
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				1200: {
					slidesPerView: 4,
					spaceBetween: 30
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				360: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			}
		});
		var relatedProductSwiper = new Swiper('.related-products-slider .swiper-container', {
			nextButton: '.product-next-btn',
			prevButton: '.product-prev-btn',
			slidesPerView: 5,
			spaceBetween: 30,
			breakpoints: {
				1200: {
					slidesPerView: 5,
					spaceBetween: 30
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				360: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			}
		});
		var newsSwiper = new Swiper('.news-section .swiper-container', {
			nextButton: '.news-next-btn',
			prevButton: '.news-prev-btn',
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				1200: {
					slidesPerView: 4,
					spaceBetween: 30
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				360: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			}
		});

		/* Form Validation */
		$('#product-form').validator({focus:false}).on('submit',function(e){
			if (e.isDefaultPrevented()) {
				var $indicator = $(this).find('.has-error .custom-radio:not(.disabled) > .custom-control-indicator');
				$indicator.addClass('animated flash');
				setTimeout(function() {
					$indicator.removeClass('animated flash');
				},500);
			}
		});

    });
}(jQuery));
