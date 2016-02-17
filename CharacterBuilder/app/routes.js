(function (angular) {
	'use strict';

	angular.module('CharacterBuilder').config([
		'$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/app/views/home.html',
					controller: 'HomeController',
					controllerAs: 'vm'
				})
                .when('/unauthorized', {
					templateUrl: '/app/views/403.html'
				})
				.otherwise({
                    redirectTo: '/'
				});
		}
	]);

})(window.angular);
