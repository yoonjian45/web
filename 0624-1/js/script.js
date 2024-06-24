$('.navi').mouseover(function(){
    $(this).find('.sub').stop().slideDown(300);
    $('.mbg').stop().slideDown(300);
});

$('.navi').mouseout(function(){
    $(this).find('.sub').stop().slideUp(300);
    $('.mbg').stop().slideUp(300);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : -350});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : -700});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : -0});
    $('.imgslide').delay(2000);
});

$(function(){
    $('.tabmenu > li > a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    return false;
    });
});

$('.notice li:first').click(function(){
    $('#modal').addClass('active');
});

$('.btn').click(function(){
    $('#modal').removeClass('active');
});
