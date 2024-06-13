$('.navi > li').mouseover(function(){
    $(this).find('.sub').stop().slideDown(300);
});

$('.navi > li').mouseout(function(){
    $(this).find('.sub').stop().slideUp(300);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : -350});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : -700});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : 0});
    $('.imgslide').delay(2000);
});
$(function(){
    $('.tabmenu > li > a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    });
});