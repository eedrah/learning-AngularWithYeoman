'use strict';

describe('Game module', function () {
    var _gridService;
    beforeEach(module(function($provide) {
        _gridService = {
            anyCellsAvailable: angular.noop,
            titleMatchesAvailable: angular.noop
        };

        $provide.value('GridService', _gridService); 
    }));

    describe('Game manager', function() {
        beforeEach(module('Game'));

        var gameManager;
        beforeEach(inject(function(GameManager) {
            gameManager = GameManager;
        }));

        describe('.movesAvailable', function() {
            it('should report true if there are cells available', function() {
                spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
                expect(gameManager.movesAvailable()).toBeTruthy();
            });

            it('should report true if there are matches available', function() {
                spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
                spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
                expect(gameManager.movesAvailable()).toBeTruthy();
            });

            it('should report false if there are no cells nor matches available', function() {
                spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
                spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
                expect(gameManager.movesAvailable()).toBeFalsy();
            });
        });
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
