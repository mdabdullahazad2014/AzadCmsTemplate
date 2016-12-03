angular.module('scotchApp').controller('loginCtrl', function ($scope, $rootScope, $location) {

	$scope.login = function(){
		$rootScope.authenticated = true;
		$location.path( "/main" );
	}
});
