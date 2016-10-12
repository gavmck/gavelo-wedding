import gulp from 'gulp';
import config from '../config.js';

gulp.task('icons', () => {
  return gulp.src(config.paths.icons)
    .pipe(gulp.dest(config.paths.dist));
});
