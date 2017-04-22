import gulp from 'gulp';
import config from '../config.js';

gulp.task('scripts', () => {
  return gulp.src(config.paths.scripts)
    .pipe(gulp.dest(config.dest.scripts));
});
