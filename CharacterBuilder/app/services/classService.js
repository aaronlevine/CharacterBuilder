(function () {

	'use strict';

	angular
		.module('CharacterBuilder.Services')
		.service('ClassService', ClassService);

	ClassService.$inject = ['$http', '$q'];

	function ClassService($http, $q) {
		var svc = {};
		// I transform the successful response, unwrapping the application data
		// from the API response payload.
		function handleSuccess(response) {
			return (response.data);
		}
		
		// I transform the error response, unwrapping the application data from
		// the API response payload.
		function handleError(response) {
			// The API response from the server should be returned in a
			// normalized format. However, if the request was not handled by the
			// server (or what not handles properly - ex. server error), then we
			// may have to normalize it on our end, as best we can.
			if (!angular.isObject(response.data) ||
				!response.data.message) {
				return ($q.reject('An unknown error occurred.'));
			}
			
			// Otherwise, use expected error message.
			// Trying to get the specific exception message
			var message = response.data.exceptionMessage || response.data.message;
			return ($q.reject(message));
		}
		
		
		
		
			//api/race/options
		svc.getClassOptions = function () {
			//var request = $http({
			//method: 'get',
			//url: '/api/class/'
			//});
			//return (request.then(handleSuccess, handleError));
			
			//TODO: move to class REST service
			var classOptions = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
			return classOptions;
		}
		
		//api/race/{id}
		svc.getClass = function (id) {
			//var request = $http({
			//method: 'get',
			//url: '/api/class/{id}'
			//});
			//return (request.then(handleSuccess, handleError));
			
			//TODO: move to class REST service
			var classDetails = {};
			return classDetails;
		};
		
		return svc;
	}

})();