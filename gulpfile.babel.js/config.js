const config = {
  paths: {
    html: 'app/**/*.html',
    sass: 'app/styles/**/*.scss',
    icons: 'app/icons/**/*',
    images: 'app/images/**/*',
    scripts: 'app/scripts/**/*.js',
    dist: 'dist/'
  },
  dest: {
    css: 'dist/styles/',
    images: 'dist/images/',
    scripts: 'dist/', // Same dir for service worker
  },
};

export default config;
