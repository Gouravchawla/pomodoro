/**
 * Register controller
 * @namespace pomodoro.todo.controllers
 */
(function () {
  'use strict';

  angular
    .module('pomodoro.todo.controllers')
    .controller('ToDoController', ToDoController);

  ToDoController.$inject = [];

  /**
   * @namespace ToDoController
   */
  function ToDoController() {

    let vm = this;
    vm.todoAdd = todoAdd;
    vm.todoList = [];

    /**
     * @name: todoAdd
     * @description: To add task in todoList
     * @memberOf pomodoro.timer.controllers.TimerController
     */
    function todoAdd() {
      vm.todoList.push({ todoText: vm.todoInput, done: false });
      vm.todoInput = '';
    }
  }
})();