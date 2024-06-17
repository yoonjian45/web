$('.navi ').mouseover(function(){
    $(this).find('.sub').stop().slideDown(300);
    $('.mbg').stop().slideDown(300);
});

$('.navi').mouseout(function(){
    $(this).find('.sub').stop().slideUp(300);
    $('.mbg').stop().slideUp(300);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : -300});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : -600});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : 0});
    $('.imgslide').delay(2000);
})