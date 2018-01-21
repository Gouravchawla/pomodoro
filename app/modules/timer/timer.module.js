(function () {
  'use strict';

  /**
   * @name  {} 'pomodoro.timer'
   * @param  {} 'pomodoro.timer.controllers'
   * @param  {} 'pomodoro.timer.services'
   */
  angular
    .module('pomodoro.timer', [
      'pomodoro.timer.controllers',
      'pomodoro.timer.services'
    ]);

  /**
   * @name  {} 'pomodoro.timer.controllers'
   * @param  {} []
   */
  angular
    .module('pomodoro.timer.controllers', []);

  /**
   * @name  {} 'pomodoro.timer.services'
   * @param  {} ['ngCookies']
   */
  angular
    .module('pomodoro.timer.services', ['ngCookies']);
})();