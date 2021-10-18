$(function(){
    $('.header__menu-btn').on('click',function(){
    $('.header__menu').slideToggle();
    
    });
    $('.menu-close').on('click',function(){
        $('.header__menu').hide();
    })
});

