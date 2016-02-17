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
			var abilityScores = {
				'1': -5,
				'2': -4,
				'3': -4,
				'4': -3,
				'5': -3,
				'6': -2,
				'7': -2,
				'8': -1,
				'9': -1,
				'10': 0,
				'11': 0,
				'12': 1,
				'13': 1,
				'14': 2,
				'15': 2,
				'16': 3,
				'17': 3,
				'18': 4,
				'19': 4,
				'20': 5,
				'21': 5,
				'22': 6,
				'23': 6,
				'24': 7,
				'25': 7,
				'26': 8,
				'27': 8,
				'28': 9,
				'29': 9,
				'30': 10
			};
			return abilityScores;
		};

		return svc;
	}
})();