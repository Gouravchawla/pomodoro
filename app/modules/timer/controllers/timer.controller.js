/**
 * Register controller
 * @namespace pomodoro.timer.controllers
 */
(function () {
  'use strict';

  angular
    .module('pomodoro.timer.controllers')
    .controller('TimerController', TimerController);

  TimerController.$inject = ['$location', '$scope', '$timeout', 'Timer'];

  /**
   * @namespace TimerController
   */
  function TimerController($location, $scope, $timeout, Timer) {
    var vm = this;
    var timerTimeout = null;
    vm.minutes = 25;
    vm.seconds = 0;
    vm.isTimerActive = false;
    
    var addPadding = function(number) {
      return '0' + number;
    };

    var clock = function() {
      if(vm.minutes === 0) {
        $timeout.cancel(timerTimeout);
        vm.isTimerActive = false;
      } else {
        if(vm.seconds === 0) {
          vm.seconds = 60;
          vm.minutes -= 1;
        }
        vm.seconds -= 1;
        timerTimeout = $timeout(clock, 1000);
      }
    };

    vm.startTimer = startTimer;
    vm.stopTimer = stopTimer;

    /**
     * @name startTimer
     * @desc Starts the pomodoro timer
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function startTimer() {
      //Timer.startTimer(vm.minutes);
      if(vm.isTimerActive === false) {
        timerTimeout = $timeout(clock, 1000);
        vm.isTimerActive = true;
      }
    }

    /**
     * @name stopTimer
     * @desc Stops the pomodoro timer
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function stopTimer() {
      vm.minutes = 25;
      vm.seconds = 0;
      $timeout.cancel(timerTimeout);
      vm.isTimerActive = false;
    }
  }
})();