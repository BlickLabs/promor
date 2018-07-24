var homeProductsCarousel = $('.home-products-carousel');

homeProductsCarousel.owlCarousel ({
  loop: true,
  nav: true,
  dots: true,
  center: false,
  navText: ['<img class="home-products-carousel-navigation" src="/img/icons/icon-arrow-circle-left-green.png" />', '<img class="home-products-carousel-navigation" src="/img/icons/icon-arrow-circle-right-green.png" />'],
  margin: 60,
  autoWidth: true,
  responsive:{
    0:{
      items: 1
    },
    700:{
      items: 1
    },
    880: {
      items: 1
    },
    1000:{
      items: 3
    }
  }
});

homeProductsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-products-carousel-controls'></div>");
});
