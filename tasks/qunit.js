// QUNIT TASK
// =============================================================================

/*global require*/
/*global process*/

var gulp     = require('gulp');
var qunit    = require('node-qunit-phantomjs');
var config   = require('./config');
var sequence = require('run-sequence');

gulp.task('qunit', function() {
  qunit('./tests/runner.html', {verbose: false});
});

gulp.task('test', function(){
  sequence('hint','jscs','qunit');
});
