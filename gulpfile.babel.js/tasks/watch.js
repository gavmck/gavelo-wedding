import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['serve', 'inline', 'icons'], () => {
  gulp.watch([config.paths.html, config.paths.sass], ['inline']);
  gulp.watch([config.paths.icons], ['icons']);
});
