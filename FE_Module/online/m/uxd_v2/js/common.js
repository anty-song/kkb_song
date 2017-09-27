/**
 * @file    动态计算px
 * @authors 花夏 (bliu@huikedu.com)
 * 
 * @version 1.0.0
 * @date    2017-04-20 18:22:16
 */

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            docEl.getElementsByTagName("body")[0].style.fontSize = docEl.style.fontSize;
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);