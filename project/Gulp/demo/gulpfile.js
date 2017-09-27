//引入gulp和gulp插件
var gulp = require('gulp'),
    changed = require('gulp-changed'),
    watch = require('gulp-watch'),
    debug = require('gulp-debug'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    htmlmin = require('gulp-htmlmin');
//定义css、js源文件路径
var cssSrc = 'pm/css/*.css',
    jsSrc = 'pm/js/*.js';


//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function(){
    return gulp.src(cssSrc)
        .pipe(changed('dist'))
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe(rev.manifest())
        .pipe(debug({title: '编译：'}))
        .pipe(gulp.dest('pm/rev/css'));
});


//js生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revJs', function(){
    return gulp.src(jsSrc)
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifest())
        .pipe(debug({title: '编译：'}))
        .pipe(gulp.dest('pm/rev/js'));
});


//Html替换css、js文件版本
gulp.task('revHtml', function () {
    return gulp.src(['pm/rev/**/*.json', 'pm/*.html'])
        .pipe(changed('dist'))
        .pipe(revCollector())
        .pipe(debug({title: '编译：'}))
        .pipe(gulp.dest('dist'));
});


//开发构建
gulp.task('dev', function (done) {
    condition = false;
    runSequence(
        ['revCss'],
        ['revJs'],
        ['revHtml'],
        done);
});

gulp.task('min', function() {
  return gulp.src('src/*.html')
    .pipe(watch('src/*.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dev']);