(function () {

	'use strict';

	angular
		.module('CharacterBuilder.Controllers')
		.controller('HomeController', HomeController);


	HomeController.$inject = ['$scope','RaceService','ClassService','LevelService','AbilityScoreService'];

	function HomeController($scope, raceService, classService, levelService, abilityScoreService) {
		
		var vm = this;
		vm.abilityScoreChanged = abilityScoreChanged;
		vm.raceChanged = raceChanged;

		vm.character = {};
		vm.character.abilityScores = {};
		vm.character.abilityScores.strength = {};
		vm.character.abilityScores.dexterity = {};
		vm.character.abilityScores.constitution= {};
		vm.character.abilityScores.intelligence= {};
		vm.character.abilityScores.wisdom= {};
		vm.character.abilityScores.charisma= {};


		initialize();

		function initialize() {
			//drop down data
			vm.classOptions = classService.getClassOptions();
			vm.raceOptions = raceService.getRaceOptions();
			
			
			//ability scores and modifiers
			vm.abilityScores = abilityScoreService.getAbilityScores();
		}

		function abilityScoreChanged() {

			vm.character.abilityScores.strength.modifier = vm.abilityScores[vm.character.abilityScores.strength.score];
			vm.character.abilityScores.dexterity.modifier = vm.abilityScores[vm.character.abilityScores.dexterity.score];
			vm.character.abilityScores.constitution.modifier = vm.abilityScores[vm.character.abilityScores.constitution.score];
			vm.character.abilityScores.intelligence.modifier = vm.abilityScores[vm.character.abilityScores.intelligence.score];
			vm.character.abilityScores.wisdom.modifier = vm.abilityScores[vm.character.abilityScores.wisdom.score];
			vm.character.abilityScores.charisma.modifier = vm.abilityScores[vm.character.abilityScores.charisma.score];

		}

		function raceChanged() {

			var raceDetail = raceService.getRace(vm.character.race);
			vm.character.abilityScores.strength.racialIncrease = raceDetail.racialIncreases['strength'];
			vm.character.abilityScores.constitution.racialIncrease = raceDetail.racialIncreases['constitution'];
		}

	}
})();