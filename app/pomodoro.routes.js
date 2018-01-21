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
      templateUrl: 'timer/templates/timer.html'
    }).otherwise('/');
  }
})();