(function () {
    
    'use strict';
    
    angular
		.module('CharacterBuilder.Controllers')
		.controller('HomeController', HomeController);
    
    HomeController.$inject = [ '$scope'];
    
    function HomeController($scope) {
    	var vm = this;

    	vm.playerName = "enter player name";
    	vm.characterName = "enter character name";

	    vm.SUBMIT = function() {

	    };
    }
})();