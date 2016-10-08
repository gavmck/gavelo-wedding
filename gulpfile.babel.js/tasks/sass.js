import gulp from 'gulp';
import config from '../config';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('sass', function () {
  return gulp
    .src(config.paths.sass)
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer({
      browsers: ['> 0.5%'],
      cascade: false
    }))
    .pipe(gulp.dest(config.dest.css));
});
