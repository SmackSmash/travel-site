const gulp = require('gulp'),
  watch = require('gulp-watch');

gulp.task('default', () => {
  console.log('Default gulp task');
});

gulp.task('html', () => {
  console.log('Something useful');
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });
  watch('./app/assets/styles/*.css', () => {
    gulp.start('styles');
  });
});
