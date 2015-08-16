// WATCH TASKS
// =============================================================================

"use strict";

var taskName = 'watch';

var gulp   = require('gulp');
var config = require('./config');
var utils  = require('./utils/cd-utils');

gulp.task('watch', function() {
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.scripts.src, ['browserify']);
  gulp.watch(config.sass.src,    ['libsass']);
  gulp.watch(config.lint.src,    ['lint']);
  gulp.watch(config.todo.src,    ['todo']);
});

gulp.task('design', function() {
  gulp.watch(config.scripts.src, ['scripts', 'todo']);
  gulp.watch(config.scripts.src, ['browserify']);
  gulp.watch(config.sass.src,    ['libsass']);
});


// watch scripts
gulp.task('watch:scripts', ['scripts', 'todo', 'libsass'], function() {
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.todo.src, ['todo']);
  gulp.watch(config.sass.src, ['libsass']);
});

gulp.task('watch:lint', ['lint'], function(){
  gulp.watch(config.lint.src, ['lint']);
});

gulp.task('watch:dev', ['scripts','todo','libsass','images'], function(){
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.todo.src, ['todo']);
  gulp.watch(config.lint.src,    ['lint']);
  gulp.watch(config.sass.src,    ['libsass']);
  gulp.watch(config.images.src,  ['images']);
});

gulp.task('dev',['watch:dev']);
