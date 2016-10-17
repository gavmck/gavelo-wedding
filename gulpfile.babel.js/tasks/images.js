import gulp from 'gulp';
import config from '../config.js';

gulp.task('images', () => {
  return gulp.src(config.paths.images)
    .pipe(gulp.dest(config.dest.images));
});
