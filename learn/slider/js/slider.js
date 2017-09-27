
// 1. 数据定义 （ 实际生产环境中 设计给也行 从后台获取也可以 ）
var data = [
    { img : 1, h1 : 'Creative', h2 : 'DUET' },
    { img : 2, h1 : 'Friendly', h2 : 'DEVIL' },
    { img : 3, h1 : 'Tranquilent', h2 : 'COMPATRIOT' },
    { img : 4, h1 : 'Insecure', h2 : 'HUSSLER' },
    { img : 5, h1 : 'Loving', h2 : 'REBEL' },
    { img : 6, h1 : 'Passionate', h2 : 'SEEKER' },
    { img : 7, h1 : 'Crazy', h2 : 'FRIEND' }
];
// 2. 通用函数
var g = function ( id ) {
    if ( id.substr( 0, 1 ) == '.' ) {
        return document.getElementsByClassName( id.substr(1) );
    }
    return document.getElementById( id );
}
// 3. 添加幻灯片的操作（ 所有幻灯片&对应的按钮 ）
function addSliders() {
    // 3.1 获取模板
    var tpl_main = g('template_main').innerHTML
                    .replace('/^\s*/', '')
                    .replace('/\s*$/', '');// 去掉开始和结尾的空白符
    var tpl_ctrl = g('template_ctrl').innerHTML
                    .replace('/^\s*/', '')
                    .replace('/\s*$/', '');
    // 3.2 定义最终输出的 HTML 的变量
    var out_main = [];
    var out_ctrl = [];
    // 3.3 遍历所有数据 构建最终输出的 HTML
    for ( i in data ) {
        var _html_main = tpl_main.replace(/{{index}}/g, data[i].img)
                                 .replace(/{{h2}}/g, data[i].h1)
                                 .replace(/{{h3}}/g, data[i].h2)
                                 .replace(/{{css}}/g, ['', 'main-i_right'][i % 2]);
        var _html_ctrl = tpl_ctrl.replace(/{{index}}/g, data[i].img);
        out_main.push(_html_main);
        out_ctrl.push(_html_ctrl);
    }
    // 3.4 把 HTML 回写到对应的 DOM 里面
    g('template_main').innerHTML = out_main.join('');
    g('template_ctrl').innerHTML = out_ctrl.join('');
// 7. 添加#main_background
    g('template_main').innerHTML += tpl_main.replace(/{{index}}/g, '{{index}}')
                                            .replace(/{{h2}}/g, data[i].h1)
                                            .replace(/{{h3}}/g, data[i].h2);
    g('main_{{index}}').id = 'main_background';
}
    // 5. 定义幻灯片切换
    function switchSlider( n ) {
        // 5.1 获得要展现的的幻灯片&控制按钮 DOM
        var main = g('main_' + n),
            ctrl = g('ctrl_' + n),
        // 5.2 获得所有的幻灯片以及控制按钮
            clear_main = g('.main-i'),
            clear_ctrl = g('.ctrl-i');
        // 5.3 清除 active 样式
        for ( var i = 0; i < clear_ctrl.length; i++ ) {
            clear_ctrl[i].className = clear_ctrl[i].className.replace(' ctrl-i_active', '');
            clear_main[i].className = clear_main[i].className.replace(' main-i_active', '');
        }
        // 5.4 为当前幻灯片及控制按钮添加样式
        main.className += ' main-i_active';
        ctrl.className += ' ctrl-i_active';
        // 7.2 切换时，复制上一张幻灯片到 main_background 中
        setTimeout( function () {
            g('main_background').innerHTML = main.innerHTML;
        }, 1000);
    } 
    // 6. 动态调整图片的 margin-top 使其垂直居中（这一部分可以根据实际工作项目 在css中设置垂直居中）
    function movePictures() {
        var pictures = g('.picture');
        for (var i = 0; i < pictures.length; i++) {
            pictures[i].style.marginTop = (-1 * pictures[i].clientHeight / 2) + 'px';
        }
    }
window.onload = function () {
    addSliders();
    switchSlider(1);
    // movePictures();// 不能直接调用该函数 因为图片是动态添加的 而该函数是要等图片添加完后才调用的
    setTimeout( function () {
        movePictures();
    },100);
}



