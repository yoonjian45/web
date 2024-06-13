$('.navi  li').mouseover(function(){
    $(this).find('.sub').stop().slideDown(200)
});

$('.navi  li').mouseout(function(){
    $(this).find('.sub').stop().slideUp(200)
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

$(function(){
    $('.tabmenu>li>a').click(function(){
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
