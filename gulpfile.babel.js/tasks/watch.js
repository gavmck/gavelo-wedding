import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['serve', 'inline'], () => {
  gulp.watch([config.paths.html, config.paths.sass], ['inline']);
});
