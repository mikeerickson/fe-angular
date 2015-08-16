// TODO TASK
// =============================================================================

/*global require*/
/*global process*/

"use strict";

var gulp    = require('gulp');
var config  = require('./config');
var todo    = require('gulp-todo');
var exclude = require('gulp-ignore');

var msg     = require('gulp-messenger');
var run     = require('gulp-run');

var args    = process.argv.slice(3);


// if on windows, it will return false immediately before testing other parameters
var openReport = ( /^win/.test(process.platform) )
  ? false
  : args.indexOf('--O') >= 0 || args.indexOf('--open') >= 0 || (config.todo.reporter.openReport);

gulp.task('todo', function() {
  return gulp.src(config.todo.src)
    .pipe(exclude(config.todo.exclude))
    .pipe(todo())
    .pipe(gulp.dest('./'))
    .pipe(msg.flush.success(config.todo.successMsg))
    .once('end', function () {
      if (openReport) {
        run('open TODO.md').exec();
      }
    });
});
