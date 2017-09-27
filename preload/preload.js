// 为了更好地兼容性，开始前有个分号
// 图片预加载
;(function ($) {// 此处将$作为匿名函数的形参
    /* 这里放置代码，可以使用$作为 jQuery 的缩写别名 */
    function PreLoad(imgs, options) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        this.opts = $.extend({}, PreLoad.DEFAULTS, options);

        this._unordered();
    }
    PreLoad.DEFAULTS = {
        each: null,// 每张图片加载完毕后执行
        all: null// 所有图片加载完毕后执行
    }
    PreLoad.prototype._unordered = function () {// 无序加载
        var imgs = this.imgs,
            opts = this.opts,
            count = 0,
            len = imgs.length;

        $.each(imgs, function (i, src) {
            if (typeof src != 'string') return;
            var imgObj = new Image();
            $(imgObj).on('load error', function () {
                opts.each && opts.each(count);
                if (count >= len - 1) {
                    opts.all && opts.all();
                }
                count++;
            });
            imgObj.src = src;
        });
    };
    $.extend({
        preload: function (imgs, opts) {
            new PreLoad(imgs, opts);
        }
    })
})(jQuery);//这里就将 jQuery 作为实参传递给匿名函数

// 方法一： 用css和JavaScript实现图片预加载




















