$(function(){
    var curr = 0;
    $("#isSelected li.trigger").each(function(i){
        $(this).click(function(){
            curr = i;
            $(".banner-list li").eq(i).fadeIn("slow").siblings("li").fadeOut("slow");
            $(this).addClass("imgSelected").siblings().removeClass("imgSelected");
        });
    });
    var timer = setInterval(function(){
        var go = (curr + 1) % 4;
        $("#isSelected li.trigger").eq(go).click();
    },2000);
    $("#banner").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
        var go = (curr + 1) % 4;
        $("#isSelected li.trigger").eq(go).click();
    },2000);
    });
});
