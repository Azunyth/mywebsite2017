var gulp = require('gulp'),
    semantic = require('./semantic/tasks/build'),
    semanticWatch = require('./semantic/tasks/watch'),
    runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')({ lazy: true });

var config = {
  build: './dist/build.js',
  plugins: [
  ],
  index: {
    run: 'index.html'
  },
  dest: './public',
  root: './'
};

gulp.task('help', $.taskListing);
gulp.task('default', ['jquery', 'semantic', 'semantic-watch']);

/**
 * SEMANTIC
 */
gulp.task('semantic', semantic);

gulp.task('semantic-watch', semanticWatch);

gulp.task('gzip', function () {
  log('gzipping');
  var source = [].concat(config.plugins, config.build);

  return gulp.src(source)
    .pipe($.gzip())
    .pipe(gulp.dest(config.dest));
});

gulp.task('jquery', function() {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(config.dest + '/js'));
});

function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

module.exports = gulp;
