var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')
// 视图默认路径
app.set('views', './views/pages/')
// 模板引擎
app.set('view engine', 'pug')
// 格式化表单数据
// app.use(bodyParser.json())
// app.use(express.bodyParser())
// 静态资源
app.use(express.static(path.join(__dirname, 'bower_components')))
// app.use(serveStatic(path.join(__dirname, 'bower_components')))
app.use(bodyParser.urlencoded())
app.listen(port)

console.log('project started on port : ' + port)

// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: '首页',
        movies: [{
            titile: '机械战警',
            _id: 1,
            poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3091337299,3675364121&fm=26&gp=0.jpg'
        },{
            titile: '机械战警',
            _id: 2,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
            titile: '机械战警',
            _id: 3,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
            titile: '机械战警',
            _id: 4,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
            titile: '机械战警',
            _id: 5,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
            titile: '机械战警',
            _id: 6,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }]
    })
})

// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: '详情页',
        movie: {
            doctor: '何塞|帕迪利亚',
            country: '美国',
            titile: '机械战警',
            year: 2014,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language: '英语',
            flash: '',
            summary: 'aaaaaaa'
        }
    })
})

// list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: '列表页',
        movies: [{
            title: '机械战警',
            _id: 1,
            doctor: '何塞|帕迪利亚',
            country: '美国',
            year: 2014,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language: '英语',
            flash: '',
            summary: 'aaaaaaa'
        }]
    })
})

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: '后台录入页',
        movie: {
            titile: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    })
})