$('.navi li').mouseover(function(){
    $(this).find('.sub').stop().slideDown(300);
});

$('.navi li').mouseout(function(){
    $(this).find('.sub').stop().slideUp(300);
});