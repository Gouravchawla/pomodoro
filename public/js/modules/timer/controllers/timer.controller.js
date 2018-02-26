/**
 * Register controller
 * @namespace pomodoro.timer.controllers
 */
(function () {
  'use strict';

  angular
    .module('pomodoro.timer.controllers')
    .controller('TimerController', TimerController);

  TimerController.$inject = ['$location', '$scope', '$interval', 'Timer', '$timeout', '$window'];

  /**
   * @namespace TimerController
   */
  function TimerController($location, $scope, $interval, Timer, $timeout, $window) {
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
    vm.getStyle = getStyle;
    vm.getColor = getColor;
    vm.showPreciseCurrent = showPreciseCurrent;

    // timer config
    vm.max = minutes * 60 + seconds;
    vm.currentSeconds = 0;
    vm.offset = 0;
    vm.stroke = 15;
    vm.timerCurrent = 0;
    vm.uploadCurrent = 0;
    vm.radius = 200;
    vm.isSemi = false;
    vm.rounded = false;
    vm.responsive = false;
    vm.clockwise = true;
    vm.currentColor = '#45ccce';
    vm.bgColor = '#eaeaea';
    vm.duration = 800;
    vm.currentAnimation = 'easeOutCubic';
    vm.animationDelay = 0;

    let setDisplayTimer = function (minutes, seconds) {
      let minutesString = minutes < 10 ? '0' + minutes : '' + minutes;
      let secondsString = seconds < 10 ? '0' + seconds + 's' : '' + seconds + 's';
      vm.displayTimer = minutesString + ' : ' + secondsString;
    };

    let clock = function () {
      if (minutes === 0) {
        cancelInterval(timerInterval);
        vm.isTimerActive = false;
      } else {
        if (seconds === 0) {
          seconds = 60;
          minutes = minutes - 1;
        }
        seconds = seconds - 1;
        vm.currentSeconds++;
        setDisplayTimer(minutes, seconds);
      }
    };

    let resetTimer = function () {
      minutes = 25;
      seconds = 0;
      vm.currentSeconds = 0;
      vm.isTimerActive = false;
      vm.isTimerPaused = false;
    };

    let cancelInterval = function (timeoutName) {
      $interval.cancel(timeoutName);
    };

    /**
     * @name startTimer
     * @desc Starts the pomodoro timer
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function startTimer() {
      //Timer.startTimer(minutes);
      if (vm.isTimerActive === false) {
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
      if (vm.isTimerPaused === false && vm.isTimerActive === true) {
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
      if (vm.isTimerPaused === true) {
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
      if (vm.isTimerPaused === false) {
        cancelInterval(timerInterval);
      }
      resetTimer();
    }
    
    /**
     * @name showPreciseCurrent
     * @param  {} amount
     * @description set preciseCurrent
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function showPreciseCurrent(amount) {
      $timeout(function () {
        if (amount <= 0) {
          vm.preciseCurrent = vm.current;
        } else {
          var math = $window.Math;
          vm.preciseCurrent = math.min(math.round(amount), vm.max);
        }
      });
    };

    /**
     * @name getStyle
     * @desc set the path to round
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function getStyle() {
      var transform = (vm.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
      return {
        'top': vm.isSemi ? 'auto' : '50%',
        'bottom': vm.isSemi ? '5%' : 'auto',
        'left': '50%',
        'transform': transform,
        '-moz-transform': transform,
        '-webkit-transform': transform,
        'font-size': vm.radius / 3.5 + 'px'
      };
    };

    /**
     * @name getColor
     * @desc set color of path
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function getColor() {
      return vm.gradient ? 'url(#gradient)' : vm.currentColor;
    };

  }
})();