var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var watch = require('gulp-watch');

gulp.task('default', ['watch'], function() {
});

gulp.task('sass', function() {
  gulp.src('scss/*.scss').pipe(sass()).pipe(gulp.dest('css'));
});

gulp.task('coffee', function() {
  gulp.src('coffee/*.coffee').pipe(coffee()).pipe(gulp.dest('js'));
});

gulp.task('jade', function() {
  return gulp.src('*.jade')
      .pipe(jade({
          pretty: true,  // uncompressed
      }))
      .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('coffee/*.coffee', ['coffee']);
  gulp.watch('*.jade', ['jade']);
});
