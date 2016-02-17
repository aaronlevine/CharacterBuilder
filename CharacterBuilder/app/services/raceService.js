(function () {

	'use strict';

	angular
		.module('CharacterBuilder.Services')
		.service('RaceService', RaceService);

	RaceService.$inject = ['$http', '$q'];

	function RaceService($http, $q) {
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
		svc.getRaceOptions = function() {
			//var request = $http({
			//method: 'get',
			//url: '/api/races/'
			//});
			//return (request.then(handleSuccess, handleError));
			//TODO: move to races service
			var raceOptions = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Tiefling'];
			return raceOptions;
		};
		
		//api/race/{id}
		svc.getRace = function (id) {
			//var request = $http({
			//method: 'get',
			//url: '/api/races/{id}'
			//});
			//return (request.then(handleSuccess, handleError));
			//TODO: move to races service
			var race = {
				Name: 'Dwarf',
				Subrace: 'Hill Dwarf',
				abilityScore: [
					{
						Stat: 'Wisdom',
						modifier: 1
					}
				]
			}
			return race;
		};

		return svc;
	}
})();