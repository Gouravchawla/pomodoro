(function () {
  'use strict';

  /**
   * @name  {} 'pomodoro.todo'
   * @param  {} 'pomodoro.todo.controllers'
   * @param  {} 'pomodoro.todo.services'
   */
  angular
    .module('pomodoro.todo', [
      'pomodoro.todo.controllers',
      'pomodoro.todo.services'
    ]);

  /**
   * @name  {} 'pomodoro.todo.controllers'
   * @param  {} []
   */
  angular
    .module('pomodoro.todo.controllers', []);

  /**
   * @name  {} 'pomodoro.timer.services'
   * @param  {} []
   */
  angular
    .module('pomodoro.todo.services', []);
})();