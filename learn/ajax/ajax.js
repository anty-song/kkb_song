/*
* 1.建立xmlHttpRequrest连接；
* 2.请求向台台服务器发送请求；
* 3.根据服务器返回状态码进行相关的操作.
* 4.返回的数据进行格式化；
*
* AJAX应用程序的优势在于：
*   1.通过异步模式，提升了用户体验。
*   2.优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用。
*   3.AJAX引擎在客户端运行，承担了一部分本来由服务器承担的工作，从而减少了服务器负载。
*
* 虽然使用AJAX有很多的好处，但是它也有局限性。一般有如下几点：
*   1.不能实时请求和响应服务器数据。
*   2.不支持浏览器回退功能。
*   3.不能提交多媒体数据，比如图片，文件等。
*/

ajax({
    url: "./TestXHR.aspx",              //请求地址
    type: "POST",                       //请求方式
    data: { name: "super", age: 20 },        //请求参数
    dataType: "json",
    success: function (response, xml) {
        // 此处放成功后执行的代码
    },
    fail: function (status) {
        // 此处放失败后执行的代码
    }
});
function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);
    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }
    //连接 和 发送 - 第二步
    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".",""));
    return arr.join("&");
}