/*global escape: true*/
(function (angular) {
 
    'use strict';
    console.log('CharacterBuilder app');
    angular.module('CharacterBuilder.Controllers', []);

    //angular.module('CharacterBuilder.Services', []);
    //angular.module('CharacterBuilder.Model', []);


    var myApp = angular.module('CharacterBuilder', ['ngRoute','CharacterBuilder.Controllers']);
										//'CharacterBuilder.Services',
                                        //'CharacterBuilder.Model']);

    myApp.run(['$location', '$route', '$rootScope', function ($location, $route, $rootScope) {
    }]);

})(window.angular);