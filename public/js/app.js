(function () {
  'use strict';

  /**
   * @namespace pomodoro
   * @param  {} 'pomodoro.config'
   * @param  {} 'pomodoro.routes'
   * @param  {} 'pomodoro.modules'
   * @description Main modules to be inject here.
   */
  angular
    .module('pomodoro', [
      'pomodoro.config',
      'pomodoro.routes',
      'pomodoro.modules',
    ]);
    
  /**
   * @name  {} 'pomodoro.config'
   * @param []
   */
  angular
    .module('pomodoro.config', []);

  /**
   * @name  {} 'pomodoro.routes'
   * @param  {} ['ngRoute']
   */
  angular
    .module('pomodoro.routes', ['ngRoute']);
})();
