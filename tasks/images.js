// IMAGES TASK
// =============================================================================

"use strict";

var taskName     = 'images';

var changed      = require('gulp-changed');
var gulp         = require('gulp');
var imagemin     = require('gulp-imagemin');
var plumber      = require('gulp-plumber');
var msg          = require('gulp-messenger');
var config       = require('./config');
var handleErrors = require('./utils/handleErrors');

gulp.task('images', function() {
  return gulp.src(config.images.src)
    .on('error',  handleErrors )
    .pipe(plumber())
    .pipe(changed(config.images.src)) // Ignore unchanged files
    .pipe(imagemin())
    .pipe(msg.flush.success('*** Images Processed Successfully ***'));
});
