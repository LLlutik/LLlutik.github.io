$(function () {
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          arrows: false
        }
      }
    ]
  });



  $('.faq__item').on('click', function () {
    $(this).find('.faq__item-text').slideToggle();
    $(this).find('.faq__item-btn').toggleClass('up');
    return false;

  });


  $('.header__menu-btn').on('click', function () {
    $('.header__menu').slideToggle();
    // $('.header__call').slideToggle();

  });
  $('.menu-close').on('click', function () {
    $('.header__menu').hide();
    // $('.header__call').hide();
  });
});

