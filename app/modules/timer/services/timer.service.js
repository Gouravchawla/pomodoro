/**
 * Timer
 * @namespace pomodoro.timer.services
 */
(function () {
  'use strict';

  angular
    .module('pomodoro.timer.services')
    .factory('Timer', Timer);

  Timer.$inject = ['$cookies', '$http', '$timeout'];

  /**
   * @namespace Timer
   * @returns {Factory}
   */
  function Timer($cookies, $http) {
    /**
     * @name Timer
     * @desc The Factory to be returned
     */
    var Timer = {
      startTimer: startTimer
    };

    return Timer;

    /////////////////

    /**
     * @name startTimer
     * @desc Starts the timer
     * @param {number} minutes The number of minutes for a pomodoro set by user
     * @returns {Promise}
     * @memberOf pomodoro.timer.services.Timer
     */
    function startTimer(minutes) {
      //start a timer and return it
    }
  }
})();