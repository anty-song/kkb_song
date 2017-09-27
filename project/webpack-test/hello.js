require ('./world.js')
require ('./style.css')
// require ('style-loader!css-loader!./style.css')
//css-loader可以使webpack处理css文件；style-loader使得将css样式插入到页面头部中

function hello (str) {
	alert(str);
}
hello('hello world!');