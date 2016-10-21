'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    gls = require('gulp-live-server'),
    source = require('vinyl-source-stream'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    tsProject = ts.createProject('tsconfig.json'),
    plug = require('gulp-load-plugins')();

gulp.task('htmlhint', function() {
    return gulp.src('src/client/index.html')
        .pipe(plug.htmlhint())
        .pipe(plug.htmlhint.reporter());
});

gulp.task('tslint', function() {
    return gulp.src(['src/client/app/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('less', function() {
    return gulp.src('src/client/css/main.less')
        .pipe(plug.less())
        .pipe(gulp.dest('src/client/css'));
});

gulp.task('ts', function() {
    var sourceTsFiles = [
        'typings/index.d.ts',
        'src/client/app/app.ts',
        'src/client/app/common/config.ts',
        'src/client/app/chart/chart.component.ts',
        'src/client/app/chart/chart.controller.ts'
    ];
    var tsResult = gulp.src(sourceTsFiles)
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(gulp.dest('src/client/app'));
});

gulp.task('bundle', ['ts'], function() {
    browserify({
            entries: [
                'src/client/bower_components/angular/angular.min.js',
                'src/client/bower_components/zingchart/client/zingchart.min.js',
                'src/client/bower_components/ZingChart-AngularJS/src/zingchart-angularjs.js',
                'src/client/app/output.js'
            ]
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('src/client/app'));
});

gulp.task('serve', function() {
    var server = gls.static('src/client', 8888),
        reloadFiles = [
            'src/client/index.html',
            'src/client/app/layout/shell.html',
            'src/client/app/chart/chart.component.html',
            'src/client/css/main.css',
            'src/client/app/bundle.js'
        ];
    server.start();
    gulp.watch([reloadFiles], function(file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('watch', function() {
    gulp.watch('src/client/index.html', ['htmlhint']);
    gulp.watch('src/client/app/**/*.ts', ['bundle']);
    gulp.watch('src/client/css/less/main.less', ['less']);
});

gulp.task('build', ['less', 'bundle']);

gulp.task('default', ['build', 'watch', 'serve']);