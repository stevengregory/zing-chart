'use strict';

var gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  ts = require('gulp-typescript'),
  tslint = require('gulp-tslint'),
  tsProject = ts.createProject('tsconfig.json'),
  lite = require('lite-server'),
  plug = require('gulp-load-plugins')();

gulp.task('htmlhint', function() {
  return gulp.src('src/index.html')
    .pipe(plug.htmlhint())
    .pipe(plug.htmlhint.reporter());
});

gulp.task('tslint', function() {
  return gulp.src(['src/app/**/*.ts'])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('less', function() {
  return gulp.src('src/css/main.less')
    .pipe(plug.less())
    .pipe(gulp.dest('src/css'));
});

gulp.task('ts', function() {
  var sourceTsFiles = [
    'typings/index.d.ts',
    'src/app/app.ts',
    'src/app/common/config.ts',
    'src/app/chart/chart.component.ts',
    'src/app/chart/chart.controller.ts'
  ];
  var tsResult = gulp.src(sourceTsFiles)
    .pipe(ts(tsProject));
  return tsResult.js
    .pipe(gulp.dest('src/app'));
});

gulp.task('bundle', ['ts'], function() {
  browserify({
      entries: [
        'src/bower_components/angular/angular.min.js',
        'src/bower_components/zingchart/client/zingchart.min.js',
        'src/bower_components/ZingChart-AngularJS/src/zingchart-angularjs.js',
        'src/app/output.js'
      ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('src/app'));
});

gulp.task('watch', function() {
  gulp.watch('src/index.html', ['htmlhint']);
  gulp.watch('src/app/**/*.ts', ['bundle']);
  gulp.watch('src/css/main.less', ['less']);
});

gulp.task('build', ['less', 'bundle']);

gulp.task('default', ['build', 'watch']);