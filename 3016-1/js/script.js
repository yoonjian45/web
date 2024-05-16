$('.navi > li').mouseover(function(){
    $(this).find('.sub').stop().slideDown(200)
});

$('.navi > li').mouseout(function(){
    $(this).find('.sub').stop().slideUp(200)
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.slidelist').animate({ marginLeft: -800 });
    $('.slidelist').delay(2000);
    $('.slidelist').animate({ marginLeft: -1600 });
    $('.slidelist').delay(2000);
    $('.slidelist').animate({ marginLeft: 0 });
    $('.slidelist').delay(2000);
})