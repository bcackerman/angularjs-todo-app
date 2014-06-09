'use strict';

angular.module('app').controller('tasksController', ['$scope', '$log', 'taskService', function($scope, $log, taskService) {
  $scope.addTask = function() {
    taskService.add($scope.name);
    $scope.name = '';
  };

  $scope.toggleTask = taskService.toggleTask;
  $scope.tasks = taskService.tasks();
}]);
