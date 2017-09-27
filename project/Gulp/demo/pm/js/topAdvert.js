$(function() {
    $.get("http://api.test2.kaikeba.com/v2/content/ads?tag=banner_top_pic&getPop=true")
        .success(function(top){
            if(top.error_code == 0){
                var data = top.data[0]
                $('body').topAdvert({
                    imgSrc:data.pic,
                    aLinke:data.url,
                    bgcolor:'#' + data.bgcolor
                });
            }
          
    });
})
;(function ($) {
    $.fn.extend({
        "topAdvert": function (options) {
            //检测用户传进来的参数是否合法
            if (!isValid(options))
                return this;
            // var opts = $.extend({}, defaluts, options); 
            updatePop(options)

            $(".topAdvert").on("click", ".topAdvert-close", function() {
                $(".topAdvert").css('height','0');
            });

            return this;
        }
    });


    function updatePop (data) {
        var str = '<div class="topAdvert"><a class="topAdvert-link" href="/"><img class="ad-img" src="" alt="" width=1200></a><span class="topAdvert-close"><img src="/public/img/close_advert.png" alt=""></span></div> '
        $('body').prepend(str);
        $(".topAdvert .ad-img").attr("src", data.imgSrc);
        $(".topAdvert .topAdvert-link").attr("href", data.aLinke);
        $('.topAdvert').css({'background-color':data.bgcolor});
        
        setTimeout(function(){
             $('.topAdvert').css({'height':'100px'});
        }, 2000);

    }

    //私有方法，检测参数是否合法
    function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }
})(window.jQuery);

