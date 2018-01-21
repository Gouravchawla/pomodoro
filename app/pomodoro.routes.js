(function () {
  'use strict';

  angular
    .module('pomodoro.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
   * @name config
   * @desc Define valid application routes
   */
  function config($routeProvider) {
    $routeProvider.when('/', {
      controller: 'TimerController',
      controllerAs: 'vm',
      templateUrl: '/modules/timer/templates/timer.html'
    }).when('/todo', {
      controller: 'ToDoController',
      controllerAs: 'vm',
      templateUrl: '/modules/toDo/templates/toDo.html'
    }).otherwise('/');
  }
})();