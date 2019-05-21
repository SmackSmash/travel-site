const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();

gulp.task('previewDist', () => {
  browserSync.init({
    server: {
      notify: false,
      baseDir: 'docs'
    }
  });
});

gulp.task('deleteDistFolder', ['icons'], () => {
  return del('./docs');
});

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
  return gulp
    .src([
      './app/assets/images/**/*',
      '!./app/assets/images/icons',
      '!./app/assets/images/icons/**/*'
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], () => {
  gulp.start('usemin');
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], () => {
  return gulp
    .src('./app/index.html')
    .pipe(
      usemin({
        css: [
          () => {
            return rev();
          },
          () => {
            return cssnano();
          }
        ],
        js: [
          () => {
            return rev();
          },
          () => {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
