/**
 * @file    js入口文件
 * @authors 花夏 (bliu@huikedu.com)
 * 
 * @version 1.0.0
 * @date    2017-04-20 10:29:44
 */
$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
$(function () {
    var uxdv2 = {
        init: function () {
            var me = this;
            var endTime = '2017/5/20 23:59:59';
            var countDownTimeArr;
            this.elD = $('.time-day');
            this.elH = $('.time-hour');
            this.elM = $('.time-min');
            this.eleS = $('.time-sec');
            setInterval(function () {
                countDownTimeArr = me.countDown(endTime);
                me.setCountDown(countDownTimeArr)
            }, 1000);
            this.teacherShow();
            this.closeBarcode();
            this.openWindow();
        },

        /**
         * countDown 倒计时逻辑
         *
         * @param  {String} endTime  2017-5-20 23:59:59
         *
         * @return {Array}         返回倒计时的 天 小时 分 秒
         */
        countDown: function (endTime) {
            endTime = new Date(endTime);
            var curtime = new Date();
            var times = endTime.getTime() - curtime.getTime();
            var d = Math.floor(times / 1000 / 60 / 60 / 24);
            var h = Math.floor(times / 1000 / 60 / 60 % 24);
            var m = Math.floor(times / 1000 / 60 % 60);
            var s = Math.floor(times / 1000 % 60);
            var arrTemp = [];
            arrTemp.push(d, h, m, s);
            return arrTemp;
        },

        /**
         * setCountDown 根据倒计时设置到dom
         *
         */
        setCountDown: function (countDownTimeArr) {
            var d = countDownTimeArr[0];
            var h = countDownTimeArr[1];
            var m = countDownTimeArr[2];
            var s = countDownTimeArr[3];
            this.elD.html(d);
            this.elH.html(h);
            this.elM.html(m);
            this.eleS.html(s);
        },

        teacherShow: function () {
            var teacherTbLi = $('.teacher-tb > li');
            teacherTbLi.on('mousemove', function () {
                $(this).addClass('active').siblings('li').removeClass('active');
                var index  = $(this).index();
                $('.bigTea > img').eq(index).siblings('img').hide();
                $('.bigTea > img').eq(index).show().animateCss('fadeIn');
                $('.about-teacher > div').eq(index).siblings('div').hide();
                $('.about-teacher > div').eq(index).show().animateCss('fadeIn');
            });
        },
        closeBarcode: function () {
            $('.close').on('click',function () {
                $('.fixed_left').css({'display':'none'});
            });
        },
        openWindow: function () {
            $('.online_consult').on('click',function () {
                openwin();
            });
        }
    };
    uxdv2.init();
});
