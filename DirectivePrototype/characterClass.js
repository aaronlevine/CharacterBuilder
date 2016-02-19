(function(){
	angular
		.module('characterDirectives')
		.directive('myCharacterClass', MyCharacterClass);
		
	function MyCharacterClass() {
		function link(scope, element, attrs, controller){
			//controller.changeName('Frank');
		};
		
		return {
			templateUrl: 'myClass.html'//,
			// link: link,
			// require: '^^myCustomer'
		};
	}
})();