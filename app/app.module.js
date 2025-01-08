'use strict';

// Define the `tutorialAngularJsApp` module
angular.module('tutorialAngularJsApp', [
  'ngRoute',
  // ...which depends on the `phoneList` module
  'phoneList'
]);