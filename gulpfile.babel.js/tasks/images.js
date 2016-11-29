import gulp from 'gulp';
import config from '../config.js';
import responsive from 'gulp-responsive-images';
import smushit from 'gulp-smushit';

const sizes = [
  {
    width: 30,
    suffix: '-30', // Mobile retina
  },
  {
    width: 650,
    suffix: '-650', // Mobile retina
  }
];

gulp.task('images', () => {
  return gulp.src(config.paths.images)
    .pipe(responsive({
      '*.*': sizes,
    }))
    .pipe(smushit())
    .pipe(gulp.dest(config.dest.images));
});
