
var ctrls = angular.module('ctrls', []);

ctrls.controller('View1Ctrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
	$scope.del=function(index){

	}
	$scope.get=function(){
		$http.jsonp('https://api.twitch.tv/kraken/streams?callback=JSON_CALLBACK').then(function(response){
			$rootScope.response=response.data;
			console.log(response.data);
		});
	}
}]);

ctrls.controller('View2Ctrl',['$rootScope','$scope','$http','$routeParams',function($rootScope,$scope,$http,$routeParams){
	$scope.id=$routeParams.id;
}]);
