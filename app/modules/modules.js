(function () {
  'use strict';

  /**
   * Name: 'pomodoro.modules'
   * @param  {} 'pomodoro.timer'
   * Inject all modules here to use it directly.
   */
  angular
    .module('pomodoro.modules', [
      'pomodoro.timer',
    ]);
})();