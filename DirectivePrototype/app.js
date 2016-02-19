(function(angular) {
  'use strict';
  
  angular.module('characterDirectives', []);
  angular.module('characterControllers', ['characterDirectives']);

  var myApp = angular.module('directiveTest', ['characterControllers']);
    
  myApp.run([function(){}]);
})(window.angular);