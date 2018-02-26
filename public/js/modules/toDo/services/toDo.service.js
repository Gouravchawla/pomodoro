/**
 * Timer
 * @namespace pomodoro.todo.services
 */
(function () {
  'use strict';

  angular
    .module('pomodoro.todo.services')
    .factory('ToDo', ToDo);

  ToDo.$inject = ['$cookies', '$http'];

  /**
   * @namespace ToDo
   * @returns {Factory}
   */
  function ToDo($cookies, $http) {
    /**
     * @name ToDo
     * @desc The Factory to be returned
     */
    let ToDo = {
     
    };

    return Timer;

    /////////////////
  }
})();