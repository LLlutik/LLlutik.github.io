$(function () {

  
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });


  $(".product-slider__inner").slick({
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    // normal options...
    infinite: false,

    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    
    }, {

      breakpoint: 700,
      settings: "unslick" // destroys slick

    }]
  });

  $('input[type="file"], select').styler();
  
  $('.menu__btn').on('click',  function(){
    $('.menu__list').slideToggle();
  });

  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  var mixer = mixitup('.products__inner-box');

});