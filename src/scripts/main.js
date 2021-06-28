'use strict';

jQuery(document).ready(function($) {
  "use strict";
  $('#customers-testimonials').owlCarousel( {
    loop: true,
    center: true,
    items: 3,
    margin: 30,
    autoplay: true,
    nav:true,
    autoplayTimeout: 8500,
    smartSpeed: 1000,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});
