(function(){
	angular
		.module('characterControllers')
		.controller('myCharacterController', MyCharacterController);
		
	MyCharacterController.$inject = ['$scope'];
	
	function MyCharacterController($scope) {
		$scope.character = {
            name: 'Naomi',
            race: {},
            class: 'Rogue',
            strength: 15,
            getCharStrength: function(){
                return this.strength + this.race.strengthRacialIncrease;
            }
		};
		
		this.changeName = function(newName){
			$scope.character.name = newName;
		}
        
        $scope.getStrength = function(){
            return $scope.character.strength +
                   $scope.character.race.strengthRacialIncrease;
        };
        
        $scope.raceOptions = {};
        
        $scope.classOptions = 
        ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
	}
	
	// MyCustomerController.prototype.changeName = function(){
	// 	alert('bork');
	// }
})();