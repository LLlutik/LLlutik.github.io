$(function(){
    $('.header__menu-btn').on('click',function(){
    $('.header__menu').slideToggle();
    
    });
    $('.menu-close').on('click',function(){
        $('.header__menu').hide();
    });
    $('.btn-like').on('click',function(){
        $(this).addClass('red');
        $(this).removeClass('btn-like2')
        alert('Вы добавили данный товар в избранное!');
    });
    $.validator.addMethod('regex', function(value, elenent,regexp){
        let regExp = new RegExp(regexp);
        return regExp.test(value);
    }, 'Please check your input');
    
    $('form').validate({
        rules:{
            email:{
                required: true,
                regex : "[A-Za-z]{1,32}@"
            }
        },  
        messages: {
            email: 'Введите почту правильно'
        }
    })

});

