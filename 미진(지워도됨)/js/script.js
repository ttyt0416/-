$(function(){
    $('.mainNav').mouseover(function(){
        $('.subNav').stop().slideDown();
        $('.subNav').addClass('navBg');
        $('.subNav').css("display","block");
    });
});