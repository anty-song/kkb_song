const gulp = require('gulp'),
      minimist = require('minimist'),
      gulpif = require('gulp-if'),
      fs = require('fs'),
      concat = require('gulp-concat'),
      rev = require('gulp-rev'),
      changed = require('gulp-changed'),
      watch = require('gulp-watch'),
      clean = require('gulp-clean'),
      revCollector = require('gulp-rev-collector'),
      uglifyHtml = require('gulp-minify-html'),
      uglifyCss = require('gulp-minify-css'),
      uglifyJs = require('gulp-uglify'),
      rename = require('gulp-rename'),
      fileinclude = require('gulp-file-include');

  const src = {
      'off_m': 'offline/m/',
      'off_pc': 'offline/pc/',
      'on_m': 'online/m/',
      'on_pc': 'online/pc/'
  };

  const knownOptions = {
          string: ['src', 'pname']
      },
      options = minimist(process.argv.slice(2), knownOptions),
      distSrc = src[options.src] + 'dist/' + options.pname;

  let psrc;

  if (src[options.src]) {
      psrc = src[options.src] + options.pname;
      fs.exists(psrc, function(exists) {
          if (!exists) {
              console.log('      >> 项目地址或专题名称错误！');
              return;
          }
      });
  }

  gulp.task('script', function() {
      return gulp.src(psrc + '/**/*.js')
          .pipe(changed(distSrc))
          .pipe(uglifyJs())
          .pipe(rename(function(path) {
              path.extname = ".js";
          }))
          .pipe(rev())
          .pipe(gulp.dest(distSrc))
          .pipe(rev.manifest())
          .pipe(gulp.dest(psrc + '/manifest-js'));
  });

  gulp.task('css', function() {
      return gulp.src(psrc + '/**/*.css')
          .pipe(changed(distSrc))
          .pipe(uglifyCss())
          .pipe(rename(function(path) {
              path.extname = ".css";
          }))
          .pipe(rev())
          .pipe(gulp.dest(distSrc))
          .pipe(rev.manifest())
          .pipe(gulp.dest(psrc + '/manifest-css'));
  });

  gulp.task('html', function() {
      return gulp.src(psrc + '/**.html')
          .pipe(fileinclude({
              prefix: '@@',
              basepath: src[options.src]
          }))
          .pipe(uglifyHtml())
          .pipe(gulp.dest(distSrc));
  })

  gulp.task('img',function(){
    return gulp.src(psrc+'/**/*.jpg')
    .pipe(gulp.dest(distSrc));
  })

  gulp.task('img-png',function(){
    return gulp.src(psrc+'/**/*.png')
    .pipe(gulp.dest(distSrc));
  })

  gulp.task('rev', function() {
      return gulp.src([psrc + '/**/*.json', distSrc + '/**.html'])
          .pipe(revCollector({
              replaceReved: true
          }))
          .pipe(gulp.dest(distSrc + '/'))
  })

  gulp.task('build', ['script', 'css', 'html', 'img', 'img-png'], function() {
      gulp.start('rev')
      console.log('      >> 目标专题是: ' + options.pname + ' <<');
      console.log('      >> 编译成功   <<');
  })

  gulp.task('help', function() {
      console.log('      >> 帮助文档待更新…… <<');
  })

  gulp.task('default', function() {
      gulp.start("help");
  })