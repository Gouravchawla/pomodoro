/**
 * Register controller
 * @namespace pomodoro.timer.controllers
 */
(function () {
  'use strict';

  angular
    .module('pomodoro.timer.controllers')
    .controller('TimerController', TimerController);

  TimerController.$inject = ['$location', '$scope', '$interval', 'Timer'];

  /**
   * @namespace TimerController
   */
  function TimerController($location, $scope, $interval, Timer) {
    let vm = this;
    let timerInterval = null;
    let minutes = 25;
    let seconds = 0;

    vm.displayTimer = '' + minutes + ' : ' + seconds + 's';
    vm.isTimerActive = false;
    vm.isTimerPaused = false;
    vm.startTimer = startTimer;
    vm.pauseTimer = pauseTimer;
    vm.resumeTimer = resumeTimer;
    vm.stopTimer = stopTimer;
    
    let setDisplayTimer = function(minutes, seconds) {
      let minutesString = minutes < 10 ? '0' + minutes : '' + minutes;
      let secondsString = seconds < 10 ? '0' + seconds + 's' : '' + seconds + 's';
      vm.displayTimer = minutesString + ' : ' + secondsString;
    };

    let clock = function() {
      if(minutes === 0) {
        cancelInterval(timerInterval);
        vm.isTimerActive = false;
      } else {
        if(seconds === 0) {
          seconds = 60;
          minutes = minutes - 1;
        }
        seconds = seconds - 1;
        setDisplayTimer(minutes, seconds);
      }
    };

    let resetTimer = function() {
      minutes = 10;
      seconds = 0;
      vm.isTimerActive = false;
      vm.isTimerPaused = false;
    };

    let cancelInterval = function(timeoutName) {
      $interval.cancel(timeoutName);
    };


    /**
     * @name startTimer
     * @desc Starts the pomodoro timer
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function startTimer() {
      //Timer.startTimer(minutes);
      if(vm.isTimerActive === false) {
        timerInterval = $interval(clock, 1000);
        vm.isTimerActive = true;
      }
    }

    /**
     * @name pauseTimer
     * @desc Pauses the pomodoo timer
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function pauseTimer() {
      if(vm.isTimerPaused === false && vm.isTimerActive === true) {
        vm.isTimerPaused = true;
        cancelInterval(timerInterval);
      }
    }

    /**
     * @name resumeTimer
     * @desc Resumes the pomodoro timer
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function resumeTimer() {
      //Timer.startTimer(minutes);
      if(vm.isTimerPaused === true) {
        timerInterval = $interval(clock, 1000);
        vm.isTimerPaused = false;
      }
    }

    /**
     * @name stopTimer
     * @desc Stops the pomodoro timer
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function stopTimer() {
      // Cancel timeout only if the timer is not paused
      if(vm.isTimerPaused === false) {
        cancelInterval(timerInterval);
      }
      resetTimer();
    }
  }
})();