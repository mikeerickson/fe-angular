// CD-UTILS (Utilities for gulp fasks)
// =============================================================================

'use strict';

var _      = require('lodash');
var notify = require('gulp-notify');
var chalk  = require('chalk');
var config = require('../config');

module.exports = {

  notifyOptions: function(status, override) {
    var options = {
      taskName: 'Task',
      title:    ( status === 'pass') ? 'Passed' : 'Failed',
      message:  ( status === 'pass' ) ? '<%= taskName %> Completed Successfully' : '<%= taskName %> Failed',
      icon:     './node_modules/gulp-phpunit/assets/test-' + status + '.png'
    };

    var newOptions     = _.merge(options, override);
    newOptions.message = _.template(newOptions.message)(newOptions);
    return newOptions;

  },

  failMessage: function(options) {
    if ( config.defaults.show ) {
      return this.notifyOptions('fail', options);
    }
  },

  passMessage: function(options) {
    if ( config.defaults.show ) {
      return this.notifyOptions('pass', options);
    }
  },

  notifyPassed: function(options) {
    if ( config.defaults.show ) {
      return notify(this.notifyOptions('pass', options));
    }
  },

  notifyFailed: function(options) {
    if ( config.defaults.show ) {
      return notify.onError((this.notifyOptions('fail', options)));
    }
  },

  error: function(msg) {
    var error = chalk.bold.red;
    return error(msg);
  },

  info: function(msg, data) {
    var tmp = this.mergeTemplate(msg, data);
    return chalk.blue(tmp);
  },

  success: function(msg, data) {
    var success = chalk.green;
    var tmp = this.mergeTemplate(msg, data);
    return success(tmp);
  },

  warning: function(msg, data) {
    var warning = chalk.yellow;
    var tmp = this.mergeTemplate(msg, data);
    return warning(tmp);
  },

  mergeTemplate: function(msg, data) {
    if (data) {
      var compiled = _.template(msg);
      return(compiled(data));
    }
    return msg;
  },

  isWindows: function() {
    return /^win/.test(process.platform);
  }

};
