(function(){
	angular
		.module('characterDirectives')
		.directive('myCharacter', MyCharacter);
		
	//TestCharacterController.$inject = ['$scope'];
	
    function TestCharacterController($scope, $http) {
        this.dataThing = $scope.character.name;
        
        this.setRaceOptions = function(raceOptions){
            $scope.raceOptions = raceOptions;
        }
    };
    
	function MyCharacter() {
		return {
			templateUrl: 'myCharacter.html',
            controller: TestCharacterController
		};
	}
})();