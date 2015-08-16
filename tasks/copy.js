// COPY TASKS
// =============================================================================

"use strict";

var taskName = 'Copy';

var gulp     = require('gulp');
var copy     = require('gulp-copy');
var msg      = require('gulp-messenger');
var config   = require('./config');
var sequence = require('run-sequence');
var del      = require('del');
var chmod    = require('gulp-chmod');

gulp.task('copy:lib', function() {
  del(config.scripts.dest);
  return gulp.src(config.build.copy.buildSrc)
    .pipe(copy(config.build.copy.lib, {prefix: 1}))
    .pipe(msg.flush.warning('=== Files Copied To ' + config.build.copy.lib + ' ==='));
});

gulp.task('copy:dist', function() {
  del(config.build.lib.dist);
  return gulp.src(config.build.copy.src)
    .pipe(copy(config.build.copy.dist, {prefix: 3}))
    .pipe(msg.flush.warning('=== Files Copied To ' + config.build.copy.dist + ' ==='));
});

gulp.task('copy:all', function() {
  sequence('copy:dist', 'copy:lib');
});

gulp.task('copy', function() {
  sequence('copy:all');
});
