(function(){
	angular
		.module('characterDirectives')
		.directive('myCharacterRace', MyCharacterRace);
    
		
	function MyCharacterRace() {
		function link(scope, element, attrs, controller){
            controller.setRaceOptions({
                'dwarf': {
                    'name': 'Dwarf',
                    'strengthRacialIncrease': 1
                },
                'human': {
                    'name': 'Human',
                    'strengthRacialIncrease': 0
                }
            });
		};
		
		return {
			templateUrl: 'myRace.html',
			link: link, 
            require: '^myCharacter'
		};
	}
})();