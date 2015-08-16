// LIBSASS TASK (Sass w/ Libsass)
// =============================================================================

"use strict";

var taskName     = 'libsass';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
//var minifyCSS    = require('gulp-minify-css');
var config       = require('./config');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var msg          = require('gulp-messenger');

gulp.task('libsass', function () {
  gulp.src(config.css.src)
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(config.css.destFilename))
    .pipe(msg.flush.warning('*** ' + config.css.dest + '/' + config.css.destFilename + ' Created Successfully ***'))
    .pipe(gulp.dest(config.css.dest));
});


gulp.task('sass',['libsass']);


