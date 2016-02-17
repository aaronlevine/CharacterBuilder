(function () {

	'use strict';

	angular
		.module('CharacterBuilder.Controllers')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope'];

	function HomeController($scope) {
		var vm = this;

		vm.races = {
			"Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Tiefling"
		}
		vm.classes = {
			"Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"
		};

		vm.character = {};

		//Character Genaral info
		vm.character.playerName = "enter player name";
		vm.character.characterName = "enter character name";
		vm.character.diety = "enter diety";
		vm.character.age = "enter age";
		vm.character.height = "enter height";
		vm.character.weight = "enter weight";

		vm.character.class = "";
		vm.character.race = "";

		//attributes
		vm.character.attributes = {};
		vm.character.attributes.strength = 18;
		vm.character.attributes.dexterity = 18;
		vm.character.attributes.constitution = 18;
		vm.character.attributes.intelligence = 18;
		vm.character.attributes.wisdom = 18;
		vm.character.attributes.charisma = 18;


	}
})();