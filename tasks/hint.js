// HINT TASK
// =============================================================================

/*global require*/
/*global process*/

var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var config = require('./config');
var msg    = require('gulp-messenger');

require('jshint-stylish');

gulp.task('hint', function() {
  return gulp.src(config.scripts.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(msg.flush.warning('*** Source File Hinting Completed ***'));
});

// alias
gulp.task('lint', ['hint']);
