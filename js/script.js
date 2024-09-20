$(document).ready(function() {
    var $header = $('#mainHeader');
    $(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
        $header.addClass('scrolled');
    } else {
        $header.removeClass('scrolled');
    }
    });

    $('.menu-image').on('click', function() {
        $('.side-bar').addClass('visible');
        $('body').addClass('sidebar-open');
       
      });
      $('.close').on('click', function() {
        $('.side-bar').removeClass('visible');
        $('body').removeClass('sidebar-open');
      });


      
$('.product-cards').slick({
  
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
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
});
$('.slick-prev').addClass('inactive');
$('.product-cards').on('afterChange', function(event, slick, currentSlide) {
  if (currentSlide === 0) {
    $('.slick-prev').addClass('inactive');
  } else {
    $('.slick-prev').removeClass('inactive');
  }
});
$('.back-to-top').css('display','none');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 120) {
				$('.back-to-top').css('display','block');
			} else {
				$('.back-to-top').css('display','none');
			}
		});	
		$('.back-to-top').click(function () {
		    $('body,html').animate({
		        scrollTop: 0
		    }, 1000);
		    return false;
		});
});



