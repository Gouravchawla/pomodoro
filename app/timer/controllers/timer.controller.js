/**
 * Register controller
 * @namespace pomodoro.timer.controllers
 */
(function () {
  'use strict';

  angular
    .module('pomodoro.timer.controllers')
    .controller('TimerController', TimerController);

  TimerController.$inject = ['$location', '$scope', 'Timer'];

  /**
   * @namespace TimerController
   */
  function TimerController($location, $scope, Timer) {
    var vm = this;

    vm.startTimer = startTimer;

    /**
     * @name startTimer
     * @desc Starts the pomodoro timer
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function startTimer() {
      Timer.startTimer(vm.minutes);
    }
  }
})();