(function () {

	'use strict';

	angular
		.module('CharacterBuilder.Controllers')
		.controller('HomeController', HomeController);


	HomeController.$inject = ['$scope','RaceService','ClassService','LevelService','AbilityScoreService'];

	function HomeController($scope, raceService, classService, levelService, abilityScoreService) {
		
		var vm = this;

		initialize();

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
		vm.character.abilityScores = {};
		vm.character.abilityScores.strength = 18;
		vm.character.abilityScores.dexterity = 18;
		vm.character.abilityScores.constitution = 18;
		vm.character.abilityScores.intelligence = 18;
		vm.character.abilityScores.wisdom = 18;
		vm.character.abilityScores.charisma = 18;
		
		function initialize() {
			//drop down data
			vm.raceOptions = raceService.getRaceOptions();
			vm.classOptions = classService.getClassOptions();
			
			//ability scores and modifiers
			vm.abilityScores = abilityScoreService.getAbilityScores();
		}

	}
})();