$(document).ready(function(){
    var time = function(){

        var aim_num;
        var active_num = $('.banner-list li.active').attr('num');
        var last_num = $('.banner-list li:last-child').attr('num');

        if(active_num == last_num) {
            aim_num = 1;
        }else {
            aim_num = parseInt(active_num) + 1;
        }
        show_img(aim_num);
    }
    var slideTime = setInterval(time,3000);

    function show_img(number) {
        $('.point li.active').removeClass('active');
        $('.point li[num='+number+']').addClass('active');
        $('.banner-list li.active').fadeOut(1000).removeClass('active');
        $('.banner-list li[num='+number+']').fadeIn(1000).addClass('active');
    }

    $('.point li').click(function(){
        var click_num = $(this).attr('num');

        $('.point li.active').removeClass('active');
        $(this).addClass('active');
        $('.banner-list li.active').fadeOut(1000).removeClass('active');
        $('.banner-list li[num='+click_num+']').fadeIn(1000).addClass('active');

        clearTimeout(slideTime);
        slideTime = setInterval(time,3000);
    });
});