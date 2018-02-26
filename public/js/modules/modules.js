(function () {
  'use strict';

  /**

   * @name 'pomodoro.modules'
   * @param  {} 'pomodoro.timer'
   * @param  {} 'pomodoro.todo'
   * @desc Inject all the modules here to use it directly
   */
  angular
    .module('pomodoro.modules', [
      'pomodoro.timer',
      'pomodoro.todo',
    ]);
})();