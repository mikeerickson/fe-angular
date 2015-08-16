// DISTRIBUTION TASKS
// =============================================================================

/*global require*/
/*global process*/

var gulp     = require('gulp');
var sequence = require('run-sequence');

gulp.task('distribution', function() {
  sequence('copy:dist', 'copy:lib');
});

gulp.task('distribute',['distribution'], function() {
  // just calls task above
});

gulp.task('dist',['distribution'], function() {
  // just calls task above
});
