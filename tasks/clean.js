// CLEAN TASKS
// =============================================================================

"use strict";

var taskName = 'Clean';

var gulp     = require('gulp');
var del      = require('del');
var config   = require('./config');
var utils    = require('./utils/cd-utils');
var msg      = require('gulp-messenger');

msg.init({timestamp: true});

gulp.task('clean:lib', function (cb) {
  del(config.scripts.dest + '/' + config.scripts.destFilename, cb);
  msg.Warning(config.scripts.dest + '/' + config.scripts.destFilename +' cleaned...');
});

gulp.task('clean:dist', function (cb) {
  del(config.build.lib.dist, cb);
  msg.Warning(config.build.lib.dist+' cleaned...');
});

gulp.task('clean:css', function (cb) {
  del(config.css.dest + '/' + config.css.destFilename, cb);
  msg.Warning(config.css.dest +' cleaned...');
});

gulp.task('clean:images', function (cb) {
  //del(config.images.dest, cb);
  msg.Error('This task is not implemented yet, need to fix image compression');
  //msg.Warning(utils.info(config.images.dest +' cleaned...'));
});

gulp.task('clean:logs', function (cb) {
  del(config.logs.paths, cb);
  msg.Warning(utils.info('logs cleaned...'));
});

gulp.task('clean:all', ['clean:lib', 'clean:dist', 'clean:css', 'clean:images', 'clean:logs']);

gulp.task('clean', ['clean:all']);

