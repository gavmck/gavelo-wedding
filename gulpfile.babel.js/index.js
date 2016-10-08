import gulp from 'gulp';
import './tasks/inline';
import './tasks/sass';
import './tasks/serve';
import './tasks/watch';

gulp.task('default', ['inline', 'serve', 'watch']);

gulp.task('build', ['inline']);
