var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
  };

if(browser.versions.mobile) {
    // location.replace('http://m.kaikeba.com');
}

try{
    var isFF = navigator.userAgent.toUpperCase().indexOf("FIREFOX") != -1?true:false;
} catch(e) {
    var isFF = false;
}
$(function() {
    var pagename = $("body").attr("pagename");
    var isIe8 = judgeie89();
    attachPie('applypie', isIe8);
    attachPlaceholder("input[placeholder],textarea[placeholder]", isIe8);
    /**
     * 搜索
     */

    $("body").bind("click", function (e, event) {
        if (e.target.className.indexOf("search") != -1) {
            return;
        }
        if ($(".search").val() !== '') {
            return;
        }
        var searchBox=$(".soform");
        if(searchBox.hasClass('spread')){
           return ;
        }
        searchBox.removeClass("open");
    });
    $(".icon-search").unbind("click").bind("click", function (event) {
        var searchBox=$(".soform");
        if(searchBox.hasClass('spread')){
           return ;
        }
        $(".soform").addClass("open");
        $("#soform .search").focus();
    });
    $("#soform .search").focus(function(){
        $("#soform").addClass('focus');
    }).blur(function(){
        $("#soform").removeClass('focus');
    });
    $("#soform form").on('submit', function(){
        if($('#keywords').val()=='') 
            $('#keywords').val($('#keywords').attr('pre-value'));
        zhuge.track('搜索', {'关键词': $('#keywords').val()});
    })
    //头部下拉
    $(".dropdown-nav").mouseenter(function() {
        $(this).addClass("show").find(".dropdown-item").show();
    }).mouseleave(function() {
        $(this).removeClass("show").find(".dropdown-item").hide();
    });
    $(".dropdown-nav").delegate("a", "click", function() {
        if ($(".dropdown-nav").hasClass('show')) {
            $(".dropdown-nav").removeClass("show").find(".dropdown-item").hide();
        }
    });

    // function toggle_page_header_class(){
    //     var top=$(window).scrollTop();
    //     if (top >1) {
    //         $('.page-header').addClass('dark');
    //     }else{
    //         $('.page-header').removeClass('dark')
    //     }
    // }
    
    $(window).scroll(function(){
       // toggle_page_header_class();
       start_school_counter();
    });

    // toggle_page_header_class();
    var school_counters = [], school_counters_started = false;

    function start_school_counter(){
        var top=$(window).scrollTop(),
            offset = 50,
            wH = $(window).height(),
            page = $('body').attr('pagename'), 
            params = { 'index': [500, 500], 'detail': [400, 400]};

        if (!params[page] ||  school_counters_started) {
            return;
        }
        if ($('.schools .n-card').offset() && $('.schools .n-card').offset().top + offset < (wH + top) && $('.schools .n-card').offset().top + offset > top) {
            $.each(school_counters, function(idx, item){
                school_counters[idx].start();
            })
            school_counters_started = true;
        }
    }

    function init_school_counter(){
        var options = {
          useEasing : true, 
          useGrouping : true, 
          separator : '', 
          decimal : '.', 
          prefix : '', 
          suffix : '' 
        };

        $('.schools .n-card .card-item > h2 span').each(function(index, item) {
            var $item = $(item),
                num = parseInt($item.html());
            var c = new CountUp(item, 0, num, 0, 2.5, options);
            school_counters.push(c);
        });
    }

    init_school_counter();
    $(window).scroll();

    /**
     * 推荐课程,梦想照进现实hover现实状态
     * @param
     * @param
     * @private
     */
    var mb = 10;
    $("body").delegate(".showItme", "mouseenter", function(event) {
        var thisObj = $(this),
            box = thisObj.addClass("show").find(".slidebox");
        spreadHeight = box.find(".p1").outerHeight(true) + box.find(".p2").outerHeight(true);
        thisObj.addClass("show").find(".slidebox").stop().animate({
            "height": spreadHeight + "px"
        }, 700, 'easeOutQuint');
        if (isIe8) {
            thisObj.find(".btn").stop().fadeTo(700, 1);
            thisObj.find(".course-title").stop().fadeTo(700, 0);
        } else {
            thisObj.find(".btn").stop().fadeTo(700, 1, 'easeOutQuint');
            thisObj.find(".course-title").stop().fadeTo(700, 0, 'easeOutQuint');
        }

    }).delegate(".showItme", "mouseleave", function(event) {
        var thisObj = $(this);
        thisObj.removeClass("show").find(".slidebox").stop().animate({
            "height": "31px"
        }, 700, 'easeOutQuint');
        if (isIe8) {
            thisObj.find(".btn").fadeTo(600, 0);
            thisObj.find(".course-title").stop().fadeTo(600, 1);
        } else {
            thisObj.find(".btn").stop().fadeTo(600, 0, 'easeOutQuint');
            thisObj.find(".course-title").stop().fadeTo(600, 1, 'easeOutQuint');
        }
    });

    // 讲师
    var tutorList = $('.tutor-intro .tutor-list'),
        switchTimer = null;
    tutorList.on('mouseenter', 'li', function(){
        if(isIe8) {
            $(this).animate({marginTop: -5}, 300);
        }
        switchTo($(this));
    }).on('mouseleave', 'li', function(){
        if(isIe8) {
            $(this).animate({marginTop: 0}, 300);
        }
        switchTo(null);
    });

    tutorList.on('mouseleave', function(){
        if(isIe8) {
            tutorList.find('li').animate({marginTop: 0}, 300);
        }
        switchTo(null);
    })

    function switchTo(li) {
        var mask = tutorList.find('.mask'),
            des = tutorList.find('.des');
        if(switchTimer) {
            clearTimeout(switchTimer);
        }
        switchTimer = setTimeout(function(){
            if(!li) {
                mask.fadeOut(300);
                des.fadeOut(300);
            } else {
                mask.fadeIn(400);
                des.fadeOut(400);
                li.find('.mask').stop().fadeOut(300);
                li.find('.des').stop().fadeIn(400);
            }
        }, 100);
    }

    // footer 关注popover
    $('.follow-entry').on('mouseenter', 'li', function() {
        var pop = $(this).find('.popover');
            // pops = $('.follow-entry .popover');
        // pops.fadeOut(200);
        pop.stop().fadeIn(300);
    }).on('mouseleave', 'li', function() {
        $(this).find('.popover').fadeOut(200);
    });

    // 首页视频

    /**
     * 侧导航hover现实状态
     * @param
     * @param
     * @private
     */
    $(".sidebar").delegate(".item","mouseenter",function(event){
        $(this).addClass("active");
    }).delegate(".item","mouseleave",function(event){
        $(this).removeClass("active");
    })
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(pagename=="index"||pagename=="list"){
            if(top>640){
                $(".sidebar").find(".backtop").css("visibility","visible");
            }else{
                $(".sidebar").find(".backtop").css("visibility","hidden");
            }
        }else if(pagename=="detail"){
             if(top>640){
                $(".fast-nav").find(".backtop").css("visibility","visible");
            }else{
                $(".fast-nav").find(".backtop").css("visibility","hidden");
            }
        }
    });
    $(window).trigger("scroll");
    if (pagename) {
        //首页和课程介绍页显示营销弹出框
        if(pagename=="index"||pagename=="detail"){
            setTimeout(function(){
                if (!$.cookie('consult_pop')) {
                    $(".consultAdvert").fadeIn();
                    $.cookie('consult_pop', 1, {
                        expires: 1/24
                    })
                }
            },5000);
        }
        switch (pagename) {
            case 'index':
                indexInit();
                break;
            case 'detail':
                detailInit();
                break;
            case 'errorpage':
                errorpageInit();
                break;
            case 'about':
                aboutInit();
                break;
        }
    }
});
/**
 * 判断是否为ie89
 * @param 返回true表示是
 */
function judgeie89() {
    //判断是不是ie8
    var temp = false;
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        if (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0) {
            temp = true;
        }
    }
    return temp;
}

function isIE9() {
    return navigator.userAgent.indexOf("MSIE 9.0")>0;
}
/**
 * 兼容ie 圆角等等
 * @param name 类名
 */
function attachPie(name, isIe8) {
    $('.' + name).each(function() {
        if (isIe8) {
            PIE.attach(this);
        }
    });
}
/**
 * 兼容ie placeholder
 * @param name 类名
 */
function attachPlaceholder(selector, isIe8) {
    $(selector).each(function() {
        if (isIe8) {
            $(this).placeholder();
        }
    });
}
//首页初始化
function indexInit() {
    // 触发诸葛事件
    try{
        zhuge.track("页面访问",{"页面名称":"首页","课程ID":""});
    } catch(e) {
        
    }
    //切换动画
    //头部banner动画回调
    var changeColorCallBack = function(oImgs, i) {
        var color = $(oImgs[i]).attr("bgColor");
        $("#market").stop(true,true).animate({
            "backgroundColor": color
        }, 500, "easeInQuart");
    }
    crousel("#banner", true, true, "click", true, true);
    // crousel("#platform", true, false, "hover", false, true);
    crousel("#recommend", true, true, "click", true, true);
    crousel('#dream-box-new', true, false, "hover", false, true, true);
    crousel('#sys-adv', true, false, "hover", false, true);

    $('.school-list .hs-list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.school-list .prev'),
        nextArrow: $('.school-list .next'),
        autoplay: true,
        autoplaySpeed: 4000,
        swipe: false
    });

    $('.tutor-list').on('init', function(event, slick) {
        $('.tutor-intro .list-wrap').removeClass('before-init');
    });

    $('.tutor-list').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.tutor-intro .prev'),
        nextArrow: $('.tutor-intro .next'),
        autoplay: true,
        autoplaySpeed: 4000,
        swipe: false
    });



    //菜单
    $(".nav-list .item").mouseenter(function() {
        var num = $(this).attr("tag");
        $(this).addClass("active");
        $(".category-box").removeClass("active").eq(num).addClass("active");
    }).mouseleave(function() {
        $(this).removeClass("active");
        $(".category-box").removeClass("active");
    });
    $(".category-box").mouseenter(function() {
        var category = $(this);
        var num = category.index();
        var nav = $(".nav-list .item").eq(num);
        if (!nav.hasClass("active")) {
            nav.addClass("active");
        }
        category.addClass("active");
    }).mouseleave(function() {
        var category = $(this);
        var num = category.index();
        $(".nav-list .item").eq(num).removeClass("active");
        $(".category-box").removeClass("active");
    });

    // 弹出视频播放
    $("body").delegate(".playOpt","click",function(){
        var addr=$(this).attr("url");
        // 播放视频
            var flashvars={
            f:addr,
            c:0,
            p:1,
            loaded:'loadedHandler'
        };
        var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
        CKobject.embedSWF('/public/ckplayer/ckplayer.swf','video','ckplayer_a1','1200','675',flashvars,params);
        $(".video-box").fadeIn();
    });
    //关闭视频
     $(".video-box").delegate(".closed","click",function(){
        CKobject.getObjectById('ckplayer_a1').videoPause();
        $(".video-box").hide();
    });
}

function detailInit() {
    crousel("#platform", true, false, "hover", false);
    crousel("#case", false, false, "", true);
    crousel("#tool", false, false, "", true);
    crousel("#practice", true, false, "click", true);
    
    $('.school-list .hs-list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.school-list .prev'),
        nextArrow: $('.school-list .next'),
        autoplay: true,
        autoplaySpeed: 4000,
        swipe: false
    });
    // 面板切换
    $(".panel").delegate(".tab","click",function(){
        var obj=$(this);
        if(obj.hasClass("active")){
            return;
        }else{
            var index=obj.index();
            obj.addClass("active").siblings(".tab").removeClass("active");
            $(".panel-box").children("div").hide().eq(index).show();
            $(".fast-nav").hide().eq(index).show();
        }
    });
    // 弹出视频播放
    $("body").delegate(".playOpt","click",function(){
        var addr=$(this).attr("url");
        // 播放视频
            var flashvars={
            f:addr,
            c:0,
            p:1,
            loaded:'loadedHandler'
        };
        var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
        CKobject.embedSWF('/public/ckplayer/ckplayer.swf','video','ckplayer_a1','1200','675',flashvars,params);
        $(".video-box").fadeIn();
    });
    //关闭视频
     $(".video-box").delegate(".closed","click",function(){
        CKobject.getObjectById('ckplayer_a1').videoPause();
        $(".video-box").hide();
    });

}
function errorpageInit(){
    var obj=$(".time");
    var num=7;
    if(obj.length){
        setInterval(function(){
            if(num>0){
                num--;
                obj.html(num);
            }else{
                window.location="/";
            }
        },1000);
    }
}
function aboutInit() {
    zhuge.track("页面访问", {"页面名称":"关于我们","课程ID" : "" });
    // 面板切换
    $(".axis").delegate("td","mouseenter",function(){
        var obj=$(this);
        if(obj.hasClass("active")){
            return;
        }else{
            var index=obj.index();
            obj.addClass("active").children("a").addClass("active");
            obj.siblings("td").removeClass("active").children("a").removeClass("active");
            $(".axis-box").children(".item").removeClass("active").hide().eq(index).show().addClass("active");
        }
    });
    // 弹出视频播放
    $("body").delegate(".playOpt","click",function(){
        var addr=$(this).attr("url");
        // 播放视频
            var flashvars={
            f:addr,
            c:0,
            p:1,
            loaded:'loadedHandler'
        };
        var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
        CKobject.embedSWF('/public/ckplayer/ckplayer.swf','video','ckplayer_a1','1200','675',flashvars,params);
        $(".video-box").fadeIn();
    });
    //关闭视频
     $(".video-box").delegate(".closed","click",function(){
        CKobject.getObjectById('ckplayer_a1').videoPause();
        $(".video-box").hide();
    });
}
/**
 * 轮播事件
 * @param boxId 包含框
 * @param needPagination 是否圆点翻页按钮
 * @param defaultPagination 圆点反应是否为默认状态
 * @param paginationEvent 自定义圆点事件类型 click为点击切换 否则hover切换
 * @param needOption 师傅需要上下翻页效果
 * @param  _callback回调函数
 * @param crossIn 是否淡入淡出同时进行
 * @param hoverDelay 是否应用hover delay
 */
function crousel(boxId, needPagination, defaultPagination, paginationEvent, needOption, crossIn, hoverDelay, _callback) {
    //填充数据
    var box = $(boxId);
    var oImgs = box.find(".sequence-item");
    var j = 0;
    var current = 0;
    var nextcurrent;
    var times = null;
    var total = oImgs.length;
    var hoverTimer = null;
    $(oImgs[0]).show();
    // 分页
    if (needPagination && oImgs.length > 1) {
        var optionBox = box.find(".pagination");
        if (defaultPagination) {

            var optionsStr = "";
            for (var i = 0; i < oImgs.length; i++) {
                optionsStr += '<li class="item"><em class="icon-home_lunbo1"></em><em class="icon-home_lunbo2"></em></li>';
            }
            optionBox.append(optionsStr);
        }
        var oAc = optionBox.find("li");
        $(oAc[0]).addClass("active");
        /*圆点点击事件*/
        $(oAc).each(function(index, obj) {
            if (paginationEvent == "click") {
                $(obj).click(function() {
                    j = index;
                    fSwitch("next", j);
                })
            } else {
                $(obj).mouseenter(function() {
                    if(hoverDelay) {
                        if(hoverTimer) {
                            clearTimeout(hoverTimer);
                        }
                        
                        hoverTimer = setTimeout(function() {
                            j = index;
                            fSwitch("next", j);
                        }, 200);
                    } else {
                        j = index;
                        fSwitch("next", j);
                    }
                });
            }
        });
    }
    // 上一页下一页
    if (needOption) {
        var oPrev = box.find(".prev");
        var oNext = box.find(".next");
        if(oImgs.length <= 1) {
            oPrev.hide();
            oNext.hide();
        } else {
            oPrev.click(function() {
                j--;
                fSwitch('pre', j);
            });
            oNext.click(function() {
                j++;
                j = j > total - 1 ? 0 : j;
                fSwitch('next', j);
            })
        }
    }
    /*鼠标移入移除暂停动画*/
    if(oImgs.length > 1) {
        $(box).on('mouseenter', function(e) {
            if (times) {
                clearInterval(times);
            }
        }).on('mouseleave', function(e) {
            autoPlay();
        });
        autoPlay();
    }
    /*幻灯片播放*/
    function autoPlay() {
        times = setInterval(function() {
            j++;
            fSwitch("next", j);
        }, 4000);
    }
    /*淡入淡出切换效果*/
    function fSwitch(dir, num) {
        if (dir === 'pre') {
            num = num < 0 ? total - 1 : num;
        } else if (dir === 'next') {
            num = num > total - 1 ? 0 : num;
        }
        var easing = crossIn ? 'linear' : 'easeInQuart';

        $(oImgs[current]).stop(true,true);
        $(oImgs[num]).stop(true,true);
        $(oImgs[current]).fadeOut(300, easing, function() {
            if(!crossIn) {
                $(oImgs[num]).fadeIn({
                duration: 300,
                easing: easing
            });
            }
            if (needPagination) {
                if(!crossIn) {
                    $(oAc).removeClass("active").eq(num).addClass("active");
                }
            }
            current = num;
            j = num;
            if (_callback !== undefined) {
                _callback(oImgs, num);
            }
        });
        if(crossIn) {
            $(oImgs[num]).fadeIn({
                duration: 300,
                easing: "linear"
            });
            if (needPagination) {
                $(oAc).removeClass("active").eq(num).addClass("active");
            }
        }
    }
}
/**
 * description隐藏对应盒子
 * @param  {[type]} box [description]
 * @return {[type]}     [description]
 */
function close(box){
    $(box).hide();
}
/**
 * [backTop 返回顶部]
 * @return {[type]} [description]
 */
function backTop(){
    var scroll = $(window).scrollTop();
    var time=scroll/100*300;
    if(scroll>1000){
        time=1000;
    }else{
        time=300;
    }
    $('html,body').animate({
        scrollTop: 0
    }, time);
}

/**
 * 课程详情页面 tab affix 功能
 * 2016-04-28 罗杰
 * 
 */

(function () {
    // 非课程页面返回
    if ($('body').attr('pagename') != 'detail'){
        return 
    };

    $(function() {
        var last = 0,
            direction = 'down',
            tabWrapper = $('section.panel [name=panel-nav].anchorItem + .nav'),
            parentPanel = tabWrapper.parent('.panel');
            $document = $(document),
            dirty = false,
            affixed = false;

        function scroll(evt) {
            var offset = $document.scrollTop();
            direction = offset > last ? 'down' : 'up';
            last = offset;

            if (offset > 558 && direction == 'down' && !affixed) {
                parentPanel.addClass('affix-nav');
                affixed = true;
            }

            if (offset < 558 && direction == 'up' && affixed) {
                parentPanel.removeClass('affix-nav');
                affixed = false;
            }
               
        }

        scroll();
        $(window).scroll(scroll);

        // 右侧导航控制
        var nav =  $('.detail .fast-nav .nav-item'),
            link = $('.detail .fast-nav .opt.look')
            tabs = $('.detail .nav .tab'),
            activeTab = null;

        function scrollToAnchor(name, offset, id){
            var tag = id ? $(''+name) : $("a[name='"+ name +"']"),
                offset = offset ? offset : 0;

            if(isFF || isIE9()) {
                offset = offset + 15;
            }
            return $('html,body').scrollTop(tag.offset().top + offset);
        }

        function toggleTab (name, elm) {
            //  显示 name ， 隐藏另外一个
            var hide = name == 'introduce' ? 'outline' : 'introduce'
            $('.panel-box .'+ hide +', .'+hide +'-nav').hide();
            $('.panel-box .'+ name +', .'+name +'-nav').show();
            tabs.removeClass('active');
            elm && elm.addClass('active');
            activeTab = name;
        }

        $('.btn.solid-opt, .fast-nav .sign').on('click', function(evt){
            var hash = $(this).attr('href').indexOf('#'),
                a = $(this).attr('href').substr(hash).replace('#', '');
            if (hash != -1) {
                // 切换到介绍 tab
                activeTab != 'introduce' ? toggleTab('introduce', $('[tag="#introduce"]')) : 0;
                scrollToAnchor(a, -58);
                evt.preventDefault();
                return false;
            }
        })

        tabs.on('click', function(evt) {
            var elm = $(this),
                tab = elm.attr('tag').replace('#', '');
            toggleTab(tab, elm);

            scrollToAnchor('panel-nav', 2);
            evt.preventDefault();
            return false;
        })

        nav.on('click', function(evt){
            var elm = $(this), 
                tab = elm.data('tab'),
                name = elm.data('target').replace('#', ''),
                look = elm.hasClass('look');

            if (look) {
                toggleTab(tab, $('[tag="#'+tab+'"]'));
            }

            scrollToAnchor(name, !look&&(affixed|| !dirty) ? -58 : 0);
            dirty = true;
            evt.preventDefault();
            return false;
        });
    })
})(); 