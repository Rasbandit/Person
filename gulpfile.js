var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var image = require('gulp-image');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minCss = require('gulp-minify-css');
var livereload = require('gulp-livereload');

var paths = {
   jsSource: ["./public/js/**/*.js"],
   sassSource: ["./public/css/**/*.scss"],
   indexSource: ["./public/index.html"],
   viewsSource: ["./public/views/**/*.html"],
   imgSource: ["./public/images/*"]
};

gulp.task('js', function() {
   gulp.src(paths.jsSource)
   .pipe(annotate())
   .pipe(concat("bundle.js"))
   .pipe(uglify())
   .pipe(rename({extname: ".min.js"}))
   .pipe(gulp.dest("./dist"))
   .pipe(livereload());
});

gulp.task('sass', function() {
   gulp.src(paths.sassSource)
   .pipe(sass())
   .pipe(concat("bundle.css"))
   .pipe(gulp.dest("./dist"))
   .pipe(livereload());
});

gulp.task('views', function() {
   gulp.src(paths.viewsSource)
   .pipe(gulp.dest("./dist/views"))
   .pipe(livereload());
});

gulp.task('index', function() {
   gulp.src(paths.indexSource)
   .pipe(gulp.dest("./dist"))
   .pipe(livereload());
});

gulp.task('watch', function() {
   gulp.watch(paths.jsSource, ['js']);
   gulp.watch(paths.sassSource, ['sass']);
   gulp.watch(paths.indexSource, ['index']);
   gulp.watch(paths.viewsSource, ['views']);
});

gulp.task('default', ['js', 'sass', 'index', 'views', 'watch']);
