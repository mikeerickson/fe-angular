// SCRIPTS TASK
// =============================================================================

/*global require*/
/*global process*/

var gulp         = require('gulp');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var msg          = require('gulp-messenger');
var uglify       = require('gulp-uglify');
var config       = require('./config');
var handleErrors = require('./utils/handleErrors');

msg.init({timestamp: true});
// concat all files in ./src/js
// uglify results
// rename to ./public/js/app.min.js

gulp.task('scripts', function(cb) {
  return gulp.src(config.scripts.src)
    .on('error', handleErrors)
    .pipe(concat(config.scripts.destFilename))
    .pipe(uglify())
    .pipe(msg.flush.success('*** ' + config.scripts.dest + '/' + config.scripts.destFilename + ' Created Successfully ***'))
    .pipe(gulp.dest(config.scripts.dest));
});
