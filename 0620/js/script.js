$('.navi li').mouseover(function(){
    $(this).find('.sub').stop().slideDown(300);
});

$('.navi li').mouseout(function(){
    $(this).find('.sub').stop().slideUp(300);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft : - 200 + 'vh'});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft : - 400 + 'vh'});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft : 0});
    $('.imgslide').delay(2000);
});