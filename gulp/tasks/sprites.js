const gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  rename = require('gulp-rename'),
  del = require('del');

const config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () => {
  return del(['./app/temp/sprites', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], () => {
  return gulp
    .src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprites'));
});

gulp.task('copySpriteGraphic', ['createSprite'], () => {
  return gulp.src('./app/temp/sprites/css/**/*.svg').pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], () => {
  return gulp
    .src('./app/temp/sprites/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () => {
  return del('./app/temp/sprites');
});

gulp.task('icons', [
  'beginClean',
  'createSprite',
  'copySpriteGraphic',
  'copySpriteCSS',
  'endClean'
]);
