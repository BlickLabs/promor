function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/promor/index.html"!==window.location.pathname&&"/promor/"!==window.location.pathname||(e>30?siteNavbar.classList.add("nav-scroll"):siteNavbar.classList.remove("nav-scroll"))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}$('form[name="promor-contact-form"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico."},submitHandler:function(e){var o=$('form[name="promor-contact-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/promor/contact/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="promor-contact-form"]')[0].reset())})},invalidHandler:function(e,o){var n=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+n+" errores.")}});var homeClientsCarousel=$(".home-clients-carousel");homeClientsCarousel.owlCarousel({loop:!1,nav:!0,dots:!1,navText:['<img class="home-clients-carousel-navigation" src="/img/icons/icon-arrow-circle-left.png" />','<img class="home-clients-carousel-navigation" src="/img/icons/icon-arrow-circle-right.png" />'],margin:20,responsive:{0:{items:1},601:{items:3},761:{items:4}}}),homeClientsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-clients-carousel-controls'></div>")});var homeProductsCarousel=$(".home-products-carousel");homeProductsCarousel.owlCarousel({loop:!0,nav:!0,dots:!0,center:!1,navText:['<img class="home-products-carousel-navigation" src="/img/icons/icon-arrow-circle-left-green.png" />','<img class="home-products-carousel-navigation" src="/img/icons/icon-arrow-circle-right-green.png" />'],margin:60,autoWidth:!0,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:3}}}),homeProductsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-products-carousel-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".nav");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()});