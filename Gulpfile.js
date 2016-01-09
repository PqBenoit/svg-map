var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(connect.reload());
});

// gulp.task('minify-css', function() {
//   gulp.src('css/*.css')
//     .pipe(minifyCss({compatibility: 'ie8'}))
//     .pipe(concat('style.min.css'))
//     .pipe(gulp.dest('dist'))
//     .pipe(connect.reload());
// });

gulp.task('scripts', function(){
  gulp.src('javascripts/**/*.js')
    .pipe(gulp.dest('./js/')).pipe(connect.reload());
});

gulp.task('html', function(){
  gulp.src('index.html').pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch',function() {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('javascripts/**/*.js', ['scripts']);
  gulp.watch('index.html', ['html']);
});


gulp.task('default', ['styles', 'scripts', 'html', 'webserver', 'watch']);
