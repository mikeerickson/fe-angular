// ESLINT TASK
// =============================================================================

"use strict";

var taskName = 'eslint';

var gulp     = require('gulp');
var eslint   = require('gulp-eslint');
var plumber  = require('gulp-plumber');
var msg      = require('gulp-messenger');

gulp.task('eslint', function() {
  return gulp.src(['./src/*.js'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(msg.flush.success('*** Script Files ESLinted Successfully ***'))
});


// CONFIGURATION NOTE
// =============================================================================
// Need to have a properly configureed `.eslintrc` file, otherwise be prepared
// for a whole slew of errors and warnings
// Use the suppliied `.eslintrc` file as a starting point
