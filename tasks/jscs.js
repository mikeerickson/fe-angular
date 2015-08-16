var gulp         = require('gulp');
var jscs         = require('gulp-jscs');
var stylish      = require('gulp-jscs-stylish');
var msg          = require('gulp-messenger');
var handleErrors = require('./utils/handleErrors');
var config       = require('./config');

gulp.task('jscs', function () {
  return gulp.src(config.jscs.src)
    .on('error', handleErrors)
    .pipe(jscs({fix: false}))
    .pipe(stylish())
    .pipe(msg.flush.warning('*** JSCS Completed Successfully ***'))
    .pipe(gulp.dest(config.jscs.src));
});
