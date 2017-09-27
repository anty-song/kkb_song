/**
 * @file    文件说明
 * @authors 花夏 (bliu@huikedu.com)
 * 
 * @version 1.0.0
 * @date    2017-04-20 18:00:26
 */

$(function () {
    var uxdv2 = {
        init: function () {
            var me = this;
            var endTime = '2017/5/20 23:59:59';
            var countDownTimeArr;
            this.elD = $('.time-day');
            this.elH = $('.time-hour');
            this.elM = $('.time-min');
            this.elS = $('.time-sec');
            setInterval(function () {
                countDownTimeArr = me.countDown(endTime);
                me.setCountDown(countDownTimeArr)
            }, 1000);
        },

        /**
         * countDown 倒计时逻辑
         *
         * @param  {String} endTime  2017-5-8 23:59:59
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
            this.elS.html(s);
        }
    };
    uxdv2.init();
});