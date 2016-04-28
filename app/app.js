
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ctrls'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
  .when('/view/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .otherwise({redirectTo: '/view/'});
}]);

