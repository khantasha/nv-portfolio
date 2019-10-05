//@codekit-prepend "./vendor/jQuery.min.js"
//@codekit-prepend "./vendor/scroll-to.js"
//@codekit-prepend "./vendor/fittext.js"
//@codekit-prepend "./vendor/imagesLoaded.js"
//@codekit-prepend "./vendor/isotope.js"
//@codekit-prepend "wow.min.js"
//@codekit-prepend "plugins.js"
//@codekit-prepend "jquery.visible.min.js"

jQuery(document).ready(function($) {

// init Isotope
  var $grid = $(".home-stories__grid").isotope({
    itemSelector: ".grid-item",
    //percentPosition: true,
    masonry: {
      columnWidth: 400
    }
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  // Inititalize FitText for homepage headline
  $("[data-format='fittext']").fitText(0.8);

	// Initialize Smoothscroll
  smoothScroll.init();

  // Initialize WOW
  new WOW().init();

	//Sliding Panel
	$('.js-panel-trigger,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  var element = document.getElementById("js-fadeInElement");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show');
        $(element).addClass('js-fade-element-hide');
      }
    }

    //Is In Viewport?
    $("video").each(function() {
      if ($(this).visible(true) && $(this).is(":visible")) {
        $(this)[0].play();
      } else {
        $(this)[0].pause();
      }
    });

  });

});
