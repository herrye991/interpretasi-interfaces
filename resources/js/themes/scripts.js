
(function ($) {
    "use strict";

    /**
    * Search
    */
    $('.pfy-search-btn').on("click", function (){
		$('.benqu_header_search').addClass('active');
	});
	$('.close-btn').on("click", function (){
		$('.benqu_header_search').removeClass('active');
	});

    /**
    *Sticky Sidebar
    */
    if (typeof $.fn.theiaStickySidebar !== "undefined") {
		$(".benqu-sticky-wrap .benqu-sticky-item").theiaStickySidebar({
		  additionalMarginTop: 130,
		});
	  }

    // mobile menu start
    $('#pfy-mobile-menu').metisMenu();

    $('#pfy-mobile-menu .dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger_menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger_menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});

    /***
    *Dark Switch
    */
    window.onload = function () {
		// Dark
		const toggleSwitch = document.querySelector(
		  '.benqu-switch-box__input'
		);
		const currentTheme = localStorage.getItem("theme");
		if (currentTheme) {
		  document.documentElement.setAttribute("data-theme", currentTheme);
		  if (currentTheme === "dark") {
			toggleSwitch.checked = true;
		  }
		}
		function switchTheme(e) {
		  if (e.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
		  } else {
			document.documentElement.setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
		  }
		}
		if (toggleSwitch) {
		  toggleSwitch.addEventListener("change", switchTheme, false);
		}
	  };

    // sticky start
	var wind = $(window);
	var sticky = $('#stickyHeader');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 300) {
			sticky.removeClass('stickyHeader');
		} else {
			sticky.addClass('stickyHeader');
		}
	});
	// sticky end
    /**
    * Post Widget Slider
    */       
    $('.widget-post-slider-wrap').owlCarousel({
        items:1,
        loop:true,
        dots:true,
        autoplay:true,
        nav:false,
        animateOut: 'fadeOut',
        smartSpeed:1500,
    });

    /**
     * Post Slider
     */   
     function pfyPostSliderActive( $scope, $ ){     
        var $_this = $scope.find('.pfy-post-slider-wrap');

        var $currentID = '#'+$_this.attr('id'),
            $navs = $_this.data('navs'),
            $dots = $_this.data('dots'),
            $autoplay = $_this.data('autoplay');
            var pfy_post_slider = $( $currentID );
        pfy_post_slider.owlCarousel({
            items:1,
            loop:true,
            nav:$navs,
            dots:$dots,
            autoplay:$autoplay,
            autoplayTimeout:5000,
            smartSpeed:1000,
            animateOut: 'fadeOut',
            navText:["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
        })
    };
    
    $('.pfy-post-thumb-gall').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        nav:true,
        dots:false,
        animateOut: 'fadeOut',
        navText:["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
    });
    $('.breaking-headline-active').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        smartSpeed:1500,
        nav:false,
        autoplay:true,
        dots:false
    });

    /**
     * Post Grid Slider
     */   
     function pfyPostGridSliderActive( $scope, $ ){     
        var $_this = $scope.find('.pfy-post-grid-carousel');
        var $currentID = '#'+$_this.attr('id'),
            $navs = $_this.data('navs'),
            $dots = $_this.data('dots'),
            $autoplay = $_this.data('autoplay');
            var pfy_post_car = $( $currentID );
            pfy_post_car.owlCarousel({
            loop:true,
            nav:$navs,
            dots:$dots,
            autoplay:$autoplay,
            autoplayTimeout:4000,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                },
                1500:{
                    items:4
                },
                1600:{
                    items:5
                }
            }
        })
    };
    /**
     * Post Grid Slider Two
     */   
     function bnqPostGridSliderActive( $scope, $ ){     
        var $_this = $scope.find('.bnq-post-grid-carousel');
        var $currentID = '#'+$_this.attr('id'),
            $navs = $_this.data('navs'),
            $dots = $_this.data('dots'),
            $autoplay = $_this.data('autoplay');
            var pfy_post_car = $( $currentID );
            pfy_post_car.owlCarousel({
            loop:true,
            nav:$navs,
            dots:$dots,
            autoplay:$autoplay,
            autoplayTimeout:4000,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                },
                1500:{
                    items:4
                },
                1600:{
                    items:5
                }
            }
        })
    };


    function pfyPostTabActive( $scope, $ ){          
        const $tabsToDropdown = $(".tabs-to-dropdown");
        function generateDropdownMarkup(container) {
        const $navWrapper = container.find(".nav-wrapper");
        const $navPills = container.find(".nav-pills");
        const firstTextLink = $navPills.find("li:first-child a").text();
        const $items = $navPills.find("li");
        const markup = `
            <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                ${firstTextLink}
            </button>
            <ul class="dropdown-menu"  aria-labelledby="dropdownMenuButton1"> 
                ${generateDropdownLinksMarkup($items)}
            </ul>
            </div>
        `;
        $navWrapper.prepend(markup);
        }

        function generateDropdownLinksMarkup(items) {
        let markup = "";
        items.each(function () {
            const textLink = $(this).find("a").text();
            markup += `<a class="dropdown-item" href="#">${textLink}</a>`;
        });

        return markup;
        }

        function showDropdownHandler(e) {
        // works also
        //const $this = $(this);
        const $this = $(e.target);
        const $dropdownToggle = $this.find(".dropdown-toggle");
        const dropdownToggleText = $dropdownToggle.text().trim();
        const $dropdownMenuLinks = $this.find(".dropdown-menu a");
        const dNoneClass = "d-none";
        $dropdownMenuLinks.each(function () {
            const $this = $(this);
            if ($this.text() == dropdownToggleText) {
            $this.addClass(dNoneClass);
            } else {
            $this.removeClass(dNoneClass);
            }
        });
        }

        function clickHandler(e) {
        e.preventDefault();
        const $this = $(this);
        const index = $this.index();
        const text = $this.text();
        $this.closest(".dropdown").find(".dropdown-toggle").text(`${text}`);
        $this
            .closest($tabsToDropdown)
            .find(`.nav-pills li:eq(${index}) a`)
            .tab("show");
        }

        function shownTabsHandler(e) {
        // works also
        //const $this = $(this);
        const $this = $(e.target);
        const index = $this.parent().index();
        const $parent = $this.closest($tabsToDropdown);
        const $targetDropdownLink = $parent.find(".dropdown-menu a").eq(index);
        const targetDropdownLinkText = $targetDropdownLink.text();
        $parent.find(".dropdown-toggle").text(targetDropdownLinkText);
        }

        $tabsToDropdown.each(function () {
        const $this = $(this);
        const $pills = $this.find('a[data-toggle="pill"]');

        generateDropdownMarkup($this);

        const $dropdown = $this.find(".dropdown");
        const $dropdownLinks = $this.find(".dropdown-menu a");

        $dropdown.on("show.bs.dropdown", showDropdownHandler);
        $dropdownLinks.on("click", clickHandler);
        $pills.on("shown.bs.tab", shownTabsHandler);
        });

    }

    $('.pfy-video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        fixedContentPos: false
    });

    /**
     * Ajax Post Load More Button
     * @param {*} $scope 
     * @param {*} $ 
     */
    
    function pfyAjaxLoadmoreMasonryMasonry( $scope, $ ){
        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                percentPosition: true,
                resize: true
            });
        });


        // layout Masonry after each image loads
        containerBricks.imagesLoaded().progress( function() {
            containerBricks.masonry('layout');
        });
    }

    if($('.wow').length){
        var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true
        }
        );
        wow.init();
    }

    /**
     * Post List Carousel
     * @param {*} $scope 
     * @param {*} $ 
     */
    function pfyPostListActive($scope, $) {
		$('.post-list-carousel').slick({
			rows: 4,
			dots: false,
			speed: 1500,
			arrows: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
            autoplay:true,
            nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 799,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
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
				breakpoint: 599,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	}

    

    function cookiesClose() {
        var cookieBox = $(".bnq__cookie_area")
        var acceptBtn = $(".bnq__cookie_area .bnq__cookie_btn");

        var localValue = localStorage.getItem("button");

        if(localValue === "true") {
            cookieBox.css({
                "display": "none"
            });
        }

        acceptBtn.on("click", function(e) {
            cookieBox.addClass("bnq__remmove_cookies_area");
            localStorage.button = true;
            return false;
        })
    }
    
    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
	$(window).on('load', function() {
		if($(".bnq__cookie_area").length) {
            cookiesClose();
        }
	});
    /**
     * newsletter popup
     */
     function newsletterPopup() {
        var newsletter = $(".bnqu__popup_wrap");
        var newsletterClose = $(".newsletter-close-btn");

        var test = localStorage.input === 'true'? true: false;
        $(".show-message").prop('checked', test || false);

        var localValue = localStorage.getItem("input");

        //console.log(localValue);

        if(localValue === "true") {
            newsletter.css({
                "display": "none"
            });                
        }

        newsletter.addClass("active-newsletter-popup");

        newsletterClose.on("click", function(e) {
            newsletter.removeClass("active-newsletter-popup");
            return false;
        })

        $(".show-message").on('change', function() {
            localStorage.input = $(this).is(':checked');
        });
    }
    if($(".bnqu__popup_wrap").length) {

        setTimeout(function() {
            newsletterPopup();
        },"4000");
    }

    /* Masonry
    * ---------------------------------------------------- */ 

    /**
    Reading Progrees
    */
    
    function readingProgressBar(){
        if($('#pfy_reading_progress').length){
            let processScroll = () => {
                let docElem = document.documentElement, 
                docBody = document.body,
                scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
                    scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
                scrollPercent = scrollTop / scrollBottom * 100 + '%';
                
                // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);
                
                document.getElementById("pfy_reading_progress").style.setProperty("--scrollAmount", scrollPercent); 
            }
            
            document.addEventListener('scroll', processScroll);
        }
    }
    readingProgressBar();

    $(window).on("load", function () {
        $(".benqu_preloader").fadeOut(800);
    });

    $(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.back-top-btn').addClass('active');
		if (scrolled < 300) $('.back-top-btn').removeClass('active');
	});
	$('.back-top-btn').on('click', function() {
		$('html, body').animate(
			{
				scrollTop: '0'
			},
			1200
		);
	});

    function benquLoadMore($scope, $) {
        var $container = $scope.find('.benqu-post-grid-loadmore');
        if ($container.length > 0) {
           $container.on('click',function(event){
              event.preventDefault();

              var $that = $(this);
              var ajaxjsondata = $that.data('json_grid_meta');
              var benqu_json_data = Object (ajaxjsondata);

              var contentwrap = $scope.find('.grid-loadmore-content'), // item contentwrap
                 postperpage = parseInt(benqu_json_data.posts_per_page), // post per page number
                 showallposts = parseInt(benqu_json_data.total_post); // total posts count

                 var items = contentwrap.find('.pfy-grid-item'),
                 totalpostnumber = parseInt(items.length),
                 paged =  parseInt( totalpostnumber / postperpage ) + 1; // paged number

                 $.ajax({
                    url: benqu_ajax.ajax_url,
                    type: 'POST',
                    data: {
                       action: 'benqu_post_ajax_loading',
                       ajax_json_data: ajaxjsondata,
                       paged:paged
                    },
                    beforeSend: function(){

                       $('<i class="fa fa-spinner fa-spin" style="margin-left:10px"></i>').appendTo( "#benqu-post-grid-loadmore" ).fadeIn(100);
                    },
                    complete:function(){
                       $scope.find('.benqu-post-grid-loadmore .fa-spinner ').remove();
                    }
                 })

                 .done(function(data) {

                       var $pstitems = $(data);
                       $scope.find('.grid-loadmore-content').append( $pstitems );
                       var newLenght  = contentwrap.find('.pfy-grid-item').length;

                       if(showallposts <= newLenght){
                          $scope.find('.benqu-post-grid-loadmore').fadeOut(300,function(){
                             $scope.find('.benqu-post-grid-loadmore').remove();
                          });
                       }

                 })

                 .fail(function() {
                    $scope.find('.benqu-post-grid-loadmore').remove();
                 });

           });
     }


     }


     if ($(".ajax-scroll-post").length > 0) {
        var onScrollPagi = true;
        var current_post = 1;
        $(window).scroll(function () {

            if (!onScrollPagi) return;

            var bottomOffset = 1900; // the distance (in px) from the page bottom when you want to load more posts 

            if (current_post >= benqu_ajax.post_scroll_limit) {
                onScrollPagi = false;
                return;
            }

            if ($(document).scrollTop() > ($(document).height() - bottomOffset) && onScrollPagi == true) {
                let cat_ids = $('input#benqu-cat-ids').val();
                $.ajax({
                    url: benqu_ajax.ajax_url,
                    data: {
                        action: 'benqu_single_scroll_post',
                        current_post: current_post,
                        cat_ids
                    },
                    type: 'POST',
                    dataType: 'json',
                    beforeSend: function () {
                        onScrollPagi = false;
                    },
                    success: function (resp) {
                        if (resp.success) {
                            $('.ajax-scroll-post').append(resp.data);
                            current_post++;
                            onScrollPagi = true;
                        }
                    }
                });
            }
        });
    }

        
        

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/benqu-post-slider.default', pfyPostSliderActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/benqu-post-grid-carousel.default', pfyPostGridSliderActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/benqu-post-tabs.default', pfyPostTabActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/benqu-post-tabs-v2.default', pfyPostTabActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/benqu-post-masonry.default', pfyAjaxLoadmoreMasonryMasonry);
        elementorFrontend.hooks.addAction('frontend/element_ready/benqu-post-list-caro.default', pfyPostListActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/benqu-post-grid-carousel-v2.default', bnqPostGridSliderActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/benqu-post-ajax-loadmore-grid.default', benquLoadMore);
    });
})(jQuery);