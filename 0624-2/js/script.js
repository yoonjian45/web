$('.navi > li').mouseover(function () {
    $(this).find('.sub').stop().slideDown(200)
});

$('.navi > li').mouseout(function () {
    $(this).find('.sub').stop().slideUp(200)
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