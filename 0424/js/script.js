$('.navi > li').mouseover(function(){
    $(this).find(".sub").stop().slideDown(200)
});

$('.navi > li').mouseout(function(){
    $(this).find(".sub").stop().slideUp(200)
});