angular.module('app').service('taskService', function($log, $rootScope) {
  this.add = function(task) {
    tasks.push({
      name: task, 
      completed: false, 
      created: (new Date()).getTime()
    });
  };

  this.toggleTask = function(task) {

  };

  this.delete = function(task) {

  };

  this.tasks = function() {
    return tasks = [
      {
        name: "Task 1", 
        completed: false, 
        created: (new Date()).setDate((new Date()).getDate() - 1)
      },
      {
        name: "Older Task 2", 
        completed: true, 
        created: (new Date()).setDate((new Date()).getDate() - 2)}
    ];
  };

});
