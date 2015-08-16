// COPY TASKS
// =============================================================================

/*global $*/
/*global angular*/
 /*global _*/

"use strict";

console.log('=== Angular Frontend Boilerplate ===');

$(function() {

  var versionInfo = [];
  var versionHeader = '<h4> Version Info </h4>'

  $.get("../package.json", function (data) {
    versionInfo.push('<b>Angular Front End Boilerplate v' + data.version + '</b>');
    console.log('Angular Front End Boilerplate v' + data.version);
    versionInfo.sort();
    $('#version').html(versionHeader + versionInfo.join('<br />'));
  });

  $.get("css/bootstrap.min.css", function (data) {
    var bsVers = data.match(/v[.\d]+[.\d]/)[0];
    versionInfo.push('Bootstrap ' + bsVers);
    versionInfo.sort();
    console.log('Bootstrap ' + bsVers);
    $('#version').html(versionHeader + versionInfo.join('<br />'));
  });

  versionInfo.push('jQuery v' + $.fn.jquery);
  console.log('jQuery v' + $.fn.jquery);

  versionInfo.push('AngularJS v' + angular.version.full);
  console.log('AngularJS v' + angular.version.full);

  versionInfo.push('sprintf v1.0.3');
  console.log('sprintf v1.0.3');

  versionInfo.push('Lodash v' + _.VERSION);
  console.log('Lodash v' + _.VERSION);

  versionInfo.sort();
  $('#version').html(versionHeader + versionInfo.join('<br />'));

});
