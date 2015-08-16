
// GULPFILE
// =============================================================================
// Preload all tasks (located in tasks directory)

var gulp       = require('gulp');
var requireDir = require('require-dir');

requireDir('./tasks', { recurse: false });
