$('.navi > li').mouseover(function(){
    $(this).find('.sub').stop().slideDown(500)
});

$('.navi > li').mouseout(function(){
    $(this).find('.sub').stop().slideUp(500)
});