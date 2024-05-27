$('.navi > li').mouseover(function(){
    $(this).find('.sub').stop().slideDown(300)
});

$('.navi > li').mouseout(function(){
    $(this).find('.sub').stop().slideUp(300)
});

$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.imgslide');
},3000)

$(function(){
    $('.tabmenu > li > a').click(function(){
        $(this).parent().addClass('actice').siblings().removeClass('actice');
    return false;
    });
});