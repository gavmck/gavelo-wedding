import gulp from 'gulp';
import './tasks/inline';
import './tasks/sass';
import './tasks/serve';
import './tasks/watch';
import './tasks/icons';

gulp.task('default', ['inline', 'icons', 'serve', 'watch']);

gulp.task('build', ['inline', 'icons']);
