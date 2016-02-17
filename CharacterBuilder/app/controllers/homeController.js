(function () {

	'use strict';

	angular
		.module('CharacterBuilder.Controllers')
		.controller('HomeController', HomeController);

	
	HomeController.$inject = ['racesService', $scope'];

	function HomeController(racesService, $scope) {
		var vm = this;

		vm.character = {};

		//Character Genaral info
		vm.character.playerName = 'enter player name';
		vm.character.characterName = 'enter character name';
		vm.character.diety = 'enter diety';
		vm.character.age = 'enter age';
		vm.character.height = 'enter height';
		vm.character.weight = 'enter weight';

		//complex info 
		vm.character.class = {};
		vm.character.race = {};

		//attributes
		vm.character.attributes = {};	
		vm.character.abilityScores.strength = {Name:18, modifier: 4};
		vm.character.abilityScore.dexterity = {id:18, modifier: 4};
		vm.character.abilityScore.constitution = {id:18, modifier: 4};
		vm.character.abilityScore.intelligence = {id:18, modifier: 4};
		vm.character.abilityScore.wisdom = {id:18, modifier: 4};
		vm.character.abilityScore.charisma = {id:18, modifier: 4};
	}
})();