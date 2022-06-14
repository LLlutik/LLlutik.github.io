$(function () {
    $('.burger-menu').on('click',  function(){
        $('.nav-box').slideToggle();
      });

    $('.menu-close').on('click',  function(){
    $('.nav-box').hide();
    });

})