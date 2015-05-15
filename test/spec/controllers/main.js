'use strict';

describe('Game module', function() {
    describe('Game manager', function() {
        beforeEach(module('Game'));

        var gameManager;
        beforeEach(inject(function(GameManager) {
            gameManager = GameManager;
        }));
    });
});

//describe('Controller: MainCtrl', function () {

//  // load the controller's module
//  beforeEach(module('twoohfoureightApp'));

//  var MainCtrl,
//    scope;

//  // Initialize the controller and a mock scope
//  beforeEach(inject(function ($controller, $rootScope) {
//    scope = $rootScope.$new();
//    MainCtrl = $controller('MainCtrl', {
//      $scope: scope
//    });
//  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
//});
