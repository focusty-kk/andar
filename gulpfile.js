/**
 * Created by yanghui on 2017/1/6.
 */
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var babel = require("babel-preset-es2015");
var clean = require("del");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task("clean", function () {
    return clean("./javaScript");
});

gulp.task('build', function () {
    return browserify({entries: './javaScriptDemo/moveZeros.js', debug: true})
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./javaScript'));
});
gulp.task('ugly',['build'], function () {
    return gulp.src("./javaScript/app.js")
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(gulp.dest('./javaScript'))
});