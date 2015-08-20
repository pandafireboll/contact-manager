app.controller('EditController', ['getAddress', '$http','$scope', '$routeParams', '$location',
	function(getAddress, $http, $scope, $routeParams, $location){
	// Set user data
	$scope.contact = User;
	// PUT ajax
	$scope.Update = function(contactUser){
		getAddress.updateContact(contactUser.id, JSON.stringify({
			firstName:contactUser.firstName,
			lastName:contactUser.lastName,
			email: contactUser.email
		}));
		$location.path("/");
	};
	//Need to put this in a service
	$scope.go = function(path){
			$location.path(path);
	};
}]);