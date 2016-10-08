import gulp from 'gulp';
import config from '../config';
import inline from 'gulp-inline';

gulp.task('inline', ['sass'], () => {
  return gulp.src(config.paths.html)
  .pipe(inline({
    base: config.paths.dist,
    ignore: [config.paths.googleFont]
  }))
  .pipe(gulp.dest(config.paths.dist));
});
