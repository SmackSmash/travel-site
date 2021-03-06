const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins'),
  hexrgba = require('postcss-hexrgba');

gulp.task('styles', () => {
  console.log('CSS updated');
  return gulp
    .src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', error => {
      console.error(`${error.name}: ${error.reason}`);
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
