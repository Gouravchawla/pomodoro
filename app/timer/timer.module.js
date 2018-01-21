(function () {
  'use strict';

  angular
    .module('pomodoro.timer', [
      'pomodoro.timer.controllers',
      'pomodoro.timer.services'
    ]);

  angular
    .module('pomodoro.timer.controllers', []);

  angular
    .module('pomodoro.timer.services', ['ngCookies']);
})();