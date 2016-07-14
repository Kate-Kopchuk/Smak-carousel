$(document).on('ready', function() {
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });