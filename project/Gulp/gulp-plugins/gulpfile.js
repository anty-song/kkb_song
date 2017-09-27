var gulp = require('gulp'),
    changed = require('gulp-changed'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    debug = require('gulp-debug');

gulp.task('js', function(cb) {
    console.log(cb);
    return
    pump([
        gulp.src('index.js'),
        debug({title: 'bianyi:'}),
        uglify(),
        gulp.dest('dist/')
    ], cb);
});

gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['js', 'html'], function() {
    console.log('编译已完成');
})