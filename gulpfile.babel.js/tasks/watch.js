import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['scripts', 'serve', 'inline', 'icons', 'images'], () => {
  gulp.watch([config.paths.html, config.paths.sass], ['inline']);
  gulp.watch([config.paths.icons], ['icons']);
  gulp.watch([config.paths.images], ['images']);
  gulp.watch([config.paths.scripts], ['scripts']);
});
