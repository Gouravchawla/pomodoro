(function () {
  'use strict';

  angular
    .module('pomodoro', [
      'pomodoro.config',
      'pomodoro.routes',
      'pomodoro.timer'
    ]);

  angular
    .module('pomodoro.config', []);

  angular
    .module('pomodoro.routes', ['ngRoute']);
})();
