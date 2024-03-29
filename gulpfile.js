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
    .pipe(tslint({
      formatter: 'verbose'
    }))
    .pipe(tslint.report())
});

gulp.task('less', function() {
  return gulp.src('src/styles/main.less')
    .pipe(plug.less())
    .pipe(gulp.dest('src/styles'));
});

gulp.task('ts', function() {
  var sourceTsFiles = [
    'typings/index.d.ts',
    'src/app/app.ts',
    'src/app/core/config.ts',
    'src/app/chart/chart.service.ts',
    'src/app/chart/chart.component.ts',
    'src/app/chart/chart.controller.ts'
  ];
  var tsResult = gulp.src(sourceTsFiles)
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('src/app'));
});

gulp.task('bundle', ['ts'], function() {
  browserify({
      entries: [
        'src/bower_components/angular/angular.min.js',
        'src/bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js',
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
  gulp.watch('src/styles/main.less', ['less']);
});

gulp.task('build', ['less', 'bundle']);
gulp.task('default', ['build', 'watch']);