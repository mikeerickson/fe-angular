// BUILD TASK
// =============================================================================

/*global require*/
/*global process*/

var gulp     = require('gulp');
var sequence = require('run-sequence');
var concat   = require('gulp-concat');
var msg      = require('gulp-messenger');
var config   = require('./config');

gulp.task('build:lib', function(){
  return gulp.src(config.lib.src)
    .pipe(concat(config.lib.destFilename))
    .pipe(msg.flush.warning('*** ' + config.lib.dest + '/' + config.lib.destFilename + ' Created Successfully ***'))
    .pipe(gulp.dest(config.lib.dest));
});

//gulp.task('build', function() {
//  sequence('clean', 'scripts', 'build:lib', 'images', 'libsass', 'hint', 'todo');
//  msg.Error('*** Build Process Completed Successfully ***');
//});
