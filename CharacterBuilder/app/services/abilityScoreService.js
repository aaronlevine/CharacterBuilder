(function () {

	'use strict';

	angular
		.module('CharacterBuilder.Services')
		.service('AbilityScoreService', AbilityScoreService);

	AbilityScoreService.$inject = ['$http', '$q'];

	function AbilityScoreService($http, $q) {
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
		svc.getAbilityScores = function () {
			//var request = $http({
			//method: 'get',
			//url: '/api/classes/'
			//});
			//return (request.then(handleSuccess, handleError));
			
			//TODO: move to ability scores REST service
			var abilityScores = [
				{id:1, modifier: -5},
				{id:2, modifier: -4},
				{id:3, modifier: -4},
				{id:4, modifier: -3},
				{id:5, modifier: -3},
				{id:6, modifier: -2},
				{id:7, modifier: -2},
				{id:8, modifier: -1},
				{id:9, modifier: -1},
				{id:10, modifier: 0},
				{id:11, modifier: 0},
				{id:12, modifier: 1},
				{id:13, modifier: 1},
				{id:14, modifier: 2},
				{id:15, modifier: 2},
				{id:16, modifier: 3},
				{id:17, modifier: 3},
				{id:18, modifier: 4},
				{id:19, modifier: 4},
				{id:20, modifier: 5},
				{id:21, modifier: 5},
				{id:22, modifier: 6},
				{id:23, modifier: 6},
				{id:24, modifier: 7},
				{id:25, modifier: 7},
				{id:26, modifier: 8},
				{id:27, modifier: 8},
				{id:28, modifier: 9},
				{id:29, modifier: 9},
				{id:30, modifier: 10}
			];
			return abilityScores;
		};
	}
})();