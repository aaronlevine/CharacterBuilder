(function () {

	'use strict';

	angular
		.module('CharacterBuilder.Services')
		.service('LevelService', LevelService);

	LevelService.$inject = ['$http', '$q'];

	function LevelService($http, $q) {
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
		
		//api/races
		svc.getLevels = function () {
			//var request = $http({
			//method: 'get',
			//url: '/api/levels/'
			//});
			//return (request.then(handleSuccess, handleError));
			
			//TODO: move to REST services call
			var levels = [
				{id:1, minExperience: 0, proficiency: 2},
				{id:2, minExperience: 300, proficiency: 2},
				{id:3, minExperience: 900, proficiency: 2},
				{id:4, minExperience: 2700, proficiency: 2},
				{id:5, minExperience: 6500, proficiency: 3}
			];
		
			return levels;
		};
	}
})();