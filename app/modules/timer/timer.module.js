(function () {
  'use strict';

  /**
   * @name  {} 'pomodoro.timer'
   * @param  {} 'pomodoro.timer.controllers'
   * @param  {} 'pomodoro.timer.services'
   * @param  {} 'angular-svg-round-progressbar'
   */
  angular
    .module('pomodoro.timer', [
      'pomodoro.timer.controllers',
      'pomodoro.timer.services',
      'angular-svg-round-progressbar',
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