// erickson-data.js
// =============================================================================

/*global angular*/

console.log('=== public/js/data/erickson-data.js ===');

(function() {

  'use strict';

  var family = ['mike','kira','joelle','brady','bailey','trevor'];
  var dogs   = ['rupert','shilo','honu','gunner'];

  var familyObj = [
    {fname: 'Mike',    lname: 'Erickson', dob: '10/15/72'},
    {fname: 'Kira',    lname: 'Erickson', dob: '5/2/76'},
    {fname: 'Joelle',  lname: 'Asoau',    dob: '7/12/93'},
    {fname: 'Brayden', lname: 'Erickson', dob: '2/28/95'},
    {fname: 'Bailey',  lname: 'Erickson', dob: '3/19/96'},
    {fname: 'Trevor',  lname: 'Erickson', dob: '4/7/97'},
    {fname: 'Nate',    lname: 'Asoau',    dob: '11/21/74'},
    {fname: 'Alaya',   lname: 'Asoau',    dob: '11/21/13'}
  ];

  function getFamilyData() {
    return family;
  }

  function getDogData() {
    return dogs;
  }

  function getFamilyObject() {
    return familyObj;
  }

}());
