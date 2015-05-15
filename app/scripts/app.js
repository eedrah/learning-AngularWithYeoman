'use strict';

/**
 * @ngdoc overview
 * @name twoohfoureightApp
 * @description
 * # twoohfoureightApp
 *
 * Main module of the application.
 */
angular
  .module('twoohfoureightApp', ['ngCookies'])
  .controller('GameController', function() {
    this.game = GameManager;
});
