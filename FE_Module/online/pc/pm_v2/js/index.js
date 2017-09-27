/**
 * @file:     PM专题页js逻辑
 * @author:   花夏(bliu@huikedu.com)
 * @version:  V0.0.1
 * @date:     2017-04-06 16:09:33
 */

(function() {

        function addListenAnimate($obj, fun) {
            var eTop = $obj.offset().top,
                wTop = $(window).height(),
                flag = true;
            window.onresize = function() {
                var wTop = $(window).height(); //缩放窗口这个高度会改变，需要再取得
            }
            var wTop = $(window).height();
            // var timer = setInterval(function() {
            //         var dTop = $(document).scrollTop();
            //         if (dTop - eTop < 50) {
            //             clearInterval(timer);
            //             fun();
            //         }
            //     }, 0)
                // $(window).scroll(function() {
                //     var dTop = $(document).scrollTop();
                //     if (dTop - eTop < 30) {
                //         fun();
                //     }
                // });

        }
        window.addListenAnimate = addListenAnimate;

    })()
$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(function() {
    var graph = {

        /**
         * init 初始化方法
         *
         */
        init: function() {
            var me = this;
            this.showTeacher();
            this.showBubble();
            this.showStMain();
            this.showTools();
        },

        /**
         * showTeacher 显示老师轮播
         *
         *
         */
        showTeacher: function() {
            var me = this;
            var elRight = $('.lr-btn-r');
            var elLeft = $('.lr-btn-l');
            var index = 0;
            var elLis = $('.teacher-td-box > .td > li');
            var total = elLis.length;
            var elPointer = $('.tearcher-pointer');
            this.elPointer = elPointer;
            this.elLis = elLis;
            var temp = [];
            for (var i = 0; i < total; i++) {
                temp.push('<span></span>');
            }
            elPointer.append(temp.join(''));
            elPointer.children('span:eq(0)').addClass('active');

            // 自动轮播
            setInterval(function() {
                $('.lr-btn-r').trigger('click');
            }, 5000);
            // 点击右按钮
            elRight.on('click', function() {
                index++;
                if (index >= total) {
                    index = 0;
                }
                me.showLi(index);
            });

            // 点击左按钮
            elLeft.on('click', function() {
                index--;
                if (index < 0) {
                    index = total - 1;
                }
                me.showLi(index);
            });

            // 点击小圆点
            elPointer.children('span').on('click', function() {
                indexNum = $(this).index();
                if (index !== indexNum) {
                    index = indexNum;
                    me.showLi(index);
                }
            });
        },

        showLi: function(index) {
            this.elLis.eq(index).siblings('li').hide();
            this.elLis.eq(index).show().animateCss('fadeInRight');
            this.elPointer.children('span').eq(index).addClass('active').siblings('span').removeClass('active');
        },

        /**
         * showTools 工具区动画
         *
         */
        showTools: function() {
            var tools = $('.tool li');
            tools.animateCss('fadeInLeft');
        },

        /**
         * showStMain 职场动画
         *
         */
        showStMain: function() {
            $('.st-main .content').animateCss('fadeInLeft');
        },

        /**
         * showBubble bubble区域动画
         *
         */
        showBubble: function() {
            var els = $('.bubble');
            setInterval(function() {
                // 产生0~7之间的随机数
                var radom = Math.round(Math.random() * 4);
                els.eq(radom).addClass('active').siblings('li:nth-of-type(n-4)').removeClass('active');
                var radom = Math.round(Math.random() * (7 - 4) + 3);
                els.eq(radom).addClass('active').siblings('li:nth-of-type(n+4)').removeClass('active');
            }, 1000);
        }
    };
    graph.init();

    (function() {
        function font(str, $obj, fun) {
            this.str = str;
            this.obj = $obj;
            this.fun = fun;
        }
        font.prototype.split = function() {
            var that = this;
            var arr = that.str.split(''),

                i = null;
            $('.bnr-text h3').html('')
            var timer = setInterval(function() {
                if (i == 13) {
                    that.obj.html(that.obj.text() + '<br>')
                }
                that.obj.html(that.obj.html() + arr[i++])
                if (i >= arr.length) {
                    clearInterval(timer)
                    that.fun();
                }

            }, 100)
        }
        window.font = font;
    })();

    new font($('.bnr-text h3').text(), $('.bnr-text h3'), function name(params) {
        $('.bnr-text>p').animate({ opacity: 1 }, 1000);
    }).split();

    new addListenAnimate($('#five-year'), function() {})
});

// 文字运动；
var _danceword = {
    interval: 60,
    loop: true,
    isComeHere: function(obj) {
        var h1 = document.body.scrollTop;
        if (!/Chrome|Safari/.test(navigator.userAgent)) {
            h1 = document.documentElement.scrollTop;
        }
        var h2 = $(window).height();
        return (h1 + h2 - $(obj).offset().top) >= $(obj).height();
    },
    isVisible: function(obj) {
        var h1 = document.body.scrollTop;
        if (!/Chrome|Safari/.test(navigator.userAgent)) {
            h1 = document.documentElement.scrollTop;
        }
        var h2 = $(window).height();
        return h1 + h2 - $(obj).offset().top >= $(obj).height() && $(obj).offset().top + $(obj).height() >= h1;
    },
    showCore: function() {
        var me = this;
        if (!me.loop) {
            $("[class^='danceWord']:not(.past)").each(function() {
                var tmp = $.trim($(this).text());
                var h = '';
                for (var i in tmp) {
                    h += "<span>" + tmp[i] + "</span>";
                }
                h = h.replace(/<\/span><span>([\，\,\。\.\!\！\?\？])/g, "$1");
                $(this).html(h);
            });
            $("[class^='danceWord']:not(.past)").each(function() {
                var m1 = this;
                var l = $(this).text().length;
                if (me.isComeHere(m1)) {
                    $(m1).find("span").each(function(k, v) {
                        var me2 = this;
                        setTimeout(function() { $(me2).addClass('ele') }, (k + 1) * me.interval);
                    });
                    setTimeout(function() {
                        $(m1).html($(m1).text());
                    }, l * me.interval + 1000);
                    $(m1).addClass('past');
                }
            });
        } else {
            $("[class^='danceWord']").each(function() {
                var m1 = this;
                var l = $(this).text().length;
                if (!me.isVisible(m1)) {
                    $(m1).removeClass('past');
                    var tmp = $.trim($(m1).text());
                    var h = '';
                    for (var i in tmp) {
                        h += "<span>" + tmp[i] + "</span>";
                    }
                    h = h.replace(/<\/span><span>([\，\,\。\.\!\！\?\？])/g, "$1");
                    $(m1).html(h);
                }
                if (me.isVisible(m1) && !$(m1).hasClass('past')) {
                    var tmp = $.trim($(m1).text());
                    var h = '';
                    for (var i in tmp) {
                        h += "<span>" + tmp[i] + "</span>";
                    }
                    h = h.replace(/<\/span><span>([\，\,\。\.\!\！\?\？])/g, "$1");
                    $(m1).html(h).addClass('past');
                    $(m1).find("span").each(function(k, v) {
                        var me2 = this;
                        setTimeout(function() { $(me2).addClass('ele') }, (k + 1) * me.interval);
                    });
                    setTimeout(function() {
                        $(m1).html($(m1).text());
                    }, l * me.interval + 1000);
                };
            });
        }
        if (/MSIE/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/7.0;") > -1) {
            $('[class^="danceWord"] span').css('display', 'inline');
        }
    },
    init: function(a) {

        var me = _danceword;
        if (typeof a == 'object') {
            $.extend(me, a);
        }
        me.showCore();
        // window.onscroll = function() {
        //     me.showCore();
        // }
    }
};
