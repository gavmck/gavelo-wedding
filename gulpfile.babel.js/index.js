import gulp from 'gulp';
import './tasks/inline';
import './tasks/sass';
import './tasks/serve';
import './tasks/watch';
import './tasks/icons';
import './tasks/images';

gulp.task('default', ['inline', 'icons', 'images', 'serve', 'watch']);

gulp.task('build', ['inline', 'icons']);
