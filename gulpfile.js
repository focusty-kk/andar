/**
 * Created by yanghui on 2017/1/6.
 */
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var concat = require("gulp-concat");


gulp.task("default",function(){
    return gulp.src("./javaScriptDemo/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./javaScript"))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest("./javaScript"));

});