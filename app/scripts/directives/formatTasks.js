'use strict';

angular.module('app').directive('formatTasks', function($log) {
  return {
    restrict: 'A',
    transclude: true
  }
})
