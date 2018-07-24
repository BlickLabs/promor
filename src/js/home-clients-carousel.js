var homeClientsCarousel = $('.home-clients-carousel');

homeClientsCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: false,
  navText: ['<img class="home-clients-carousel-navigation" src="/img/icons/icon-arrow-circle-left.png" />', '<img class="home-clients-carousel-navigation" src="/img/icons/icon-arrow-circle-right.png" />'],
  margin: 20,
  responsive:{
    0:{
      items:1
    },
    601:{
      items: 3
    },
    761: {
      items: 4
    }
  }
});

homeClientsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-clients-carousel-controls'></div>");
});
