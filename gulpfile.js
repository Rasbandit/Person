var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");

var paths = {
   jsSource: ["./public/js/**/*.js"],
   sassSource: ["./public/css/**/*.scss"],
   indexSource: ["./public/index.html"]
};

gulp.task('js', function() {
   gulp.src(paths.jsSource).pipe(annotate()).pipe(concat("bundle.js")).pipe(gulp.dest("./dist"));
});

gulp.task('sass', function() {
   gulp.src(paths.sassSource).pipe(sass()).pipe(concat("bundle.css")).pipe(gulp.dest("./dist"));
});

gulp.task('index', function() {
   gulp.src(paths.indexSource).pipe(gulp.dest("./dist"));
});

gulp.task('watch', function() {
   gulp.watch(paths.jsSource, ['js']);
   gulp.watch(paths.sassSource, ['sass']);
   gulp.watch(paths.indexSource, ['index']);
});

gulp.task('default', ['js', 'sass', 'index', 'watch'])
