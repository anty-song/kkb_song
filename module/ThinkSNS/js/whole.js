$(document).ready(function(){

    //用户反馈
    $('.slideBox li').hover(function(){
        $(this).addClass('show').siblings().removeClass();
        $(".trigger p").hide().eq($(".slideBox li").index(this)).show();
    });

    //新手引导
    $('.ts-g_b').on('click','a',function(){
        $(this).addClass('sw').siblings().removeClass();
        $('.ts-g_a').hide().eq($(".ts-g_b a").index(this)).fadeIn(1000);
    });

    $('a.guide_op').click(function(){
        var op = $(this).attr('id');
        var index = $('.ts-g_b').find('a.sw').index() -1;
        if(op == 'guide_up'){
            if(index == 0) return false;

            index--;
            $('.ts-g_b a').removeClass();
            $('.ts-g_b a').eq(index).addClass('sw');
            $('.ts-g_a').hide().eq(index).fadeIn(1000);
        }else{
            if(index == $('.ts-g_b').find('a').length -1) return false;

            index++;
            $('.ts-g_b a').removeClass();
            $('.ts-g_b a').eq(index).addClass('sw');
            $('.ts-g_a').hide().eq(index).fadeIn(1000);
        }
    })
})