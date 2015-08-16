// UGLIFY TASK
// =============================================================================

/*global require*/
/*global process*/

var gulp         = require('gulp');
var rename       = require('gulp-rename');
var msg          = require('gulp-messenger');
var uglify       = require('gulp-uglify');
var config       = require('./config');
var handleErrors = require('./utils/handleErrors');

gulp.task('uglify', function(cb) {
  return gulp.src(config.build.lib.src)
    .on('error', handleErrors)
    .pipe(uglify())
    .pipe(rename(config.build.lib.filename))
    .pipe(msg.flush.success('*** ' + config.build.lib.filename + ' Created Successfully ***'))
    .pipe(gulp.dest(config.build.lib.dest));
});
