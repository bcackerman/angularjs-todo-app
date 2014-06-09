'use strict';

/**
 * @ngdoc overview
 * @name angularTasksApp
 * @description
 * # angularTasksApp
 *
 * Main module of the application.
 */
angular.module('app', ['ngRoute']);

// angular.module('app').run(function($log) {});

angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "tasksController",
      templateUrl: "/views/tasks.html"
    })
    .when('/task/:id', {
      controller: "taskController",
      templateUrl: "/views/task.html"
    })
    .otherwise({redirectTo: '/'});
});

