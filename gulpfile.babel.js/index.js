import gulp from 'gulp';
import './tasks/inline';
import './tasks/sass';
import './tasks/serve';
import './tasks/watch';
import './tasks/icons';
import './tasks/images';
import './tasks/scripts';

gulp.task('default', ['scripts', 'inline', 'icons', 'images', 'serve', 'watch']);

gulp.task('build', ['scripts', 'inline', 'icons', 'images']);
