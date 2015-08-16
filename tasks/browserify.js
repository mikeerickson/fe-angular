// BROWSERIFY TASK
// =============================================================================

/*global require*/
/*global process*/

var gulp         = require('gulp');
var msg          = require('gulp-messenger');
var browserify   = require('browserify');
var handleErrors = require('./utils/handleErrors');
var reactify     = require('reactify');
var source       = require('vinyl-source-stream');
var config       = require('./config');

gulp.task('browserify', function() {
  msg.Success('*** ' + config.browserify.dest + '/' + config.browserify.filename + ' Created Successfully ***');
  browserify(config.browserify.src)
    .on('error', handleErrors)
    .transform(reactify)
    .bundle()
    .pipe(source(config.browserify.filename))
    .pipe(gulp.dest(config.browserify.dest));
});
