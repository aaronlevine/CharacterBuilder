(function(){
	angular
		.module('characterDirectives')
		.directive('myCharacterStrength', MyCharacterStrength);
		
	function MyCharacterStrength() {
		function link(scope, element, attrs, controller){
			//controller.changeName('Frank');
		};
		
		return {
			templateUrl: 'myStrength.html'//,
			// link: link,
			// require: '^^myCustomer'
		};
	}
})();