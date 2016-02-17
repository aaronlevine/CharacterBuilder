/*global escape: true*/
(function (angular) {
 
    'use strict';
    console.log('CharacterBuilder app');
    
    angular.module('CharacterBuilder.Services', []);
	
	angular.module('CharacterBuilder.Controllers', ['CharacterBuilder.Services']);
    
    var myApp = angular.module('CharacterBuilder', ['ngRoute','CharacterBuilder.Controllers','CharacterBuilder.Services']);

    myApp.run(['$location', '$route', '$rootScope', function ($location, $route, $rootScope) {
    }]);

})(window.angular);